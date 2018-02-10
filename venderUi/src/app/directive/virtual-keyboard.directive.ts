import { Directive, ElementRef, Input , Output , EventEmitter} from '@angular/core';
import {empty} from "rxjs/Observer";

declare var $: any;
@Directive({ selector: '[virtualKeyboard]' })
export class VirtualKeyboardDirective {
    //@Input() value: string;
    @Output() valueChange = new EventEmitter();
    @Output() ngModelChange = new EventEmitter();
    @Output() kb_change = new EventEmitter();

    constructor(el: ElementRef)
    {
        //获取input的id
        let id = el.nativeElement.id;
        if(!id) return;

        //获取键盘布局类型
        let kb_type = el.nativeElement.getAttribute("kb_type");
        let customLayout = this.Kb_Layout_Default();
        if(kb_type == "num")
            customLayout = this.Kb_Layout_Num();

        //获取键盘定位
        let kb_position = el.nativeElement.getAttribute("kb_position");
        let position = this.Kb_Position_Default();
        if(kb_position == "bottom")
            position = this.Kp_Position_Bottom();

        //获取键盘CSS
        let css = this.Kb_Style_Class(kb_type,kb_position);

        //设置this
        let _this = this;

        //加载完毕后执行
        $(function(){
            //初始化键盘
            $('#'+id).keyboard({
                autoAccept: true,
                theme:"start",
                layout: 'custom',
                customLayout: customLayout,
                css: css,
                display: {
                    'accept': '√',
                    'bksp': '←',
                },
                usePreview: false, // no preveiw
                reposition: true,
                // Used by jQuery UI position utility
                position: position,
                change:function(e, keyboard, el){_this.change(id, e, keyboard, el);}
            });

            //添加事件
            /*$('#'+id).on("change",function(){
                /!*alert($('#'+id).val());*!/
                _this.valueChange.emit($('#'+id).val());
                _this.ngModelChange.emit($('#'+id).val());
            });*/
        });
    }

    Kb_Style_Class(kb_type,kb_position){
        let styleClass = " ui-keyboard-layout"+ (kb_type?" ui-keyboard-layout-"+kb_type:"");
        let positionClass = " ui-keyboard-position"+ (kb_position?" ui-keyboard-position-"+kb_position:"");

        let css = {
            // input & preview
            input: 'keyboard-input',
            // keyboard container
            container: 'keyboard-container ui-widget ui-corner-all ui-helper-clearfix'+styleClass+positionClass,
            // keyboard container extra class (same as container, but separate)
            popup: '',
            // default state
            buttonDefault: 'ui-state-default ui-corner-all',
            // hovered button
            buttonHover: 'ui-state-hover',
            // Action keys (e.g. Accept, Cancel, Tab, etc);
            // this replaces "actionClass" option
            buttonAction: 'ui-state-active',
            // Active keys
            // (e.g. shift down, meta keyset active, combo keys active)
            buttonActive: 'ui-state-active',
            // used when disabling the decimal button {dec}
            // when a decimal exists in the input area
            buttonDisabled: 'ui-state-disabled',
            // {empty} button class name
            buttonEmpty: 'ui-keyboard-empty'
        }

        return css;
    }

    Kb_Layout_Default(){
        let customLayout = {
            normal: [
                '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
                '{tab} q w e r t y u i o p [ ] \\',
                'a s d f g h j k l ; \' {enter}',
                '{shift} z x c v b n m , . / {shift}',
                '{accept} {space} {left} {right}',
            ],
            shift: [
                '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
                '{tab} Q W E R T Y U I O P { } |',
                'A S D F G H J K L : " {enter}',
                '{shift} Z X C V B N M < > ? {shift}',
                '{accept} {space} {left} {right}'
            ]
        };

        return customLayout;
    }

    Kb_Layout_Num(){
        let customLayout = {
            'normal' : [
                '7 8 9 ',
                '4 5 6',
                '1 2 3',
                '0 {bksp} {accept}'
            ],
            shift: [
                '7 8 9 ',
                '4 5 6',
                '1 2 3',
                '0 {bksp} {accept}'
            ]
        };

        return customLayout;
    }

    Kb_Position_Default(){
        let position = {
            // null = attach to input/textarea;
            // use $(sel) to attach elsewhere
            of: null,
            my: 'center top',
            at: 'center top',
            // used when "usePreview" is false
            at2: 'center bottom'
        }

        return position;

    }

    Kp_Position_Bottom(){
        let position = {
            // null = attach to input/textarea;
            // use $(sel) to attach elsewhere
            of: window,
                my: 'center bottom',
                at: 'center top',
                // used when "usePreview" is false
                my2:'center bottom',
                at2: 'center bottom'
        }

        return position;
    }

    change(id, e, keyboard, el){
        //alert($('#'+id).val());
        this.valueChange.emit($('#'+id).val());
        this.ngModelChange.emit($('#'+id).val());
        this.kb_change.emit($('#'+id).val());
    }
}
