//全局污染：全局变量的出现带来的影响，在任意的作用域下都可以访问到。
//轮播图1
(function(){
  var num=1;
  console.log(num);
})();
//轮播图2
(function(){
  var num=2;
  console.log(num);
})();
//轮播图3
(function(){
  var num=4;
  console.log(num);
})();
