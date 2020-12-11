//内置构造函数创建对象
var emp=new Object();
emp.eid=1;
emp.ename='东哥'
//console.log(emp);

//练习：使用内置构造函数创建一个商品的对象，包含有商品的编号，标题，价格，是否在售。
var laptop=new Object();
laptop.lid=1;
laptop.title='小米Air';
laptop.price=4199;
laptop.isOnsale='是'
//console.log(laptop);

//遍历属性
for(var k in laptop){
  //k 每个属性名
  console.log(k,laptop[k]);
}





