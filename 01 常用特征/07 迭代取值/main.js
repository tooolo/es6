var data = ["es", "ecmascript", "js", "javascript"]
var obj =  {name:"es6", year:2015}; 

//1. 迭代取键 for in 
for (let key in data) {
    console.log("array key:", key); 
}
for (let key in obj) {
    console.log("object key:", key); 
}

//------------------------------------------------------------------------
//2. 迭代取值(Iterator接口消费) for of
// 数组原生具备iterator接口
for (let value of data) {
    console.log("array value:", value); 
}

// object不具备iterator接口
try {
    for (let value of obj) {
        console.log("object value:", value); 
    }
}catch(ex) {
    console.log("object 不具备iterator接口"); 
}

// 集合对象(Map、Set、WeakMap、WeakSet)具备iterator接口
