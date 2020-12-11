var person={
  name:'山田一然',
  sex:'女',
  play1:function(){//方法
    console.log(this.name+'正在玩单杠');
  }
};
console.log(person);
person.play1();//调用方法