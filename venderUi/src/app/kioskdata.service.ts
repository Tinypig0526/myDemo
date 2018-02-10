import { Injectable } from '@angular/core';
/*import {stringDistance} from "codelyzer/util/utils";*/
import {environment} from '../environments/environment';
import {Router} from '@angular/router';


declare const Ice: any;
declare const ThybotKioskService: any;
declare var window: any;

@Injectable()
export class KioskdataService {


  // host: string = '192.168.1.248';

  host: string = environment.hostname;
  communicator: any;
  proxy_data: any;
  proxy_mpay: any;
  proxy_robot: any;
  layout: any;

  is_first = true;   // 判断是否重启设备后第一次启动
  slot_is_use = true;  // 货道是否启用

  is_home = false;
  is_control = false;
  is_change = false;

  btn_type_temp: Array<any> = [];
  type_list_temp:Array<any> = [];

  kiosk_id:string;
  kiosk_name:string;

  constructor(private router: Router) {
    this.communicator = Ice.initialize();
    this.proxy_data = this.communicator.stringToProxy('KioskDataService:ws -h ' + this.host + ' -p 10002');
    this.proxy_mpay = this.communicator.stringToProxy('KioskMPayService:ws -h ' + this.host + ' -p 10004');
    this.proxy_robot = this.communicator.stringToProxy('KioskRobotService:ws -h ' + this.host + ' -p 10006');

    this.get_kiosk_name();
    this.get_kiosk_id();
  }




  // 方法集
  get_kiosk_data(): Promise<any> { // 售货机数据的方法集
    return ThybotKioskService.DataService.DataInterfacePrx.checkedCast(this.proxy_data).then((result: any) => result);

  }

  get_kiosk_robot(): Promise<any> { // 操作机器的方法集
    return ThybotKioskService.RobotService.RobotInterfacePrx.checkedCast(this.proxy_robot).then((result: any) => result,
      (err) => {
      console.log(err);
    });

  }

  get_kiosk_mpay(): Promise<any> { // 支付的方法集
    return ThybotKioskService.MPayService.MpayInterfacePrx.checkedCast(this.proxy_mpay).then((result: any) => result);
  }


  //  data函数

  get_data_from_db(): Promise<any> {   // 从后台同步机器数据
    return this.get_kiosk_data().then((result: any) => result.syncRemoteDataBase().then((is_ok: boolean) => is_ok, (err) => err));
  }

  get_kiosk_id(): Promise<any> { // 获取机器ID
    return this.get_kiosk_data().then((result: any) => result.getKioskId().then((res) =>
        this.kiosk_id = res
    ));
  }

  get_kiosk_name(): Promise<any> { // 获取机器名字
    return this.get_kiosk_data().then((result: any) => result.getKioskName().then((res) =>
        this.kiosk_name = res
    ));
  }

  get_slot_layout(): Promise<any> { // 获取布局
    return this.get_kiosk_data().then((result: any) => result.getSlotLayout().then((layout: any) => layout));
  }

  get_slot_layout_key(): Promise<any> { // 获取布局的主键(列)
    return this.get_kiosk_data().then((result: any) => result.getSlotLayout().then((layout: any) => layout.keys()));
  }

  get_slot_layout_contents(key): Promise<any> { // 获取布局的值(行)
    return this.get_kiosk_data().then((result: any) => result.getSlotLayout().then((layout: any) => layout.get(key)));
  }

  get_product(): Promise<any> {     // 获取商品列表
    return this.get_kiosk_data().then((result: any) => result.getSkus().then((sku: any) => sku));
  }

  get_product_on_rack(): Promise<any> {     // 获取在售商品列表
    return  this.get_kiosk_data().then((result: any) => result.getSkusOnRack().then((onrack: any) => onrack));
  }

  get_products_by_type_id(type_id): Promise<any> {    // 根据商品分类的id 获得该分类下的商品数组
    return this.get_kiosk_data().then((result: any) => result.getSkusByCategoryIdOnRack(type_id).then((type_list: Array<any>) => type_list));
  }

  commitSession(order_no, content): Promise<any> { // 订单成功后发送数据给后台
   /* return this.get_kiosk_data().then((result: any) => result.commitSession(order_no, content).then((nothing: any) => {} ));*/
    return this.get_kiosk_data().then((result: any) => result.commitSession(order_no, content));

  }

