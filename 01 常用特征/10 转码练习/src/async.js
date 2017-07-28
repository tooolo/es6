async function timeout(data) {
    return new Promise((resolve, reject) =>  {
        setTimeout(function () {
            if (data == 4) {
                reject(data); 
            }else {
                resolve(data); 
            }
        }, 1000); 
    }); 
}

function test1() {
    timeout(1); 
    timeout(2); 
    timeout(4); 
}
async function test2() {
    await timeout(1); 
    await timeout(2); 
    await timeout(4); 
}

test1(); 
test2(); 