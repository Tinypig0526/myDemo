//Ajax类
window.ajax={
    get: function(url, fn) {
        var obj = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据
        obj.open('GET', url, true);
        obj.onreadystatechange = function() {
            if (obj.readyState == 4 && obj.status == 200 || obj.status == 304) { // readyState == 4说明请求已完成
                fn.call(this, obj.responseText);  //从服务器获得数据
            }
        };
        obj.send();
    },
    post: function (url, data, fn) {         // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
        var obj = new XMLHttpRequest();
        obj.open("POST", url, true);
        obj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  // 添加http头，发送信息至服务器时内容编码类型
        obj.onreadystatechange = function() {
            if (obj.readyState == 4 && (obj.status == 200 || obj.status == 304)) {  // 304未修改
                fn.call(this, obj.responseText);
            }
        };
        obj.send(data);
    },
    get_sync: function(url) {
        var obj = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据
        obj.open('GET', url, false);
        obj.send();
        return obj.responseText;
    },
    dataToParam:function (data) {
        var result = "";
        for(var k in data) {
            result += ((result.indexOf("=") != -1) ? "&" : "") + k + "=" + encodeURI(data[k]);
        }
        return result;
    }
}

//本地日志服务
window.locallog = new function(){
    //执行日志写入(psot)
    this.log = function(msg,level){
        //DEBUG
        console.log(msg);
        try{
            //参数设置
            var level = level || "info";
            var baseurl = "http://localhost:3001/log/add";              //设置调用地址
            var paraurl = baseurl+"?msg="+msg+"&level="+level;
            var json = {msg: msg,level: level};                     //设置数据
            var data = window.ajax.dataToParam(json);                           //把数据参数化
            var recall = function(data){}                          //回调函数
            //调用AJAX
            window.ajax.post(baseurl,data,recall);
        }
        catch(error) {

        }
    }

    //返回类
    return this;
}

//资源读取服务
window.resource = new function(){
    //配置信息
    this.root = "D:/node/read/";
    this.ad = "";
    this.config = "";

    //获取地址
    this.path = function(type,name){
        //参数设置
        var baseurl = "http://localhost:3001/resource/"+type;   //设置调用地址
        var paraurl = baseurl+"?path="+this.root+this.ad+name;
        return paraurl;
    }

    //获取内容
    this.get = function(name){
        //参数设置
        var baseurl = "http://localhost:3001/resource/txt";           //设置调用地址
        var paraurl = baseurl+"?path="+this.root+this.config+name;
        var result = ajax.get_sync(paraurl);
        return result;
    }

    //返回类
    return this;
}