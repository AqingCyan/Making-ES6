//类就相当于原型，写在原型上的方法都被实例继承了，假如想给当前类本身加一些方法，我们可以在方法前面加上一个关键字：static，不会被实例继承，只有类本身可以使用
//例如 Array.of
class AA{
    constructor(){
        this.a = "aa";//私有的
    }
    getA(){//这是该类原型上的方法
        console.log("哈哈");
    }
    static  getB(){
        console.log("这是AA的静态方法");
    }
}
let aa = new AA;
console.log(aa);//AA { a: 'aa' }
aa.getA();//"哈哈"
console.log(aa.getB);//undefined
// aa.getB();//报错：aa.getB is not a function
AA.getB();//这是AA的静态方法  说明AA的静态方法只能在该类使用

//静态方法可以被子类继承
class F {
    static getF(){
        console.log("我是F的getF");
    }
}
//class G继承F
class G extends F{
    constructor(){
        super();
    }
    static getF(){
        super.getF();
    }
}

G.getF();