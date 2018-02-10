import { Component, OnInit } from '@angular/core';
import {KioskdataService} from '../kioskdata.service';



@Component({
  selector: 'app-controltest',
  templateUrl: './controltest.component.html',
  styleUrls: ['./controltest.component.css']
})
export class ControltestComponent implements OnInit {

  kiosk_name: any;
  kiosk_id: any;
  y = 0;
  change_y = 0;

  row_name = 'A';
  col_name = '01-01';
  test_result = '测试结果';
  constructor(private kiosk_data: KioskdataService) { }

  ngOnInit() {
    this.init_robot();
    this.get_kiosk_name();
    this.get_kiosk_id();

    this.kiosk_data.is_home = true;
    this.kiosk_data.is_control = true;
  }

  open_the_door() {   // 开门
     this.kiosk_data.open_door().then((res) => {
       this.test_result = '已开门';
     }, (err) => {
       this.test_result = '开门失败';
     });
  }

  close_the_door() {  // 关门
     this.kiosk_data.close_door().then((res) =>{
       this.test_result = '已关门';
     }, (err) => {
       this.test_result = '关门失败';
     });
  }

  async init_robot() {  // 初始化机器
      this.test_result = '正在初始化';
    await this.kiosk_data.initRobot().then((res) => {
      this.test_result = '初始化成功';
    }, (err) => {
      this.test_result = '初始化失败';
    });
  }

  async go_window() {  // 去取货口
    this.test_result = '正在移动';
    await this.kiosk_data.go_to_window().then((res) => {
      this.test_result = '已移动到取货口';
    }, (err) => {
      this.test_result = '移动失败';
    });
  }

  async go_rack(row) {  // 去某一行货道
    this.test_result = '正在移动';
   await this.kiosk_data.go_to_rack(row).then();
   await this.kiosk_data.get_pos().then((res) => {
     this.y = res;
     this.change_y = this.y;
     this.test_result = '已定位到第 ' + row + ' 排货道' + ' 当前坐标' + this.y;
   }, (err) => {
     this.test_result = '定位失败';
   });

  }

  async get_kiosk_name() {   // 获取机器名
    await this.kiosk_data.get_kiosk_name().then((res) => {this.kiosk_name = res; });
  }

  async get_kiosk_id() {  // 获取机器id
    await this.kiosk_data.get_kiosk_id().then((res) => {this.kiosk_id = res; });
  }

  y_up() {   // 向上调整取货架位置
    if ( this.y === 0) {
      this.test_result = '请先定位到要调整的货架，再进行调整';
    } else {
      this.change_y = this.change_y - 400;   // 注意机器y轴是负的 原点在最上方 向上调整是减
      this.test_result = '已向上调整400mm 点击保存可确认修改 否则120秒后自动清除修改';

      setTimeout(() => {
        this.change_y = 0;
        } , 120000);  // 120秒不保存自动清除修改
    }
  }

  y_down() {   // 向下调整取货架位置
    if (this.y === 0) {
      this.test_result = '请先定位到要调整的货架，再进行调整';
    } else {
        this.change_y = this.change_y + 400;
        this.test_result = '已向下调整400mm 点击保存可确认修改 否则120秒后自动清除修改';

        setTimeout(() => {
        this.change_y = 0;
      }, 120000);
    }
  }

  async submit_y(row) {  // 确认调整取货架位置
    if (this.change_y !== this.y && this.change_y !== 0) {
      await this.kiosk_data.save_pos(row, this.change_y).then((res) => {
        this.test_result = '调整机械臂位置成功';
      } , (err) => {
        this.test_result = '调整机械臂位置失败';
      });
      this.change_y = 0;
    }
  }

  async is_empty() {  // 测试取货栏是否有货
    await this.kiosk_data.is_empty().then((res) => {
      if (res) {
        this.test_result = '取货栏为空';
      } else {
        this.test_result = '取货栏有货';
      }
    } , (err) => {
      this.test_result = '传感器异常';
    });
  }

  async test_take_out() {  // 测试货道传动
    this.test_result = '正在测试';
    await this.kiosk_data.take_out(this.row_name + this.col_name).then((res) => {
      this.test_result =  '货道传动正常';
    }, (err) => {
      this.test_result = '货道传送异常';
    });
  }

  async sync_from_db() {  // 从数据库同步数据给售货机
    this.test_result = '正在同步，请勿进行其他操作';
    await this.kiosk_data.get_data_from_db().then((res) => {
      this.test_result = '同步成功';
    }, (err) => {
      this.test_result = '同步失败';
    });
  }

}
