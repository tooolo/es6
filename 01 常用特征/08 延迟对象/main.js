// Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
// 有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数(回调地狱、梯田效果)。
// 此外，Promise对象提供统一的接口，使得控制异步操作更加容易。

// Promise对象有以下两个特点
//1. 对象的状态不受外界影响。Promise对象代表一个异步操作，
//   有三种状态：Pending（进行中）、Resolved（已完成）和Rejected（已失败）。
//2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。


//------------------------------------------------------------------------
//1. 构建延迟对象
var promise = new Promise((resolve, reject) =>  {
    let num = Math.round(Math.random() * 10); 

    //延时处理
    setTimeout(function () {
        if (num >= 6) {
            //成功、解决、完成(结果参数)
            resolve(num); 
        }else {
            //失败、放弃、拒绝(拒绝原因)
            reject(num); 
        }
    }, 1000); 
}); 

//------------------------------------------------------------------------
//2. 关注延迟对象

//2.1 关注成功(then的第一个回调)与失败(then的第二个回调)
promise.then(data =>  {
    console.log("成功：%d", data); 
}, err =>  {
    console.log("失败：%d", err); 
}); 

//2.2 只关注失败(catch)
promise.catch(err =>  {
    console.log("catch 失败：%d", err); 
})

//2.3 建议写法
promise.then(data =>  {
    console.log("抽奖成功：%d", data); 
}).catch(err =>  {
    console.log("抽奖失败：%d", err); 
})

//------------------------------------------------------------------------
//3. 可以链式编程，实现依次(串行)调用(注意回调方法的返回结果是下一个回调的输入参数)
function timeout(num) {
    return new Promise((resolve, reject) =>  {
        setTimeout(function () {
            if (num == 4) {
                reject(num); 
            }else {
                resolve(num); 
            }
        }, 2000); 
    }); 
}

timeout(1).then(num =>  {
    console.log("结果:%s", num); 
    return timeout(2); 
}).then(num =>  {
    console.log("结果:%s", num); 
    return timeout(3); 
}).then(num =>  {
    console.log("结果:%s", num); 
    return timeout(4); 
}).then(num =>  {
    console.log("结果:%s", num); 
    return timeout(5); 
}).catch(err =>  {
    console.log("失败:%s", err); 
}); 

//------------------------------------------------------------------------
var p1 = timeout(1);
var p2 = timeout(2);
var p3 = timeout(3); 
// var p3 = timeout(4); 

//4. Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例(并发调用)
var p = Promise.all([p1, p2, p3]); 
p.then(data =>  {
    console.log("all:", data); 
}, err =>  {
    console.log("err:", err); 
}); 

// Promise.all方法接受一个数组作为参数，p1、p2、p3都是Promise对象的实例，
// 如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为Promise实例，再进一步处理。
// Promise.all方法的参数可以不是数组，但必须具有Iterator接口，且返回的每个成员都是Promise实例。

// 成功回调的参数的所有成功的结果，以数组存放
// 失败回调的参数是第一个失败的结果

//------------------------------------------------------------------------
//5.Promise.race方法同样是将多个Promise实例，包装成一个新的Promise实例(并发调用)
// var p1 = timeout(4);
var p1 = timeout(1);
var p2 = timeout(2);
var p3 = timeout(3); 

var p = Promise.race([p1, p2, p3]); 
p.then(data =>  {
    console.log("race one:", data); 
}, err =>  {
    console.log("race err:", err); 
}); 
// 上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。
// 那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

//6. 静态方法  
//6.1 Promise.resolve() 将结果包装成一个成功的延迟对象 
//6.2 Promise.reject()  将结果包装成一个失败的延迟对象