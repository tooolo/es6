let a = 1; 
const b = 2; 

let [c, d] = [3, 4]; 
const {name, year} =  {name:"es", year:2015}; 

let data = `learn ${name}${year}, var a=${a} b=${b} c=${c} d=${d}`; 
console.log(data); 

let fn = (x) =>  x * x; 
console.log("=> 2*2=%d", fn(2)); 