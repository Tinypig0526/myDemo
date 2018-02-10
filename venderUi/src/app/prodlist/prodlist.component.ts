import { Component, OnInit} from '@angular/core';
import {KioskdataService} from '../kioskdata.service';
import {PayService} from '../pay.service';
import {RobotService} from '../robot.service';
import {Router} from '@angular/router';


declare const window: any;
declare const Swiper: any;
declare const $: any;

@Component({
  selector: 'app-prodlist',
  templateUrl: './prodlist.component.html',
  styleUrls: ['./prodlist.component.css']
})
export class ProdlistComponent implements OnInit {

  types: Array<any> = [];       //
  products_on_rack: Array<any> = [];    //
  btn_types: Array<any> = ['全部商品'];    // 储存类型的数组


  slide_index = 0;

  product_list: Array<any> = [];  // 全部商品
  type_list: Array<any> = [[]];  // 全部商品

  etc: Array<any> = [];           // 其他



  buying: any;   // 正在购买的货品对象
  stock: any;   // 库存量
  total: any;   // 总价
  orders: number;   // 订单数量

  er_wei_ma: any;   // 二维地址 需要qr转码
  loading: boolean;
  cancel: any;

  time_counter = 0;  // 若干秒自动返回home 关闭所有模态框

  other_channel: any;  // 这个货品在其他货道有没有，返回一个数组

  is_exist: boolean;     // 判断货篮有没有货
  is_closing: boolean;     // 判断门关好
  complete_res: any;  // 接收出货完成的返回值
  session_content: any;

  pay_method: string;
  pay_no: any;


  layout: any;
  layout_key: any;
  layout_value: any;
  layout_list:Array<any> = [[],[],[],[],[],[]];
  is_load:boolean;


  slot_name: Array<any> = [];
  on_rack_slots: Array<any> = [];
  slot: any;

  take_out_num: number;   // 已经出货的数量
  take_out_process: number;  // 判断出货流程进行到哪里

  obj_detail: any;
  detail_array: Array<any> = [];
  robot_id: any;

  swiper: any;
  swiper_out: any;
  swiper_in: any;


  constructor(private kiosk_data: KioskdataService, private pay: PayService, private robot: RobotService, private route: Router) {
    this.orders = 1;

    this.session_content = {
      payment: {
        method: '',
        no: ''
      },
      amount: {
        paid: 1,
        total: 1,
        discount: 0,
        real_paid: 1
      },
      order_no: '',
      timestamp: 0,
      detail: [],
      quantity: {
        total: 1,
        fetched: 0
      },
      state: 'FINISHED',
      kiosk: {
        name: '',
        id: ''
      }
    };

    this.obj_detail = {
      name: '',
      amount: {
        paid: 1,
        total: 1,
        discount: 0,
        real_paid: 1
      },
      quantity: {
        total: 1,
        fetched: 1
      },
      errno: 0,
      id: '0',
      state: '',
      slot_no: ''
    };
  }

  ngOnInit() {
   if (this.kiosk_data.is_first) {     // 如果是机器重启 3秒后再开始运行函数
      setTimeout(() => {
        this.asyncFn();
        this.kiosk_data.is_first = false;
        this.kiosk_data.type_list_temp =this.type_list;
        this.kiosk_data.btn_type_temp =this.btn_types;
        this.kiosk_data.initRobot();    // 断电启动一定要初始化
      } , 5000);  // 设置3000初次启动会出问题 5000不会
    } else if(!this.kiosk_data.is_first && this.kiosk_data.is_change){
      this.asyncFn();
     this.kiosk_data.is_change = false;
     this.kiosk_data.type_list_temp =this.type_list;
     this.kiosk_data.btn_type_temp =this.btn_types;
    } else if(!this.kiosk_data.is_first && this.kiosk_data.type_list_temp.length > 0){
     this.type_list = this.kiosk_data.type_list_temp;
     this.btn_types = this.kiosk_data.btn_type_temp;
     setTimeout( () => {this.setSwiper();} , 300)
   }

  }

