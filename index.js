// var a=2;
// {
//     let a=3;
// }
// console.log(a);

//用var申明的循环
// for(var i=0;i<10;i++){
//     console.log('循环体中：'+i);
// }
// console.log('循环体外：'+i);

//用const申明一个常量
// const a='lj';
// var a='xtb';
// console.log(a);




//数组结构的方式
// let [a,b,c,d]=[1,2,3];
// console.log(a);
// console.log(d);


// // undefined 相当于什么都没有 null相当于有值 值是null 
// let [a,b="lj"]=['xtb',undefined];
// console.log(a+b);

// //undefined和null区别
// let [a,b="lj"]=['xtb',null];
// console.log(a+b);

// let {foo,bar}={bar:'xtb',foo:'lj'};
// console.log(foo+bar);

// //圆括号的使用
// let foo;
// // {foo}={foo:'lj'};  
// // foo={foo:'lj'};
// ({foo}={foo:'lj'});
// console.log(foo);


// //字符串解构
// const [a,b,c,d,e]='liang';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

//扩展运算符
//对象扩展运算符
// function taiji(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
// taiji(1,2,3);

//声明两个数组arr1和arr2,然后我们把arr1赋值给arr2,然后我们改变arr2的值，发现arr1的值也改变了
// let arr1=['www','taiji','com'];
// // let arr2=arr1;
// let arr2=[...arr1];
// console.log(arr2);
// arr2.push('lj');
// console.log(arr2);
// console.log(arr1);


//rest... 剩余
// function taiji(first,...arg){
//     console.log(arg.length);
//     // console.log(first);
//     console.log(arg);
// }
// taiji(0,1,2,3,4,5,6,7);

//如何循环输出rest运算符
// function taiji(first,...arg){
//     for(let val of arg){
//         console.log(val);
//     }
// }
// taiji(0,1,2,3,4,5,6,7);

//5、字符串模板
//ES5字符串拼接的列子
// let lj='梁娟';
// let blog='欢迎你'+lj+'，来到这里。';
// document.write(blog);

//6、ES6写法
// let lj='12';
// let blog=`<b>123</b>${lj},123`;
// document.write(blog.indexOf(lj));


// let lj='梁娟';
// let blog='欢迎你梁娟';
// document.write(blog.indexOf(lj));
// //ES6直接用includes就可以判断，不在返回索引值
// document.write(blog.includes(lj));
//判断开头是否存在
// document.write(blog.startsWith(lj));
//判断结尾是否cunzai
// document.write(blog.endsWith(lj));

//复制字符串
// document.write('*'.repeat(3));//复制3个

//如何判断是否是数字
// let a=11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('lj'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));

//ES5判断NaN
// console.log(isNaN(NaN));
// console.log(isNaN(undefined));
// console.log(isNaN("lj"));
// console.log(isNaN(123));
// console.log(isNaN({}));
// console.log(isNaN(100+'2'));
// console.log("*****************");
// //ES6判断NaN
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN("lj"));
// console.log(Number.isNaN(123));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN(100+'2'));

//Number.isInteger判断是否为整数
// let a=918.1;
// console.log(Number.isInteger(a));
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));

//整数取值范围
// let a=Math.pow(2,53)-1;
// console.log(a);
// //最大安全整数
// console.log(Number.MAX_SAFE_INTEGER);
// //最小安全整数
// console.log(Number.MIN_SAFE_INTEGER);
// //安全整数判断
// console.log(Number.isSafeInteger(a));

//ES6新增的知识
// let json={
//     '0':'lj',
//     '1':'梁娟',
//     '2':'太极员工',
//     length:3
//     //length必须写
// }
// console.log(json);
// //把json数组转成array Array.from方法
// let arr=Array.from(json);
// console.log(arr);

// let arr=Array.of('太极','liangjuan','开发者社区');
// console.log(arr);

//find案列方法
// let arr=[1,2,3,4,5,6,7,8];
//find(参数：1.值 2.索引 3.数组)
//value:表示当前查找的值
//index:表示当前查找的数组索引
//arr:表示当前数组
// var v=arr.find((value,index,arr)=>{
//     // return value>4;
//     return index>4;
// });
// console.log(v);

//findIndex()方法
// let arr1=[1,2,3,4,5,6,7,8];
// var i=arr1.findIndex((value)=>value>4);
// console.log(i);

//filter()方法  不同之处在于filter返回的是数组


//数组去重  遍历数组中第一次出现的下标，与数字输在所在数组的下标进行比较 
// var myArr=[1,3,4,5,6,3,7,4];
// console.log(myArr.filter((value,index,arr)=>arr.indexOf(value)===index));

//fill  (左闭右开)
// let arr=['lj','123','45','78'];
// arr.fill('web',1,3);
// console.log(arr);

//数组循环
// let arr=['lj','梁娟','太极会员'];
// for(let item of arr){
//     console.log(item);
// }

//for...of数组索引
// let arr=['lj','梁娟','太极会员'];
// for(let index of arr.keys()){
//     console.log(index);
// }

//同时输出数组内容和索引
// let arr=['lj','梁娟','太极公司'];
// for(let [index,val] of arr.entries()){
//     console.log(index+':'+val);
// } 

//entries方法，切分数组
// let arr=['lj','梁娟','太极公司'];
// let list=arr.entries();
// console.log(list);
// console.log(list.next().value);
// console.log("******");
// console.log(list.next().value);
// console.log(list.next().value);

//ES6箭头函数
//首先是ES5的写法
// 'use strict'
// function add(a,b=1){
//     //'use strict'
//     if(a===0){
//         throw new Error("This is error");
//     }
//     return a+b;
// }
// console.log(add(1));
// console.log(add.length);
//此处获得的参数的个数必须传递参数的个数，如果有默认则不计入其内
//有严谨模式‘use strict’有默认值的时候是不行的
// function add(a,b=1){
//     'use strict'
//     return a+b;
// }

//默认值，es6箭头函数
// var add=(a,b=2)=>a+b;
// console.log(add(1));

// var add=(a,b=1)=>{
//     console.log('taiji');
//     return a+b;
// }
// console.log(add(1));

//对象的函数解构
// let a=undefined;
// function fun(a=4){
//     console.log(a);
// }
// fun(a);

//对象的函数解构
// let json={
//     a='lj',
//     b:undefined
// }
// function fun({a,b='web'}){
//     console.log(a,b);
// }
// fun(json);


//数组的函数解构
// let arr=['lj','梁娟','太极'];
// function fun(a,b,c,d){
//     console.log(a,b,c,d);
// }
// fun(...arr);

//in的用法
// let obj={
//     a:'lj',
//     b:'梁娟'
// }
// //c指key
// console.log('a' in obj);

//数组判断
// let arr=[,,,];
// console.log(arr.length);  //3
// console.log(0 in arr) //false
// //注意：这里的0指的是数组下标位置是否为空
// let arr1=['lj','梁娟'];
// console.log(0 in arr1);  //true

//数组遍历 foreach
// let arr=['lj','12','45'];
// arr.forEach((val,index)=>console.log(index,val));

// //数组遍历filter
// let arr=['lj','12','45'];
// arr.filter(x=>console.log(x));

//数组遍历some
// let arr=['lj','12','45'];
// arr.some(x=>console.log(x));

//数组遍历map
// let arr=['lj','12','45'];
// console.log(arr.map(x=>'web'));
//数组转换成字符串
let arr=['lj','12','45'];
console.log(arr);
console.log(arr.toString());
console.log(arr.join('|'));