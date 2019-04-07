# Decorator修饰器

写一个只读的修饰器

```js
// 三个参数：修改的类本身、修改的属性名、该属性的描述对象
let readonly = function(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Test {
  @readonly
  time(){
    return '2019-04-08';
  }
}

let test = new Test();
console.log(test.time()); // 2019-04-08
test.time = function() {
  console.log('尝试修改');
} // 报错，因为被修饰器限制成了只读
```

::: danger
目前修饰器并未获得浏览器支持（包括chrome），修饰器大部分使用在TS中，若想使用修饰器，记得设置Babel！
:::

## 修饰器的其他用法

修饰器可以使用在类的外面，当然，你得写在class之前

```js
let tyepname = function(target, name, descriptor) {
  return target.myname = 'CyanAqing';
}

// 通过修饰器给类增加了一个静态属性
@typename
class Test {

}

console.log('类修饰器', Test.myname);
```

::: tip
这里已经能看到修饰器的强大之处了，但修饰器手动去写太过于麻烦，这里推荐一个第三方库，帮我们完成了大部分的修饰器 `core-decorators`，使用 npm 安装 `npm install core-decorators`。:apple:
:::