  async asyncFn() {   // ngoninit中无法直接使用异步函数 封装一下

    await this.get_types();
    await this.get_products_on_rack();
    await this.set_btn_types();
    await this.classify();
    await this.get_layout_list();
    setTimeout(()=>{
      this.setSwiper();
    },100)
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~获取商品列表模块~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  async set_btn_types() {  //  获取不重复的种类数组
    for (let i = 0; i < this.types.length; i++) {
     /* if ($.inArray(this.types[i].category.name, this.btn_types) === -1) {
      await this.btn_types.push(this.types[i].category.name);
      }*/
      await this.btn_types.push(this.types[i].category.name);
    }
   /*console.log(this.btn_types);*/
  }

  async get_types() {     // 获取全部商品分类
    await this.kiosk_data.get_type().then((res) => {
      this.types = res;
    }, (err) => {
    });
    /*console.log(this.types);*/
  }

  async get_products_on_rack() {  // 获取全部在售商品
    await this.kiosk_data.get_product_on_rack().then((res) => {
      this.products_on_rack = res;
    });
    /*console.log(this.products_on_rack);*/
  }

  async classify() {   // 把获取到的商品分类

    for (let i = 0; i < this.products_on_rack.length; i++) {  // 全部商品
      this.product_list.push(this.products_on_rack[i]);
    }
    this.type_list[0] = this.product_list;

    for (let i = 0; i < this.types.length; i++) {
      await this.kiosk_data.get_products_by_type_id(this.types[i].category.id).then((res) => {
        this.type_list[i + 1] = res;
      });
    }
    console.log(this.type_list);

  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~购买模态框模块~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  ms_list(pro) {  // click传递商品列表

    this.orders = 1;
    this.time_counter = 0; // 计数器归零
    this.buying = pro;
    this.kiosk_data.get_stock(this.buying.id).then((res) => {
      this.stock = res;
    });
    this.calculate_price();
  }

  calculate_price() {  // 计算总价
    this.total = this.orders * this.buying.prices.unit_price;
  }

  amount_minus() {    // 减小购买数
    if (this.orders > 1) {
      this.orders--;
      this.calculate_price();
    }
  }

  amount_plus() {    // 增加购买数
    if (this.orders < this.stock) {
      this.orders++;
    }
    this.calculate_price();
  }

  async get_pay_code(pay_type, product_name, product_price) {   // 支付模块核心函数
    this.time_counter = 0; // 自动返回计数器归零

    this.take_out_num = 0; // 归零实际出货数量
    this.take_out_process = 0; // 出货流程归0  成功为1 失败为-1  货栏里有货

    this.loading = true;  // 正在加载 显示loading图

  /*  if (pay_type === 1) {
      this.pay_method = 'alipay';
    } else {
      this.pay_method = 'wepay';
    }
*/

    await this.pay.getMPay(this, pay_type, product_name, product_price, created, payed).then((res) =>
      this.pay_no = res);

    async function created(fn_this: any, QRdata: any) {
      console.log(QRdata);
      fn_this.er_wei_ma = QRdata.codeurl;  // 获取二维码
      fn_this.loading = false;   // 关闭loading图



      if(QRdata.payType._name === 'ALIPAYQR') {
        fn_this.pay_method = '支付宝';
      } else  {
        fn_this.pay_method = '微信';
      }

      fn_this.pay_no = QRdata.tradeno;  // 订单编号
    }

    async function payed(fn_this: any, isSuccess: any) {  // 判断是否出货成功
      if (isSuccess) {
        $('#pay_modal').modal('hide');
        $('#taking_out_modal').modal('show');
        fn_this.session_content.detail = [];
       await fn_this.get_slot(fn_this.buying.id);  // 查看该商品还有哪些货道有
       await fn_this.take_out_more(fn_this.slot, fn_this.other_channel, fn_this.orders);  // 出货
      } else {

      }
    }
  }

  cancel_pay() {     // 取消支付
    this.pay.cancelMpay().then((res) => {
      this.cancel = res;
    });
   /* this.er_wei_ma = './assets/image/loading.gif';*/
  }


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~出货模块~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 async get_slot(skuid) {  // 返回有商品的货道数组
    await this.kiosk_data.get_slots_by_id(skuid).then((res) => {
      console.log(res);
      for(let i = 0; i < res.length; i++ ){
        if(res[i].status === 1) {
          this.on_rack_slots.push(res[i]);
        }
      }
     /* console.log(this.on_rack_slots);*/
      this.slot = this.on_rack_slots[0].name;

      if (res.length > 1) {
        this.other_channel = true;
      } else {
        this.other_channel = false;
      }
    });
    /*console.log('货道:' + this.slot + 'otherchannel:' + this.other_channel);*/
  }

  async take_out_more(slot, otherChannel, order_amount) {  // 出货函数
let remain_order:number;
let slot_i = 1;

    for (let i = 0; i < order_amount; i++) {
      if (this.take_out_num < order_amount) {
        await this.take_out(slot, otherChannel);
        if (this.complete_res === '000') {   // 如果出货成功 实际出货数+1
          this.take_out_num ++;
          this.take_out_process = 1;

          continue;
        } else {                  // 如果出货失败 判断其他货道有没有货
          if (!otherChannel) {
            console.log('货物不足,出货失败');
            this.take_out_process = -1;

            break;
          } else {
            console.log('尝试其他货道出货');
            this.take_out_process = 2;

            remain_order = order_amount - this.take_out_num;
          /*  console.log(order_amount);
            console.log(this.take_out_num);
            console.log(remain_order);*/

              while (remain_order > 0) {
            /*  await this.kiosk_data.get_slot_by_name(this.on_rack_slots[slot_i].name).then((res) => {
                obj_slot = res;
                console.log(res);
                slot_quantity = obj_slot.quantity;
                });*/
                for (let j = 0; j < this.on_rack_slots[slot_i].quantity; j++) {
                  await this.take_out(this.on_rack_slots[slot_i].name, false);
                  if (this.complete_res !== '000') {
                    break;
                  } else {
                    remain_order = remain_order - 1;
                    if(remain_order <= 0){break;}
                  }
                }

                if(slot_i < this.on_rack_slots.length - 1){
                  slot_i = slot_i + 1;
                } else {
                  if(remain_order <= 0) {
                    this.take_out_process = 1;
                    break;
                  } else {
                    this.take_out_process = -1;
                    break;
                  }
                }
            }
            this.take_out_process = 1;
            break;
          }
        }
      } else {
        console.log('出货完成');
        this.take_out_process = 1;
        break;
      }  // end if
    }  // end for

    this.send_ms(this.buying);
    setTimeout(() => {$('#taking_out_modal').modal('hide'); }, 8000);
  }   // end function

  async take_out(slot, otherChannel) {   //  出货模块核心函数

    this.take_out_process = 0;
    /*console.log(this.take_out_process);*/
    await this.robot.action(this, slot, otherChannel, is_exist, is_close, complete).then((res) => {  // 出货主函数
          });


      function is_exist(fn_this, slot, exist) {  // 判断货篮是否空
        if (exist) {
          /*fn_this.kiosk_data.open_door();*/
          /*  if(fn_this.take_out_num === 0 ){    // 新加的代码,如果上一个用户忘记取货，提示下一个用户先取走
              alert('货栏里有商品，请先取出');
            }*/
          fn_this.take_out_process = 3;
          return false;
        } else {
          fn_this.take_out_process = 0;
        }
      }

      function is_close(fn_this, isclose, tryCloseDSTime) {   // 判断门是否关上

      }

      function complete(fn_this, res, slot) {    // 判断出货完成  '000'成功  '012' '013'为失败
        fn_this.complete_res = res;
        if (res === '000') {
          fn_this.kiosk_data.set_new_stock(slot, -1, true);  // 库存数量变更 is_sale为true是卖出去的
        }
        fn_this.set_detail();
      }

  }




  async send_ms(buying) {
    let d = new Date();
    this.kiosk_data.get_kiosk_id().then( (res) => {
      this.robot_id = res;
    });

    this.session_content.order_no = 'OD' + d.getFullYear()    // 生成订单编号并赋值
      + addZero(d.getMonth() + 1)
      + addZero(d.getDate())
      + addZero(d.getHours())
      + addZero(d.getMinutes())
      + addZero(d.getSeconds())
      + '-'
      + this.kiosk_data.kiosk_id;    // 有没有简单的写法写在一行？

    this.session_content.timestamp = parseInt((d.getTime() / 1000).toFixed(0));   // 生成时间戳并赋值
    function addZero(num) {
      if (num < 10 || parseInt(num) < 10) {
        num = '0' + num;
      }
      return num;
    }

    this.session_content.payment.method = this.pay_method;
    this.session_content.payment.no = this.pay_no;


    this.session_content.amount.paid = this.buying.prices.unit_price;  // amount
    this.session_content.amount.total = this.total;
    this.session_content.amount.discount = 0;
    this.session_content.amount.real_paid = this.session_content.amount.paid - this.session_content.amount.discount;



    this.session_content.quantity.total = this.orders;   // quantity

    this.session_content.quantity.fetched = this.take_out_num;




    if (this.take_out_num === this.orders) {
      this.session_content.state = 'FINISHED';
    } else {
      this.session_content.state = 'FAILED';
    }

    this.session_content.kiosk.id = this.kiosk_data.kiosk_id;

    this.session_content.kiosk.name = this.kiosk_data.kiosk_name;

    console.log(this.session_content);

    this.kiosk_data.commitSession(this.session_content.order_no , JSON.stringify(this.session_content)).then((res) => {
      console.log('上传成功');
    }, (err) => {console.log(err);
    });  // 发送出去


  }



  set_detail() {



    this.obj_detail.name = this.buying.name;
    this.obj_detail.id = this.buying.id;

    this.obj_detail.amount.paid = this.buying.prices.unit_price;
    this.obj_detail.amount.total = this.total;
    this.obj_detail.amount.discount = 0;
    this.obj_detail.amount.real_paid = this.obj_detail.amount.paid - this.obj_detail.amount.discount;

    this.obj_detail.quantity.total =1;


    if (this.complete_res === '000') {
      this.obj_detail.quantity.fetched = 1;
      this.obj_detail.errno = 0;
      this.obj_detail.state = 'FINISHED';
     /* console.log(this.obj_detail.state);*/
    } else {
      this.obj_detail.quantity.fetched = 0;
      this.obj_detail.errno = 1129;
      this.obj_detail.state = 'FAILED';
    }


    this.obj_detail.slot_no = this.slot;

   /* console.log(this.obj_detail);*/
    this.session_content.detail.push(JSON.parse(JSON.stringify(this.obj_detail)));


  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Swiper模块~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  swiper_to(num) {
    this.swiper_out.slideTo(num, 0, false);
    this.slide_index = num;
    /*this.btn_active = this.btn_types[num];*/
  }

  setSwiper() {

    this.swiper_out = new Swiper('.swiper-container-out', {
      pagination: '.swiper-pagination-h',
      paginationClickable: true,
      /*effect : 'flip',*/
      /*fade:{crossFade: false,},*/
      spaceBetween: 50,
      speed:100,
  });

    this.swiper_in = new Swiper('.swiper-container-in', {
      nested: true,
      slidesPerView: 8,
      slidesPerGroup:7,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      spaceBetween: 10,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      onTransitionEnd: () => {
        this.slide_index = this.swiper_out.activeIndex;
      }

  });
  }


  // ԅ(¯㉨¯ԅ) 没啥用的

  async test_outing(product_id) {   // 测试出货！ 不花钱！

    await this.get_slot(product_id);
    await this.take_out_more(this.slot, this.other_channel, 3);
  }

  async get_layout() {     // 获取布局
    await this.kiosk_data.get_slot_layout().then((res) => {
      this.layout = res;
    });
  }

  async get_layout_key() {   // 获取布局的键(列)
    await this.kiosk_data.get_slot_layout_key().then((res) => {
      this.layout_key = res;
    });

  }

  async get_layout_value(key) {  // 获取某行布局的值
    await this.kiosk_data.get_slot_layout_contents(key).then((res) => {
      this.layout_value = res;
    });

  }

  async get_layout_list() {  // 把布局数据处理成二维数组格式
    this.is_load = false;
    await this.get_layout();
    await this.get_layout_key();

    for (let i = 0; i < this.layout_key.length; i++) {
      await this.get_layout_value(this.layout_key[i]);
      for (let j = 0; j < this.layout_value.length; j++) {
        this.layout_list[i].push(this.layout_value[j]);
      }
    }

    this.is_load = true;
    console.log(this.layout_list);
  }

  async contact_slot() {
    await this.get_layout();
    await this.get_layout_key();



    for (let i = 0; i < this.layout_key.length; i++) {
      await this.get_layout_value(this.layout_key[i]);


      for (let j = 0; j < this.layout_value.length; j++) {
        this.slot_name.push(this.layout_value[j].name);
      }
    }
  }


}

