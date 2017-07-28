//ES6允许按照一定模式，从数组和对象中提取值，对变量（参数）进行赋值，这被称为解构

//1. 数组解构
// 中括号声明多个变量
// 按照顺序取值
var data = [1, 2, 3]; 

//1.1 从数组中依次提取第1、2、3位置的数据给a、b、c
let [a, b, c] = data; 
console.log("a:%d b:%d c:%d", a, b, c); 

//1.2 从数组中依次提取第1、3位置的数据给x、z
let [x, , z] = data; 
console.log("x:%d z:%d", x, z); 

//------------------------------------------------------------------------
//2. 对象解构
// 花括号声明多个变量
// 按照键名取值(变量与属性同名)
var o =  {name:"es6", year:2015, simple:"es2015", full:"ecmascript 2015"}; 

//2.1 从对象中按照键名称提取值给对应的变量名称
var {name, year} = o; 
console.log("name:%s year:%d", name, year); 

const {simple, full} = o; 
console.log("simple:%s full:%s", simple, full); 

// 全写语法(key:var--取值属性名称：声明变量名称)
// 当声明变量名跟属性名称不一致时使用
let {name:newName, year:newYear} = o; 
console.log("newName:%s newYear:%d", newName, newYear); 