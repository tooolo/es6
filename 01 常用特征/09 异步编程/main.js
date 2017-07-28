//ES2017 标准引入了 async 函数，使得异步操作变得更加方便。
// nodejs需要v7.6以上支持

//1. 模拟异步方法
function timeout(data, time = 1) {
    var p = new Promise((resolve, reject) =>  {
        setTimeout(function () {
            if (data == 4) {
                reject(data); 
            }else {
                resolve(data); 
            }
        }, time * 1000); 
    }); 

    return p; 
}

//------------------------------------------------------------------------
//2. 定义异步函数(async | await )

//2.1 在函数前加async关键字
async function asyncTimeout(num) {
    try {
        //2.2 加await直接获得延迟对象的成功数据
        var data = await timeout(num, num); 
        console.log("data:%d", data); 
    }catch(ex) {
        //2.3 catch获得延迟对象的拒绝数据
        console.log("异步方法拒绝", ex); 
    }
}

//------------------------------------------------------------------------
//3. 测试异步函数调用
//3.1 异步函数之异步调用
function test1() {
    asyncTimeout(1); 
    asyncTimeout(10); 
    asyncTimeout(4); 
}

//3.2 异步函数之同步调用(加await)
//注意await只能在async函数中使用
async function test2() {
    await asyncTimeout(1); 
    await asyncTimeout(10); 
    await asyncTimeout(4); 
}

//分别调用以下方法看对比效果
// test1();
test2();
