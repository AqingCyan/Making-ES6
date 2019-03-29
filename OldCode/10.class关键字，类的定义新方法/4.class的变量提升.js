//function 会有变量提升，所以在之前执行函数或者new 一个实例是没有问题的
FF();
new FF;

function FF() {
    this.f = "ff";
}


//ES6中的class与let、const一样没有变量提升
// new GG;//报错：GG is not defined 说明这里是认为GG是没有被声明的
class GG{
    constructor(){
        this.gg = "gg";
    }
}