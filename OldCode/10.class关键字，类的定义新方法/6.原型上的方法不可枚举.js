//ES5中的构造函数的方法可以枚举
function F() {
    this.f = "ff";
}
F.prototype.getF = function () {

};
let f = new F;
for(let key in f){
    console.log(key);
}//f 和 getF都遍历到了 公有和私有方法都可以枚举


class AA {
    constructor(){
        this.f = "ff";
    }
    getF(){

    }
}

let aa = new AA;
for (let key in aa){
    console.log(key);
}//f 只打印了f  公有方法没有被拿到 说明原型上的方法不可枚举