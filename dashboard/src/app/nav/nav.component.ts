import { Component, OnInit } from '@angular/core';
import {NzNotificationService} from "ng-zorro-antd";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isCollapsed = false;
  constructor(private _notification: NzNotificationService) { }

  ngOnInit() {
    setTimeout(() => {
      this.toggleCollapsed();
    }, 100);

  }
  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  createBasicNotification() {
    this._notification.blank('通知', 'Kiosk013温度过高，有爆炸风险');
  }
}
