//对象字面量
var phone={
  color:'黑色',
  brand:'华为',
  'size':5.8,
  'made-in':'中国'
};
//console.log(phone);

//练习：创建一个人对象，包含的属性有姓名、性别、身高、体重...
var ran={
  name:'山田一然',
  sex:'女',
  height:'147cm',
  weight:'147kg',
  'birth-time':'1977-5-29'
};
//访问属性
//console.log( ran.name,ran.color );
//ran.color='绿色';
//console.log(ran);
//console.log( ran['birth-time'], ran['sex'] );

//练习：创建一本图书的对象，包含的属性有编号、标题、价格、作者；打印出图书的标题，修改图书的价格，添加图书的出版社属性，打印对象。
var book={
  bid:1003,
  title:'兔子的产后护理',
  price:99,
  author:'然桑'
};
console.log(book.title);
book.price=129;
book['pub']='八宝山出版社';
console.log(book);

