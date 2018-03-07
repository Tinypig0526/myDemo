webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\nimg{\r\n  width: 100%;\r\n  vertical-align: bottom;\r\n}\r\n\r\n\r\n\r\n.flex-div{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align:  center;\r\n      -ms-flex-align:  center;\r\n          align-items:  center;\r\n}\r\n\r\n\r\n\r\n.message{\r\n  font-size: 1.4rem;\r\n}\r\n\r\n\r\n\r\n/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~tab 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\r\n\r\n\r\n\r\n.title-2{\r\n  padding: 0.6rem 0 0.6rem 0;\r\n  font-size: 2.4rem;\r\n  color: #3fabf3;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n\r\n.title-4{\r\n  font-size: 1.4rem;\r\n  font-family: Helvetica, monospace;\r\n  color: #919191;\r\n}\r\n\r\n\r\n\r\n.thybot-line{\r\n  font-size: 2.4rem;\r\n  color: #c9c9c9;\r\n\r\n}\r\n\r\n\r\n\r\n.thybot-desc{\r\n  font-size: 1.4rem;\r\n  line-height: 3rem;\r\n\r\n}\r\n\r\n\r\n\r\n.thybot-slogan{\r\n  /*padding-left: 1rem;*/\r\n  font-size: 1.4rem;\r\n  line-height: 3rem;\r\n}\r\n\r\n\r\n\r\n.map-btn{\r\n  border: solid 0.2rem;\r\n  font-size: 2rem;\r\n  width: 4rem;\r\n  height: 4rem;\r\n  background-color: white;\r\n  position: absolute;\r\n  z-index: 900;\r\n  right: 6rem;\r\n}\r\n\r\n\r\n\r\n/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~tab 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\r\n\r\n\r\n\r\n.factory-name{\r\n  text-align: center;\r\n  margin-top: 9rem;\r\n  font-size: 2rem;\r\n}\r\n\r\n\r\n\r\n.factory-img{\r\n  width: 100%;\r\n  min-height: 25rem;\r\n  -webkit-transition: -webkit-transform 1s;\r\n  transition: -webkit-transform 1s;\r\n  transition: transform 1s;\r\n  transition: transform 1s, -webkit-transform 1s;\r\n}\r\n\r\n\r\n\r\n.factory-img:hover{\r\n  -webkit-transform: scale(1.05 ,1.05);\r\n          transform: scale(1.05 ,1.05);\r\n}\r\n\r\n\r\n\r\n.factory-img-big{\r\n  width: 100%;\r\n  min-height: 50rem;\r\n  vertical-align: bottom;\r\n  -webkit-transition: -webkit-transform 1s;\r\n  transition: -webkit-transform 1s;\r\n  transition: transform 1s;\r\n  transition: transform 1s, -webkit-transform 1s;\r\n\r\n}\r\n\r\n\r\n\r\n.factory-img-big:hover{\r\n  -webkit-transform: scale(1.05 ,1.05);\r\n          transform: scale(1.05 ,1.05);\r\n}\r\n\r\n\r\n\r\n.overflow-div{\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n\r\n.triangle_right{\r\n  z-index: 996;\r\n  position: absolute;\r\n  /*left: 19rem;*/\r\n  left: 100%;\r\n  top: 10rem;\r\n  border-top: 1.6rem solid transparent;\r\n  border-left: 1.6rem solid #eeeced;\r\n  border-bottom: 1.6rem solid transparent;\r\n\r\n}\r\n\r\n\r\n\r\n.triangle_left{\r\n  z-index: 996;\r\n  position: absolute;\r\n  top: 10rem;\r\n  left: -1.6rem;\r\n  border-top: 1.6rem solid transparent;\r\n  border-right: 1.6rem solid #eeeced;\r\n  border-bottom: 1.6rem solid transparent;\r\n}\r\n\r\n\r\n\r\n.blue-div{\r\n  width: 50%;\r\n  height: 50%;\r\n  position: absolute;\r\n  top:50%;\r\n  left: 50%;\r\n  background-color: rgba(63,171,243,0.6);\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.fixed-height1{\r\n  height: 25rem;\r\n}\r\n\r\n\r\n\r\n.fixed-height2{\r\n  height: 50rem;\r\n}\r\n\r\n\r\n\r\n.about-div{\r\n  background-color: #f8f8f8;padding: 2rem;text-align: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <img src=\"./assets/img/about/thybot.jpg\" style=\"width: 100%\">\n</div>\n\n\n<div  style=\"padding-top: 4rem\">\n  <div class=\"flex-div\">\n    <div style=\"flex: 1\"></div>\n    <div style=\"flex: 2\">\n      <h2 class=\"title-2\">Company<br>\n        Profile</h2>\n    </div>\n\n    <div style=\"flex: 9\" class=\"about-div\">\n      <p class=\"thybot-desc\"> Zhuhai Thybot Robotics Co Ltd, a high-tech innovation enterprise, devoted to provide IoT new retail solutions to our customers, was founded in November 2013 in China.<br>\n        Thybot Robotics has a very strong R&D center for automated retail and IOT platform, continuouslybring our technologies to the market. In our automated manufacturing plant, we are dedicated inautomated retail store, integrative LCD touch screen and the intelligent commercial refrigerator.</p>\n    </div>\n    <div style=\"flex: 1\"></div>\n  </div>\n\n  <div nz-row class=\"row-div\" >\n    <div nz-col [nzSpan]=\"5\" [nzOffset]=\"2\" class=\"about-div\">\n      <h2 class=\"title-2\">Our Vision</h2>\n      <p class=\"thybot-slogan\">To bring a more convenient, high\n        quality and a greater life to the public.<br>&nbsp;</p>\n    </div>\n\n\n    <div nz-col [nzSpan]=\"8\" [nzOffset]=\"1\" class=\"about-div\">\n      <h2 class=\"title-2\">Our Mission</h2>\n      <p class=\"thybot-slogan\">We congregate the challenges and pressures what the customer concern, to provide a competitive IoT newretail solution and service, constantly create the\n        maximum value for our customers.</p>\n    </div>\n\n    <div nz-col [nzSpan]=\"5\" [nzOffset]=\"1\" class=\"about-div\">\n      <h2 class=\"title-2\">Thybotnese Culture</h2>\n      <p class=\"thybot-slogan\">Listening</p>\n      <p class=\"thybot-slogan\">Thinking</p>\n      <p class=\"thybot-slogan\">Take action</p>\n      <p class=\"thybot-slogan\">Deep learning</p>\n    </div>\n  </div>\n\n\n\n  <div nz-row  class=\"row-div\" >\n\n    <div nz-col [nzSpan]=\"8\" [nzOffset]=\"2\" class=\"overflow-div fixed-height2\">\n      <img  src=\"./assets/img/about/factory1.jpg\"  class=\"factory-img-big\">\n      <div class=\"blue-div\">\n        <div class=\"factory-name\">\n          <p>ISO9001,TOM</p>\n        </div>\n      </div>\n    </div>\n\n    <div nz-col [nzSpan]=\"12\">\n      <div nz-row  style=\"background-color: #eeeced;\">\n        <div nz-col [nzSpan]=\"8\"  style=\"position: relative\">\n          <div class=\"triangle_right\"></div>\n          <div class=\"factory-name\">\n            <h2>Tester of Analog Transport</h2>\n            <p>--></p>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"16\"  class=\"overflow-div fixed-height1\">\n          <img src=\"./assets/img/about/factory2.jpg\" class=\"factory-img\">\n        </div>\n      </div>\n      <div nz-row style=\"background-color: #eeeced;\">\n        <div nz-col [nzSpan]=\"16\"  class=\"overflow-div fixed-height1\">\n          <img src=\"./assets/img/about/factory3.jpg\"class=\"factory-img\" >\n        </div>\n        <div nz-col [nzSpan]=\"8\"  style=\"position: relative\">\n          <div class=\"triangle_left\"></div>\n          <div class=\"factory-name\">\n            <h2>Automated Manufacturing\n              & Assembly Line</h2>\n            <p><--</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div nz-row style=\"padding-bottom: 60px\">\n    <div nz-col [nzSpan]=\"20\" [nzOffset]=\"2\">\n      <p style=\"font-size: 1.4rem;line-height: 3rem\">We have a fully automated manufacturing and assembly line and an advanced total quality management system (TQM) which ensure the consistency and stability of product quality.</p>\n    </div>\n  </div>\n\n\n  <div nz-row class=\"row-div\">\n    <div nz-col [nzSpan]=\"20\" [nzOffset]=\"2\" style=\"border: solid 1px #d6d7dc;position: relative\">\n      <h2 class=\"title-2\" style=\"text-align: center;padding: 2rem 0 2rem 0\">Thybot Machines Operating Locations</h2>\n      <hr style=\"width: 40%;margin: auto;color: #e8e8e8\">\n      <button class=\"map-btn\" style=\"top: 8rem\" (click)=\"change_map(1)\">+</button>\n      <button class=\"map-btn\" style=\"top: 14rem\" (click)=\"change_map(0)\">-</button>\n      <div style=\"width: 100%;z-index: 899\" id=\"map\"></div>\n    </div>\n  </div>\n\n  <div class=\"row-div\">\n    <div style=\"background: #e4e4e4;width: 84%;text-align: left;margin-left: 8%;padding: 1rem 2rem\">\n      <p class=\"message\">Web: en.thybot.com</p>\n      <p class=\"message\">Email: sale1@thybot.com</p>\n      <p class=\"message\">Tel: 0086-756-6893285</p>\n      <p class=\"message\">Fax: 0086-756-6893281</p>\n      <p class=\"message\">Address: No. 33，Ke Ji San Lu, Tang Jia Bay, High-Tech Zone, ZhuHai, GuangDong, China</p>\n    </div>\n  </div>\n\n</div>\n\n<app-bottom></app-bottom>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.tab_num = 1;
        this.chart_c = 0;
        this.zoom = 0.8;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.tab_num == 1) {
            setTimeout(function () {
                _this.set_map(0);
            }, 200);
        }
    };
    AboutComponent.prototype.change_tab = function (num) {
        var _this = this;
        this.tab_num = num;
        if (num == 1) {
            setTimeout(function () {
                _this.set_map(0);
            }, 200);
        }
    };
    AboutComponent.prototype.change_map = function (option) {
        if (option == 1 && this.zoom < 1.8) {
            this.zoom = this.zoom + 0.1;
            this.set_map(0);
        }
        if (option == 0 && this.zoom > 0.8) {
            this.zoom = this.zoom - 0.1;
            this.set_map(0);
        }
    };
    AboutComponent.prototype.set_map = function (real_data) {
        var _this = this;
        $('#map').height(($('#map').width() * 0.7));
        this.map_chart = echarts.init(document.getElementById('map'));
        var data = [
            { name: '上海', value: 658 },
            { name: '深圳', value: 582 },
            { name: '珠海', value: 822 },
            { name: '杭州', value: 684 },
            { name: '北京', value: 779 },
            { name: '广州', value: 738 },
            { name: '攀枝花', value: 251 },
            { name: '威海', value: 182 },
            { name: '承德', value: 183 },
            { name: '厦门', value: 181 },
            { name: '汕尾', value: 192 },
            { name: '潮州', value: 193 },
            { name: '丹东', value: 199 },
            { name: '太仓', value: 272 },
            { name: '曲靖', value: 273 },
            { name: '烟台', value: 281 },
            { name: '福州', value: 292 },
            { name: '瓦房店', value: 203 },
            { name: '即墨', value: 201 },
            { name: '抚顺', value: 212 },
            { name: '玉溪', value: 213 },
            { name: '张家口', value: 211 },
            { name: '阳泉', value: 312 },
            { name: '莱州', value: 323 },
            { name: '湖州', value: 324 },
            { name: '汕头', value: 325 },
            { name: '昆山', value: 331 },
            { name: '宁波', value: 332 },
            { name: '湛江', value: 333 },
            { name: '揭阳', value: 341 },
            { name: '荣成', value: 342 },
            { name: '连云港', value: 451 },
            { name: '葫芦岛', value: 452 },
            { name: '常熟', value: 463 },
            { name: '东莞', value: 464 },
            { name: '河源', value: 465 },
            { name: '淮安', value: 466 },
            { name: '泰州', value: 467 },
            { name: '南宁', value: 471 },
            { name: '营口', value: 572 },
            { name: '惠州', value: 573 },
            { name: '江阴', value: 574 },
            { name: '蓬莱', value: 575 },
            { name: '韶关', value: 541 },
            { name: '嘉峪关', value: 542 },
        ];
        var fake_data = 'Created By Chromie Wang';
        var geoCoordMap = {
            '上海': [121.48, 31.22],
            '广州': [113.23, 23.16],
            '深圳': [114.07, 22.62],
            '珠海': [113.52, 22.3],
            '北京': [116.46, 39.92],
            '杭州': [120.19, 30.26],
            '攀枝花': [101.718637, 26.582347],
            '威海': [122.1, 37.5],
            '承德': [117.93, 40.97],
            '厦门': [118.1, 24.46],
            '汕尾': [115.375279, 22.786211],
            '潮州': [116.63, 23.68],
            '丹东': [124.37, 40.13],
            '太仓': [121.1, 31.45],
            '曲靖': [103.79, 25.51],
            '烟台': [121.39, 37.52],
            '福州': [119.3, 26.08],
            '瓦房店': [121.979603, 39.627114],
            '即墨': [120.45, 36.38],
            '抚顺': [123.97, 41.97],
            '玉溪': [102.52, 24.35],
            '张家口': [114.87, 40.82],
            '阳泉': [113.57, 37.85],
            '莱州': [119.942327, 37.177017],
            '湖州': [120.1, 30.86],
            '汕头': [116.69, 23.39],
            '昆山': [120.95, 31.39],
            '宁波': [121.56, 29.86],
            '湛江': [110.359377, 21.270708],
            '揭阳': [116.35, 23.55],
            '荣成': [122.41, 37.16],
            '连云港': [119.16, 34.59],
            '葫芦岛': [120.836932, 40.711052],
            '常熟': [120.74, 31.64],
            '东莞': [113.75, 23.04],
            '河源': [114.68, 23.73],
            '淮安': [119.15, 33.5],
            '泰州': [119.9, 32.49],
            '南宁': [108.33, 22.84],
            '营口': [122.18, 40.65],
            '惠州': [114.4, 23.09],
            '江阴': [120.26, 31.91],
            '蓬莱': [120.75, 37.8],
            '韶关': [113.62, 24.84],
            '嘉峪关': [98.289152, 39.77313],
        };
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };
        if (real_data == 1) {
            this.chart_c++;
            if (this.chart_c >= 10) {
                console.log(fake_data);
                this.chart_c = 0;
            }
            setTimeout(function () { _this.chart_c = 0; }, 3000);
        }
        var option = {
            backgroundColor: '#fff',
            tooltip: {
                trigger: 'item',
                formatter: function (data) {
                    return '\n' + data.name + ':' + data.value[2] + '台';
                },
            },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x: 'right',
                data: ['pm2.5'],
                textStyle: {
                    color: '#fff'
                }
            },
            geo: {
                map: 'china',
                // zoom: 0.8,
                zoom: this.zoom,
                scaleLimit: {
                    min: 0.8,
                    max: 1.8,
                },
                roam: false,
                label: {
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#97c3fa',
                        borderColor: '#111'
                    },
                    emphasis: {
                        areaColor: '#36c6d3'
                    }
                }
            },
            series: [
                {
                    name: '该地区售货机分布',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: function (val) {
                        return val[2] / 30;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#2D3E5E'
                        }
                    }
                },
                {
                    name: '该地区售货机分布',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0, 6)),
                    symbolSize: function (val) {
                        return val[2] / 30;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#D8617A',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                }
            ]
        };
        if (real_data != 1) {
            this.map_chart.setOption(option, true);
        }
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-div{\r\n  width: 100%;\r\n  height: 72px;\r\n  /*background-image: linear-gradient(to bottom, #43b0f3, #298df4);*/\r\n  background-color: #3fabf3;\r\n  position: fixed;\r\n  top:0;\r\n  left: 0;\r\n  z-index: 1998;\r\n}\r\n\r\n\r\n\r\n.route-div{\r\n  text-align: right;\r\n}\r\n\r\n\r\n\r\n.route-btn{\r\n  color: white;\r\n  background:none;\r\n  margin: 16px 0.8rem 0 0.8rem;\r\n  border: 0;\r\n  border-radius: 20px;\r\n  font-size: 1.3rem;\r\n  height: 40px;\r\n}\r\n\r\n\r\n\r\n.active{\r\n  background-color: white !important;\r\n  color: #3AA3F4 !important;\r\n}\r\n\r\n\r\n\r\n.route-btn:hover{\r\n  background-color: white;\r\n  color: #3AA3F4;\r\n}\r\n\r\n\r\n\r\n.fixed-btn{\r\n  display: block;\r\n  width: 5rem;\r\n  height: 5rem;\r\n  background-color: #3fabf3;\r\n  color: white;\r\n  border: solid 0.1rem white;\r\n  vertical-align: bottom;\r\n}\r\n\r\n\r\n\r\n.fixed-btn:hover,.fixed-btn:focus{\r\n  outline-color: white;\r\n  color: #3fabf3;\r\n  background-color: white;\r\n}\r\n\r\n\r\n\r\n.icon {\r\n  font-size: 3rem;\r\n  line-height: 3rem;\r\n}\r\n\r\n\r\n\r\nimg{\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.phone-num{\r\n  background-color: #f6f6f6;\r\n  font-size: 1.4rem;\r\n  margin-top: 36%;\r\n  padding: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.document{\r\n  background-color: #f6f6f6;\r\n  font-size: 1.4rem;\r\n  margin-top: 0.5rem;\r\n  padding: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.language{\r\n  background-color: white;\r\n  color: #3fabf3;\r\n  border: solid 1px white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div nz-row class=\"nav-div\">\n\n  <div nz-col class=\"logo-div\" [nzXl] = \"{span: 3, offset: 1}\"  [nzLg] = \"{span: 3, offset: 1}\" [nzMd] = \"{span: 3, offset: 1}\" [nzSm] = \"{span: 0}\" [nzXs] = \"{span: 0}\">\n\n    <img src=\"./assets/img/logo.png\" alt=\"thybot\"  style=\"margin-top: 16px;width: 100%;min-width: 12rem\">\n  </div>\n\n  <div nz-col class=\"route-div\"  [nzXl] = \"{span: 18}\"  [nzLg] = \"{span: 18}\" [nzMd] = \"{span: 18}\" [nzSm] = \"{span: 24}\" [nzXs] = \"{span: 0}\">\n    <button [routerLink] = \"['/home']\" nz-button [nzType]=\"'primary'\" class=\"route-btn\" routerLinkActive=\"active\">HOME</button>\n    <button [routerLink] = \"['/solution']\" nz-button [nzType]=\"'primary'\" class=\"route-btn\" routerLinkActive=\"active\">SOLUTION</button>\n    <button [routerLink] = \"['/product']\" nz-button [nzType]=\"'primary'\" class=\"route-btn\"  routerLinkActive=\"active\">PRODUCTS</button>\n    <button [routerLink] = \"['/case']\" nz-button [nzType]=\"'primary'\" class=\"route-btn\" routerLinkActive=\"active\">CASES</button>\n    <button [routerLink] = \"['/serve']\" nz-button [nzType]=\"'primary'\" class=\"route-btn\" routerLinkActive=\"active\">SERVICES</button>\n    <button [routerLink] = \"['/about']\" nz-button [nzType]=\"'primary'\" class=\"route-btn\" routerLinkActive=\"active\">ABOUT</button>\n    <button [routerLink] = \"['/document']\" nz-button [nzType]=\"'primary'\" class=\"route-btn\" routerLinkActive=\"active\">INQUIRY/DOWNLOAD</button>\n  </div>\n  <div style=\"position: absolute;right: 1%;top: 20px\">\n    <!--<button   nz-button [nzType]=\"'primary'\" (click)=\"change_language()\" ><span [class.language]=\"language\">中</span>&nbsp;/&nbsp;<span [class.language]=\"!language\">En</span> </button>-->\n    <a href=\"../index.html\">\n      <button   nz-button [nzType]=\"'primary'\"  ><span [class.language]=\"language\">中</span>&nbsp;/&nbsp;<span [class.language]=\"!language\">En</span> </button>\n    </a>\n  </div>\n\n\n  <div nz-col class=\"logo-div\"  [nzXl] = \"{span: 0}\"  [nzLg] = \"{span: 0}\" [nzMd] = \"{span: 0}\" [nzSm] = \"{span: 0}\" [nzXs] = \"{span: 12,offset:1}\">\n    <img src=\"./assets/img/logo.png\" alt=\"thybot\"  style=\"margin-top: 2rem;max-height: 3rem;max-width: 12rem\">\n  </div>\n  <!--<div nz-col class=\"route-div\"  [nzXl] = \"{span: 0}\"  [nzLg] = \"{span: 0}\" [nzMd] = \"{span: 0}\" [nzSm] = \"{span: 0}\" [nzXs] = \"{span: 10}\">-->\n    <!--<nz-dropdown [nzPlacement]=\"'bottomRight'\">-->\n      <!--<button  nz-dropdown style=\"background:none;color: white;border:0;margin-top:14px;outline: none\">-->\n        <!--<i class=\"icon font_family icon-platform\" style=\"font-size: 6rem\"></i>-->\n      <!--</button>-->\n      <!--<ul nz-menu >-->\n        <!--<li nz-menu-item >-->\n          <!--<a >首页</a>-->\n        <!--</li>-->\n        <!--<li nz-menu-item>-->\n          <!--<a >解决方案</a>-->\n        <!--</li>-->\n        <!--<li nz-menu-item>-->\n          <!--<a>产品</a>-->\n        <!--</li>-->\n        <!--<li nz-menu-item>-->\n          <!--<a>案例</a>-->\n        <!--</li>-->\n        <!--<li nz-menu-item>-->\n          <!--<a>服务</a>-->\n        <!--</li>-->\n        <!--<li nz-menu-item>-->\n          <!--<a >关于</a>-->\n        <!--</li>-->\n        <!--<li nz-menu-item>-->\n          <!--<a>询盘/下载</a>-->\n        <!--</li>-->\n      <!--</ul>-->\n    <!--</nz-dropdown>-->\n  <!--</div>-->\n</div>\n\n\n<div style=\"position: fixed;right: 0;top: 30%;margin: 0;padding: 0;z-index: 1100\">\n  <div *ngIf=\"show == 3\" style=\"display: inline-block;width:15rem;height: 15rem;background-color: white;vertical-align: bottom;\">\n    <img id=\"contact-img\" src=\"./assets/img/er_wei_ma.jpg\" >\n  </div>\n  <div *ngIf=\"show == 2\" style=\"display: inline-block;width:15rem;height: 15rem;vertical-align: bottom;\">\n    <p class=\"phone-num\">86-0756-6893285</p>\n  </div>\n  <div *ngIf=\"show == 1\" style=\"display: inline-block;width:15rem;height: 15rem;vertical-align: bottom;\">\n    <p class=\"document\">点击进入在线询盘</p>\n  </div>\n  <div style=\"display: inline-block;\">\n    <button [routerLink] = \"['/document']\" (click)=\"change_show(1)\" (mouseenter) = \"change_show(1)\" (mouseleave)=\"change_show(0)\"  class=\"fixed-btn\"><i class=\"icon font_family icon-btn_enquiry\"></i></button>\n    <button (click)=\"change_show(2)\" (mouseenter) =\"change_show(2)\" (mouseleave)=\"change_show(0)\" class=\"fixed-btn\"><i class=\"icon font_family icon-btn_phone\"></i></button>\n    <button  (click)=\"change_show(3)\" (mouseenter) =\"change_show(3)\" (mouseleave)=\"change_show(0)\" class=\"fixed-btn\"><i class=\"icon font_family icon-btn_qrcode\"></i></button>\n\n  </div>\n\n</div>\n\n<div style=\"margin-top: 72px\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.active = 1;
        this.show = 0;
        this.language = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.change_show = function (num) {
        this.show = num;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__solution_solution_component__ = __webpack_require__("../../../../../src/app/solution/solution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__case_case_component__ = __webpack_require__("../../../../../src/app/case/case.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__serve_serve_component__ = __webpack_require__("../../../../../src/app/serve/serve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bottom_bottom_component__ = __webpack_require__("../../../../../src/app/bottom/bottom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__download_download_component__ = __webpack_require__("../../../../../src/app/download/download.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__document_document_component__ = __webpack_require__("../../../../../src/app/document/document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__control_service__ = __webpack_require__("../../../../../src/app/control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routeConfig = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */] },
    { path: 'case', component: __WEBPACK_IMPORTED_MODULE_10__case_case_component__["a" /* CaseComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_9__product_product_component__["a" /* ProductComponent */] },
    { path: 'serve', component: __WEBPACK_IMPORTED_MODULE_11__serve_serve_component__["a" /* ServeComponent */] },
    { path: 'solution', component: __WEBPACK_IMPORTED_MODULE_7__solution_solution_component__["a" /* SolutionComponent */] },
    { path: 'download', component: __WEBPACK_IMPORTED_MODULE_15__download_download_component__["a" /* DownloadComponent */] },
    { path: 'document', component: __WEBPACK_IMPORTED_MODULE_16__document_document_component__["a" /* DocumentComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__solution_solution_component__["a" /* SolutionComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_10__case_case_component__["a" /* CaseComponent */],
                __WEBPACK_IMPORTED_MODULE_11__serve_serve_component__["a" /* ServeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__bottom_bottom_component__["a" /* BottomComponent */],
                __WEBPACK_IMPORTED_MODULE_15__download_download_component__["a" /* DownloadComponent */],
                __WEBPACK_IMPORTED_MODULE_16__document_document_component__["a" /* DocumentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng_zorro_antd__["a" /* NgZorroAntdModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__angular_router__["b" /* RouterModule */].forRoot(routeConfig),
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* HttpModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__control_service__["a" /* ControlService */], { provide: __WEBPACK_IMPORTED_MODULE_18__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_18__angular_common__["d" /* HashLocationStrategy */], }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/bottom/bottom.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bottom-div{\r\n  width: 100%;\r\n  background-color:#27272c;\r\n}\r\n\r\n.content-div{\r\n  padding: 4rem 0 6rem 0 ;\r\n\r\n}\r\n\r\n.copyright{\r\n  margin-top: 20px;\r\n  color: #7f7f7f;\r\n  text-align: center;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.content-title{\r\n  color: white;\r\n  font-size: 1.4rem;\r\n  line-height: 4rem;\r\n}\r\n\r\n.content-desc{\r\n  color: #c5c5c5;\r\n  font-size: 1rem;\r\n  line-height: 2.4rem;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bottom/bottom.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bottom-div\">\n  <!--<div nz-row  class=\"content-div\">-->\n\n    <!--<div nz-col [nzXl] = \"{span: 3, offset: 3}\"  [nzLg] = \"{span: 3, offset: 3}\" [nzMd] = \"{span: 3, offset: 3}\" [nzSm] = \"{span: 6, offset: 2}\" [nzXs] = \"{span: 6, offset: 2}\">-->\n      <!--<h2 class=\"content-title\">产品</h2>-->\n      <!--&lt;!&ndash;<a href=\"/product#archor1\" ><p class=\"content-desc\">机器特点</p></a>&ndash;&gt;-->\n      <!--<a (click)=\"route(1)\" ><p class=\"content-desc\">机器特点</p></a>-->\n      <!--<a (click)=\"route(2)\" ><p class=\"content-desc\">多功能综合机</p></a>-->\n      <!--<a (click)=\"route(3)\"><p class=\"content-desc\">万能机</p></a>-->\n    <!--</div>-->\n\n    <!--<div nz-col [nzXl] = \"{span: 3}\"  [nzLg] = \"{span: 3}\" [nzMd] = \"{span: 3}\" [nzSm] = \"{span: 6, offset: 1}\" [nzXs] = \"{span: 6, offset: 1}\">-->\n      <!--<h2 class=\"content-title\">解决方案</h2>-->\n      <!--<a (click)=\"route(4)\"><p class=\"content-desc\">核心技术</p></a>-->\n      <!--<a (click)=\"route(5)\"><p class=\"content-desc\">一站式自主研发系统</p></a>-->\n      <!--<a (click)=\"route(6)\"><p class=\"content-desc\">一站式解决方案</p></a>-->\n    <!--</div>-->\n\n    <!--<div nz-col [nzXl] = \"{span: 3}\"  [nzLg] = \"{span: 3}\" [nzMd] = \"{span: 3}\" [nzSm] = \"{span: 6, offset: 1}\" [nzXs] = \"{span: 6, offset: 1}\">-->\n      <!--<h2 class=\"content-title\">我们的服务</h2>-->\n      <!--<a (click)=\"route(7)\"><p class=\"content-desc\">专业定制</p></a>-->\n      <!--<a (click)=\"route(8)\"><p class=\"content-desc\">技术支持</p></a>-->\n      <!--<a (click)=\"route(9)\"><p class=\"content-desc\">售后服务</p></a>-->\n    <!--</div>-->\n\n    <!--<div nz-col [nzXl] = \"{span: 3}\"  [nzLg] = \"{span: 3}\" [nzMd] = \"{span: 3}\" [nzSm] = \"{span: 9, offset: 2}\" [nzXs] = \"{span: 9, offset: 2}\">-->\n      <!--<h2 class=\"content-title\">联系我们</h2>-->\n      <!--<p class=\"content-desc\">电话：86-0756-6893280</p>-->\n      <!--<p class=\"content-desc\">地址：珠海市高新区唐家湾镇</p>-->\n      <!--<p class=\"content-desc\">科技三路33号1号厂房1栋1楼</p>-->\n    <!--</div>-->\n\n    <!--<div nz-col [nzXl] = \"{span: 2, offset: 1}\"  [nzLg] = \"{span: 2, offset: 1}\" [nzMd] = \"{span: 2, offset: 1}\" [nzSm] = \"{span: 3, offset: 2}\" [nzXs] = \"{span: 4, offset: 2}\">-->\n      <!--<img src=\"./assets/img/er_wei_ma.jpg\" style=\"width: 100%;margin-top: 12px\">-->\n      <!--<p style=\"text-align: center;font-size: 1.4rem;color: #c5c5c5;line-height: 2.4rem\">利保微信公众号</p>-->\n    <!--</div>-->\n  <!--</div>-->\n  <div style=\"background-color:#27272c;padding: 1.6rem 0 2rem 0\">\n    <!--<hr style=\"width: 70%;margin-left: 15%;border-color: #7f7f7f\">-->\n    <h3 class=\"copyright\">COPYRIGHT DATAGRAND TECH INC. ALL RIGHTS RESERVED. 粤ICP备14038554号</h3>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bottom/bottom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__control_service__ = __webpack_require__("../../../../../src/app/control.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BottomComponent = /** @class */ (function () {
    function BottomComponent(router, control, ref) {
        this.router = router;
        this.control = control;
        this.ref = ref;
    }
    BottomComponent.prototype.ngOnInit = function () {
    };
    BottomComponent.prototype.route = function (where) {
        switch (where) {
            case 1:
                this.router.navigate(['/product']);
                this.control.route_control = 1;
                $('html, body').animate({
                    scrollTop: $('#archor1').offset().top - 100
                }, 0);
                break;
            case 2:
                this.router.navigate(['/product']);
                this.control.route_control = 2;
                $('html, body').animate({
                    scrollTop: $('#archor2').offset().top - 100
                }, 0);
                break;
            case 3:
                this.router.navigate(['/product']);
                this.control.route_control = 3;
                $('html, body').animate({
                    scrollTop: $('#archor3').offset().top - 100
                }, 0);
                break;
            case 4:
                this.router.navigate(['/solution']);
                this.control.tab_num = 2;
                scrollTo(0, 120);
                break;
            case 5:
                this.router.navigate(['/solution']);
                this.control.tab_num = 1;
                scrollTo(0, 120);
                break;
            case 6:
                this.router.navigate(['/solution']);
                this.control.tab_num = 3;
                scrollTo(0, 120);
                break;
            case 7:
                this.router.navigate(['/serve']);
                this.control.route_control = 7;
                $('html, body').animate({
                    scrollTop: $('#archor7').offset().top - 100
                }, 0);
                break;
            case 8:
                this.router.navigate(['/serve']);
                this.control.route_control = 8;
                $('html, body').animate({
                    scrollTop: $('#archor8').offset().top - 100
                }, 0);
                break;
            case 9:
                this.router.navigate(['/serve']);
                this.control.route_control = 9;
                $('html, body').animate({
                    scrollTop: $('#archor9').offset().top - 100
                }, 0);
                break;
        }
    };
    BottomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bottom',
            template: __webpack_require__("../../../../../src/app/bottom/bottom.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bottom/bottom.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__control_service__["a" /* ControlService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], BottomComponent);
    return BottomComponent;
}());



/***/ }),

/***/ "../../../../../src/app/case/case.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-div{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align:  center;\r\n      -ms-flex-align:  center;\r\n          align-items:  center;\r\n}\r\n\r\n\r\n.exhibition-img{\r\n  width: 90%;\r\n}\r\n\r\n\r\n.factory-name{\r\n  text-align: center;\r\n  margin-top: 10rem !important;\r\n}\r\n\r\n\r\n.name1-w{\r\n  margin-top: 4rem;\r\n  color: white;\r\n  font-size: 1.6rem;\r\n  font-weight: bold;\r\n\r\n}\r\n\r\n\r\n.name2-w{\r\n  margin-top: 1rem;\r\n  font-size: 1.4rem;\r\n  color: white;\r\n}\r\n\r\n\r\n.name3-w{\r\n  display: inline-block;\r\n  margin-top: 2rem;\r\n  padding: 0.5rem 2rem 0.5rem 2rem;\r\n  font-size: 1.4rem;\r\n  border: solid 2px white;\r\n  color: white;\r\n}\r\n\r\n\r\n.name1-b{\r\n  margin-top: 4rem;\r\n  font-size: 1.6rem;\r\n  font-weight: bold;\r\n  display: inline-block;\r\n}\r\n\r\n\r\n.name2-b{\r\n  margin-top: 4rem;\r\n  font-size: 1.4rem;\r\n}\r\n\r\n\r\n.name3-b{\r\n  margin-top: 2rem;\r\n  padding: 0.5rem 2rem 0.5rem 2rem;\r\n  font-size: 1.6rem;\r\n  border: solid 2px black;\r\n  display: inline-block;\r\n}\r\n\r\n\r\n.name4-b{\r\n  text-align: left;\r\n  font-size: 1.2rem;\r\n  color: #999999;\r\n  margin-top: 1rem;\r\n  padding: 0 1rem 0 1rem;\r\n}\r\n\r\n\r\n.name4-w{\r\n  text-align: left;\r\n  font-size: 1.2rem;\r\n  color: white;\r\n  margin-top: 1rem;\r\n  padding: 0 1rem 0 1rem;\r\n}\r\n\r\n\r\n.triangle_right{\r\n  z-index: 1000;\r\n  position: absolute;\r\n  left: 100%;\r\n  top: 46%;\r\n  border-top: 1.6rem solid transparent;\r\n  border-left: 1.6rem solid white;\r\n  border-bottom: 1.6rem solid transparent;\r\n\r\n}\r\n\r\n\r\n.triangle_left{\r\n  z-index: 1000;\r\n  position: absolute;\r\n  top: 46%;\r\n  left: -1.6rem;\r\n  border-top: 1.6rem solid transparent;\r\n  border-right: 1.6rem solid white;\r\n  border-bottom: 1.6rem solid transparent;\r\n}\r\n\r\n\r\n.blue-div{\r\n  top:50%;\r\n  left: 50%;\r\n  width: 50%;\r\n  height: 50%;\r\n  position: absolute;\r\n\r\n  background-color: rgba(63,171,243,0.6);\r\n  color: white;\r\n}\r\n\r\n\r\n.line{\r\n  border-top:1px solid  #c9c9c9;\r\n  width: 100px;\r\n  display: inline-block;\r\n  margin: 0 1rem 0.6rem 1rem;\r\n}\r\n\r\n\r\n.title-2{\r\n  font-size: 2.4rem;\r\n  color: #3fabf3;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.title-4{\r\n  font-size: 1.4rem;\r\n  font-family: Helvetica, monospace;\r\n  color: #919191;\r\n}\r\n\r\n\r\n.color-img{\r\n  width: 100%;\r\n  min-height: 25rem;\r\n  vertical-align: bottom;\r\n  -webkit-transition: -webkit-transform 1s, -webkit-filter 1s;\r\n  transition: -webkit-transform 1s, -webkit-filter 1s;\r\n  transition: transform 1s, filter 1s;\r\n  transition: transform 1s, filter 1s, -webkit-transform 1s, -webkit-filter 1s;\r\n  -webkit-filter: grayscale(100%);\r\n          filter: grayscale(100%);\r\n}\r\n\r\n\r\n.color-img:hover{\r\n  -webkit-filter: grayscale(0%);\r\n          filter: grayscale(0%);\r\n  -webkit-transform: scale(1.05 ,1.05);\r\n          transform: scale(1.05 ,1.05);\r\n\r\n}\r\n\r\n\r\n.color-img-big{\r\n  width: 100%;\r\n  min-height: 50rem;\r\n  vertical-align: bottom;\r\n  -webkit-filter: grayscale(100%);\r\n          filter: grayscale(100%);\r\n  -webkit-transition: -webkit-transform 1s, -webkit-filter 1s;\r\n  transition: -webkit-transform 1s, -webkit-filter 1s;\r\n  transition: transform 1s, filter 1s;\r\n  transition: transform 1s, filter 1s, -webkit-transform 1s, -webkit-filter 1s;\r\n}\r\n\r\n\r\n.color-img-big:hover{\r\n  -webkit-filter: grayscale(0%);\r\n          filter: grayscale(0%);\r\n  -webkit-transform: scale(1.05 ,1.05);\r\n          transform: scale(1.05 ,1.05);\r\n}\r\n\r\n\r\n.overflow-div{\r\n\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n.colorful{\r\n  width: 100%;\r\n  min-height: 25rem;\r\n  vertical-align: bottom;\r\n  -webkit-transition: -webkit-transform 1s, -webkit-filter 1s;\r\n  transition: -webkit-transform 1s, -webkit-filter 1s;\r\n  transition: transform 1s, filter 1s;\r\n  transition: transform 1s, filter 1s, -webkit-transform 1s, -webkit-filter 1s;\r\n}\r\n\r\n\r\n.colorful:hover{\r\n  -webkit-transform: scale(1.05 ,1.05);\r\n          transform: scale(1.05 ,1.05);\r\n}\r\n\r\n\r\n.boao-img{\r\n\r\n  width: 90%;\r\n  min-height: 25rem;\r\n  -webkit-filter: grayscale(100%);\r\n          filter: grayscale(100%);\r\n  -webkit-transition: -webkit-transform 1s, -webkit-filter 1s;\r\n  transition: -webkit-transform 1s, -webkit-filter 1s;\r\n  transition: transform 1s, filter 1s;\r\n  transition: transform 1s, filter 1s, -webkit-transform 1s, -webkit-filter 1s;\r\n}\r\n\r\n\r\n.boao-img:hover{\r\n  -webkit-filter: grayscale(0%);\r\n          filter: grayscale(0%);\r\n  -webkit-transform: scale(1.05 ,1.05);\r\n          transform: scale(1.05 ,1.05);\r\n  margin: auto;\r\n}\r\n\r\n\r\n.swiper-btn-div{\r\n  position: absolute;\r\n  bottom: 2rem;\r\n  left: 6rem;\r\n  z-index: 997;\r\n\r\n}\r\n\r\n\r\n.swiper-btn{\r\n\r\n  border: 0;\r\n  color: white;\r\n  background-color: rgba(63,171,243,0.7);\r\n  font-size: 3rem;\r\n  line-height: 3.6rem;\r\n  padding: 0.3rem\r\n  0.5rem 0.6rem 0.5rem;\r\n  margin-right: 2rem;\r\n\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.swiper-btn-lock{\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  background:none;\r\n  cursor:not-allowed;\r\n  border: solid 1px white;\r\n  /*font-size: 3rem;*/\r\n  /*line-height: 3.6rem;*/\r\n  /*padding: 0 0.5rem 0.3rem 0.5rem;*/\r\n  /*margin-right: 2rem;*/\r\n  /*border: 0;*/\r\n}\r\n\r\n\r\n.swiper-slide{\r\n  text-align: center;\r\n  font-size: 18px;\r\n  /*background: #fff;*/\r\n\r\n  /* Center slide text vertically */\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  -ms-flex-pack: center;\r\n  justify-content: center;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~media~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\r\n\r\n\r\n.fixed-height1{\r\n  height: 25rem;\r\n}\r\n\r\n\r\n.fixed-height2{\r\n  height: 50rem;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/case/case.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src=\"./assets/img/case/banner.jpg\" style=\"width: 100%\">\n</div>\n\n<div style=\"padding: 8rem 0 8rem 0;background-color: #f8f8f8\">\n\n  <div nz-row >\n    <div nz-col [nzSpan]=\"8\" [nzOffset]=\"2\" class=\"overflow-div fixed-height2\" >\n      <img src=\"./assets/img/case/1.jpg\"   class=\"color-img-big\">\n      <div class=\"blue-div\" >\n        <div class=\"factory-name\">\n          <p class=\"name1-w\">M1 SERIES</p>\n          <span class=\"name3-w\">Happy Campus</span>\n        </div>\n      </div>\n    </div>\n\n    <div nz-col [nzSpan]=\"12\">\n\n      <div nz-row  style=\"background-color: white;\" >\n        <div nz-col [nzSpan]=\"8\"  style=\"position: relative\" class=\"fixed-height1\">\n          <div class=\"triangle_right\"></div>\n          <div class=\"factory-name\">\n            <p class=\"name2-b\">CLASSIC SERIES</p>\n            <span class=\"name3-b\">Book Stories</span>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"16\" class=\"overflow-div fixed-height1\" >\n          <img  src=\"./assets/img/case/2.jpg\"  class=\"color-img\">\n        </div>\n      </div>\n\n      <div nz-row style=\"background-color: white\" >\n        <div nz-col [nzSpan]=\"16\" class=\"overflow-div fixed-height1\" >\n          <img  src=\"./assets/img/case/3.jpg\"  class=\"color-img\">\n        </div>\n        <div nz-col [nzSpan]=\"8\"  style=\"position: relative\">\n          <div class=\"triangle_left\"></div>\n          <div class=\"factory-name\">\n            <p class=\"name2-b\">CLASSIC SERIES</p>\n            <span class=\"name3-b\">Mystery House</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div nz-row>\n    <div nz-col [nzSpan]=\"20\" [nzOffset]=\"2\" style=\"background-color: white\">\n      <div nz-col [nzSpan]=\"6\" class=\"overflow-div fixed-height1\">\n        <img src=\"./assets/img/case/4.jpg\"  class=\"color-img\">\n      </div>\n      <div nz-col [nzSpan]=\"6\"  class=\"fixed-height1\">\n        <div class=\"triangle_left\"></div>\n        <div class=\"factory-name\">\n          <p class=\"name2-b\">PROSPEROUS SERIES</p>\n        </div>\n      </div>\n      <div nz-col [nzSpan]=\"6\" style=\"background-color: #3fabf3\" class=\"fixed-height1\">\n        <div class=\"triangle_right\"></div>\n        <div class=\"factory-name\">\n          <p class=\"name2-w\">CLASSIC SERIES</p>\n        </div>\n      </div>\n      <div nz-col [nzSpan]=\"6\" class=\"overflow-div fixed-height1\">\n        <img src=\"./assets/img/case/5.jpg\"  class=\"color-img\">\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n<div style=\"padding: 8rem 0 8rem 0;\">\n  <div nz-row >\n    <div nz-col [nzSpan]=\"20\" [nzOffset]=\"2\" style=\"background-color: #f8f8f8\">\n      <div nz-col [nzSpan]=\"6\"  class=\"fixed-height1\" >\n        <div class=\"triangle_right\"></div>\n        <div class=\"factory-name\">\n          <p class=\"name2-b\">GLACIER SERIES</p>\n        </div>\n      </div>\n      <div nz-col [nzSpan]=\"6\" class=\"overflow-div fixed-height1\">\n        <img  src=\"./assets/img/case/6.jpg\"  class=\"color-img\">\n      </div>\n      <div nz-col [nzSpan]=\"6\" class=\"fixed-height1\">\n        <div class=\"triangle_right\"></div>\n        <div class=\"factory-name\">\n          <p class=\"name2-b\">GLACIER SERIES</p>\n        </div>\n      </div>\n      <div nz-col [nzSpan]=\"6\" class=\"overflow-div fixed-height1\">\n        <img src=\"./assets/img/case/7.jpg\"  class=\"color-img\">\n      </div>\n    </div>\n  </div>\n  <div nz-row >\n    <div nz-col [nzSpan]=\"20\" [nzOffset]=\"2\" style=\"background-color: #f8f8f8\">\n      <div nz-col [nzSpan]=\"6\"  class=\"overflow-div fixed-height1\">\n        <img src=\"./assets/img/case/8.jpg\"  class=\"colorful\">\n      </div>\n      <div nz-col [nzSpan]=\"6\" class=\"fixed-height1\">\n        <div class=\"triangle_left\"></div>\n        <div class=\"factory-name\">\n          <p class=\"name2-b\">GLACIER SERIES</p>\n\n        </div>\n      </div>\n      <div nz-col [nzSpan]=\"6\" class=\"overflow-div fixed-height1\">\n        <img src=\"./assets/img/case/9.jpg\"  class=\"colorful\">\n      </div>\n      <div nz-col [nzSpan]=\"6\" class=\"fixed-height1\">\n        <div class=\"triangle_left\"></div>\n        <div class=\"factory-name\">\n          <p class=\"name2-b\">GLACIER SERIES</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div style=\"text-align: center;margin-top: 4rem\">\n  <h2 class=\"title-2\">\n    <span class=\"line\"></span>\n    Boao Airport\n    <span class=\"line\"></span></h2>\n</div>\n\n<div nz-row class=\"row-div\">\n\n  <div nz-col [nzSpan]=\"5\" [nzOffset]=\"2\" class=\"overflow-div fixed-height1\">\n    <img src=\"./assets/img/case/10.jpg\"  class=\"boao-img\" >\n  </div>\n\n  <div nz-col [nzSpan]=\"5\" class=\"overflow-div fixed-height1\">\n    <img src=\"./assets/img/case/11.jpg\"   class=\"boao-img\">\n  </div>\n  <div nz-col [nzSpan]=\"5\" class=\"overflow-div fixed-height1\">\n    <img src=\"./assets/img/case/12.jpg\"    class=\"boao-img\">\n  </div>\n  <div nz-col [nzSpan]=\"5\" class=\"overflow-div fixed-height1\">\n    <img src=\"./assets/img/case/13.jpg\"   class=\"boao-img\">\n  </div>\n\n</div>\n\n\n<div nz-row   class=\"row-div bg-color\">\n  <div nz-col [nzSpan]=\"9\">\n      <div id=\"swiper1\" class=\"swiper-container\" >\n        <div class=\"swiper-wrapper\">\n          <div class=\"swiper-slide\" *ngFor=\"let exhibition of exhibition_data\" >\n            <div style=\"margin-top: 11rem\" *ngIf=\"swiper1\">\n              <p class=\"name1-b\">{{exhibition.title}}</p>\n              <span class=\"name3-b\">{{exhibition.position}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  <div nz-col [nzSpan]=\"14\" style=\"position: relative\" >\n    <div class=\"swiper-btn-div \" *ngIf=\"swiper\">\n      <button class=\"swiper-btn\"  [class.swiper-btn-lock]=\"swiper.activeIndex == 0\" (click)=\"swiper_pre()\" ><</button>\n      <button class=\"swiper-btn\"  [class.swiper-btn-lock]=\"swiper.activeIndex == 5\" (click)=\"swiper_next()\" >></button>\n    </div>\n    <div id=\"swiper\" class=\"swiper-container\" >\n      <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide\"  style=\"background-color: #f8f8f8\" *ngFor=\"let exhibition of exhibition_data\" >\n          <img [src]=\"exhibition.img\"  class=\"exhibition-img\">\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<div nz-row class=\"row-div\">\n  <div nz-col [nzSpan]=\"20\" [nzOffset]=\"2\" >\n    <h2 class=\"title-2\">\n      <span class=\"line\"></span>\n      Thybot Automated Retail Showroom\n      <span class=\"line\"></span>\n    </h2>\n  </div>\n\n</div>\n\n\n<div nz-row style=\"padding-bottom: 8rem;\">\n  <div nz-col [nzSpan]=\"20\" [nzOffset]=\"2\">\n    <div nz-row  class=\"bg-color\" >\n      <div nz-col [nzSpan]=\"6\"  class=\"fixed-height1\" style=\"text-align: center;padding-top: 5rem\">\n        <div >\n          <p class=\"name1-b\">START WITH THE WORLD</p>\n          <p class=\"name4-b\">Fully implemented a comprehensive  quality management system (TQM).</p>\n        </div>\n      </div>\n      <div nz-col [nzSpan]=\"6\"  class=\"overflow-div fixed-height1 \">\n        <img src=\"./assets/img/case/hall1.jpg\" class=\"colorful\">\n      </div>\n      <div nz-col [nzSpan]=\"6\"  class=\"fixed-height1\" style=\"text-align: center;padding-top: 6rem;background-color: #3fabf3\">\n        <div  >\n          <p class=\"name1-w\">LEAD INDUSTRY</p>\n          <p class=\"name4-w\">Top technology in the design, research, development and production</p>\n        </div>\n      </div>\n      <div nz-col [nzSpan]=\"6\" class=\"overflow-div fixed-height1\">\n        <img src=\"./assets/img/case/hall2.jpg\"  class=\"colorful\">\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<app-bottom></app-bottom>\n"

/***/ }),

/***/ "../../../../../src/app/case/case.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CaseComponent = /** @class */ (function () {
    function CaseComponent() {
        this.exhibition_data = [
            { title: 'Automated Retail Vending Show ', text: '', position: 'NAMA ONESHOW AT SANDS EXPO 2017', img: './assets/img/case/meeting1.jpg' },
            { title: 'Automated Retail Vending Show ', text: '', position: 'NAMA ONESHOW AT SANDS EXPO 2017', img: './assets/img/case/meeting2.jpg' },
            { title: '', text: '', position: 'Guangzhou Exhibition', img: './assets/img/case/meeting3.jpg' },
            { title: '', text: '', position: 'Shanghai Exhibition', img: './assets/img/case/meeting4.jpg' },
            { title: '', text: '', position: 'Guangzhou Exhibition', img: './assets/img/case/meeting5.jpg' },
            { title: '', text: '', position: 'Beijing Exhibition', img: './assets/img/case/meeting6.jpg' },
        ];
    }
    CaseComponent.prototype.ngOnInit = function () {
    };
    CaseComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.set_swiper();
        }, 300);
    };
    CaseComponent.prototype.set_swiper = function () {
        this.swiper1 = new Swiper('#swiper1', {
            autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
        });
        this.swiper = new Swiper('#swiper', {
            autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
        });
    };
    CaseComponent.prototype.swiper_next = function () {
        console.log(this.swiper.activeIndex);
        if (this.swiper.activeIndex < 5) {
            this.swiper1.slideNext(1000, false);
            this.swiper.slideNext(1000, false);
        }
    };
    CaseComponent.prototype.swiper_pre = function () {
        console.log(this.swiper.activeIndex);
        if (this.swiper.activeIndex > 0) {
            this.swiper.slidePrev(1000, false);
            this.swiper1.slidePrev(1000, false);
        }
    };
    CaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-case',
            template: __webpack_require__("../../../../../src/app/case/case.component.html"),
            styles: [__webpack_require__("../../../../../src/app/case/case.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CaseComponent);
    return CaseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/control.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ControlService = /** @class */ (function () {
    function ControlService(http) {
        this.http = http;
        this.route_control = 0;
        this.tab_num = 1;
    }
    ControlService.prototype.postData = function (url, value) {
        return this.http.post(url, value).toPromise()
            .then(function (response) {
            return new Promise(function (resolve, reject) {
                resolve(response.json());
            });
        })
            .catch(this.handleError);
    };
    ControlService.prototype.getData = function (url) {
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            return new Promise(function (resolve, reject) {
                resolve(response.json());
            });
        })
            .catch(this.handleError);
    };
    ControlService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ControlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ControlService);
    return ControlService;
}());



