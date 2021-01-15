// var a=2;
// {
//     let a=3;
// }
// console.log(a);


// import {a} from './temp.js';
// console.log(a);

// import {a,add} from './temp.js';
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
// // // {foo}={foo:'lj'};  
// // foo={foo:'lj'};
// // // ({foo}={foo:'lj'});
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

// 5、字符串模板
// ES5字符串拼接的列子
// let lj='梁娟';
// let blog='<b>欢迎你</b>'+lj+'，来到这里。';
// document.write(blog);

//6、ES6写法
// let lj='12';
// let blog=`<b>欢迎来到</b>${lj},中国`;
// document.write(blog);
// document.write(blog.indexOf(lj));


// let lj='梁娟';
// let blog='欢迎你梁娟';
// document.write(blog.indexOf(lj));
// //ES6直接用includes就可以判断，不在返回索引值
// document.write(blog.includes(lj));
// //判断开头是否存在
// document.write(blog.startsWith(lj));
// //判断结尾是否cunzai
// document.write(blog.endsWith(lj));

//复制字符串
// document.write('*'.repeat(3));//复制3个

//如何判断是否是数字
// let a=11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('lj'));
// console.log(Number.isFinite(NaN));  //不是数字型
// console.log(Number.isFinite(undefined));

//ES5判断NaN
// console.log(isNaN(NaN));
// console.log(isNaN(undefined));
// console.log(isNaN("lj"));
// console.log(isNaN(123));
// console.log(isNaN({}));
// console.log(isNaN(100+'2'));
// console.log(100+'2');
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
// // let arr=Array.of(json);
// console.log(arr);

// let arr=Array.of('太极','liangjuan','开发者社区');
// console.log(arr);


//find案列方法
// let arr=[1,2,3,4,5,6,7,8];
// // find(参数：1.值 2.索引 3.数组)
// // value:表示当前查找的值
// // index:表示当前查找的数组索引
// // arr:表示当前数组
// var v=arr.find((value,index,arr)=>{
//     return value>4;
//     // return index>4;
// });
// console.log(v);

// findIndex()方法
// let arr1=[1,2,3,5,6,7,8];
// var i=arr1.findIndex((value)=>value>4);
// console.log(i);

//filter()方法  不同之处在于filter返回的是数组


//数组去重  遍历数组中第一次出现的下标，与数字输在所在数组的下标进行比较 
var myArr=[1,3,4,5,6,3,7,4];
// console.log(myArr.indexOf(3));
// console.log(myArr.filter((value,index,arr)=>arr.indexOf(value)===index));

//fill  (左闭右开)  fill()实例方法：参数1.内容 2.开始位 3.结束位
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
// console.log(add(1));

//默认值，es6箭头函数
// var add=(a,b=2)=>a+b;
// console.log(add(3));

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
//     a:'lj',
//     b:undefined,
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
// //a指key
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
// let arr=['lj','12','45','15','45'];
// arr.filter(x=>console.log(x));

//数组遍历some
// let arr=['lj','12','45'];
// arr.some(x=>console.log(x));

//数组遍历map
// let arr=['lj','12','45'];
// console.log(arr.map(x=>'web'));
//数组转换成字符串
// let arr=['lj','12','45'];
// console.log(arr);
// console.log(arr.toString());
// console.log(arr.join('|'));




//ES6对象
//对象赋值
// let name='xtb';
// let skill='web';
// var obj={name,skill};
// console.log(obj);

//对象的key值构建
// let key='skill';
// var obj={
//     [key]:'web'
// }
// console.log(obj.skill);

//自定义对象的方法
// let obj={
//     add:function(a,b){
//         return a+b;
//     },
//     delete:function(a,b){
//         return b-a;
//     }
// }
// console.log(obj.add(1,2));
// console.log(obj.delete(1,5));

//object.is() 对象比较
//is()
// let obj1={name:'lj'};
// let obj2={name:'lj'};
// console.log(obj1.name===obj2.name);
// console.log(Object.is(obj1.name,obj2.name));
// //===同值相等 is严格相等
// console.log(+0===-0);
// console.log(NaN===NaN);
// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));

//assign  合并对象
// let a={a:'lj'};
// let b={b:'xtb'};
// let c={c:'web'};
// let d=Object.assign(a,b,c);
// console.log(d);

//Symbol ES6新增的  对对象元素的保护作用(数据类型)
// let a=new String;
// let b=new Number;
// let c=new Boolean;
// let d=new Array;
// let e=new Object;
// let f=Symbol();
// console.log(typeof(f));

//Symbol的打印
// let lj=Symbol('梁娟');
// console.log(lj);
// console.log(lj.toString());

//Symbol对象中的应用
// let lj=Symbol();
// let obj={
//     [lj]:'梁娟'
// }
// console.log(obj[lj]);
// console.log(obj.lj);
// obj[lj]='太极员工';
// console.log(obj[lj]);

//Symbol对象元素的保护作用
// let obj={name:'lj',skill:'web',age:'18'};
// for(let item in obj){
//     console.log(obj[item]);
// }
// let obj={name:'lj',skill:'web'};
// let age=Symbol();
// // obj[age]=18;
// obj.age=18;
// console.log(obj);
// for(let item in obj){
//     console.log(obj[item]);
// }
// console.log(obj[age]);

//set的申明(数据结构)  Set和Array的区别 Set不允许有重复的值，如果有只显示一个，Set不是数组 
// let setArr=new Set(['lj','梁娟','web','lj',])
// // setArr.add('456');
// // setArr.delete('web');
// // setArr.clear() //删除全部
// console.log(setArr);
// //has查找set中的值
// console.log(setArr.has('lj'));

