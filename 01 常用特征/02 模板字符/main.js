//模板字符串(可读的字符串，简洁的语法，适当的换行，字符串插值)
//1.1 使用反单引号
//1.2 使用 ${} 特征引用变量来取值

var name = "es6"; 
let birth = 2015; 
const PS ="ps:";

var data = `${PS} name:${name} birth:${birth}`; 
console.log(data); 