  associate_slot(slot_name, id): Promise<any> {     // 货道绑定商品
    return this.get_kiosk_data().then((result: any) => result.associateSlotSku(slot_name, id).then((is_ok: boolean) =>  is_ok));
  }

  set_new_stock(slot_name, qty , is_sale) {  // 购买成功、上架、下架后设置库存数量  is_sale为true是卖出去的，为false是手动下架的
    return this.get_kiosk_data().then((result: any) => result.load(slot_name, qty, is_sale).then((is_ok: boolean) =>  is_ok));
  }

  get_stock(skuId) {   // 获取库存信息
    return this.get_kiosk_data().then((result: any) => result.getSkuQuantityOnRack(skuId).then((stock: any) => stock));
  }


  get_type(): Promise<any> {    // 获取分类
    return this.get_kiosk_data().then((result: any) => result.getCategoryWithSkuOnRack().then((type: any) => type));
  }



  get_slots_by_id(skuid): Promise<any> {   // 获取该商品还有哪些货道有货
    return this.get_kiosk_data().then((result: any) => result.getNonemptySlotsBySkuId(skuid).then((other: Array<any>) => other));
  }

  get_slot_by_name(sku_name): Promise<any>{
    return this.get_kiosk_data().then((result: any) => result.getSlotByName(sku_name).then((slot:any) => slot));
  }

  create_slot(slot_name): Promise<any> {  // 创建货道(组)数据
    return this.get_kiosk_data().then((result: any) => result.createSlotByName(slot_name).then((is_ok: any) => is_ok));

  }

  delete_slot(slot_name): Promise<any> {  // 删除货道(组)数据
    return this.get_kiosk_data().then((result: any) => result.deleteSlotByName(slot_name).then((is_ok: any) => is_ok));
  }

  delete_all_slots(): Promise<any> {  // 删除所有货道布局
    return this.get_kiosk_data().then((result: any) => result.deleteAll());
  }

  get_quantity_by_id(sku_id): Promise<any> {  // 通过id获取商品库存数量
    return this.get_kiosk_data().then((result: any) => result.getSkuQuantityOnRack(sku_id).then((quantity: number) => quantity));
  }

  get_product_by_id(sku_id): Promise<any> {   // 通过id获取商品对象
    return this.get_kiosk_data().then((result: any) => result.getSkuById(sku_id).then((product: any) => product));

  }

  save_pos(row, y): Promise<any> {  // 保存修改后的取货架定位
    return this.get_kiosk_data().then((result: any) => result.setRowPosition(row, y).then((is_ok: boolean) => is_ok, (err) => err));
  }

  set_slot_use(slot_name , status): Promise<any> {   // 设置货道状态 status 1为启用 0为不启用
    return this.get_kiosk_data().then(
      (result: any) => result.setSlotStatus(slot_name, status).then((is_use: boolean) => is_use, (err) => err));
  }

  // robot服务

  go_to_window(): Promise<any> {  // 升降机移至取货口
    return this.get_kiosk_robot().then((result: any) => result.gotoDS().then((is_ok: boolean) => is_ok, (err) => err));
  }

  go_to_rack(row): Promise<any> {  // 移动到某排货架
    return this.get_kiosk_robot().then((result: any) => result.gotoRow(row).then((is_ok: boolean) => is_ok, (err) => err));
  }


  open_door(): Promise<any> {  // 开门操作
    return this.get_kiosk_robot().then((result: any) => result.openFrontDoor().then((is_ok: boolean) => is_ok, (err) => err));
  }

  close_door(): Promise<any> {  // 关门操作
    return this.get_kiosk_robot().then((result: any) => result.closeFrontDoor().then((is_ok: boolean) => is_ok, (err) => err));
  }


  initRobot(): Promise<any> {  // 初始化机器
    return this.get_kiosk_robot().then((result: any) => result.initRobot(60).then((is_ok: boolean) => is_ok, (err) => err));
  }

  get_pos(): Promise<any> { // 获取取货栏当前 坐标
    return this.get_kiosk_robot().then((result: any) => result.getPOS().then((y: any) => y));
  }

  is_empty() {  // 判断取货栏是否有货
    return this.get_kiosk_robot().then((result: any) => result.cgEmpty().then((is_empty: boolean) => is_empty, (err) => err));
  }

  take_out(slot) { // 最简单版取货
    return this.get_kiosk_robot().then((result: any) => result.fetch(slot).then((is_ok: boolean) => is_ok, (err) => err));
  }

}

