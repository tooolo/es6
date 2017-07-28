"use strict";

var a = 1;
var b = 2;

var c = 3,
    d = 4;
var _name$year = { name: "es", year: 2015 },
    name = _name$year.name,
    year = _name$year.year;


var data = "learn " + name + year + ", var a=" + a + " b=" + b + " c=" + c + " d=" + d;
console.log(data);

var fn = function fn(x) {
  return x * x;
};
console.log("=> 2*2=%d", fn(2));