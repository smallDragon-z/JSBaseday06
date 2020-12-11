/*
var str='5';
//检测用户输入的值是否为NaN
//console.log( Number(str) );
console.log( isNaN(str) );
//如果用户输入的值中含有非数字，则打印'非法的数量'
if( isNaN(str) ){
  console.log('非法的数字');
}

//console.log(-1/0);//Infinity
//检测一个值是否为有限值
console.log( isFinite(2/3) );


console.log('parseInt(3.14)')
console.log( eval('parseInt(3.14)') );
*/

//弹出提示框，输入一组表达式，使用eval执行输入的表达式   05.html
var str=prompt();
alert( eval(str) );
