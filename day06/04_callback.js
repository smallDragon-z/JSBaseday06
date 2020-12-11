/*
function fn(a){
  //a=function(){}
  //如果调用传递的函数，需要调用a即可
  a();
}
fn( function(){
  console.log(123);
} );
*/

function ran(madai){
  console.log('然哥开始跑第1棒');
  console.log('然哥到达了第1棒终点');
  //madai=dong
  //madai()  dong()
  //调用传递进来的函数dong，通过参数madai
  madai();
}
function dong(){
  console.log('东哥开始跑第2棒');
  console.log('东哥到达了终点');
}
//ran(dong);
ran( function(){
  console.log('陌生人开始跑...');
} );
