//1. 类定义
class Person {
    //1.1 构造方法
    constructor(name, age) {
        this.name = name; 
        this.age = age; 
    }

    //1.2 普通方法
    show() {
        console.log("name:%s age:%d", this.name, this.age); 
    }

    //1.3 静态方法
    static cry() {
        console.log("don't cry for me"); 
    }
}

//------------------------------------------------------------------------
//2. 构建对象
var person = new Person("tom", 18); 

//2.1 使用属性
person.age ++ ; 

//2.2 使用方法
person.show(); 

//2.3 使用静态方法
Person.cry(); 

//------------------------------------------------------------------------
//3. 继承
class Employee extends Person {
    //默认构造--不写的时候自动生成如下代码
    // constructor(...args) {
    //     super(...args); 
    // }

    //构造方法
    constructor(name, age, salary) {
        //super 必须是第一句
        super(name, age); 

        this.salary = salary; 
    }

    //3.2 重写方法
    show() {
        super.show(); 
        console.log("salary:%d", this.salary); 
    }

}
//------------------------------------------------------------------------
//4. 构建对象
var emp = new Employee("mary", 20, 8000); 
//4.1 使用属性
emp.age ++ ; 
emp.salary += 1000; 

//4.2 使用方法
emp.show(); 

//4.3 使用静态方法
Employee.cry(); 