import { Component, OnInit } from '@angular/core';
import {KioskdataService} from '../kioskdata.service';



declare const $: any;
@Component({
  selector: 'app-controlinout',
  templateUrl: './controlinout.component.html',
  styleUrls: ['./controlinout.component.css']
})
export class ControlinoutComponent implements OnInit {
  constructor(private kiosk_data: KioskdataService) { }

  num: any;  // 统一设置布局 几个货道为一组

  quantity: number;  // 存货数量

  slot_name: string;  // 暂时存放货道名
  prod_quantity: Array<any>;  // 暂时存放库存信息

  layout: any;
  layout_key: any;  // 布局的行数
  layout_value: any;  // 某行的值
  slots_group: Array<any> = [];  // 暂时存放修改后的布局的数组 如[3,1,2,3,2]
  square_group: Array<any> = []; // 一个二维数组，永久每行方块的比例 直到改变

  colors: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];  // 用于改变布局色块的颜色 w:white  g:light green  b: light sky blue

  is_load = false; // 判断是否加载完成

  product_on_rack: Array<any> = [];   // 在售商品

  all_products: Array<any> = [];    // 所有备选商品对象
  all_products_name: Array<any> = []; // 所有备选商品品名数组 用于下拉列表显示


  row_no: number;  // 第几行 A行为0
  col_no: number;   // 第几个
  select: any = '请选择上架商品';  // 选择框选择的商品
  show: any;  // 显示在模态框的商品对象
  show_name: any;   // 显示在模态框表格的商品名称
  show_sku: any;  // 显示在模态框表格的商品sku_no
  show_price: any;  // 显示在模态框表格的商品价格
  show_quantity: any; // 显示在模态框表格的商品库存
  show_img: any;
  up_num : number = 0 ; // 上架的数量

  tem_product:any;

  product_on_slot: any;  // 先通过layout获取商品id  再储存通过这个id获取的商品对象

  A: Array<any> = [];
  B: Array<any> = [];
  C: Array<any> = [];
  D: Array<any> = [];
  E: Array<any> = [];
  F: Array<any> = [];
  G: Array<any> = [];

  layout_list: Array<any> = [this.A, this.B, this.C, this.D, this.E, this.F, this.G];  // 布局的二位数组
  product_array: Array<any> = [[], [], [], [], [], [], []];   // 二维数组，储存布局中每个格子的商品对象


  is_use = true;  // 货道是否启用
  //  ╮(￣▽￣")╭
  ngOnInit() {

    this.async_fnc();
    this.kiosk_data.is_home = true;
    this.kiosk_data.is_control = true;
  }

  async async_fnc(){
    if (this.all_products_name.length === 0) {
      await this.get_all_products();
    }
    await this.get_layout_list().then();
  }


  unuse_slot() {

   this.is_use =  $('#lock').is(':checked');

   if (this.is_use) {
     this.kiosk_data.set_slot_use(this.slot_name , 1).then();
     this.layout_list[this.row_no][this.col_no].status = 1;
    } else {
     this.kiosk_data.set_slot_use(this.slot_name , 0).then();
     this.layout_list[this.row_no][this.col_no].status = 0;
    }


  }

  async ms_row(i, j) {  // 传输第几行

    this.row_no = i;
    this.col_no = j;
    this.slot_name = this.layout_list[i][j].name;


    console.log(this.all_products_name);

   /* $('#basic').select2({
      maximumSelectionLength: 2
    });*/


    if (this.product_array[i][j] !== '') {
      this.show =  this.product_array[i][j];
      this.show_name = this.product_array[i][j].name;
      this.show_sku = this.product_array[i][j].sku_no;
      this.show_price = (this.product_array[i][j].prices.unit_price / 100).toFixed(2);
      this.show_img = this.product_array[i][j].images[0].path;
      this.show_quantity = this.layout_list[i][j].quantity;
    } else {
      this.show = null;
      this.show_name = '';
      this.show_sku = '';
      this.show_price = 0;
      this.show_quantity = 0;
      this.show_img = '';
      this.up_num =0;
    }

  }


  async change_submit() {   // 提交更改
    if (this.show === null) {  // 提交时show为空 是下架状态
      await this.kiosk_data.set_new_stock(this.layout_list[this.row_no][this.col_no].name, - this.layout_list[this.row_no][this.col_no].quantity, false);

      this.prod_quantity[this.row_no][this.col_no].quantity = 0;
      $('#put_up').modal('hide');

      console.log(this.product_array);
      this.product_array[this.row_no][this.col_no] = '';

    } else if (this.show !== null && this.show.id === this.product_array[this.row_no][this.col_no].id ) {  // 货名不变，数量变了
      await this.kiosk_data.set_new_stock(this.layout_list[this.row_no][this.col_no].name, this.show_quantity - this.layout_list[this.row_no][this.col_no].quantity, false);

      this.product_array[this.row_no][this.col_no] = this.show;
      /*this.product_array = [[], [], [], [], [], [], []];
      await this.get_product_init();*/

      this.prod_quantity[this.row_no][this.col_no].quantity = this.show_quantity;
      $('#put_up').modal('hide');
      console.log(this.product_array);
    } else if (this.show !== null && this.show.id !== this.product_array[this.row_no][this.col_no].id) {   // 货名变了
      await this.kiosk_data.set_new_stock(this.layout_list[this.row_no][this.col_no].name, - this.layout_list[this.row_no][this.col_no].quantity, false);
      await this.kiosk_data.associate_slot(this.layout_list[this.row_no][this.col_no].name, this.show.id);
      await this.kiosk_data.set_new_stock(this.layout_list[this.row_no][this.col_no].name, this.show_quantity, false);

      this.product_array[this.row_no][this.col_no] = this.show;
     /* this.product_array = [[], [], [], [], [], [], []];
      await this.get_product_init();*/


      this.prod_quantity[this.row_no][this.col_no].quantity = this.show_quantity;
      $('#put_up').modal('hide');
      console.log(this.product_array);
    } else {
      $('#put_up').modal('hide');
      console.log(this.product_array);
    }
  }

  change_cancel() {    // 取消更改
    this.show = null;
    this.select = '请选择上架商品';
    this.show_name = '';
    this.show_sku = '';
    this.show_price = 0;
    this.show_quantity = 0;
    this.show_img = '';
    this.row_no = 0;
    this.col_no = 0;
    $('#put_up').modal('hide');

  }

  async up_click(num) {   // 点击上架时触发事件

    this.up_num = this.up_num + num;


    if (this.show === null && this.select === '请选择上架商品') {  // 没选择要上架的商品
      alert('请选择上架商品');
    } else if (this.show === null && this.select  !== '请选择上架商品') {   // 选择了要上架的商品 但是目前库存不为零

      this.show = this.tem_product;
      /*await this.kiosk_data.get_product_by_id(this.select).then((res) => {
        this.show = res;
      });*/

      this.show_name = this.show.name;
      this.show_sku = this.show.sku_no;
      this.show_price = (this.show.prices.unit_price / 100).toFixed(2);
      this.show_img = this.show.images[0].path;
      this.show_quantity = this.show_quantity + num;

    }  else if (this.show !== null && (this.select === '请选择上架商品' || this.select === this.show.id)) {  // 如果当前库存是0  点开模态框时show是不为空的  这时判断用户是想布货还是换新的
      this.show_quantity = this.show_quantity + num;
    } else if (this.show !== null && this.select !== '请选择上架商品' && this.select !== this.show.id) {

      await this.kiosk_data.get_product_by_id(this.select).then((res) => {
        this.show = res;
      });

      this.show_name = this.show.name;
      this.show_sku = this.show.sku_no;
      this.show_price = (this.show.prices.unit_price / 100).toFixed(2);
      this.show_img = this.show.images[0].path;
      this.show_quantity =this.show_quantity + num;

    }

  }

  down_click() {   // 点击下架触发事件
    this.show = null;
    this.show_name = '';
    this.show_sku = '';
    this.show_price = 0;
    this.show_quantity = 0;
    this.show_img = '';
    this.up_num = 0;
  }


  async select_product(){
    await this.kiosk_data.get_product_by_id(this.select).then((res) =>
      {
        console.log(res);
        this.tem_product = res;
      });
     this.show_img = this.tem_product.images[0].path;
     /*console.log(this.show_img);*/
     this.show_name = this.tem_product.name;
     this.show_sku = this.tem_product.sku_no;
     this.show_price = this.tem_product.prices.unit_price/100;
     this.show_quantity = 0;

  }

  async get_all_products() {   　　　// 获取所有备选商品列表和商品名
    await this.kiosk_data.get_product().then((res) => {
      this.all_products = res;
    });
    for (let i = 0; i < this.all_products.length; i++) {
     await this.all_products_name.push(this.all_products[i]);
    }
  }


  async get_product_init() {
    await this.kiosk_data.get_product_on_rack().then((res) => {
      this.product_on_rack = res;
    });

    for (let i = 0; i < this.layout_list.length; i++) {
      for (let j = 0; j < this.layout_list[i].length; j++) {
        if (this.layout_list[i][j].sku_id === '') {
          this.product_array[i].push('');
        } else {
          await this.get_product_by_id(this.layout_list[i][j].sku_id);
          this.product_array[i].push(this.product_on_slot);
        }
      }
    }
  }

  async get_product_by_id(sku_id) {
    await this.kiosk_data.get_product_by_id(sku_id).then((res) => {
      this.product_on_slot = res;
    });
  }

  get_slots_group_init() {
    let square: number;

    for (let i = 0; i < this.layout_list.length; i++) {
      for (let j = 0; j < this.layout_list[i].length; j++) {
        square = parseInt(this.layout_list[i][j].name.slice(4, 6)) - parseInt(this.layout_list[i][j].name.slice(1, 3)) + 1;
        this.slots_group.push(square);
      }
      this.square_group.push(this.slots_group);
      this.slots_group = [];
    }
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

     await this.get_slots_group_init();

     await this.get_product_init();

     this.is_load = true;

     this.prod_quantity = this.layout_list;

   /*  console.log(this.layout_list);*/
  }

}

export class inout_array{
  product_img: string;
  product_name: string;
  product_sku: string;
  product_price: number;
  product_quantity: number;
  slot_name: string;
  slot_status: any;
  slot_amout: number;
  row_no: number;
  col_no: number;
  row_name: string;
}


// test select

  /*public items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];


  value: any = {};
  disabled = false;



  public selected(value: any)  {
    console.log('Selected value is: ', value);
  }

  public removed(value: any) {
    console.log('Removed value is: ', value);
  }

  public typed(value: any) {
    console.log('New search input: ', value);
  }

  public refreshValue(value: any) {
    this.value = value;
  }*/

