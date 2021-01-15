//模块化操作
export var a='lj';
//包装成对象
var a='lj';
var b='梁娟';
var c='web';
export {a,b,c};
//函数的模块化包装
export function add(a,b){
    return a+b;
}


// export default
// export{
//     name as a,
//     canme as b,
//     skill as c
// }