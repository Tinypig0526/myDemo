import {AfterViewInit, Component, OnInit} from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit, AfterViewInit{
  tab_num = 1;
  height = [0, 0, 0];
  top: any;

  is_move = [false, false, false];

  stop = ['./assets/img/gif_stop_1.jpg', './assets/img/gif_stop_2.png', './assets/img/gif_stop_3.jpg'];
  move = ['./assets/img/gif_1.gif', './assets/img/gif_2.gif', './assets/img/gif_3.gif']

  constructor() { }


  ngOnInit() {

  }

  ngAfterViewInit() {
    if(this.tab_num = 1) {
      this.set_height();
    }

  }

  set_height() {
    $(window).scroll(() => {

      this.top = $('html').scrollTop();
      // console.log(this.top);

      this.height[0]  = $('#no_1').offset().top - $('#no_1').height() - 200;
      this.height[1]  = $('#no_2').offset().top - $('#no_1').height() - 200;
      this.height[2]  = $('#no_3').offset().top - $('#no_1').height() - 200;

      // console.log(this.height);

      if (this.top  >= this.height[0]) {
        $('#no_01').show();
        $('#no_01').addClass('animated  slideInRight ');
      }
      if (this.top >= this.height[1]) {
        $('#no_02').show();
        $('#no_02').addClass('animated  slideInLeft');
      }

      if (this.top >= this.height[2]) {
        $('#no_03').show();
        $('#no_03').addClass('animated slideInUp');
      }


    });
  }

  change_move(index, ismove) {

    this.is_move[index] = ismove;
  }

  change_tab(num) {
    this.tab_num = num;
    if (num = 1) {
      this.set_height();
    }
  }

}
