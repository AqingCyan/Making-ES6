let ary = ["Aqing","Cyan","Vue","React","Node"];
let map = new Map();
//遍历数组接口 然后解构赋值
for(let [index,value] of ary.entries()){
    map.set(index,value);
}
console.log(map);