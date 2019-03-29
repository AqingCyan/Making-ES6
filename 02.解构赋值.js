// 解构赋值的本质就是赋值，解构意为左右结构一一对应进行赋值
{
  let a , b, c;
  [a, b] = [1, 2];
  console.log(a, b); // 输出：1 2
  console.log('我是分割线----------------');
}

{
  // 数组的解构赋值
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, rest); // 输出：1 2 [ 3, 4, 5, 6 ]
  console.log('我是分割线----------------');
}

{
  // 对象的解构赋值
  let a, b;
  ({a, b} = {a: 1, b: 2}); // 用括号是因为避免形成块作用域
  console.log(a, b); // 输出：1 2
  console.log('我是分割线----------------');
}

{
  // 解构赋值应用：默认值
  let a, b, c, rest;
  [a, b, c = 3] = [1, 2];
  console.log(a, b, c); // 输出：1 2 3
  [a, b, c] = [1, 2];
  console.log(a, b, c); // 输出：1 2 undefined
  console.log('我是分割线----------------');
}

{
  // 通过解构赋值实现变量交换
  let a = 1;
  let b = 2;
  console.log(a, b); // 1 2
  [a, b] = [b, a];
  console.log(a, b); // 2 1
  console.log('我是分割线----------------');
}

{
  // 通过解构赋值批量获取结果
  function f() {
    return [1, 2]
  }
  let a, b;
  [a, b] = f();
  console.log(a, b); // 1 2
  console.log('我是分割线----------------');
}

{
  // 通过解构赋值选择性的获取值
  function f() {
    return [1, 2, 3, 4, 5]
  }
  let a, b, c;
  [a,,,b] = f();
  console.log(a, b); // 1 4
  console.log('我是分割线----------------');
}

{
  function f() {
    return [1, 2, 3, 4, 5]
  }
  let a, b, c;
  [a, ...b] = f();
  console.log(a, b); // 1 [ 2, 3, 4, 5 ]
  [a, , ...b] = f();
  console.log(a, b); // 1 [ 3, 4, 5 ]
  console.log('我是分割线----------------');
}

{
  let o = {p: 42, q: true};
  let {p, q} = o;
  console.log(p, q); // 42 true
  console.log('我是分割线----------------');
}

{
  let {a = 10, b = 5} = {a: 3};
  console.log(a, b); // 3 5
  console.log('我是分割线----------------');
}

{
  let metaData = {
    title: 'abc',
    test: [{
      title: 'test',
      desc: 'description'
    }]
  };
  let {title:esTitle, test:[{title:cnTitle}]} = metaData;
  console.log(esTitle, cnTitle); // abc test
  console.log('我是分割线----------------');
}
