/**
 * Created by Administrator on 2018/5/17.
 */
;(function(window,undefined){
  var version = '1.0.0';
//定义jQuery的构造函数
  var jQuery = function(selector){
    return  jQuery.fn.init();
  };
  //定义jQuery的原型 增加方法
  jQuery.fn = jQuery.prototype = {
    constructor:jQuery(),
    jquery:version,
    splice:Array.prototype.splice,
    css:function(){
      console.log('啊哈哈哈')
    },
    sayHi:function(){
      console.log('hehhehehe')
    },
    init:function(){
      //根据选择器找到对应的元素
      var elements = document.querySelectorAll(selector);
      //把elements中所有的元素绑定到this上，让jQuery对象是一个伪数组
      Array.prototype.push.apply(this,elements);
    },
    extend:function(obj){
      for(var k in obj){
        if(obj.hasOwnProperty(k)) {
          this[k] = obj[k];
        }
      }
    }
  }
  //给jQuery原型拓展样式相关的方法
  jQuery.fn.extend({
    //参数：需要添加的类名
    addClass:function(name){
      //遍历this，给每一个元素都添加上name
      for(var i = 0; i < this.length; i++){
        this[i].classList.add(name);
      }
      //返回this，保证能够链式编程
      return this;
    },
    removeClass:function(name){
      for(var i = 0; i < this.length; i++){
        this[i].classList.remove(name);
      }
      return this;
  },
    hasClass:function(name){
      for(var i = 0; i < this.length; i++){
        //遍历this，判断是否含有某个元素包含了name，只要有一个就返回true，如果都没有，就返回false
        if(this[i].classList.contains(name)){
          return true;
        }
      }
      return false;
    },
    toggleClass:function(name){
      for(var i = 0; i < this.length; i++){
        this[i].classList.toggle(name);
      }
    },
    //属性的思路：
    //判断参数的个数
      //如果参数的个数是2个，说明需要设置属性
      //如果参数的个数是1个
          //如果参数的类型是字符串，说明需要获取样式
          //如果参数的类型是object，说明要设置多个样式
    css:function(name,value){
      //设置单个样式
      if(arguments.length == 2){
        for(var i = 0; i < this.length; i++){
          this[i].style[name] = value;
        }
      }
      //设置或者获取样式
      if(arguments.length == 1){
        //设置多个样式
        if(typeof arguments[0] == 'object'){
          var obj = arguments[0];
          for(var k in obj){
            for(var i = 0; i < this.length; i++){
              this[i].style[k] = obj[k];
            }
          }
        }
        if(typeof arguments[0] == 'string'){
          return window.getComputedStyle(this[0])[name];
        }
      }
    }
  })

  jQuery.fn.init.prototype = jQuery.prototype;

//把构造函数暴露给全局对象
  window.jQuery = window.$ = jQuery;
})(window);

