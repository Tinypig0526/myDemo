import { Component, OnInit } from '@angular/core';
import {KioskdataService} from '../kioskdata.service';



declare const $: any ;
@Component({
  selector: 'app-controllayout',
  templateUrl: './controllayout.component.html',
  styleUrls: ['./controllayout.component.css']
})
export class ControllayoutComponent implements OnInit {

  constructor(private kiosk_data: KioskdataService) { }

  num = '选择货道数';  // 统一设置布局 几个货道为一组

  quantity: number;  // 存货数量


  layout: any;
  layout_key: any;  // 布局的行数
  layout_value: any;  // 某行的值
  slots_group: Array<any> = [];  // 暂时存放修改后的布局的数组 如[3,1,2,3,2]
  square_group: Array<any> = []; // 一个二维数组，永久每行方块的比例 直到改变

  colors: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];  // w:white g:light green  b: light sky blue
  is_color: number = 100;
  count: number = 0;



  is_updata: boolean = true;
  is_load: boolean;

  row_no: number;  // 第几行 A行为0
  row_name: string;  // 行名 A、B、C等

  A: Array<any> = [];
  B: Array<any> = [];
  C: Array<any> = [];
  D: Array<any> = [];
  E: Array<any> = [];
  F: Array<any> = [];

  layout_list: Array<any> = [this.A, this.B, this.C, this.D, this.E, this.F];


  //  ╮(￣▽￣")╭
  ngOnInit() {

    this.get_layout_list();
    this.kiosk_data.is_home = true;
    this.kiosk_data.is_control = true;
  }

  ms_row(row) {  // 传输第几行
    this.row_no = row;
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
  /*  console.log(this.square_group);*/
  }


  async unload_all() {  // 卸载与货道绑定的商品
    if (this.layout_list.length > 0) {
      for (let i = 0; i < this.layout_list.length; i++) {
        for (let j = 0; j < this.layout_list[i].length; j++) {
          if (this.layout_list[i][j].sku_id !== 0) {
          await this.kiosk_data.get_quantity_by_id(this.layout_list[i][j].sku_id).then((res) => {
              this.quantity = res;
            });
          await this.kiosk_data.set_new_stock(this.layout_list[i][j].name, - this.quantity, false);
          } else {
            continue;
          }
        }
      }
    } else {
      /*alert('请等待布局加载完成');*/
    }
  }

  async unload(row_num) {
    if (this.layout_list[row_num].length > 0) {
      for (let i = 0; i < this.layout_list[row_num].length; i++) {
        if (this.layout_list[row_num][i].sku_id !== 0) {
        await this.kiosk_data.get_quantity_by_id(this.layout_list[row_num][i].sku_id).then((res) => {
            this.quantity = res;
          });
        await this.kiosk_data.set_new_stock(this.layout_list[row_num][i].name, - this.quantity, false);
        } else {
          continue;
        }
      }
    }
  }


  stop_reset(){
    $('#submit_reset').modal('hide');
  }

  async reset(num) {  // 统一设置布局


    let group_num: number;
    let group_name: string;
    group_num = 0 ;


    if (num !== '1' && num !== '2' && num !== '3' && num !== '4') {
      /*alert('请选择货道组中货道的数量');*/

    } else {
      switch (num) {
        case '1': {this.slots_group = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; break; }
        case '2': {this.slots_group = [2, 2, 2, 2, 2, 1]; break; }
        case '3': {this.slots_group = [3, 3, 3, 1, 1]; break; }
        case '4': {this.slots_group = [4, 4, 1, 1, 1]; break; }
      }

      this.square_group = [];
      this.layout_list = [[], [], [], [], [], []];
      await this.unload_all();

      await this.kiosk_data.delete_all_slots();

      for (let i = 0; i < this.layout_list.length; i++) {  // 一行一行改
        switch (i) {
          case 0 : this.row_name = 'A'; break;
          case 1 : this.row_name = 'B'; break;
          case 2 : this.row_name = 'C'; break;
          case 3 : this.row_name = 'D'; break;
          case 4 : this.row_name = 'E'; break;
          case 5 : this.row_name = 'F'; break;
          case 6 : this.row_name = 'G'; break;
        }

        for (let j = 0; j < this.slots_group.length; j++) {  // 重新布局本行

          group_name = this.row_name + this.num_to_string(group_num + 1) + '-' + this.num_to_string(group_num + this.slots_group[j])
          await this.creat_slot(group_name);
          await this.kiosk_data.set_slot_use(group_name, 1);
          group_num = group_num + this.slots_group[j];
        }
        group_num = 0;
      }
    }

    await this.get_layout_list();


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
   /* console.log(this.layout_key);*/
  }

  async get_layout_value(key) {  // 获取某行布局的值
    await this.kiosk_data.get_slot_layout_contents(key).then((res) => {
      this.layout_value = res;
    });
  }

  async reget_layout_list() {
    this.layout_list = [[], [], [], [], [], []];
    await this.get_layout_list();
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


      this.get_slots_group_init();
      this.is_load = true;
      console.log(this.layout_list);
      console.log(this.square_group);
  }

  set_color(n) {  // 新布局的颜色
    if ((this.count + n ) < 11 && this.count <= 11) {
      this.slots_group.push(n);
      for (let i = 0; i < n; i++) {
        this.colors[this.count + i] = this.is_color;
        if (i === n - 1) {
          this.is_color = 0 - this.is_color;
        }
      }
      this.count = this.count + n;

    } else if ((this.count + n) === 11) {
      this.slots_group.push(n);
      for (let i = 0; i < n; i++) {
        this.colors[this.count + i] = this.is_color;
        if (i === n - 1) {
          this.is_color = 0 - this.is_color;
        }
      }
      this.count = this.count + n;
      /*setTimeout( () => {this.submit(); }, 200);*/

    } else if ((this.count + n) > 11) {
      n = 11 - this.count;
      this.slots_group.push(n);
      for (let i = 0; i < n; i++) {
        this.colors[this.count + i] = this.is_color;
        if (i === n - 1) {
          this.is_color = 0 - this.is_color;
        }
      }
      this.count = this.count + n;
      /*setTimeout( () => {this.submit(); }, 200);*/
    } else if (this.count > 11) {

    }
    console.log(this.slots_group);
    console.log(this.count);
  }



  submit() {   // 提交修改后布局
    this.is_updata = false;

    if (this.count === 11) {
      /*alert('布局调整成功');*/
      this.updata_layout();
      $('#set_layout').modal('hide');
    } else {
      /*alert('请选满11个货道');*/
    }
  }


  clear() {
    this.slots_group = [];
    this.colors = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.count = 0;

  }


  async creat_slot(name) {   // 创建货道组
    await this.kiosk_data.create_slot(name);
  }
  async delete_slot(name) {  // 删除货道组
    await this.kiosk_data.delete_slot(name);
  }



  num_to_string(num) {    // 超过9的数据处理  01~09 10~11
    if (num < 10) {
      return ('0' + num);
    } else {
      return (num.toString());
    }
  }

  async updata_layout() {

    let group_num:  number;
    let group_name: string;

    group_num = 0;


    switch (this.row_no) {
      case 0 : this.row_name = 'A'; break;
      case 1 : this.row_name = 'B'; break;
      case 2 : this.row_name = 'C'; break;
      case 3 : this.row_name = 'D'; break;
      case 4 : this.row_name = 'E'; break;
      case 5 : this.row_name = 'F'; break;
    }



    await this.unload(this.row_no);  // 删除本行在架货品


    for (let i = 0; i < this.layout_list[this.row_no].length; i++) {  // 删除本行布局
      await this.delete_slot(this.layout_list[this.row_no][i].name);
    }


    for (let j = 0; j < this.slots_group.length; j++) {  // 重新布局本行
      group_name = this.row_name + this.num_to_string(group_num + 1) + '-' + this.num_to_string(group_num + this.slots_group[j]);

      console.log(this.square_group[3].length);
      await this.creat_slot(group_name);
      await this.kiosk_data.set_slot_use(group_name, 1);
      console.log(group_name);
      group_num = group_num + this.slots_group[j];
      if(j >= this.slots_group.length-1){
        this.slots_group = [];
        this.colors = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.count = 0;
      }
    }

    this.layout_list = [[], [], [], [], [], [], []];
    this.square_group = [];
    await this.get_layout_list();
   /* console.log(this.square_group);
    console.log(this.layout_list);*/
    this.is_updata = true;
  }

  async nong_huai_le() {

    await this.kiosk_data.delete_all_slots();
    this.square_group = [];
    this.layout_list = [[],[],[],[],[],[]];

    await this.kiosk_data.create_slot('A01-02');
    await this.kiosk_data.create_slot('A03-04');
    await this.kiosk_data.create_slot('A05-06');
    await this.kiosk_data.create_slot('A07-08');
    await this.kiosk_data.create_slot('A09-10');
    await this.kiosk_data.create_slot('A11-11');
    await this.kiosk_data.create_slot('B01-02');
    await this.kiosk_data.create_slot('B03-04');
    await this.kiosk_data.create_slot('B05-06');
    await this.kiosk_data.create_slot('B07-08');
    await this.kiosk_data.create_slot('B09-10');
    await this.kiosk_data.create_slot('B11-11');
    await this.kiosk_data.create_slot('C01-02');
    await this.kiosk_data.create_slot('C03-04');
    await this.kiosk_data.create_slot('C05-06');
    await this.kiosk_data.create_slot('C07-08');
    await this.kiosk_data.create_slot('C09-10');
    await this.kiosk_data.create_slot('C11-11');
    await this.kiosk_data.create_slot('D01-02');
    await this.kiosk_data.create_slot('D03-04');
    await this.kiosk_data.create_slot('D05-06');
    await this.kiosk_data.create_slot('D07-08');
    await this.kiosk_data.create_slot('D09-10');
    await this.kiosk_data.create_slot('D11-11');
    await this.kiosk_data.create_slot('E01-02');
    await this.kiosk_data.create_slot('E03-04');
    await this.kiosk_data.create_slot('E05-06');
    await this.kiosk_data.create_slot('E07-08');
    await this.kiosk_data.create_slot('E09-10');
    await this.kiosk_data.create_slot('E11-11');
    await this.kiosk_data.create_slot('F01-02');
    await this.kiosk_data.create_slot('F03-04');
    await this.kiosk_data.create_slot('F05-06');
    await this.kiosk_data.create_slot('F07-08');
    await this.kiosk_data.create_slot('F09-10');
    await this.kiosk_data.create_slot('F11-11');

    this.get_layout_list();
  }


}

