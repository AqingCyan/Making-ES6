# Generator，异步的解决办法

## 基本概念

Generator，其实就是异步编程的解决方案。早期我们通过回调函数来处理异步编程的控制，后来Promise与then的配合解决了回调地狱的麻烦（但会有不停的then、then、then）。但ES6又提供给我们了一个全新的方案，来解决臃肿的异步代码。

Generator里包含多个步骤，它遇到不同的步骤标志，会做不同的事，然后通过调用next方法来进行下一步。

## Generator的使用

```js
// geterator的基本定义
let tell = function* () {
  yield 'a';
  yield 'b';
  return 'c';
}

let k = tell();

console.log(k.next()); // {value: "a", done: false}
console.log(k.next()); // {value: "b", done: false}
console.log(k.next()); // {value: "c", done: true}
console.log(k.next()); // {value: undefined, done: true}
```

- 函数后面加上 `*` 变成 `Generator`函数。
- 在执行tell的时候，会在遇到的第一个 `yield` 的时候停下来，执行完 `yield` 中的语句。
- 调用 `next` 执行下一部分内容。

这和 iterator 十分相似，其实我们也可以通过 Generator 的方式来定义 iterator

```js
let obj = {};
onj[Symbol.iterator] = function* () {
  yield 'a';
  yield 'b';
  yield 'c';
}
```

## 使用Generator实现状态机

不断获取状态机的状态，周而复始

```js
let state = function* (){
  while(1) {
    yield 'a';
    yield 'b';
    yield 'c';
  }
}

let status = state();
console.log(status.next());
console.log(status.next());
console.log(status.next());
console.log(status.next());
console.log(status.next());
console.log(status.next());
console.log(status.next());
// ······
```

## 语法糖：async与await

ES7对 Generator 的语法进行了语法糖封装

```js
let state = async function (){
  while(1) {
    await 'a';
    await 'b';
    await 'c';
  }
}
```

## 实例案件

抽奖逻辑的实现（前端部分对抽奖次数做一个限制），以前的做法可能是设置全局变量保存抽奖次数，但这样做不够安全。

```js
let draw = function(count) {
  // 随机部分忽略
  console.info(`剩余${count}次`);
};

let residue = function*(count) {
  while (count > 0) {
    count--;
    yield draw(count);
  }
};

let start = residue(5); // 初始抽五次
let btn = document.createElement("button");
btn.id = "start";
btn.textContent = "抽奖";
document.body.appendChild(btn);
document.getElementById("start").addEventListener(
  "click",
  function() {
    start.next();
  },
  false
);
```