/***/ }),

/***/ "../../../../../src/app/document/document.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".document{\r\n  background:url(" + escape(__webpack_require__("../../../../../src/assets/img/document/bg.jpg")) + ") 0 0  repeat-y;\r\n  background-size:100%;\r\n  padding-bottom: 50px;\r\n}\r\n.document>.title{\r\n  margin-top:28px;\r\n  font-family: MicrosoftYaHei;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  line-height: 4.22;\r\n  text-align: center;\r\n  color: #ffffff;\r\n}\r\n.document>.title img{\r\n  vertical-align: middle;\r\n}\r\n.document .about,.document .ercode{\r\n  text-align: left;\r\n  font-family: MicrosoftYaHei;\r\n  font-size: 18px;\r\n  color: #ffffff;\r\n}\r\n.document .about{\r\n  padding-top: 160px;\r\n}\r\n.document .about>span{\r\n  color: #39a3f3;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n}\r\n.document .ercode{\r\n  padding-top: 48px;\r\n}\r\n.document .ercode img{\r\n  width: 121px;\r\n  margin-top: 14px;\r\n}\r\n.document .from{\r\n  margin-top: 72px;\r\n  background-color: #fff;\r\n  text-align: left;\r\n  font-size: 18px;\r\n  line-height: 76px;\r\n  color: #202020;\r\n}\r\n.document .from .title{\r\n  padding-left: 54px;\r\n}\r\n.document .from .btn{\r\n  border-radius: 4px;\r\n  background-color: #3fabf3;\r\n  font-family: MicrosoftYaHei;\r\n  font-size: 18px;\r\n  line-height: 0;\r\n  color: #fff;\r\n  padding: 20px 45px;\r\n  outline: none;\r\n  border: 0;\r\n}\r\n.tab-btn{\r\n  background:none;\r\n  color: white;\r\n\r\n  line-height: 3rem;\r\n  cursor: pointer;\r\n  font-size: 1.6rem;\r\n  border: 0;\r\n  padding: 0 1rem 0 1rem;\r\n  border-radius: 1.5rem;\r\n}\r\n.tab-btn:hover,.tab-btn:focus{\r\n  color: white !important;\r\n  background-color: #3fabf3;\r\n  outline: none;\r\n}\r\n.tab-active{\r\n  color: white !important;\r\n  background-color: #3fabf3;\r\n}\r\n.tips{\r\n  text-align: center;\r\n  color: white;\r\n  font-size: 1.6rem;\r\n}\r\n.success{\r\n  position: absolute;\r\n\r\n  padding-left: 1rem;\r\n  font-size: 1.6rem;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/document/document.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"document\">\r\n  <table></table>\r\n  <div class=\"title\">\r\n    <div nz-row>\r\n\r\n      <div nz-col [nzXl] = \"{span: 8, offset: 8}\"  [nzLg] = \"{span: 10, offset: 7}\" [nzMd] = \"{span: 12, offset: 6}\" [nzSm] = \"{span: 16, offset: 4}\" [nzXs] = \"{span: 24}\">\r\n        <div nz-row >\r\n\r\n          <div nz-col [nzXl] = \"{span: 6, offset: 6}\"  [nzLg] = \"{span: 6, offset: 6}\" [nzMd] = \"{span: 6, offset: 6}\" [nzSm] = \"{span: 6, offset: 6}\" [nzXs] = \"{span: 8, offset: 4}\" class=\"content\">\r\n            <button class=\"tab-btn\" [class.tab-active]=\"tab == 1\" (click)=\"change_tab(1)\">INQUIRY</button>\r\n          </div>\r\n          <div nz-col [nzXl] = \"{span: 6}\"  [nzLg] = \"{span: 6}\" [nzMd] = \"{span: 6}\" [nzSm] = \"{span: 6}\" [nzXs] = \"{span: 8}\" class=\"content\">\r\n            <button class=\"tab-btn\" [class.tab-active]=\"tab == 2\" (click)=\"change_tab(2)\">DOWNLOAD</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"tab ==2\">\r\n      <p  class=\"tips\">Kindly Reminder: Clients can download the technical documentation when you fill in this form and submit.</p>\r\n  </div>\r\n\r\n  <div nz-row>\r\n\r\n    <div nz-col  [nzXl] = \"{span: 4}\"  [nzLg] = \"{span: 4}\" [nzMd] = \"{span: 3}\" [nzSm] = \"{span: 3}\" [nzXs] = \"{span: 0}\">\r\n    </div>\r\n\r\n    <div nz-col [nzXl] = \"{span: 16}\"  [nzLg] = \"{span: 16}\" [nzMd] = \"{span: 18}\" [nzSm] = \"{span: 18}\" [nzXs] = \"{span: 24}\">\r\n      <div class=\"from\" nz-row style=\"padding-top:24px\">\r\n        <div nz-col [nzXl] = \"{span: 4}\"  [nzLg] = \"{span: 6}\" [nzMd] = \"{span: 7}\" [nzSm] = \"{span: 8}\" [nzXs] = \"{span: 24}\" class=\"title\">\r\n          Product item:\r\n        </div>\r\n        <div nz-col [nzXl] = \"{span: 6}\"  [nzLg] = \"{span: 16}\" [nzMd] = \"{span: 15}\" [nzSm] = \"{span: 15}\" [nzXs] = \"{span: 22,offset:1}\">\r\n          <!--<nz-input [nzSize]=\"'large'\" [(ngModel)] = 'client.product'></nz-input>-->\r\n          <nz-select [nzSize]=\"'large'\" [(ngModel)] = 'client.product_name' style=\"width: 100%\">\r\n            <nz-option [nzLabel]=\"'Glacier Series'\" [nzValue]=\"'Glacier Series'\">Glacier Series</nz-option>\r\n            <nz-option [nzLabel]=\"'Multi functional Integrated Machine'\" [nzValue]=\"'Multi functional Integrated Machine'\">Multi functional Integrated Machine</nz-option>\r\n            <nz-option [nzLabel]=\"'G2S'\" [nzValue]=\"'G2S'\">G2S</nz-option>\r\n            <nz-option [nzLabel]=\"'G2S PLUS'\" [nzValue]=\"'G2S PLUS'\">G2S PLUS</nz-option>\r\n            <nz-option [nzLabel]=\"'Classic Series'\" [nzValue]=\"'Classic Series'\">Classic Series</nz-option>\r\n            <nz-option [nzLabel]=\"'Prosperous Series'\" [nzValue]=\"'Prosperous Series'\">Prosperous Series</nz-option>\r\n            <nz-option [nzLabel]=\"'Auto Stock In–Stock Out Series'\" [nzValue]=\"'Auto Stock In–Stock Out Series'\">Auto Stock In–Stock Out Series</nz-option>\r\n            <nz-option [nzLabel]=\"'Exquisite Series'\" [nzValue]=\"'Exquisite Series'\">Exquisite Series</nz-option>\r\n            <nz-option [nzLabel]=\"'Cooked Food Series'\" [nzValue]=\"'Cooked Food Series'\">Cooked Food Series</nz-option>\r\n\r\n          </nz-select>\r\n        </div>\r\n        <div nz-col [nzXl] = \"{span: 4}\"  [nzLg] = \"{span: 6}\" [nzMd] = \"{span: 7}\" [nzSm] = \"{span: 8}\" [nzXs] = \"{span: 24}\" class=\"title\">\r\n          Quantity:\r\n        </div>\r\n        <div nz-col [nzXl] = \"{span: 6}\"  [nzLg] = \"{span: 16}\" [nzMd] = \"{span: 15}\" [nzSm] = \"{span: 15}\" [nzXs] = \"{span: 22,offset:1}\">\r\n          <nz-input [nzSize]=\"'large'\" [(ngModel)] = 'client.product_num'></nz-input>\r\n        </div>\r\n        <div nz-col [nzXl] = \"{span: 4}\"  [nzLg] = \"{span: 6}\" [nzMd] = \"{span: 7}\" [nzSm] = \"{span: 8}\" [nzXs] = \"{span: 24}\" class=\"title\">\r\n          <span style=\"color: red\">*</span>&nbsp;Name:\r\n        </div>\r\n        <div nz-col [nzXl] = \"{span: 6}\"  [nzLg] = \"{span: 16}\" [nzMd] = \"{span: 15}\" [nzSm] = \"{span: 15}\" [nzXs] = \"{span: 22,offset:1}\">\r\n          <nz-input [nzSize]=\"'large'\" [(ngModel)] = 'client.user_name'></nz-input>\r\n        </div>\r\n        <div nz-col [nzXl] = \"{span: 4}\"  [nzLg] = \"{span: 6}\" [nzMd] = \"{span: 7}\" [nzSm] = \"{span: 8}\" [nzXs] = \"{span: 24}\" class=\"title\">\r\n          Company:\r\n        </div>\r\n        <div nz-col [nzXl] = \"{span: 6}\"  [nzLg] = \"{span: 16}\" [nzMd] = \"{span: 15}\" [nzSm] = \"{span: 15}\" [nzXs] = \"{span: 22,offset:1}\">\r\n          <nz-input [nzSize]=\"'large'\" [(ngModel)] = 'client.company_name'></nz-input>\r\n        </div>\r\n        <div nz-col [nzXl] = \"{span: 4}\"  [nzLg] = \"{span: 6}\" [nzMd] = \"{span: 7}\" [nzSm] = \"{span: 8}\" [nzXs] = \"{span: 24}\" class=\"title\">\r\n          E-mail:\r\n        </div>\r\n        <div nz-col [nzXl] = \"{span: 6}\"  [nzLg] = \"{span: 16}\" [nzMd] = \"{span: 15}\" [nzSm] = \"{span: 15}\" [nzXs] = \"{span: 22,offset:1}\">\r\n          <nz-input [nzSize]=\"'large'\" [(ngModel)] = 'client.email'></nz-input>\r\n        </div>\r\n        <div nz-col [nzXl] = \"{span: 4}\"  [nzLg] = \"{span: 6}\" [nzMd] = \"{span: 7}\" [nzSm] = \"{span: 8}\" [nzXs] = \"{span: 24}\" class=\"title\">\r\n          <span style=\"color: red\">*</span>&nbsp;Telephone:\r\n        </div>\r\n        <div nz-col [nzXl] = \"{span: 6}\"  [nzLg] = \"{span: 16}\" [nzMd] = \"{span: 15}\" [nzSm] = \"{span: 15}\" [nzXs] = \"{span: 22,offset:1}\">\r\n          <nz-input [nzSize]=\"'large'\" [(ngModel)] = 'client.phone'></nz-input>\r\n        </div>\r\n        <div nz-col [nzXl] = \"{span: 4}\"  [nzLg] = \"{span: 6}\" [nzMd] = \"{span: 7}\" [nzSm] = \"{span: 8}\" [nzXs] = \"{span: 24}\" class=\"title\">\r\n          <span style=\"color: red\">*</span>&nbsp;City:\r\n        </div>\r\n        <div nz-col [nzXl] = \"{span: 6}\"  [nzLg] = \"{span: 16}\" [nzMd] = \"{span: 15}\" [nzSm] = \"{span: 15}\" [nzXs] = \"{span: 22,offset:1}\">\r\n          <nz-input [nzSize]=\"'large'\" [(ngModel)] = 'client.city'></nz-input>\r\n        </div>\r\n        <div nz-col [nzXl] = \"{span: 4}\"  [nzLg] = \"{span: 6}\" [nzMd] = \"{span: 7}\" [nzSm] = \"{span: 8}\" [nzXs] = \"{span: 24}\" class=\"title\">\r\n          Country:\r\n        </div>\r\n        <div nz-col [nzXl] = \"{span: 6}\"  [nzLg] = \"{span: 16}\" [nzMd] = \"{span: 15}\" [nzSm] = \"{span: 15}\" [nzXs] = \"{span: 22,offset:1}\">\r\n          <nz-input [nzSize]=\"'large'\" [(ngModel)] = 'client.country'></nz-input>\r\n        </div>\r\n        <div nz-col [nzXl] = \"{span: 4}\"  [nzLg] = \"{span: 6}\" [nzMd] = \"{span: 7}\" [nzSm] = \"{span: 8}\" [nzXs] = \"{span: 24}\" class=\"title\">\r\n          Remark:\r\n        </div>\r\n        <div nz-col [nzXl] = \"{span: 17}\"  [nzLg] = \"{span: 16}\" [nzMd] = \"{span: 15}\" [nzSm] = \"{span: 15}\" [nzXs] = \"{span: 22,offset:1}\" style=\"padding-top: 12px;\">\r\n          <nz-input  [nzType]=\"'textarea'\" [nzRows]=\"'12'\" [(ngModel)] = 'client.remark' [nzPlaceHolder]=\"''\"></nz-input>\r\n        </div>\r\n\r\n        <div nz-col [nzSpan]=\"24\" style=\"text-align: center;margin-top: 29px;\">\r\n          <button (click)=\"submit()\"  class=\"btn\" >Submit</button>\r\n          <span class=\"success\" *ngIf=\"submit_num == 1\">Submitted successfully! Back home in 3 seconds</span>\r\n          <span class=\"success\" *ngIf=\"submit_num == 0\">Please fill in form with * correctly!</span>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/document/document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__control_service__ = __webpack_require__("../../../../../src/app/control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(route, control) {
        this.route = route;
        this.control = control;
        // client = {
        //   product: 'Glacier Series',
        //   amount: '',
        //   name: '',
        //   company: '',
        //   email: '',
        //   phone: '',
        //   city: '',
        //   state: '',
        //   other: '',
        // };
        this.tab = 1;
        this.client = {
            product_name: 'Glacier Series',
            product_num: 0,
            user_name: '',
            company_name: '',
            email: '',
            phone: '',
            city: '',
            country: '',
            remark: '',
        };
        this.url = 'http://192.168.1.13/homepage/backend/web/api/enquiry/set-enquiry';
        this.submit_num = -1;
    }
    DocumentComponent.prototype.change_tab = function (num) {
        this.tab = num;
    };
    DocumentComponent.prototype.post_form = function () {
        var data = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* URLSearchParams */]();
        for (var key in this.client) {
            this.client[key].length > 0 && data.append(key, this.client[key]);
        }
        // console.log(data);
        this.control.postData(this.url, data).then(function () {
            console.log('success!');
        });
    };
    DocumentComponent.prototype.submit = function () {
        var _this = this;
        if (this.tab == 1) {
            if (this.client.phone != '' && this.client.user_name != '' && this.client.city != '') {
                setTimeout(function () { _this.route.navigate(['/home']); }, 3000);
                this.submit_num = 1;
                this.post_form();
            }
            else {
                this.submit_num = 0;
            }
        }
        if (this.tab == 2) {
            if (this.client.phone != '' && this.client.user_name != '' && this.client.city != '') {
                this.post_form();
                this.route.navigate(['/download']);
            }
            else {
                this.submit_num = 0;
            }
        }
    };
    DocumentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/document/document.component.html"),
            styles: [__webpack_require__("../../../../../src/app/document/document.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__control_service__["a" /* ControlService */]])
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/download/download.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".download{\r\n  background:url(" + escape(__webpack_require__("../../../../../src/assets/img/document/bg.jpg")) + ") 0 0  no-repeat;\r\n  background-size:100%;\r\n  padding-bottom: 50px;\r\n}\r\n.download>.title{\r\n  margin-top:28px;\r\n  font-family: MicrosoftYaHei;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  line-height: 4.22;\r\n  text-align: center;\r\n  color: #ffffff;\r\n}\r\n.download>.title img{\r\n  vertical-align: middle;\r\n}\r\n.download .container{\r\n  background-color: #ffffff;\r\n}\r\n.download .container>.title{\r\n  background-color: #39a3f3;\r\n  color: #ffffff;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  padding: 12px 16px;\r\n}\r\n.download .container .td{\r\n  line-height:20px;\r\n  font-size: 16px;\r\n  padding: 12px 28px;\r\n}\r\n.download .container .td:nth-child(odd){\r\n  background-color: #ccc;\r\n}\r\n.download .container .td:hover{\r\n  background-color: #39a3f3;\r\n  color: #ffffff;\r\n}\r\n.tab-btn{\r\n  background:none;\r\n  color: white;\r\n\r\n  line-height: 3rem;\r\n  cursor: pointer;\r\n  font-size: 1.6rem;\r\n  border: 0;\r\n  padding: 0 1rem 0 1rem;\r\n  border-radius: 1.5rem;\r\n}\r\n.tab-btn:hover,.tab-btn:focus{\r\n  color: white !important;\r\n  background-color: #3fabf3;\r\n  outline: none;\r\n}\r\n.tab-active{\r\n  color: white !important;\r\n  background-color: #3fabf3;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/download/download.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"download\">\r\n  <table></table>\r\n  <!--<div class=\"title\">-->\r\n    <!--<div nz-row>-->\r\n      <!--<div nz-col [nzSpan]=\"8\" style=\"text-align: left;padding-left: 40px\">-->\r\n        <!--&lt;!&ndash;<img src=\"./assets/img/logo.png\" alt=\"thybot\">&ndash;&gt;-->\r\n      <!--</div>-->\r\n      <!--<div nz-col [nzSpan]=\"8\">-->\r\n        <!--<div nz-row >-->\r\n\r\n          <!--<div nz-col [nzSpan]=\"6\" [nzOffset]=\"6\" class=\"content\">-->\r\n            <!--<button class=\"tab-btn\" [class.tab-active]=\"tab == 1\" (click)=\"change_tab(1)\">询&nbsp;&nbsp;盘</button>-->\r\n          <!--</div>-->\r\n          <!--<div nz-col [nzSpan]=\"6\" class=\"content\">-->\r\n            <!--<button class=\"tab-btn\" [class.tab-active]=\"tab == 2\" (click)=\"change_tab(2)\">文档下载</button>-->\r\n          <!--</div>-->\r\n\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n      <!--<div nz-col [nzSpan]=\"8\">-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n  <div nz-row style=\"margin-top: 8rem\">\r\n\r\n    <div nz-col [nzXl] = \"{span: 6, offset: 5}\"  [nzLg] = \"{span: 7, offset: 4}\" [nzMd] = \"{span: 8, offset: 3}\" [nzSm] = \"{span: 9, offset: 2}\" [nzXs] = \"{span: 20, offset: 2}\" class=\"container\">\r\n      <div class=\"title\">\r\n        Hot today（4th, March 00:00~15:27）\r\n      </div>\r\n      <div class=\"td\" *ngFor=\"let d of day\">\r\n        <a [href]=\"d.fileurl\"><p>{{d.filename}}</p></a>\r\n      </div>\r\n    </div>\r\n\r\n    <div nz-col [nzXl] = \"{span: 6, offset: 2}\"  [nzLg] = \"{span: 7, offset: 2}\" [nzMd] = \"{span: 8, offset: 2}\" [nzSm] = \"{span: 9, offset: 2}\" [nzXs] = \"{span: 20, offset: 2}\" class=\"container\">\r\n      <div class=\"title\">\r\n        Hot this week（4th, March~ 10th , March）\r\n      </div>\r\n      <div class=\"td\" *ngFor=\"let w of week\">\r\n        <a [href]=\"w.fileurl\"><p>{{w.filename}}</p></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/download/download.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control_service__ = __webpack_require__("../../../../../src/app/control.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DownloadComponent = /** @class */ (function () {
    function DownloadComponent(control) {
        this.control = control;
        this.url_day = 'http://192.168.1.13/homepage/backend/web/api/hot-documents/day-sort';
        this.url_week = 'http://192.168.1.13/homepage/backend/web/api/hot-documents/week-sort';
        this.url_times = 'http://192.168.1.13/homepage/backend/web/api/hot-documents/click-download';
    }
    DownloadComponent.prototype.ngOnInit = function () {
        this.get_day();
        this.get_week();
    };
    DownloadComponent.prototype.get_day = function () {
        var _this = this;
        this.control.getData(this.url_day).then(function (data) {
            _this.day = data.data;
            console.log(_this.day);
        });
    };
    DownloadComponent.prototype.get_week = function () {
        var _this = this;
        this.control.getData(this.url_week).then(function (data) {
            _this.week = data.data;
            console.log(_this.week);
        });
    };
    DownloadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/download/download.component.html"),
            styles: [__webpack_require__("../../../../../src/app/download/download.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */]])
    ], DownloadComponent);
    return DownloadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#banner{\r\n  height: 92vh;\r\n  overflow: hidden;\r\n  text-align: center;\r\n\r\n}\r\n\r\n#animate,#hide-animate{\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 9999;\r\n}\r\n\r\nimg{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.point-btn{\r\n  width: 1rem;\r\n  height: 1rem;\r\n  background-color: lightskyblue;\r\n  margin-right: 3rem;\r\n  border-radius: 1rem;\r\n  display: inline-block;\r\n}\r\n\r\n.point-btn:hover{\r\n  background-color: dodgerblue;\r\n  cursor:pointer;\r\n}\r\n\r\n.point-active{\r\n  background-color: dodgerblue !important;\r\n}\r\n\r\n.swiper-slide {\r\n  text-align: center;\r\n  font-size: 18px;\r\n  background: #fff;\r\n\r\n  /* Center slide text vertically */\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  -ms-flex-pack: center;\r\n  justify-content: center;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"banner\" class=\"animated slideInRight\">\n  <!--<img [src]=\"banner_img\" >-->\n  <div class=\"swiper-container\" >\n    <div class=\"swiper-wrapper\">\n      <div class=\"swiper-slide\" >\n        <img src=\"./assets/img/home/s25.jpg\" style=\"height: 92vh\">\n      </div>\n      <div class=\"swiper-slide\">\n        <img src=\"./assets/img/home/banner2.jpg\" style=\"height: 92vh\">\n      </div>\n      <div class=\"swiper-slide\">\n        <img src=\"./assets/img/home/banner3.jpg\" style=\"height: 92vh\">\n      </div>\n    </div>\n  </div>\n</div>\n\n<div style=\"position: fixed;bottom: 2rem;left: 48%;z-index: 888\" *ngIf=\"swiper\">\n  <div (click)=\"change_swiper(0)\"  class=\"point-btn\"  [class.point-active]=\"swiper.activeIndex == 0\"></div>\n\n  <div (click)=\"change_swiper(1)\" class=\"point-btn\"  [class.point-active]=\"swiper.activeIndex == 1\"></div>\n\n  <div (click)=\"change_swiper(2)\" class=\"point-btn\"  [class.point-active]=\"swiper.activeIndex == 2\"></div>\n</div>\n\n\n<div id=\"animate\" *ngIf=\"play == 1\" style=\"height: 92%\">\n  <img [src]=\"animate_img\" >\n</div>\n\n<div id=\"hide-animate\" *ngIf=\"play == 2\" style=\"height: 92%\">\n  <img src=\"./assets/img/home/s25.jpg\" >\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.play = 1;
        this.img_path = ['./assets/img/home/s01.jpg',
            './assets/img/home/s02.jpg',
            './assets/img/home/s03.jpg',
            './assets/img/home/s04.jpg',
            './assets/img/home/s05.jpg',
            './assets/img/home/s06.jpg',
            './assets/img/home/s07.jpg',
            './assets/img/home/s08.jpg',
            './assets/img/home/s09.jpg',
            './assets/img/home/s10.jpg',
            './assets/img/home/s11.jpg',
            './assets/img/home/s12.jpg',
            './assets/img/home/s13.jpg',
            './assets/img/home/s14.jpg',
            './assets/img/home/s15.jpg',
            './assets/img/home/s16.jpg',
            './assets/img/home/s17.jpg',
            './assets/img/home/s18.jpg',
            './assets/img/home/s19.jpg',
            './assets/img/home/s20.jpg',
            './assets/img/home/s21.jpg',
            './assets/img/home/s22.jpg',
            './assets/img/home/s23.jpg',
            './assets/img/home/s24.jpg',
            './assets/img/home/s25.jpg',
        ];
        this.animate_img = this.img_path[0];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        if (this.play == 1) {
            this.play_animate();
        }
        else {
            this.set_swiper();
        }
    };
    HomeComponent.prototype.play_animate = function () {
        var _this = this;
        var a = 1;
        var animate = setInterval(function () {
            if (a > 25) {
                _this.play = 2;
                setTimeout(function () {
                    _this.play = 3;
                    setTimeout(function () {
                        _this.set_swiper();
                    }, 500);
                }, 1000);
                clearInterval(animate);
            }
            else {
                _this.animate_img = _this.img_path[a];
                a = a + 1;
            }
        }, 100);
    };
    HomeComponent.prototype.set_swiper = function () {
        this.swiper = new Swiper('.swiper-container', {
            autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            effect: 'fade',
        });
    };
    HomeComponent.prototype.change_swiper = function (index) {
        this.swiper.slideTo(index, 1000, false);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.line{\r\n  border-top:1px solid  #c9c9c9;\r\n  width: 100px;\r\n  display: inline-block;\r\n  margin: 0 1rem 0.6rem 1rem;\r\n}\r\n\r\n\r\n.title-2{\r\n  font-size: 2.4rem;\r\n  color: #3fabf3;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.title-4{\r\n  font-size: 1.4rem;\r\n  font-family: Helvetica, monospace;\r\n  color: #919191;\r\n}\r\n\r\n\r\n.product-title{\r\n  font-weight: bold;\r\n  font-size: 1.8rem;\r\n}\r\n\r\n\r\n/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~label~~~~~~~~~~~~~~~~~~~~~~~~~~*/\r\n\r\n\r\n.label-div{\r\n  border: solid 1px #3fabf3;\r\n  padding: 0.5rem;\r\n  border-radius: 4px;\r\n  margin: 1.5rem 1rem 1.5rem 1rem;\r\n  display: inline-block;\r\n\r\n}\r\n\r\n\r\n.label-title{\r\n  color: white;\r\n  font-size: 1.8rem;\r\n  -webkit-writing-mode: vertical-rl;\r\n      -ms-writing-mode: tb-rl;\r\n          writing-mode: vertical-rl;\r\n}\r\n\r\n\r\n.label-title-div{\r\n  height:186px;\r\n  display: inline-block;\r\n  background-color: #3fabf3;\r\n  text-align:center;\r\n  padding-top: 1.5rem;\r\n  letter-spacing: 0.5rem;\r\n\r\n\r\n}\r\n\r\n\r\n.label-title-short{\r\n  color: white;\r\n  font-size: 1.8rem;\r\n  -webkit-writing-mode: vertical-rl;\r\n      -ms-writing-mode: tb-rl;\r\n          writing-mode: vertical-rl;\r\n}\r\n\r\n\r\n.label-title-div-short{\r\n  height: 10rem;\r\n  display: inline-block;\r\n  background-color: #3fabf3;\r\n  text-align:center;\r\n  letter-spacing: 0.3rem;\r\n  padding-top: 0.5rem;\r\n}\r\n\r\n\r\n.icon{\r\n  font-size: 3.2rem;\r\n  margin-left: 0.5rem;\r\n  color: #3fabf3;\r\n  line-height: 60px;\r\n}\r\n\r\n\r\n.label-name{\r\n  line-height: 60px;\r\n  font-size: 1.8rem;\r\n  color: #3fabf3;\r\n  vertical-align: top;\r\n  padding-left: 0.5rem;\r\n}\r\n\r\n\r\n.label-name-more{\r\n  line-height: 60px;\r\n  font-size: 1.4rem;\r\n  color: #3fabf3;\r\n  vertical-align: top;\r\n}\r\n\r\n\r\n/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~table~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\r\n\r\n\r\n.table-row{\r\n  height: 48px;\r\n}\r\n\r\n\r\n.table-title{\r\n  text-align: left;\r\n  padding-left: 2rem;\r\n\r\n  width: 30%;\r\n  color: #242424;\r\n  font-weight: bold;\r\n  font-size: 1.2rem;\r\n  border: solid 1px #d6d7dc;\r\n}\r\n\r\n\r\n.table-desc{\r\n  text-align: center;\r\n  width: 70%;\r\n  color: #777777;\r\n  font-size: 1.2rem;\r\n  border: solid 1px #d6d7dc;\r\n}\r\n\r\n\r\n/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~product show~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\r\n\r\n\r\n.show-img{\r\n  height: 16rem;\r\n  vertical-align: bottom;\r\n}\r\n\r\n\r\n.bg_1{\r\n  text-align: center;\r\n  padding: 1rem 0 1rem 0;\r\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAgMAAAAEE2bmAAAACVBMVEX4+Pj+/v78/Pzbq57wAAAHPUlEQVR42uyZza7UMAxGq65QngLNCvI+qcTsQdCnqFiyHxazqpCKUj8lMNP4EDvSlGH4J5t7r6/8JXHsk6ju5s4N8bZepobNWsbspBYVw+29Ewsfz1YsjbOVSsk6ykltyKc0iNFKx0osfnb7bKscJX0ZYyW1XmzZaKVh5s/n6TqGCdsXNzNBv6RkJwjdFwPxkZdpGzKxwaIvKqW2o6iUXLQ0ZnFJOs4TUkVs1Fhh27b5ZE3dJj+XWDHGqcSKIRorRi6bvmhtMYv6b+KzOhuxSsQsfFmFCsgclyK7qk2WTeJt+ae8LZse351KzMJl9WzsTXGb2dha3Cbd2PCRwwnF5Xz5sSUnY8zVOSU956CR45xjFQJzUumYzUlxyoiRMmHFNFwcI3/PnR5xsil6WLytxIy03cSqchJSg8LxtlAmkDq3YQYxo/TZJjWhMRsuNsSQQszgJwhSiBUpCpgSJ2bYiBklTszG2hI/3KKpt1HWDx/5bt4HZzt63p84O4DsJggrh+B5D6RHy/u0l/e5kiJpLe8nz3txvM+e7cOMW4P3oc37SkyouBkpihwpilxjY3h/MiQwkBbLe2IW4H1GipUhxR3geS9lpV3BZcZNlLDQVE6O94M43qs8Ydff3i0a9iWhukn0+l/ZuBoK05fiBs/OJ05LLxTdGqu+/uSCrc7K8J6bsg75obJBs8Q1wYWimAOO2MwdcCTXTYo2eM8lS4r26L8mr3CjmHBjAvKsniCr40Ks4IXGChuxosQoHeIj/oUIx7kDsHEHHKXmA7FiS2yaLY0Oip73uLGyls2b+m2D0z6UP91jk8bMucH7eQfv2SoRSdlFxEczFJIwQDQn5W/w6oHMC8fxfsgug8wEK5VqwD1OhvepxXtsoAUxeI9Y3BiNm45MrKhWbK5aY+q2LREr4EOsoAixMvdCXGreFzdsSDEBUogZ3uMm+jhXt4E7gNez8Mq+gIZJZNF54mJVReHILSIaEsf7IwyDXcowAvBGz4bL7ToP58shc1CgD2BWOeN4TyxBX/S850KBV73YNzlilGtckQKORgox6q7Fe3G8Jz7Z857aD0tdEEwgNTCJFWVHfVH2bEZjNoh7gLJBKGLfg2Kl2jYR8aC09Iz72b6f9/cP8bM0eB8avI/Oljg8jlQavM9WqsH7dDRuvDO4Jr6M2vF5IzvM86C3vKcsXs1Vvjje912djz28R8rznjp/hZjs4z0TkP52AlFGN0gz4sYEGismmEoldQpOHozAwLF9zCVWjPN8RQi8F9gu3AGxwfvoeD9f0cZixkV5pYsB6KiqQi48g/fEmzAROJ61BI7Q1QHg8GA7eYAbE4A+OwFJxRmAaJMJi8+E6Hgvju2IgT7ERjKZa3WuUxs3Y2MVrgyFlZLwpD+fkMwTsY/EChvJTiE60iwN0pxYATYDrtDmvSdgg5RiqRg6P2LD9qxhm/lhRtip4BbodxYk37ezNu/HXbx3Nj1O3GAvbi5j2t/cufvhFQVAulMAvJ+OucV7pChMpHBEyqa7dFwnBg9a5Td4n+/hPRO0vrnD+yQzaAAaigFsbJCVbdeqPv9avBfYLos6ysnxvr/yvleLusEzdcucCgo607DxHjHQhxjosxGQufnN3bLd3QHzft534k+9Xz3byRhqJVje9+Kz8bA6GzEbZ5/JMvHit1UShFhxoRAr980d3vsX3AHeV3eA/SQA76l7CMIEuBEz3Nq858V7y/au+QpG6kFjZ4+129djdY5x8Y7yXrzUOfseq+c9YjDM2sTzvt1jHe/usU4P7LGeJ2L1rT3W7Hg/EyvE2LQV+7E91nCrx9rd3WMV12Md3zZ6rMH3WPPB9FjHRo/13Oixjr7H+kJ++x7r17ynk2PZ3uZ9/Ed7rP1KrLDt572xeJo+adD08Df3WHGkx9rt6bHOd/ZYX1SOQtLi9qt6rPN39Fi7e3us054ea90p5BNS/1v2WOWBPVb5iT3W8Nv2WMP/Husf1WNtjj+nxyrf0WOd9vRYb/VTA7x/WI/1+GN7rELZ8Nj8nh4rbmwp7Oyxxr+hx9pH32Pt/tUe66f27R0HYRgIwrDlCvkYlHuknIBjuKanT+n4lIjKEjsCx4pf8rSWkKim2C+/O7n3IT3dVjVWBy4j6Obeylg9+Mt625G75t3cQ6Gx4pv718+0sR6djDW93cHN3b3ARXNGYw3AWHdgrF4Zqwc3d7D3QRvrRmM1zzWMVcDNPWpjNfFCY7WLG2vW3pd/UyPjGKvRxhqAse5q7/0vY3Vg70Ubqyk01qj33jY0VlNqrD7XWEUZazAnjTXd3JWxbkcNY7Vo24GxCtj72NxY3bDG6sDeCzDWOISxSj9jlR7GGv/tvcC9/7zNZKyPisaavqqUcmO1RcaK976esYo2Vnas7FjZsY5prOxY2bGyY2XHSmNlx8qOlR3rQMbKjpUdKztWdqzsWNmxsmNlxzq/sbJjZcfKjpUdKztWdqzNOtY3VcL+SCqM1uoAAAAASUVORK5CYII=\");\r\n}\r\n\r\n\r\n.bg_g{\r\n  text-align: center;\r\n  background-color: #f8f8f8;\r\n  padding: 1rem 0 1rem 0;\r\n}\r\n\r\n\r\n.bg_w{\r\n  text-align: center;\r\n  padding: 1rem 0 1rem 0;\r\n}\r\n\r\n\r\n.bg_2{\r\n  text-align: center;\r\n  padding: 1rem 0 1rem 0;\r\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAABlBMVEX9/f329vZvsvfuAAAAc0lEQVRo3u3TsRGAQAwDQfqvlg6gBYZof3QbX2b5er64rwi+HavsX9YvnEReyE4WgbyQnSwCeSE7WQTyQnayCOSF7GQRyAvZySKQF7KTRSAvZCeLQF7IThaBvJCdLAJ5ITtZBPJCdrII5IXsZBHICzk/ewFssiY9NtAH4QAAAABJRU5ErkJggg==\");\r\n}\r\n\r\n\r\n.bg_b{\r\n  text-align: center;\r\n  padding: 1rem 0 1rem 0;\r\n  background-color: #3fabf3;\r\n}\r\n\r\n\r\n.hide-div{\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(0,0,0,0.4);\r\n  z-index: 1201;\r\n  display: none;\r\n}\r\n\r\n\r\n.product-name{\r\n  color: white;\r\n  font-size: 1.6rem;\r\n  padding: 1rem;\r\n  border: solid 2px white;\r\n  text-align: center;\r\n  margin-top: 7rem;\r\n  display: inline-block;\r\n}\r\n\r\n\r\n.show-div{\r\n\r\n  display: block !important;\r\n\r\n}\r\n\r\n\r\n.flex-div{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align:  center;\r\n      -ms-flex-align:  center;\r\n          align-items:  center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src=\"./assets/img/product/banner.jpg\" style=\"width: 100%\">\n</div>\n<div style=\" text-align: center;margin-top: 36px;\" id=\"archor1\" >\n  <h2 class=\"title-2\">\n    <span class=\"line\"></span>\n    The Machine Features\n    <span class=\"line\"></span></h2>\n  <!--<h4 class=\"title-4\">MACHINE&nbsp;FEATURES</h4>-->\n</div>\n\n<div style=\"text-align: center;margin-top: 60px\">\n  <img src=\"./assets/img/product/product0.jpg\" style=\"width: 72%;\">\n</div>\n\n<div class=\"row-div\" style=\" text-align: center;background-color: #f6f6f6\" >\n  <h2 class=\"title-2\">\n    <span class=\"line\"></span>\n    All Kinds Of Industry\n    <span class=\"line\"></span></h2>\n</div>\n\n<div style=\"text-align: center;background-color: #f6f6f6;padding-bottom: 4rem\">\n  <img src=\"./assets/img/product/industry.jpg\" style=\"width: 90%;\">\n</div>\n\n\n<div style=\" text-align: center;margin-top: 60px;\" >\n  <h2 class=\"title-2\">\n    <span class=\"line\"></span>\n    2018 Hot Sale Model\n    <span class=\"line\"></span>\n  </h2>\n</div>\n\n\n<div class=\"row-div\" id=\"archor2\">\n  <h2 class=\"product-title\" >NO1: Thybot movable automated retail store-Multi functional integrated machine</h2>\n  <div class=\"flex-div\"  style=\"margin-top: 2rem\">\n    <div style=\"flex: 2\"></div>\n    <div style=\"flex: 2\">\n      <img src=\"./assets/img/product/product1.jpg\" style=\"width: 80%\" >\n    </div>\n\n    <div style=\"flex: 5;background-color: #f8f8f8;\">\n      <h2 class=\"title-2\">Applicable products</h2>\n      <div class=\"flex-div\" style=\"text-align: left\">\n        <div class=\"label-div\" style=\"flex:1\">\n          <i class=\"icon font_family icon-vegetables\"></i>\n          <span class=\"label-name\">vegetable</span>\n        </div>\n        <div class=\"label-div\" style=\"flex:1\">\n          <i class=\"icon font_family icon-drug\"></i>\n          <span class=\"label-name\">medicine</span>\n        </div>\n        <div class=\"label-div\" style=\"flex:1\">\n          <i class=\"icon font_family icon-fruit\"></i>\n          <span class=\"label-name\">fruit</span>\n        </div>\n      </div>\n\n      <div class=\"flex-div\" style=\"text-align: left\">\n        <div class=\"label-div\" style=\"flex:1\">\n          <i class=\"icon font_family icon-drink\"></i>\n          <span class=\"label-name\">beverage</span>\n        </div>\n        <div class=\"label-div\" style=\"flex:1\">\n          <i class=\"icon font_family icon-meat\"></i>\n          <span class=\"label-name\">meat</span>\n        </div>\n        <div class=\"label-div\" style=\"flex:1\">\n          <i class=\"icon font_family icon-snacks\"></i>\n          <span class=\"label-name\">snack</span>\n        </div>\n      </div>\n\n      <div class=\"flex-div\" style=\"text-align: left\">\n        <div class=\"label-div\" style=\"flex:1\">\n          <i class=\"icon font_family icon-fresh\"></i>\n          <span class=\"label-name\">fresh food</span>\n        </div>\n        <div class=\"label-div\" style=\"flex:1\">\n          <i class=\"icon font_family icon-daily_use\"></i>\n          <span class=\"label-name-more\">daily supplies</span>\n        </div>\n        <div style=\"flex: 1\"></div>\n      </div>\n    </div>\n    <div style=\"flex: 2\"></div>\n  </div>\n\n</div>\n\n\n\n<div nz-row class=\"row-div\" >\n\n\n  <div nz-col [nzXl] = \"{span: 10, offset: 2}\"  [nzLg] = \"{span: 10, offset: 2}\" [nzMd] = \"{span: 11, offset: 1}\" [nzSm] = \"{span: 20, offset: 2}\" [nzXs] = \"{span: 22, offset: 1}\">\n    <table style=\"width: 100%\">\n      <tr class=\"table-row\" >\n        <td nz-td class=\"table-title\">fruit</td>\n        <td class=\"table-desc\">1120mm*800mm*2000mm</td>\n      </tr>\n      <tr class=\"table-row\"  >\n        <td class=\"table-title\">Auxiliary machine capacity</td>\n        <td class=\"table-desc\">6 layers, 11 shelves/ layers (adjustable)</td>\n      </tr>\n      <tr class=\"table-row\"  >\n        <td class=\"table-title\">Overall weight</td>\n        <td class=\"table-desc\">400Kg</td>\n      </tr>\n      <tr class=\"table-row\"  >\n        <td class=\"table-title\">Overall weight</td>\n        <td class=\"table-desc\">800W (refrigeration): 260W (standby)</td>\n      </tr>\n      <tr class=\"table-row\"  >\n        <td class=\"table-title\">Refrigerant</td>\n        <td class=\"table-desc\">R134a</td>\n      </tr>\n      <tr class=\"table-row\"  >\n        <td class=\"table-title\">Refrigerating method</td>\n        <td class=\"table-desc\">Air cooling</td>\n      </tr>\n    </table>\n  </div>\n\n\n  <div nz-col [nzXl] = \"{span: 10, offset : 0}\"  [nzLg] = \"{span: 10, offset : 0}\" [nzMd] = \"{span: 11, offset : 0}\" [nzSm] = \"{span: 20, offset: 2}\" [nzXs] = \"{span: 22, offset: 1}\">\n    <table style=\"width: 100%\">\n      <tr class=\"table-row\"  >\n        <td class=\"table-title\">Storage temp</td>\n        <td class=\"table-desc\">2-20℃(adjustable)</td>\n      </tr>\n      <tr class=\"table-row\"  >\n        <td class=\"table-title\">Anomaly detection function</td>\n        <td class=\"table-desc\">Door sensors detection</td>\n      </tr>\n      <tr class=\"table-row\"  >\n        <td class=\"table-title\">Network</td>\n        <td class=\"table-desc\">3G/4G, Gigabit Ethernet, Wifi (optional)</td>\n      </tr>\n      <tr class=\"table-row\"  >\n        <td class=\"table-title\">Payment system</td>\n        <td class=\"table-desc\">WeChat, Alipay</td>\n      </tr>\n      <tr class=\"table-row\"  >\n        <td class=\"table-title\">Display screen</td>\n        <td class=\"table-desc\">32 inch  LCD touch screen</td>\n      </tr>\n      <tr class=\"table-row\"  >\n        <td class=\"table-title\">Goods delivery method</td>\n        <td class=\"table-desc\">Conveyor belt safety delivering\n          + Intelligent lifting system</td>\n      </tr>\n\n    </table>\n  </div>\n</div>\n\n\n\n\n<div class=\"row-div\" id=\"archor3\">\n  <h2 class=\"product-title\" >NO2: Thybot movable automated retail store——Auto stock in –stock out Series</h2>\n  <div class=\"flex-div\"  style=\"margin-top: 2rem\">\n    <div style=\"flex: 2\"></div>\n    <div style=\"flex: 2\">\n      <img src=\"./assets/img/product/product2.jpg\" style=\"width: 80%\" >\n    </div>\n\n    <div style=\"flex: 5;background-color: #f8f8f8;\">\n      <h2 class=\"title-2\">Applicable products</h2>\n\n      <div class=\"flex-div\" style=\"text-align: left\">\n        <div class=\"label-div\" style=\"flex:1\">\n          <i class=\"icon font_family icon-smallphone\"></i>\n          <span class=\"label-name\">mobile phone</span>\n        </div>\n        <div class=\"label-div\" style=\"flex:1\">\n          <i class=\"icon font_family icon-electronics\"></i>\n          <span class=\"label-name\">electronic product</span>\n        </div>\n      </div>\n\n      <div class=\"flex-div\" style=\"text-align: left\">\n        <div class=\"label-div\" style=\"flex:1\">\n          <i class=\"icon font_family icon-ipad\"></i>\n          <span class=\"label-name\">ipad</span>\n        </div>\n        <div class=\"label-div\" style=\"flex:1\">\n          <i class=\"icon font_family icon-precious_gift\"></i>\n          <span class=\"label-name\">Luxury gifts</span>\n        </div>\n        <div class=\"label-div\" style=\"flex:1\">\n          <i class=\"icon font_family icon-jewelry\"></i>\n          <span class=\"label-name\">jewelry</span>\n        </div>\n      </div>\n    </div>\n    <div style=\"flex: 2\"></div>\n  </div>\n\n</div>\n\n\n\n\n\n\n\n\n    <div nz-row class=\"row-div\">\n      <div  nz-col [nzXl] = \"{span: 10, offset: 2}\"  [nzLg] = \"{span: 10, offset: 2}\" [nzMd] = \"{span: 11, offset: 1}\" [nzSm] = \"{span: 20, offset: 2}\" [nzXs] = \"{span: 22, offset: 1}\">\n        <table style=\"width: 100%\">\n          <tr class=\"table-row\" >\n            <td nz-td class=\"table-title\">Overall dimension</td>\n            <td class=\"table-desc\">1200mm*900mm*2000mm</td>\n          </tr>\n          <tr class=\"table-row\"  style=\"height: 96px\" >\n            <td class=\"table-title\">Auxiliary machine capacity</td>\n            <td class=\"table-desc\">Total106, big size lanes 73,\n              small size lanes 33 (customized lane size)</td>\n          </tr>\n          <tr class=\"table-row\"  >\n            <td class=\"table-title\">Shelf structure</td>\n            <td class=\"table-desc\">Front and back shelves warehousing system</td>\n          </tr>\n          <tr class=\"table-row\"  >\n            <td class=\"table-title\">The max size of goods</td>\n            <td class=\"table-desc\">200mm×200mm×80mm</td>\n          </tr>\n          <tr class=\"table-row\"  >\n            <td class=\"table-title\">The min size of goods</td>\n            <td class=\"table-desc\">120mm×200mm×80mm</td>\n          </tr>\n          <tr class=\"table-row\"  >\n            <td class=\"table-title\">Overall weight</td>\n            <td class=\"table-desc\">500Kg</td>\n          </tr>\n          <tr class=\"table-row\"  >\n            <td class=\"table-title\">Rated power</td>\n            <td class=\"table-desc\">350W</td>\n          </tr>\n          <tr class=\"table-row\"  >\n            <td class=\"table-title\">Network</td>\n            <td class=\"table-desc\">3G/4G, Gigabit Ethernet, Wifi (optional)</td>\n          </tr>\n        </table>\n      </div>\n      <div nz-col [nzXl] = \"{span: 10, offset : 0}\"  [nzLg] = \"{span: 10, offset : 0}\" [nzMd] = \"{span: 11, offset : 0}\" [nzSm] = \"{span: 20, offset: 2}\" [nzXs] = \"{span: 22, offset: 1}\">\n        <table style=\"width: 100%\">\n          <tr class=\"table-row\"  >\n            <td class=\"table-title\">Payment system</td>\n            <td class=\"table-desc\">Alipay, WeChat pay, Bank card (optional)</td>\n          </tr>\n          <tr class=\"table-row\"  style=\"height: 96px\">\n            <td class=\"table-title\">Anomaly detection function</td>\n            <td class=\"table-desc\">Multiple sensors detection, GPS positioning</td>\n          </tr>\n          <tr class=\"table-row\"  >\n            <td class=\"table-title\">Display screen</td>\n            <td class=\"table-desc\">43 inches of infrared touch screen</td>\n          </tr>\n          <tr class=\"table-row\"  >\n            <td class=\"table-title\">Goods delivery method</td>\n            <td class=\"table-desc\">Auto stock in-stock out</td>\n          </tr>\n          <tr class=\"table-row\"  >\n            <td class=\"table-title\">Pick up port</td>\n            <td class=\"table-desc\">Automated door\n              with the anti-pinch function</td>\n          </tr>\n          <tr class=\"table-row\"  >\n            <td class=\"table-title\">The security doors</td>\n            <td class=\"table-desc\">Automated door</td>\n          </tr>\n          <tr class=\"table-row\"  >\n            <td class=\"table-title\">Monitoring function</td>\n            <td class=\"table-desc\">Internal and external camera</td>\n          </tr>\n          <tr class=\"table-row\"  >\n            <td class=\"table-title\">Additional options</td>\n            <td class=\"table-desc\">UPS system, QR code scan loading</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n\n\n\n\n<div class=\"row-div\" style=\" text-align: center;\" >\n  <h2 class=\"title-2\">\n    <span class=\"line\"></span>\n    Product Display\n    <span class=\"line\"></span></h2>\n</div>\n\n\n<div nz-row>\n  <div nz-col [nzXl] = \"{span: 5, offset: 2}\"  [nzLg] = \"{span: 5, offset: 2}\" [nzMd] = \"{span: 5, offset: 2}\" [nzSm] = \"{span: 6}\" [nzXs] = \"{span: 6}\" class=\"bg_g\"  (mouseover)=\"show_name(0)\" (mouseout)=\"hide_name(0)\">\n    <div class=\"hide-div\" [class.show-div]=\"is_show[0]\">\n      <span class=\"product-name\">Glacier Series</span>\n    </div>\n    <img src=\"./assets/img/product/show1.png\" class=\"show-img\">\n  </div>\n  <div nz-col [nzXl] = \"{span: 5}\"  [nzLg] = \"{span: 5}\" [nzMd] = \"{span: 5}\" [nzSm] = \"{span: 6}\" [nzXs] = \"{span: 6}\" class=\"bg_b\"   (mouseover)=\"show_name(1)\" (mouseout)=\"hide_name(1)\">\n    <div class=\"hide-div\" [class.show-div]=\"is_show[1]\">\n      <span class=\"product-name\">G2S PLUS</span>\n    </div>\n    <img src=\"./assets/img/product/show2.png\" class=\"show-img\">\n  </div>\n  <div nz-col [nzXl] = \"{span: 5}\"  [nzLg] = \"{span: 5}\" [nzMd] = \"{span: 5}\" [nzSm] = \"{span: 6}\" [nzXs] = \"{span: 6}\" class=\"bg_g\" (mouseover)=\"show_name(2)\" (mouseout)=\"hide_name(2)\">\n    <div class=\"hide-div\" [class.show-div]=\"is_show[2]\">\n      <span class=\"product-name\">Multi functional<br>\nIntegrated Machine</span>\n    </div>\n    <img src=\"./assets/img/product/show3.png\" class=\"show-img\">\n  </div>\n  <div nz-col [nzXl] = \"{span: 5}\"  [nzLg] = \"{span: 5}\" [nzMd] = \"{span: 5}\" [nzSm] = \"{span: 6}\" [nzXs] = \"{span: 6}\"  class=\"bg_1\" (mouseover)=\"show_name(3)\" (mouseout)=\"hide_name(3)\">\n    <div class=\"hide-div\" [class.show-div]=\"is_show[3]\">\n      <span class=\"product-name\">Cooked Food Series</span>\n    </div>\n    <img src=\"./assets/img/product/show4.png\" class=\"show-img\">\n  </div>\n</div>\n\n<div nz-row>\n  <div nz-col  [nzXl] = \"{span: 5, offset: 2}\"  [nzLg] = \"{span: 5, offset: 2}\" [nzMd] = \"{span: 5, offset: 2}\" [nzSm] = \"{span: 6}\" [nzXs] = \"{span: 6}\" class=\"bg_g\" (mouseover)=\"show_name(4)\" (mouseout)=\"hide_name(4)\">\n    <div class=\"hide-div\" [class.show-div]=\"is_show[4]\">\n      <span class=\"product-name\">G2S</span>\n    </div>\n    <img src=\"./assets/img/product/show5.png\" class=\"show-img\">\n  </div>\n  <div nz-col [nzXl] = \"{span: 5}\"  [nzLg] = \"{span: 5}\" [nzMd] = \"{span: 5}\" [nzSm] = \"{span: 6}\" [nzXs] = \"{span: 6}\" class=\"bg_g\" (mouseover)=\"show_name(5)\" (mouseout)=\"hide_name(5)\">\n    <div class=\"hide-div\" [class.show-div]=\"is_show[5]\">\n      <span class=\"product-name\">Glacier Series</span>\n    </div>\n    <img src=\"./assets/img/product/show6.png\" class=\"show-img\">\n  </div>\n  <div nz-col [nzXl] = \"{span: 5}\"  [nzLg] = \"{span: 5}\" [nzMd] = \"{span: 5}\" [nzSm] = \"{span: 6}\" [nzXs] = \"{span: 6}\" class=\"bg_w\" (mouseover)=\"show_name(6)\" (mouseout)=\"hide_name(6)\">\n    <div class=\"hide-div\" [class.show-div]=\"is_show[6]\">\n      <span class=\"product-name\">Prosperous Series</span>\n    </div>\n    <img src=\"./assets/img/product/show7.png\" class=\"show-img\">\n  </div>\n  <div nz-col [nzXl] = \"{span: 5}\"  [nzLg] = \"{span: 5}\" [nzMd] = \"{span: 5}\" [nzSm] = \"{span: 6}\" [nzXs] = \"{span: 6}\"  class=\"bg_b\" (mouseover)=\"show_name(7)\" (mouseout)=\"hide_name(7)\">\n    <div class=\"hide-div\" [class.show-div]=\"is_show[7]\">\n      <span class=\"product-name\">Auto\nStock In –Stock Out Series</span>\n    </div>\n    <img src=\"./assets/img/product/show8.png\" class=\"show-img\">\n  </div>\n</div>\n\n<div nz-row  style=\"padding-bottom: 8rem\">\n  <div nz-col  [nzXl] = \"{span: 5, offset: 2}\"  [nzLg] = \"{span: 5, offset: 2}\" [nzMd] = \"{span: 5, offset: 2}\" [nzSm] = \"{span: 6}\" [nzXs] = \"{span: 6}\" class=\"bg_w\" (mouseover)=\"show_name(8)\" (mouseout)=\"hide_name(8)\">\n    <div class=\"hide-div\" [class.show-div]=\"is_show[8]\">\n      <span class=\"product-name\">Multi functional<br>\nIntegrated Machine</span>\n    </div>\n    <img src=\"./assets/img/product/show9.png\"  class=\"show-img\">\n  </div>\n  <div nz-col [nzXl] = \"{span: 5}\"  [nzLg] = \"{span: 5}\" [nzMd] = \"{span: 5}\" [nzSm] = \"{span: 6}\" [nzXs] = \"{span: 6}\" class=\"bg_2\" (mouseover)=\"show_name(9)\"  (mouseout)=\"hide_name(9)\">\n    <div class=\"hide-div\" [class.show-div]=\"is_show[9]\">\n      <span class=\"product-name\">Prosperous Series</span>\n    </div>\n    <img src=\"./assets/img/product/show10.png\"  class=\"show-img\">\n  </div>\n  <div nz-col [nzXl] = \"{span: 5}\"  [nzLg] = \"{span: 5}\" [nzMd] = \"{span: 5}\" [nzSm] = \"{span: 6}\" [nzXs] = \"{span: 6}\" class=\"bg_g\" (mouseover)=\"show_name(10)\"  (mouseout)=\"hide_name(10)\">\n    <div class=\"hide-div\" [class.show-div]=\"is_show[10]\">\n      <span class=\"product-name\">Exquisite Series</span>\n    </div>\n    <img src=\"./assets/img/product/show11.png\"  class=\"show-img\">\n  </div>\n  <div nz-col [nzXl] = \"{span: 5}\"  [nzLg] = \"{span: 5}\" [nzMd] = \"{span: 5}\" [nzSm] = \"{span: 6}\" [nzXs] = \"{span: 6}\"  class=\"bg_w\" (mouseover)=\"show_name(11)\" (mouseout)=\"hide_name(11)\">\n    <div class=\"hide-div\" [class.show-div]=\"is_show[11]\">\n      <span class=\"product-name\">Classic Series</span>\n    </div>\n    <img src=\"./assets/img/product/show12.png\"  class=\"show-img\">\n  </div>\n</div>\n\n\n<app-bottom></app-bottom>\n\n"

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control_service__ = __webpack_require__("../../../../../src/app/control.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent(control) {
        this.control = control;
        this.is_show = [false, false, false,
            false, false, false,
            false, false, false,
            false, false, false];
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.ngAfterViewInit = function () {
        $('.bg_w').height($('.bg_1').width);
        $('.bg_1').height($('.bg_1').width);
        $('.bg_g').height($('.bg_1').width);
        $('.bg_2').height($('.bg_1').width);
        if (this.control.route_control == 1) {
            $('html, body').animate({
                scrollTop: $('#archor1').offset().top - 100
            }, 0);
            this.control.route_control = 0;
        }
        if (this.control.route_control == 2) {
            $('html, body').animate({
                scrollTop: $('#archor2').offset().top - 100
            }, 0);
            this.control.route_control = 0;
        }
        if (this.control.route_control == 3) {
            $('html, body').animate({
                scrollTop: $('#archor3').offset().top - 100
            }, 0);
            this.control.route_control = 0;
        }
    };
    ProductComponent.prototype.show_name = function (index) {
        this.is_show[index] = true;
    };
    ProductComponent.prototype.hide_name = function (index) {
        this.is_show[index] = false;
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/serve/serve.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.line{\r\n  border-top:1px solid  #c9c9c9;\r\n  width: 100px;\r\n  display: inline-block;\r\n  margin: 0 1rem 0.6rem 1rem;\r\n}\r\n\r\n\r\n.title-2{\r\n  font-size: 2.4rem;\r\n  color: #3fabf3;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.title-4{\r\n  font-size: 1.4rem;\r\n  font-family: Helvetica, monospace;\r\n  color: #919191;\r\n}\r\n\r\n\r\n.order-title{\r\n  line-height: 3rem;\r\n  font-size: 1.8rem;\r\n  padding: 2rem 0 2rem 0;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.icon{\r\n  font-size: 6rem;\r\n}\r\n\r\n\r\n.module-desc{\r\n  font-size: 1.2rem;\r\n  line-height: 1.5rem;\r\n}\r\n\r\n\r\n.mode-div{\r\n  width: 60%;\r\n  margin: 40px auto 0 auto;\r\n  background-color: #68bc9e;\r\n  color: white;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n}\r\n\r\n\r\n.after-service-div{\r\n  background-color: #f6f6f6;padding: 2rem;\r\n}\r\n\r\n\r\n.after-service-desc{\r\n  font-size: 1.1rem;\r\n  line-height: 2.4rem;\r\n}\r\n\r\n\r\nimg{\r\n  width: 100%;\r\n}\r\n\r\n\r\n.fixed-height1{\r\n  height: 22rem;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n.color-img{\r\n  min-height: 22rem;\r\n  width: 100%;\r\n  -webkit-transition: width 1s;\r\n  transition: width 1s;\r\n}\r\n\r\n\r\n.color-img:hover{\r\n  width: 105%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/serve/serve.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\n  <img src=\"./assets/img/serve/banner.png\" style=\"width: 100%\">\n</div>\n<div style=\" text-align: center;margin-top: 60px;\" id=\"archor7\">\n  <h2 class=\"title-2\">\n    <span class=\"line\"></span>\n    Professional Customization\n    <span class=\"line\"></span></h2>\n</div>\n\n<div nz-row class=\"row-div\">\n  <div nz-col [nzSpan]=\"3\" [nzOffset]=\"3\" style=\"text-align: center\">\n    <img src=\"./assets/img/serve/order0.png\" style=\"width: 94%\">\n  </div>\n  <div nz-col [nzSpan]=\"12\" style=\"text-align: center\">\n    <p class=\"order-title\" style=\"background-color: #f6f6f6\">Exquisite appearance design+ Customized user interface</p>\n    <img src=\"./assets/img/serve/order2.jpg\" style=\"width: 26%;margin-right: 8%\">\n    <img src=\"./assets/img/serve/order3.jpg\" style=\"width: 26%;margin-left: 8%\">\n  </div>\n  <div nz-col [nzSpan]=\"3\"  style=\"text-align: center\">\n    <img src=\"./assets/img/serve/order4.jpg\" >\n  </div>\n</div>\n\n<div  style=\"text-align: center;padding:60px 0 30px 0; background-color: #f6f6f6\" >\n  <h2 class=\"title-2\">\n    <span class=\"line\"></span>\n    Software System Customization\n    <span class=\"line\"></span></h2>\n  <!--<h4 class=\"title-4\">SYSTEM&nbsp;CUSTOMIZATION</h4>-->\n</div>\n\n<div nz-row class=\"row-div\" style=\"background-color: #f6f6f6\">\n  <div nz-col [nzSpan]=\"9\" [nzOffset]=\"2\">\n    <img src=\"./assets/img/serve/order5.jpg\" style=\"width: 100%\">\n  </div>\n  <div nz-col [nzSpan]=\"9\" [nzOffset]=\"2\">\n    <img src=\"./assets/img/serve/order6.jpg\" style=\"width: 100%;margin-top: 20%\">\n  </div>\n</div>\n\n<div  style=\"text-align: center;padding-top: 60px;background-color: #3fabf3\">\n  <h2 class=\"title-2\" style=\"color:white;\">\n    <span class=\"line\" style=\"color:white;\"></span>\n    Functional Customization\n    <span class=\"line\" style=\"color:white;\"></span></h2>\n</div>\n\n<div nz-row class=\"row-div\" style=\"background-color: #3fabf3;text-align: center;color: white\">\n  <div nz-col [nzSpan]=\"2\" [nzOffset]=\"2\">\n    <i class=\"icon font_family icon-customizing_binding\"></i>\n    <p class=\"module-desc\">Promotion</p>\n    <p>binding function</p>\n  </div>\n  <div nz-col [nzSpan]=\"2\" [nzOffset]=\"1\">\n    <i class=\"icon font_family icon-btn_qrcode\"></i>\n    <p class=\"module-desc\">QR code\n      scan loading</p>\n  </div>\n  <div nz-col [nzSpan]=\"2\" [nzOffset]=\"1\">\n    <i class=\"icon font_family icon-customizing_gps\"></i>\n    <p class=\"module-desc\">GPS\n      positioning</p>\n  </div>\n  <div nz-col [nzSpan]=\"2\" [nzOffset]=\"1\">\n    <i class=\"icon font_family icon-customizing_veriface\"></i>\n    <p class=\"module-desc\">Facial\n      recognition</p>\n  </div>\n  <div nz-col [nzSpan]=\"2\" [nzOffset]=\"1\">\n    <i class=\"icon font_family icon-customizing_detectio\"></i>\n    <p class=\"module-desc\">Abnormal\n      function detection</p>\n  </div>\n  <div nz-col [nzSpan]=\"2\" [nzOffset]=\"1\">\n    <i class=\"icon font_family icon-customizing_Security\"></i>\n    <p class=\"module-desc\">Multiple\n      anti-theft protection</p>\n  </div>\n  <div nz-col [nzSpan]=\"2\" [nzOffset]=\"1\">\n    <i class=\"icon font_family icon-customizing_push\"></i>\n    <p class=\"module-desc\">Accurate\n      pushing</p>\n  </div>\n</div>\n\n\n<div  style=\"text-align: center;padding:60px 0 30px 0;\" >\n  <h2 class=\"title-2\">\n    <span class=\"line\"></span>\n    Cooperation Pattern\n    <span class=\"line\"></span></h2>\n  <p class=\"order-title\" >Cutting-edge marketing and innovative business model</p>\n</div>\n\n\n<div nz-row class=\"row-div\" >\n  <div nz-col [nzSpan]=\"6\" [nzOffset]=\"2\">\n    <img src=\"./assets/img/serve/mode1.jpg\"  >\n    <div class=\"mode-div\">Machine leasing</div>\n  </div>\n  <div nz-col [nzSpan]=\"6\" [nzOffset]=\"1\">\n    <img src=\"./assets/img/serve/mode2.jpg\"  >\n    <div class=\"mode-div\">Financing leasing</div>\n  </div>\n  <div nz-col [nzSpan]=\"6\" [nzOffset]=\"1\" >\n    <img src=\"./assets/img/serve/mode3.jpg\" style=\"margin: 4rem 0 4rem 0\">\n    <div class=\"mode-div\">Agency distribution</div>\n  </div>\n</div>\n\n\n<div  style=\"text-align: center;padding:60px 0 30px 0; background-color: #f6f6f6\" >\n  <h2 class=\"title-2\">\n    <span class=\"line\"></span>\n    Brand and Scene Combination——Thybot Customized Vending Machines\n    <span class=\"line\"></span></h2>\n  <!--<h4 class=\"title-4\">CHANNEL&nbsp;DOCKING</h4>-->\n  <!--<p style=\"text-align: center;font-size: 1.6rem;color:#919191;padding-top: 2rem\">Brand and Scene Combination——Thybot Customized Vending Machines</p>-->\n</div>\n\n\n<div nz-row class=\"row-div\" style=\"background-color: #f6f6f6;padding-top: 30px\">\n  <div nz-col [nzSpan]=\"6\" [nzOffset]=\"2\" class=\"fixed-height1\">\n    <img src=\"./assets/img/serve/service1.jpg\" class=\"color-img\">\n  </div>\n  <div nz-col [nzSpan]=\"6\" [nzOffset]=\"1\" class=\"fixed-height1\">\n    <img src=\"./assets/img/serve/service2.jpg\" class=\"color-img\">\n  </div>\n  <div nz-col [nzSpan]=\"6\" [nzOffset]=\"1\" class=\"fixed-height1\">\n    <img src=\"./assets/img/serve/service3.jpg\" class=\"color-img\">\n  </div>\n</div>\n\n\n<div  style=\"text-align: center;padding-top: 60px;background-color: #3fabf3\" id=\"archor8\">\n  <h2 class=\"title-2\" style=\"color:white;\">\n    <span class=\"line\" style=\"color:white;\"></span>\n    Tech Support\n    <span class=\"line\" style=\"color:white;\"></span></h2>\n</div>\n\n\n\n\n<div nz-row class=\"row-div\" style=\"background-color: #3fabf3;text-align: center;color: white\">\n  <div nz-col [nzSpan]=\"2\" [nzOffset]=\"2\">\n    <i class=\"icon font_family icon-support_download\"></i>\n    <p class=\"module-desc\">Technical\n      document download</p>\n  </div>\n  <div nz-col [nzSpan]=\"2\" [nzOffset]=\"1\">\n    <i class=\"icon font_family icon-support_vedio\"></i>\n    <p class=\"module-desc\">Video performance\n      for machine installation\n      and maintenance</p>\n  </div>\n  <div nz-col [nzSpan]=\"2\" [nzOffset]=\"1\">\n    <i class=\"icon font_family icon-support_upgrade\"></i>\n    <p class=\"module-desc\">Software\n      upgrades</p>\n  </div>\n  <div nz-col [nzSpan]=\"2\" [nzOffset]=\"1\">\n    <i class=\"icon font_family icon-support_monitoring\"></i>\n    <p class=\"module-desc\">24-7 backend\n      monitoring</p>\n  </div>\n  <div nz-col [nzSpan]=\"2\" [nzOffset]=\"1\">\n    <i class=\"icon font_family icon-support_analyze\"></i>\n    <p class=\"module-desc\">Remote\n      troubleshooting analysis</p>\n  </div>\n  <div nz-col [nzSpan]=\"2\" [nzOffset]=\"1\">\n    <i class=\"icon font_family icon-support_train\"></i>\n    <p class=\"module-desc\">Professional\n      training</p>\n  </div>\n  <div nz-col [nzSpan]=\"2\" [nzOffset]=\"1\">\n    <i class=\"icon font_family icon-support_solution\"></i>\n    <p class=\"module-desc\">Technical\n      solutions providing</p>\n  </div>\n</div>\n\n\n<div  style=\"text-align: center;padding:60px 0 30px 0;\" id=\"archor9\">\n  <h2 class=\"title-2\">\n    <span class=\"line\"></span>\n    After-sales Service\n    <span class=\"line\"></span></h2>\n  <h4 class=\"title-4\">AFTER&nbsp;SERVICE</h4>\n</div>\n\n<div nz-row  style=\"margin: 30px 0 60px 0\">\n  <div nz-col [nzSpan]=\"9\" [nzOffset]=\"2\" class=\"after-service-div\" >\n    <p class=\"after-service-desc\">Equipped with professional after-sales service and professional technical team for maintenance, 24*7 after-sales online service, on-site service. </p>\n  </div>\n  <div nz-col [nzSpan]=\"9\" [nzOffset]=\"2\" class=\"after-service-div\" >\n    <p class=\"after-service-desc\">Vending machine maintenance service platform, around the clock remote monitoring.<br>&nbsp;</p>\n  </div>\n</div>\n\n\n<app-bottom></app-bottom>\n"

/***/ }),

/***/ "../../../../../src/app/serve/serve.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control_service__ = __webpack_require__("../../../../../src/app/control.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServeComponent = /** @class */ (function () {
    function ServeComponent(control) {
        this.control = control;
    }
    ServeComponent.prototype.ngOnInit = function () {
    };
    ServeComponent.prototype.ngAfterViewInit = function () {
        if (this.control.route_control == 7) {
            $('html, body').animate({
                scrollTop: $('#archor7').offset().top - 100
            }, 0);
            this.control.route_control = 0;
        }
        if (this.control.route_control == 8) {
            $('html, body').animate({
                scrollTop: $('#archor8').offset().top - 100
            }, 0);
            this.control.route_control = 0;
        }
        if (this.control.route_control == 9) {
            $('html, body').animate({
                scrollTop: $('#archor9').offset().top - 100
            }, 0);
            this.control.route_control = 0;
        }
    };
    ServeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-serve',
            template: __webpack_require__("../../../../../src/app/serve/serve.component.html"),
            styles: [__webpack_require__("../../../../../src/app/serve/serve.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */]])
    ], ServeComponent);
    return ServeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/solution/solution.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".child-div{\r\n  margin-top: -40px;\r\n  height: 96px;\r\n}\r\n\r\n.child-active{\r\n  border-bottom: solid 5px #3fabf3 !important;\r\n  color: #3fabf3;\r\n}\r\n\r\n.child-btn{\r\n  color: #9d9d9d;\r\n  height: 100%;\r\n  width: 100%;\r\n  font-size: 1.6rem;\r\n  border-radius: 0;\r\n  border: 0;\r\n  background-color: white;\r\n}\r\n\r\n.child-btn:focus,.child-btn:hover,.child-btn:active{\r\n  outline: 0;\r\n  border: 0;\r\n}\r\n\r\nimg{\r\n  width: 100%;\r\n}\r\n\r\n/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~tab 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\r\n\r\n.animate-div{\r\n  margin-top: 6rem;\r\n  opacity: 0;\r\n}\r\n\r\n.down-animate{\r\n\r\n\r\n  -webkit-animation: down_animate 3s;\r\n\r\n\r\n          animation: down_animate 3s;\r\n  -webkit-animation-fill-mode : forwards;\r\n          animation-fill-mode : forwards;\r\n}\r\n\r\n@-webkit-keyframes down_animate {\r\n  0%  {margin-top: 6rem;opacity: 0;}\r\n  100% {margin-top:0;opacity: 1;}\r\n}\r\n\r\n@keyframes down_animate {\r\n  0%  {margin-top: 6rem;opacity: 0;}\r\n  100% {margin-top:0;opacity: 1;}\r\n}\r\n\r\n.down-animate-2{\r\n  /*margin-top: 24rem;*/\r\n  /*opacity: 0;*/\r\n\r\n  -webkit-animation: down_animate_2 3s;\r\n\r\n          animation: down_animate_2 3s;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes down_animate_2 {\r\n  0%  {margin-top: 24rem;opacity: 0;}\r\n  100% {margin-top:18rem;opacity: 1;}\r\n}\r\n\r\n@keyframes down_animate_2 {\r\n  0%  {margin-top: 24rem;opacity: 0;}\r\n  100% {margin-top:18rem;opacity: 1;}\r\n}\r\n\r\n.tech-img-div{\r\n  border: solid 1px #d7d7d7;\r\n  padding: 2% 5% 2% 5%;\r\n}\r\n\r\n.tech-num{\r\n\r\n  font-size: 10rem;\r\n  line-height: 12rem;\r\n  font-family: Bebas;\r\n  color: #d7d7d7;\r\n}\r\n\r\n.tech-name{\r\n  font-size: 3.6rem;\r\n  color: #1a1a1a;\r\n  font-weight: bold;\r\n}\r\n\r\n.tech-desc{\r\n  font-size: 2.4rem;\r\n  line-height: 4.8rem;\r\n\r\n}\r\n\r\n/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~tab 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\r\n\r\n.sex{\r\n\r\n  font-size: 2rem;\r\n  line-height: 7rem;\r\n\r\n}\r\n\r\n.icon-sex{\r\n  font-size: 3.5rem;\r\n\r\n}\r\n\r\n.system-text{\r\n  font-size: 1.5rem;\r\n  line-height: 3.5rem;\r\n}\r\n\r\n.icon-system{\r\n  font-size: 2.5rem;\r\n}\r\n\r\n/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~tab 3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\r\n\r\n.title-div{\r\n  margin-bottom: 40px;\r\n  background-color: #369cf1;\r\n  height: 60px;\r\n  border-radius: 30px 0 30px 0;\r\n  padding-top: 0.5rem;\r\n  text-align: center;\r\n  font-size: 1.8rem;\r\n  color: white;\r\n}\r\n\r\n.title-p{\r\n\r\n  font-size: 2rem;\r\n  line-height: 4rem;\r\n  padding-left: 2rem;\r\n\r\n}\r\n\r\n/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~tab 4~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\r\n\r\n.line{\r\n  border-top:1px solid  #c9c9c9;\r\n  width: 100px;\r\n  display: inline-block;\r\n  margin: 0 1rem 0.6rem 1rem;\r\n}\r\n\r\n.title-2{\r\n  font-size: 2.4rem;\r\n  color: #3fabf3;\r\n  font-weight: bold;\r\n}\r\n\r\n/*.title-4{*/\r\n\r\n/*font-size: 1.4rem;*/\r\n\r\n/*font-family: Helvetica, monospace;*/\r\n\r\n/*color: #919191;*/\r\n\r\n/*}*/\r\n\r\n.chanel-text{\r\n  margin-top: 1rem;\r\n  padding: 0.5rem 2rem 0.5rem 2rem;\r\n  border: solid 1px #f0f0f0;\r\n  text-align: center;\r\n  font-size: 1.6rem;\r\n\r\n}\r\n\r\n.payment-name{\r\n  background-color: white;\r\n  font-size: 1.5rem;\r\n  border: solid 1px #dddddd;\r\n  padding: 1rem;\r\n  margin: 0 1rem 0 1rem;\r\n  /*margin-right: 1rem;*/\r\n}\r\n\r\n.title-1{\r\n  width: 80%;\r\n  font-size: 4rem;\r\n  color: white;\r\n  margin: auto;\r\n}\r\n\r\n.flex-div{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align:  center;\r\n      -ms-flex-align:  center;\r\n          align-items:  center;\r\n}\r\n\r\n.title-3{\r\n  font-size: 1.6rem;\r\n  line-height: 4rem;\r\n  /*padding: 1rem 0 1rem 0;*/\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solution/solution.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src=\"./assets/img/solution/solution.jpg\" >\n  <div style=\"position: absolute;top: 18rem;width: 100%\">\n\n    <h1 class=\"title-1\" >Inspiration coming from life, To create a fascinating product\n      along with the soul of our product.</h1>\n\n  </div>\n  <canvas id=\"myCanvas\" style=\"position: absolute;top: 0;\"></canvas>\n</div>\n\n\n\n\n<div nz-row class=\"child-div\">\n  <div nz-col [nzSpan]=\"5\" [nzOffset]=\"2\" style=\"height: 100%;border-right: solid 1px #cccccc\">\n    <button [class.child-active]=\"control.tab_num == 1\" class=\"child-btn\" (click)=\"change_tab(1)\" >The Core Technology</button>\n  </div>\n  <div nz-col [nzSpan]=\"5\" style=\"height: 100%;border-right: solid 1px #cccccc\">\n    <button [class.child-active]=\"control.tab_num == 2\" class=\"child-btn\" (click)=\"change_tab(2)\">System Advantage</button>\n  </div>\n  <div nz-col [nzSpan]=\"5\" style=\"height: 100%;border-right: solid 1px #cccccc\">\n    <button [class.child-active]=\"control.tab_num == 3\" class=\"child-btn\" (click)=\"change_tab(3)\">\n      <p>Automated New</p>\n      <p>Retail Solutions</p> </button>\n  </div>\n  <div nz-col [nzSpan]=\"5\" style=\"height: 100%\">\n    <button [class.child-active]=\"control.tab_num == 4\" class=\"child-btn\" (click)=\"change_tab(4)\">Purchasing Channel</button>\n  </div>\n</div>\n\n<div *ngIf=\"control.tab_num == 2\">\n  <div nz-row class=\"row-div\" id=\"no_1\">\n    <div nz-col [nzSpan]=\"10\" [nzOffset]=\"2\" class=\"tech-img-div\">\n      <img  [src]=\"is_move[0]?move[0]:stop[0]\" (mouseover)=\"change_move(0,true)\" (mouseout)=\"change_move(0,false)\">\n    </div>\n    <div nz-col [nzSpan]=\"10\" [nzOffset]=\"2\" class=\"animate-div\" [class.down-animate]=\"top >= height[0]\" >\n      <h1 class=\"tech-num\">01</h1>\n      <h2 class=\"tech-name\">Flexible Lane Adjustment</h2>\n      <p class=\"tech-desc\">Conveyor belt safety delivering\n      + Intelligent lifting system</p>\n    </div>\n  </div>\n\n  <div nz-row style=\"background-color: #f8f8f8\" id=\"no_2\">\n    <div nz-col [nzSpan]=\"8\" [nzOffset]=\"4\" class=\"animate-div\" [class.down-animate-2]=\"top >= height[1]\" >\n      <h1 class=\"tech-num\">02</h1>\n      <h2 class=\"tech-name\">Unpowered Storage Rack</h2>\n      <p class=\"tech-desc\">Multi axis manipulator\n      + Accurate positioning</p>\n    </div>\n    <div nz-col [nzSpan]=\"12\"  style=\"padding-bottom: 1rem\">\n      <img  [src]=\"is_move[1]?move[1]:stop[1]\" (mouseover)=\"change_move(1,true)\" (mouseout)=\"change_move(1,false)\">\n    </div>\n  </div>\n\n  <div nz-row style=\"height:50rem;padding-top: 10rem\">\n    <div nz-col [nzSpan]=\"10\" [nzOffset]=\"2\" class=\"tech-img-div\" >\n      <img  [src]=\"is_move[2]?move[2]:stop[2]\" (mouseover)=\"change_move(2,true)\" (mouseout)=\"change_move(2,false)\">\n    </div>\n    <div nz-col [nzSpan]=\"10\" [nzOffset]=\"2\" class=\"animate-div\" [class.down-animate]=\"top >= height[2]\" >\n      <h1 class=\"tech-num\">03</h1>\n      <h2 class=\"tech-name\">Automated intelligent warehouse</h2>\n      <p class=\"tech-desc\">Auto stock in-stock out system</p>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n<div *ngIf=\"control.tab_num == 1\">\n  <div class=\"row-div\"  >\n    <h2 class=\"title-2\">\n      <span class=\"line\"></span>\n      Linux Open Source System\n      <span class=\"line\"></span>\n    </h2>\n\n    <div class=\"flex-div\"  style=\"padding: 8rem 0 4rem 0\">\n      <div style=\"flex: 1\">\n      </div>\n      <div style=\"flex: 4\">\n        <img src=\"./assets/img/solution/system1.jpg\" >\n      </div>\n      <div style=\"flex: 1\">\n      </div>\n\n      <div style=\"flex: 2\" >\n        <p class=\"sex\"><i class=\"icon font_family icon-compatibility icon-sex\"></i>&nbsp;Compatible</p>\n      </div>\n      <div style=\"flex: 2\" >\n        <p class=\"sex\"><i class=\"icon font_family icon-stability icon-sex\"></i>&nbsp;Stable</p>\n      </div>\n      <div style=\"flex: 2\" >\n        <p class=\"sex\"><i class=\"icon font_family icon-security icon-sex\"></i>&nbsp;Safety</p>\n      </div>\n\n\n\n    </div>\n\n  </div>\n\n\n  <div class=\"row-div\"  style=\"background-color: #f8f8f8\">\n\n    <h2 class=\"title-2\">\n      <span class=\"line\"></span>\n      One-stop R&D System\n      <span class=\"line\"></span>\n    </h2>\n\n    <div class=\"flex-div\"  style=\"padding: 8rem 0 4rem 0\">\n      <div style=\"flex: 1\">\n      </div>\n      <div style=\"flex: 1\">\n        <img src=\"./assets/img/solution/system2.png\" >\n      </div>\n      <div style=\"flex: 1\">\n      </div>\n\n      <div style=\"flex: 2;text-align: left\" >\n        <p class=\"system-text\">Automated retail terminal control system</p>\n        <p class=\"system-text\">Smart retail trading platform</p>\n        <p class=\"system-text\">New media advertising interaction system</p>\n        <p class=\"system-text\">IoT big data analysis platform</p>\n        <p class=\"system-text\">Warehousing inventory control system</p>\n      </div>\n    </div>\n\n  </div>\n\n\n  <div class=\"row-div\" style=\"padding-bottom: 0\">\n    <h2 class=\"title-2\">\n      <span class=\"line\"></span>\n      Visual Backend Management System\n      <span class=\"line\"></span>\n    </h2>\n\n    <div class=\"flex-div\" style=\"padding: 2rem 0 2rem 0\">\n      <div style=\"flex: 1\">\n      </div>\n      <div style=\"flex: 4\">\n        <img src=\"./assets/img/solution/system3.jpg\" >\n      </div>\n      <div style=\"flex: 1\">\n      </div>\n      <div style=\"flex: 1\">\n        <img src=\"./assets/img/solution/system4.jpg\" >\n      </div>\n      <div style=\"flex: 1\">\n      </div>\n      <div style=\"flex: 3\">\n        <img src=\"./assets/img/solution/system5.jpg\" >\n      </div>\n      <div style=\"flex: 1\">\n      </div>\n    </div>\n\n    <div class=\"flex-div\" style=\"background-color: #f8f8f8;text-align: left;padding: 2rem 0 4rem 0\">\n      <div style=\"flex: 1\">\n      </div>\n      <div style=\"flex: 5\">\n        <p class=\"system-text\"><i class=\"icon font_family icon-platform icon-system\"></i>Comprehensive management platform</p>\n        <p class=\"system-text\"><i class=\"icon font_family icon-transactiondetail icon-system\"></i>Real time transaction report</p>\n        <p class=\"system-text\"><i class=\"icon font_family icon-close_aisle icon-system\"></i>Remote shutdown specified lane</p>\n        <p class=\"system-text\"><i class=\"icon font_family icon-diagnose icon-system\"></i>Troubleshooting performance analysis</p>\n        <p class=\"system-text\"><i class=\"icon font_family icon-restart icon-system\"></i>Automatic restart machine</p>\n        <p class=\"system-text\"><i class=\"icon font_family icon-maintenance_report icon-system\"></i>Maintenance report</p>\n      </div>\n      <div style=\"flex: 1\">\n      </div>\n      <div style=\"flex: 5\">\n        <p class=\"system-text\"><i class=\"icon font_family icon-datadisplay icon-system\"></i>Synthetic data display</p>\n        <p class=\"system-text\"><i class=\"icon font_family icon-repertory icon-system\"></i>Remote inventory monitoring</p>\n        <p class=\"system-text\"><i class=\"icon font_family icon-advertisement icon-system\"></i>Remote ad pushing</p>\n        <p class=\"system-text\"><i class=\"icon font_family icon-aisle_manage icon-system\"></i>Smart lane management</p>\n        <p class=\"system-text\"><i class=\"icon font_family icon-long_distance icon-system\"></i>Remote delivery from backend</p>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n<div *ngIf=\"control.tab_num == 3\">\n  <div class=\"row-div\">\n\n    <h2 class=\"title-2\">\n      <span class=\"line\"></span>\n      Big Data Center\n      <span class=\"line\"></span>\n    </h2>\n    <h3 class=\"title-3\"> Business circle analysis&nbsp;&nbsp;Traffic flows data statistics&nbsp;&nbsp;Consumer behavior analysis</h3>\n    <h3 class=\"title-3\"> Marketing data analysis&nbsp;&nbsp;Accurate advertising push</h3>\n\n    <img src=\"./assets/img/solution/solution2.jpg\"  style=\"width: 72%;padding: 4rem 0 2rem\">\n  </div>\n\n  <div class=\"row-div\" style=\"background-color: #f8f8f8;position: relative\">\n    <h2 class=\"title-2\">\n      <span class=\"line\"></span>\n      One-stop Solution\n      <span class=\"line\"></span>\n    </h2>\n    <div style=\"padding: 4rem 0 2rem 0;width: 72%;margin: auto\">\n      <img src=\"./assets/img/solution/solution3.jpg\">\n    </div>\n    <div style=\"width:50%; position: absolute;bottom: 18%; left: 5%;text-align: left\">\n      <p class=\"title-p\">Online shopping and offline pickup</p>\n      <p class=\"title-p\">Achieve the O2O closed-loop</p>\n    </div>\n  </div>\n\n\n  <div class=\"row-div\">\n\n    <h2 class=\"title-2\">\n      <span class=\"line\"></span>\n      Personalized Accurate Marketing\n      <span class=\"line\"></span>\n    </h2>\n    <img src=\"./assets/img/solution/solution4.jpg\"  style=\"width: 92%;padding: 4rem 0 2rem\">\n\n  </div>\n\n\n</div>\n\n<!--<div nz-row  style=\"padding: 8rem 0 4rem 0\">-->\n    <!--<div nz-col [nzSpan]=\"4\" [nzOffset]=\"2\">-->\n      <!--<div class=\"title-div\" style=\"margin-top: 40px\">Big Data Center</div>-->\n      <!--<p class=\"title-p\">Business circle analysis  </p>-->\n      <!--<p class=\"title-p\">Traffic flows data statistics </p>-->\n      <!--<p class=\"title-p\">Consumer behavior analysis</p>-->\n      <!--<p class=\"title-p\">Marketing data analysis </p>-->\n      <!--<p class=\"title-p\">Accurate advertising push</p>-->\n    <!--</div>-->\n    <!--<div nz-col [nzSpan]=\"14\" [nzOffset]=\"2\">-->\n      <!--<img src=\"./assets/img/big_data.png\" >-->\n    <!--</div>-->\n  <!--</div>-->\n\n  <!--<div nz-row class=\"row-div\" style=\"background-color: #f8f8f8\">-->\n    <!--<div nz-col [nzSpan]=\"4\" [nzOffset]=\"2\">-->\n      <!--<div class=\"title-div\" style=\"margin-top: 10rem\">One-stop Solution</div>-->\n      <!--<p class=\"title-p\">Online shopping and offline pickup</p>-->\n      <!--<p class=\"title-p\">Achieve the O2O closed-loop</p>-->\n    <!--</div>-->\n    <!--<div nz-col [nzSpan]=\"14\" [nzOffset]=\"2\">-->\n      <!--<img src=\"./assets/img/solution_3.png\" >-->\n    <!--</div>-->\n  <!--</div>-->\n\n  <!--<div nz-row class=\"row-div\">-->\n    <!--<div nz-col [nzSpan]=\"4\" [nzOffset]=\"2\">-->\n      <!--<div class=\"title-div\">Personalized Accurate Marketing</div>-->\n    <!--</div>-->\n  <!--</div>-->\n\n  <!--<div nz-row class=\"row-div\">-->\n    <!--<div nz-col [nzSpan]=\"16\" [nzOffset]=\"4\">-->\n      <!--<img src=\"./assets/img/solution/solution4.png\">-->\n    <!--</div>-->\n  <!--</div>-->\n\n\n\n<div *ngIf=\"control.tab_num == 4\">\n  <div style=\" text-align: center;padding-top: 60px;\" >\n    <h2 class=\"title-2\">\n      <span class=\"line\"></span>\n      Purchasing Channel\n      <span class=\"line\"></span></h2>\n  </div>\n\n  <div nz-row class=\"row-div\">\n    <div nz-col [nzSpan]=\"6\" [nzOffset]=\"2\">\n      <div style=\"text-align: center;\">\n        <img src=\"./assets/img/solution/channel1.jpg\" style=\"width: 80%\">\n      </div>\n\n      <span class=\"chanel-text\">APP</span>\n    </div>\n    <div nz-col [nzSpan]=\"6\" [nzOffset]=\"1\">\n      <div style=\"text-align: center;\">\n        <img src=\"./assets/img/solution/channel1.jpg\" style=\"width: 80%\">\n      </div>\n      <span class=\"chanel-text\">Machine</span>\n    </div>\n    <div nz-col [nzSpan]=\"6\" [nzOffset]=\"1\">\n      <div style=\"text-align: center;\">\n        <img src=\"./assets/img/solution/channel1.jpg\" style=\"width: 80%\">\n      </div>\n      <span class=\"chanel-text\">Other platform</span>\n    </div>\n  </div>\n\n  <div style=\" text-align: center;background-color: #f8f8f8\" class=\"row-div\">\n    <h2 class=\"title-2\">\n      <span class=\"line\"></span>\n      Payment System\n      <span class=\"line\"></span></h2>\n\n\n    <div nz-row style=\"padding-top: 60px\">\n\n      <div nz-col [nzSpan]=\"9\" >\n        <p style=\"text-align: center;margin-bottom: 40px\">\n          <span class=\"payment-name\">Bill</span>\n          <span class=\"payment-name\">Coin</span>\n          <span class=\"payment-name\">Bank card</span>\n        </p>\n      </div>\n\n      <div nz-col [nzSpan]=\"5\" [nzOffset]=\"2\">\n        <p style=\"text-align: center;margin-bottom: 6px\">\n          <span class=\"payment-name\">NFC</span>\n        </p>\n      </div>\n\n      <div nz-col [nzSpan]=\"5\" [nzOffset]=\"2\">\n        <p style=\"text-align: center;margin-bottom: 12px\">\n          <span class=\"payment-name\">QR code</span>\n        </p>\n      </div>\n\n    </div>\n\n    <div nz-row >\n      <div nz-col [nzSpan]=\"6\" [nzOffset]=\"2\" style=\"text-align: center;\">\n         <img src=\"./assets/img/solution/pay1.jpg\" style=\"width: 80%\">\n      </div>\n\n      <div nz-col [nzSpan]=\"6\" [nzOffset]=\"1\">\n          <img src=\"./assets/img/solution/pay2.jpg\" style=\"width: 80%\">\n      </div>\n      <div nz-col [nzSpan]=\"6\" [nzOffset]=\"1\" style=\"text-align: center;\">\n          <img src=\"./assets/img/solution/pay3.jpg\" style=\"width: 80%\">\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<app-bottom></app-bottom>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/solution/solution.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolutionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control_service__ = __webpack_require__("../../../../../src/app/control.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolutionComponent = /** @class */ (function () {
    function SolutionComponent(control) {
        this.control = control;
        this.height = [0, 0, 0];
        this.is_move = [false, false, false];
        this.stop = ['./assets/img/gif_stop_1.jpg', './assets/img/gif_stop_2.png', './assets/img/gif_stop_3.jpg'];
        this.move = ['./assets/img/gif_1.gif', './assets/img/gif_2.gif', './assets/img/gif_3.gif'];
        this.open = true;
    }
    SolutionComponent.prototype.ngOnInit = function () {
    };
    SolutionComponent.prototype.ngOnDestroy = function () {
        this.open = false;
    };
    SolutionComponent.prototype.ngAfterViewInit = function () {
        //
        // if (this.control.route_control == 4 ) {
        //   this.control.tab_num = 1;
        //   this.control.route_control = 0;
        //
        // }
        // if (this.control.route_control == 5 ) {
        //   this.control.tab_num = 2;
        //
        //   this.control.route_control = 0;
        // }
        //
        // if (this.control.route_control == 6 ) {
        //   this.control.tab_num = 3;
        //   this.control.route_control = 0;
        // }
        if (this.control.tab_num == 2) {
            this.set_height();
        }
        this.set_canvas();
    };
    SolutionComponent.prototype.set_height = function () {
        var _this = this;
        $(window).scroll(function () {
            if (_this.open) {
                _this.top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                _this.height[0] = $('#no_1').offset().top - $('#no_1').height() - 200;
                _this.height[1] = $('#no_2').offset().top - $('#no_1').height() - 200;
                _this.height[2] = $('#no_3').offset().top - $('#no_1').height() - 200;
            }
        });
    };
    SolutionComponent.prototype.change_move = function (index, ismove) {
        this.is_move[index] = ismove;
    };
    SolutionComponent.prototype.change_tab = function (num) {
        this.control.tab_num = num;
        if (num = 2) {
            this.set_height();
        }
    };
    SolutionComponent.prototype.set_canvas = function () {
        var canvas;
        canvas = document.getElementById("myCanvas");
        console.log(canvas);
        canvas['width'] = document.documentElement.clientWidth;
        canvas['height'] = document.documentElement.clientHeight * 0.82;
        var ctx = canvas['getContext']('2d');
        function Ball() {
            this.x = randomNum(3, canvas['width'] - 3);
            this.y = randomNum(3, canvas['height'] - 3);
            this.r = randomNum(1, 3);
            this.color = randomColor();
            this.speedX = randomNum(-3, 3) * 0.2;
            this.speedY = randomNum(-3, 3) * 0.2;
        }
        Ball.prototype = {
            //绘制小球
            draw: function () {
                ctx.beginPath();
                ctx.globalAlpha = 1;
                ctx.fillStyle = this.color;
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.fill();
            },
            //小球移动
            move: function () {
                this.x += this.speedX;
                this.y += this.speedY;
                //为了合理性,设置极限值
                if (this.x <= 3 || this.x > canvas['width'] - 3) {
                    this.speedX *= -1;
                }
                if (this.y <= 3 || this.y >= canvas['height'] - 3) {
                    this.speedY *= -1;
                }
            }
        };
        //存储所有的小球
        var balls = [];
        //创建200个小球
        for (var i = 0; i < 150; i++) {
            var ball = new Ball();
            balls.push(ball);
        }
        main();
        function main() {
            ctx.clearRect(0, 0, canvas['width'], canvas['height']);
            //鼠标移动绘制线
            mouseLine();
            //小球与小球之间自动画线
            drawLine();
            //使用关键帧动画，不断的绘制和清除
            window.requestAnimationFrame(main);
        }
        //添加鼠标移动事件
        //记录鼠标移动时的mouseX坐标
        var mouseX;
        var mouseY;
        canvas.onmousemove = function (e) {
            var ev = event || e;
            mouseX = ev['offsetX'];
            mouseY = ev['offsetY'];
        };
        //判断是否划线
        function drawLine() {
            for (var i = 0; i < balls.length; i++) {
                balls[i].draw();
                balls[i].move();
                for (var j = 0; j < balls.length; j++) {
                    if (i != j) {
                        if (Math.sqrt(Math.pow((balls[i].x - balls[j].x), 2) + Math.pow((balls[i].y - balls[j].y), 2)) < 80) {
                            ctx.beginPath();
                            ctx.moveTo(balls[i].x, balls[i].y);
                            ctx.lineTo(balls[j].x, balls[j].y);
                            ctx.strokeStyle = "white";
                            ctx.globalAlpha = 0.2;
                            ctx.stroke();
                        }
                    }
                }
            }
        }
        //使用鼠标移动划线
        function mouseLine() {
            for (var i = 0; i < balls.length; i++) {
                if (Math.sqrt(Math.pow((balls[i].x - mouseX), 2) + Math.pow((balls[i].y - mouseY), 2)) < 80) {
                    ctx.beginPath();
                    ctx.moveTo(balls[i].x, balls[i].y);
                    ctx.lineTo(mouseX, mouseY);
                    ctx.strokeStyle = "white";
                    ctx.globalAlpha = 0.8;
                    ctx.stroke();
                }
            }
        }
        //随机函数
        function randomNum(m, n) {
            return Math.floor(Math.random() * (n - m + 1) + m);
        }
        //随机颜色
        function randomColor() {
            var color_num = Math.random();
            if (color_num < 0.5) {
                return "rgb(" + 255 + "," + 255 + "," + 255 + ")";
            }
            if (color_num >= 0.5 && color_num < 0.75) {
                return "rgb(" + 28 + "," + 52 + "," + 219 + ")";
            }
            if (color_num >= 0.75) {
                return "rgb(" + 82 + "," + 255 + "," + 208 + ")";
            }
            // return "rgb(" + randomNum(0, 255) + "," + randomNum(0, 255) + "," + randomNum(0, 255) + ")";
            // return "rgb(" + 0 + "," + randomNum(0, 255) + "," + randomNum(0, 255) + ")";
        }
    };
    SolutionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-solution',
            template: __webpack_require__("../../../../../src/app/solution/solution.component.html"),
            styles: [__webpack_require__("../../../../../src/app/solution/solution.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */]])
    ], SolutionComponent);
    return SolutionComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/img/document/bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg.5f1589a1c6891ba3c025.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map