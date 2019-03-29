class A {
    constructor(x){
        this.x = x;
    }
    getX(){
        console.log(this.x);
    };
    static getY(){
        //这里的this是:[Function: A]
        console.log(this);
    }
}

A.getY();

//子类B继承父类A
class B extends A {
    constructor(x){
        //子类没有this，this继承于父类，必须要写super
        //super()执行完后才会有this,super就是父类的constructor
        //我们看到父类传递了一个x，所以子类也需要传递x
        //不可以在super()执行之前就使用this,会报错，因为此时还没有this
        super(x);
        this.y = 100;
    }
    getX(){
        //如何让这个getX是来自于父类原型的getX？
        //使用关键字 super
        //super指向的是父类的原型
        super.getX();
    }
    //父类的静态方法(私有方法)也可以继承
    static getY(){
        //此时的super指的是父类本身,getY是父类本身的私有方法
        super.getY();
    }
}

let b = new B("Cyan");
b.getX();//"Cyan"
B.getY();//[Function: B]