import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
// 定义Ice变量
declare var Ice: any;
declare var ThybotKioskService: any;
declare var window: any;
@Injectable()
export class RobotService {
  // 参数
  host = environment.hostname;
  communicator: any;
  proxy_robot: any;

  // 构造函数
  constructor() {
    this.communicator = Ice.initialize();
    this.proxy_robot = this.communicator.stringToProxy("KioskRobotService:ws -h " + this.host+" -p 10006"); //.ice_twoway().ice_secure(false);
  }

  ds_close_times_start: string ='';
  ds_close_times_end: string ='';
  delivering: boolean;
  async action(fn_this: any, slot: any, otherChannel: boolean, fn_exist: any, fn_isclose: any, fn_complete: any) {
    // this, 出货货槽名， 是否还有其他货道有该商品， 取货前判断是否有商品时执行， 取货前判断门是否关紧执行，交易完成时执行
    let self = this;
    window.locallog.log("开始取货 ： "+ slot,"info");
    await ThybotKioskService.RobotService.RobotInterfacePrx.checkedCast(self.proxy_robot).then(
        async (service: any) => {
          let res = "";
          let isFirst = true;
          let exist = false;
          let isOpened = false;
          let tryCloseDSTime = 0;
          this.delivering = true;

          // 取货前判断货篮是否有货
          async function isExist(){
            window.locallog.log("检测货篮","info");
            do{
              exist = !(await service.cgEmpty().then(
                  (res: any) => res,
                  (err: any) => {
                    window.locallog.log("检测货篮失败:"+JSON.stringify(err),"error");
                    return false
                  }));
              if(isFirst){
                if(exist){
                  window.locallog.log("货篮有物品","info");
                }else{
                  window.locallog.log("货篮无物品","info");
                }
              }

              if(!exist){
                // 判断门是否打开过
                await service.poll().then(
                    (res: any) => {
                      self.ds_close_times_end = res.get('ds_close_times');
                      return res;
                    },(err: any) => {
                      console.log(err);
                      window.locallog.log("检测取货门感应器失败:"+JSON.stringify(err),"error");
                      return err;
                    }
                );

                if (self.ds_close_times_end !== self.ds_close_times_start){
                  isOpened = true;
                } else
                  exist = true;
              }

              if (typeof fn_exist == "function")
                fn_exist(fn_this, slot, exist);

              // 若取货前有货,则打开取货门让顾客取走商品
              if (exist) {
                // 等待5秒(首次不等待)
                if (!isFirst)
                  await self.sleep(5000);

                // 开门
                await service.openDS().then((res: any)=>{
                  if (isFirst) {
                    window.locallog.log("开启取货门","info");
                    isFirst = false;
                  }
                  return true;
                }, (err: any) => {
                  window.locallog.log("开启取货门失败:"+JSON.stringify(err),"error");
                  return false;
                });

              }else {
                window.locallog.log("货篮无货","info");
              }
            }while(exist);
          }


          async function fetch(slot: string, otherChannel: boolean){
            // 取货前先关门
            let isclose = false;
            window.locallog.log("取货前关闭取货门","info");
            do{
              tryCloseDSTime++;
              isclose = await service.closeDS().then(
                  (res: any)=>{
                    if(res)
                      window.locallog.log("取货门已关闭","info");
                    else
                      window.locallog.log("取货门未关紧","info");
                    return res
                  },
                  (err: any) => {
                    window.locallog.log("关闭取货门出错"+JSON.stringify(err),"error");
                    return false
                  });
              await self.sleep(500);
              //
              if(typeof fn_isclose == "function")
                fn_isclose(fn_this,isclose,tryCloseDSTime);

            }while(!isclose)


            let go_res = await service.gotoRow(slot[0]).then(
                (res: any)=>{
                  window.locallog.log("移动到货架"+slot[0],"info");
                  return true
                },(err: any)=>{
                  window.locallog.log("移动到货架"+slot[0]+'失败：'+ JSON.stringify(err),"error");
                  return false
                });

            if(!go_res){    // 没有移动到货架
              return '012'
            }


            let fetch_res;
            window.locallog.log("开始出货","info");
            // 执行出货动作
            fetch_res = await service.fetch(slot).then(
                (res: any)=>{
                  if(res)
                    window.locallog.log(slot+" 出货成功","info");
                  else
                    window.locallog.log(slot+" 出货失败","error");
                  return res
                },
                (err: any)=>{
                  window.locallog.log(slot+" 出货失败："+ JSON.stringify(err),"error");
                  return false
                }
            );


            let re_res;

            // 出货成功，或出货失败但商品无其他货道，则货篮回取货口
            if(!otherChannel || fetch_res){
              window.locallog.log("回取货口","info");
              re_res = await service.gotoDS().then(
                  (res: any)=>{
                    window.locallog.log("回到取货口成功","info");
                    return res
                  },
                  (err: any)=>{
                    window.locallog.log("回到取货口失败:"+JSON.stringify(err),"info");
                    return false
                  });
              if(!re_res){
                return '012'
              }
            }

            if(fetch_res){
              // 出货成功开门
              await service.openDS().then((res: any)=> {
                window.locallog.log("开启取货门成功","info");
                return true
              }, (err: any)=> {
                window.locallog.log("开启取货门失败:"+JSON.stringify(err),"error");
                return false
              });

              // 获得取货门感应器值 ds_close_times_start
              await service.poll().then(
                  (res: any)=>{
                    self.ds_close_times_start = res.get('ds_close_times');
                    window.locallog.log("ds_close_times_start: "+self.ds_close_times_start,"info");
                    return res
                  },(err: any)=>{
                    window.locallog.log("检测取货门感应器失败:"+JSON.stringify(err),"error");
                    return err
                  }
              )
            }

            //返回值
            if(fetch_res)
              return "000";  // 出货成功
            else
              return "013";  // 出货失败
          }


          await isExist();
          res = await fetch(slot,otherChannel);


          if(typeof fn_complete == "function"){
            this.delivering = false;
            fn_complete(fn_this,res,slot);
          }

          // 关闭取货门判断
          let ckeckDSCount = 0;
          let pollCouunt = 0;
          async function closeDSInterval() {
            let isclose = false;
            exist = !(await service.cgEmpty().then(
                (res: any)=>{
                  if(!res)
                    window.locallog.log("检测到货篮有商品","info");
                  return res
                },
                (err: any)=>{
                  window.locallog.log("检测货篮失败:"+JSON.stringify(err),"error");
                  return true
                }));

            if(exist){
              ckeckDSCount = 0;
              await service.openDS().then((res: any)=>{
                return true
              },(err: any)=>{
                window.locallog.log("开启取货门失败:"+JSON.stringify(err),"error");
                return false
              });
              await self.sleep(3000);
              await closeDSInterval();
            }else{
              ckeckDSCount++;
              await self.sleep(400);
              if(ckeckDSCount > 3){ // 3次判断确定货篮无货
                // 获得取货门感应器值 ds_close_times_end
                await service.poll().then(
                    (res: any)=>{
                      self.ds_close_times_end = res.get('ds_close_times');
                      window.locallog.log("ds_close_times_end: "+self.ds_close_times_end,"info");
                      return res
                    },(err: any)=>{
                      window.locallog.log("检测取货门感应器失败:"+JSON.stringify(err),"error");
                      return err
                    }
                )

                if(self.ds_close_times_end !== self.ds_close_times_start){
                  if(self.ds_close_times_start !== 'timeout')
                    window.locallog.log("门锁传感器有变化","info");

                  await self.sleep(1500);
                  do{
                    isclose = await service.closeDS().then(
                        (res: any)=>{
                          if(res){
                            window.locallog.log("关闭取货门","info");
                          }else{
                            window.locallog.log("没有关闭取货门","info");
                          }
                          return res
                        },(err: any)=>{
                          window.locallog.log("关闭取货门失败:"+JSON.stringify(err),"error");
                          return false
                        }
                    );
                    await self.sleep(500);

                  }while(!isclose)
                }else{
                  pollCouunt++;
                  window.locallog.log("门锁传感器未变化","info");
                  if(pollCouunt >= 4){
                    window.locallog.log("门锁超时关闭","info");
                    self.ds_close_times_start = 'timeout';
                  }
                  ckeckDSCount = 0;
                  await service.openDS().then((res: any)=>{
                    return true
                  },(err: any)=>{
                    window.locallog.log("开启取货门失败:"+JSON.stringify(err),"error");
                    return false
                  });
                  await self.sleep(3000);
                  await closeDSInterval();
                }
              }else{
                await closeDSInterval();
              }
            }
          }

          if(res=="000"){
            closeDSInterval();
          }
        }, (err: any)=>{
          window.locallog.log("设备接口调用失败"+JSON.stringify(err),"error");
          return;
        }
    );
  }

  sleep (time: any){
    return new Promise((resolve) => setTimeout(resolve, time))
  };
}
