//函数声明
function fn(){
}
//函数表达式
var fun=function(){
  console.log(1);
}
//调用
//fun();
//console.log( fun );
//console.log( fn );
//练习：使用函数表达式的方式创建函数，传递任意两个数字，返回两个数字之间所有整数的和。
//var getSum;//undefined

var getSum=function(n1,n2){
  for(var i=n1,sum=0;i<=n2;i++){
    sum+=i;
  }
  return sum;
}
console.log( getSum(1,100) );