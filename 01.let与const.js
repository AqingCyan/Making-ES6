{
  /* 块作用域：在ES6中，被大括号包裹起来的内容，会形成块作用域，把作用域中的变量保护起来，外面访问不到 */
  function test() {
    for (var i = 1; i < 3; i++) {
      console.log(i);
    }
    console.log(i); // i可以正常访问
  }

  function test2() {
    for (let i = 1; i < 3; i++) {
      console.log(i);
    }
    console.log(i); // i会报错：ReferenceError: i is not defined
  }
  // 为什么这里报错是引用错误，而不是输出Undefined？ES6采用严格模式，变量未声明不能使用
  test();
  // test2();
  console.log('我是分割线----------------');
}

{
  // let 与 const 一旦声明就不能被重复定义
  let a = 1;
  // let a = 3; // 报错：'a' has already been declared
  console.log('我是分割线----------------');
}

{
  // PI用来定义常量，常量不能修改，定义的时候必须赋值，但const定义的是一个引用类型，就可以对引用类型进行修改（本质赋值的是地址，地址不能改变）
  const PI = 3.1415926;
  console.log(PI);
  // PI = 123; // 报错：Assignment to constant variable.
  const Arr = [1, 2, 3];
  Arr.push(4);
  console.log(Arr);
  console.log('我是分割线----------------');
}

{
  // let 与 const 没有变量提升
  // console.log(a); // 报错：a is not defined
  let a = 1;
  console.log(a);
  console.log('我是分割线----------------');
}

{
  // 补充知识点：let和const在全局使用，不会给window对象增加属性，而var会
  // 把下面代码放到浏览器console中执行
  /*let a = 1;
  var b = 1;
  console.log(window.a);
  console.log(window.b);*/
}