//循环输出
// for ..of
// for(let item of setArr){
//     console.log(item);
// }
//forEach()
// setArr.forEach((value)=>console.log(value));
// //size属性 size属性可以获得set的值的数量
// console.log(setArr.size);
//WeekSet的申明 
// let weakObj=new WeakSet();
// let obj={a:'lj',b:'梁娟'};
// let obj1=obj;
// // let obj1={a:'lj',b:'梁娟'};
// weakObj.add(obj);
// weakObj.add(obj1);
// console.log(weakObj);

//eg
// const s=new Set();
// [2,3,5,4,5,2,3].forEach(x=>{s.add(x)});
// for(let i of s){
//     console.log(i);
// }

//Map的数据结构
//json
// let json={
//     name:'lj',
//     skill:'web'
// };
// // console.log(json.name);
// //=》
// var map=new Map();
// map.set(json,'I am');
// console.log(map);
// // map.set('lj',json);
// // console.log(map);
// //map增删查
// //get取值
// console.log(map.get(json));
// //delete删除指定的值
// // map.delete(json);
// // console.log(map);
// //clear删除全部的值
// // map.clear();
// //size
// console.log(map.size);
// //has
// console.log(map.has(json));

//map转成数组
// const myMap = new Map()
//   .set(true, 7)
//   .set({foo: 3}, ['abc']);
// [...myMap]
// console.log(...myMap);

// Map 转为对象
// 如果所有 Map 的键都是字符串，它可以无损地转为对象。
// function strMapToObj(strMap) {
//     let obj = Object.create(null);
//     for (let [k,v] of strMap) {
//       obj[k] = v;
//     }
//     return obj;
//   }
  
//   const myMap = new Map()
//     .set('yes', true)
//     .set('no', false);
//     console.log(myMap);
//   console.log(strMapToObj(myMap)); 
  

//proxy 代理ES6 增强 对象和函数（方法）生命周期 预处理
// let obj={
//     add:function(val){
//         return val+100;
//     },
//     name:'I am xtb'
// }
// console.log(obj.add(10));
// console.log(obj.name);
//for example
const employee={
    firstName:'xiao',
    lastName:'tibo'
};
// console.group('employee');
// console.log(employee.firstName);
// console.log(employee.lastName);
// console.log(employee.org);
// console.log(employee.fullName);
//console.groundEnd();
// let handler={
//     get:function(target,fieldName){
//         if(fieldName==='fullName'){
//             return  `${target.firstName} ${target.lastName}`;
//         }
//         //三目运算符
//         return fieldName in target ?
//         target[fieldName]:
//         `No such propery as ,'${fieldName}'!`
//     }
// };
// let p=new Proxy(employee,handler);
// console.log('proxy');
// console.log(p.firstName);
// console.log(p.lastName);
// console.log(p.org);
// console.log(p.fullName);
// console.groupEnd()

//改变set方法来实现一个验证的例子：新建一个handler,重命名为validator
// const validator={
//     set:function(obj,prop,value){
//         // console.log(obj);
//         // obj.firstName='123';
//         if(prop==='age'){
//             if(!Number.isInteger(value)){
//                 throw new TypeError('Age is always an Integer ,Please Corret it!');
//             }
//             if(value<0){
//                 throw new TypeError('This is insane,a negative age?');
//             }
//         }
//     }
// }
// //然后再新建一个Proxy
// let pr=new Proxy(employee,validator);
// //然后再尝试设置一个不合法的属性，比如：
// // pr.age='test';
// pr.age=-2;
// console.log(pr.firstName);

// var pro=new Proxy({
//     add:function(val){
//         return val+100;
//     },
//     name:'I am xtb',
// },{
//     get:function(target,key,property){
//         console.log('come in Get');
//         return target[key];
//     },
//     set:function(target,key,value,recriver){
//         console.log(`setting ${key}=${value}`);
//         return target[key]=value+'222';
//     }
// });
// console.log(pro.add(12));
// console.log(pro.name);
// pro.name;
// pro.name='肖体波';
// console.log(pro.name);

//apply的使用
// let target =function(val){
//     console.log('I am xtb');
//     return val+=100
// }
// let handler={
//     apply(target,ctx,args){
//         console.log('do play');
//         return Reflect.apply(...arguments);
//     }
// }
// let pro=new Proxy(target,handler);
// console.log(pro(8));

//promise
//promise es5回调地域
// let state=1;
// function step1(resolve,reject){
//     console.log('1、开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭');
//     }else{
//         reject('洗菜做饭-错误')
//     }
// }
// function step2(resolve,reject){
//     console.log('2、开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭');
//     }else{
//         reject('坐下来吃饭-错误')
//     }
// }
// function step3(resolve,reject){
//     console.log('3、开始-收拾桌子');
//     if(state==1){
//         resolve('收拾桌子');
//     }else{
//         reject('收拾桌子-错误')
//     }
// }
// ///////
// new Promise(step1).then(function(val){
//     console.log(val);
//     return new Promise(step2);
// }).then(function(val){
//     console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
// })

//class类
// class Coder{
//     name(val){
//         console.log(val);
//         // return val;
//     }

// // let lj=new Coder;
// // lj.name('梁娟');
// skill(val){
//     console.log(this.name('梁娟')+':'+'skill-'+val);
// }


// let lj=new Coder;
// lj.name('lj');
// lj.skill('web');

//类的传参

// consructor(a,b){
//     this.a=a;
//     this.b=b;
// }
// add(){
//     return this.a+this.b;
// }
// }
// lj=new Coder(1,2);
// // lj.name('梁娟');
// // lj.skill('web');
// console.log(lj.add());
// //类的继承
// class htmler extends Coder{

// }
// let ljDev=new htmler;
// ljDev.name('梁娟');




//自定义对象方法
