# Babel转码器

## 描述
1. 语法转码器  

    Babel作为一种转码器（transformer），可以将高版本的ES脚本语法转换为低版本(如es5)的脚本语法，需要注意的是，Babel转码器只转换语法，不转换扩展的API和对象。转换时需使用指定的转码规则（babel-preset-XXX）,转码后比规则低一版本。

2. 扩展函数库（Polyfill）

    由于Babe不转码扩展对象与API，所以需通过安装扩展函数库（babel-polyfill），来使低版本的环境支持高版本的扩展。

## 参考
- [Babel](https://babeljs.io/)
- [Babel中文](http://babeljs.cn/)
- [babel的使用](http://www.jianshu.com/p/7a7f7abcddb5)
- [Babel入门教程](http://www.ruanyifeng.com/blog/2016/01/babel.html)

## 操作指南
1. 准备好转换配置文件(.babelrc)
    + .babelrc 文件存放在项目的根目录下  

    + 配置文件内容
        > {  
        >   "presets": ["es2015:,"react","es2017"],  
        >   "plugins": []  
        > }    

    + 配置说明
        > presets 字段设定转码规则，你可以根据需要安装  
        > plugins  字段设定加载的插件

    + 安装转码规则 [preset](https://cnpmjs.org/browse/keyword/babel-preset)
        > npm install --save-dev babel-preset-es2015  
        > npm install --save-dev babel-preset-react  
        > npm install --save-dev babel-preset-env  
        > npm install --save-dev babel-preset-es2017  

2. 命令行转码  
    + 安装Babel提供的babel-cli 工具，用于命令行转码
        > npm i -g babel-cli  

    + 转码输出：屏幕
        > babel src/main.js 
    
    + 转码输出：文件(-o | --out-file)
        > babel src/main.js -o bin/app.js
    
    + 转码输出：实时监控【一有变化就重新编译】（使用 -w 或 --watch ）
        > babel src/main.js -w -o bin/app.js

    + 转码输出：目录(-d | --out-dir)
        > babel src -d bin

3. 对于ES7async的支持
    + 安装运用时插件
        > npm i --save-dev babel-plugin-transform-runtime 
        
    + 修改配置文件
        > 在 .babelrc 文件中添加：  
        > "plugins": [[  
        >     "transform-runtime",  
        >     {  
        >     "helpers": false,   
        >     "polyfill": false,      
        >     "regenerator": true,    
        >     "moduleName": "babel-runtime"   
        >     }   
        > ]]  