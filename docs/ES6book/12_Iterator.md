# Iterator接口

不同的数据结构通过`for of`统一的形式来达到读取不同数据结构的目标，但其背后的原理即为遍历不同数据结构的 Iterator 接口。现在我们详细探究一下这个 Iterator接口。

```js
let arr = ['hello', 'world'];
let map = arr[Symbol.iterator]();
console.log(map.next()); // {value: "hello", done: false}
console.log(map.next()); // {value: "world", done: false}
console.log(map.next()); // {value: undefined, done: true}
```

next方法输出当前iterator访问到的值，是遍历完成。上面这个例子，是数组自己定义好的iterator接口。

## 自定义Iterator接口

我们自己实现一个iterator接口来实现能通过`for of`遍历。我们知道Object不可迭代，我们可以通过自定 iterator 来实现`for of`遍历它的规则

```js
let obj = {
  start: [1, 3, 2],
  end: [7, 9, 8],
  // 我们想先遍历start，再遍历end
  [Symbol.iterator]() {
    let self = this;
    let index = 0;
    let arr = self.start.concat(self.end);
    let len = arr.length;
    return {
      next() {
        if (index < len) {
          return {
            value: arr[index++],
            done: false // 还可以遍历
          }
        } else {
          return {
            value: arr[index++],
            done: true
          }
        }
      }
    }
  }
}

for(let key of obj) {
  console.log(key);
} // 1 3 2 7 9 8
```