//ES5中可以传参
function BB(name) {
    this.name = name;
}
let bb = new BB("Cyan");//此时对象bb具有私有属性name 值为"Cyan"

//ES6中的class中也可以传参
class AA {
    constructor(name){
        this.name = name;
    }
}

let aa = new AA("Aqing");
console.log(aa);//AA { name: 'Aqing' }


//采用class表达式让类直接执行
let a1 = new class{
    constructor(name){
        console.log(name);
    }
}("Cyan"); //"Cyan"
//这种写法直接加小括号 在声明定义的时候直接执行类 也就说它不能作为普通函数执行 但是可以作为构造函数执行
//也可以传参数，传给了类本身constructor

