//布尔值
let bool:boolean = true;
console.log(bool);

//数值
let num:number = 1
console.log(num);

//字符串

let str:string = 'break'
console.log(str);

//数组
//写法一
let arr:number[] = [1,2,3,4,5];
//写法二
let arr2:Array<string> = ['break'];
console.log(arr,arr2);

//元组    限制了 数组的长度以及类型
let tuple:[number,string,Array<any>] = [1,'Break',[111,22,33,4]]
console.log(tuple)

//枚举类型
enum Admin {
    admin,
    admin2 = 6,
    admin3
}
console.log(Admin);
console.log(Admin[6]);  //通过索引 获取key
console.log(Admin.admin);   //通过key 获取索引


//any类型 任意类型
let Any:any = 11;
Any = 'Break';
const arrAny:any[] = [11,3,true,{ss:1}];

//void类型    一般用于不返回任何值
const consoleTxt = (txt:string):void =>{
    throw new Error(txt);
}
// consoleTxt("Break");

//never 类型  方法永远没有返回值
const errorFunc = ():never=>{
    while (true){
        console.log('aaa')
    }
}

// object 类型

let obj = {
    name:'break',
    age:18
}

let obj2 = obj;
const getObj = (obj:object):void=>{
    console.log(obj);
}
getObj(obj);

obj2.age = 10;

//类型断言  当我们知道一个数据的类型的时候 但是ts 给我们提示报错 就用到类型断言

const getLength = (target:number|string):number =>{ //这里我的逻辑没问题 但是ts依然会报错 就会用到类型断言
    if( (<string>target).length || (target as string).length === 0 ){
        return (target as string).length;
    }else{
        return target.toString().length;
    }
}
console.log(getLength(111));
console.log("ok")
console.log("")

