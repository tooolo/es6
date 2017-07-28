//1.作用域

//1.1 全局范围(模块范围)
var i = 0; 
console.log("全局变量 i:%d", i); 

//1.2 函数范围
function fnTest() {
    var i = 10; 
    console.log("函数范围 i:%d", i); 
}
fnTest();

//------------------------------------------------------------------------
//1.3 块级范围(不允许重复声明)
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log("块级范围 i:%d", i); 
    }, 1000); 
}

//1.4 常量(const 不能修改的变量--块级范围)
const PI = 3.14;
try{
    PI = 5;
}catch(e){
    console.log("常量不能修改，p:%d",PI);
}