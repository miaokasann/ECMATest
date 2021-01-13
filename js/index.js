/*
    do{}while()
*/
// let start = 0;

// do {
//     let n = 0;
//     do {
//         document.write("*")
//     } while (++n <= start)
//     document.write("<br />")
// } while (++start <= 5);

/*
    for循环杨辉三角
*/
// function hd(row = 5) {
//     for(let i = 1; i < row; i++) {
//         for(let m = row - i; m > 0; m--) {
//             document.write("*");
//         }
//         for(let n = i * 2 - 1; n > 0; n--) {
//             document.write("$");
//         }
//         document.write("<br />")
//     }
// }

// hd();

/*
    break和continue
*/

// for (let i = 0; i <= 10; i++) {
//     if(i % 2) continue;
//     console.log(i);
// }
// let count = 0;
// for (let i = 0; i <= 10; i++) {
//     if(i % 2) {
//         if(count++ == 3) break;
//         console.log(i);
//     }
// }
//

/*
    标签模板实例操作
*/

// let a = '王妙歌';
// let web = 'miaokasann';

// console.log(tag`你好${a}不好${web}非常好`);
// function tag(strings, ...vars) {
//     console.log(vars)
//     console.log(strings)
// }

/*
    字符串截取和查找
*/
// let str = 'miaokasann';
// console.log(str.slice(0,6));
// console.log(str.substr(0,6));
// console.log(str.substring(0,6));

// console.log(str.includes('m'))
// console.log(str.indexOf('a', 1))
// console.log(str.toUpperCase().startsWith('M'))
// console.log(str.lastIndexOf('n', 9))

/*
    随机数
*/

// console.log(Math.random())
//0-5
// console.log(Math.floor(Math.random() * (5 + 1)))

//2-5
// console.log(2 + Math.floor(Math.random() * (5-2+1)))

/*
    时间戳,标准时间转换时间戳
*/

// const params = [1990, 3, 12, 14, 45, 12];
// const date = new Date(...params);
// console.log(...params);
// console.log(date);

// const date = new Date("1994-3-14 09:34:13");

// console.log(date * 1)
// console.log(Number(date))
// console.log(date.valueOf())
// console.log(date.getTime())

// const timestamp = date.valueOf()
// console.log(new Date(timestamp))

/*
    Array.of
*/

// let wmg = new Array(6,3,2)
// console.log(wmg.length)
// console.table(wmg)

// let a = Array.of(6)
// console.log(a)
// console.table(a)

/*
    数据出栈入栈和填充操作
*/

// console.log(Array(5).fill("后盾人"));
// console.log([1,2,3,4].fill("后盾人", 1, 3));

/*
    数组移动函数实例
*/

// function move(array, from, to) {
//     if(from < 0 || to >= array.length) {
//         console.error("参数错误");
//         return
//     }

//     let newArray = [...array];
//     let item = newArray.splice(from, 1);
//     newArray.splice(to, 0, ...item);
//     return newArray;
// }

// let array = [1, 2, 3, 4];

// console.table(move(array, 2, 3))

/*
    清空数组
*/

// let hd = [1, 2, 3, 4, 5, 6, 7];
// let arr = hd;

// hd = [];
// hd.pop()
// hd.pop()
// arr = []
// console.log(arr);
// console.log(hd);

// console.log(hd.copyWithin(3, 1, 4))
// 进行替换的目标的索引位置，要复制的开始索引位置，结束复制的位置索引

// console.log(hd.lastIndexOf(2))
//lastIndexOf从右侧开始查找

/*
    自定义includes方法
*/

// function includes(arr, find) {
//     for(const value of arr)
//     if(value === find) return true;
//     return false;
// }

// let hd = [1, 2, 3, 4, 5, 6, 7]
// console.log(includes(hd,4))

/*
    查找
*/

// let lesson = [
//     {name: 'js'},
//     {name: 'css'},
//     {name: 'mysql'}
// ];

// console.log(lesson.includes({name: 'css'}));
// //用inclues返回false

// let status = lesson.find(item => {
//     return item.name == 'css';
// })

// console.log(status);

// let index = lesson.findIndex(item => {
//     return item.name == 'css';
// })

// console.log(index)

/*
    自定义方法实现
*/

// function find(arr, callback) {
//     for(const value of arr) {
//         if(callback(value)) return value;
//     }

//     return undefined;
// }

// let arr = [1,2,3,4,5,6];

// console.log(find(arr, function(item) {
//     return item == 2
// }))

/*
    数组排序
*/

// let arr = [1,5,3,6,9,12]
// arr = arr.sort(function(a,b){
//     return b - a;
// })

// console.table(arr)

/*
    sort排序原理 
*/

// function sort(arr, callback) {
//     for(const m in arr) {
//         for(const n in arr) {
//             if(callback(arr[n], arr[m]) > 0) {
//                 [arr[m], arr[n]] = [arr[n], arr[m]];
//             }
//         }
//     }
//     return arr;
// }

// console.log(sort(arr, function(a, b) {
//     return a - b;
// }))

/*
    循环操作
*/
// let arr = [{n: 1}, {n: 2}];
// for(let value of arr) {
//     value.n += 10
// }
// console.log(arr)

/*
    迭代器 iterator
*/

// let arr = ['wmg', 'miaokasann'];
// let keys = arr.keys()
// let values = arr.values();

// console.log(keys.next())
// {value: 0, done: false} done代表是否迭代完成
// let {value, done} = keys.next();

// while(({value, done} = values.next()) && done === false) {
//     console.log(value)
// }

// for (const key of arr.values()) {
//     console.log(key)
// }

// let entries = arr.entries()
// console.log(entries.next())
// let {done, value: [a, b]} = entries.next();

// console.log(a, b)

// for(const [key, value] of arr.entries()) {
//     console.log(value);
// }

/*
    every和some
*/

// let res = arr.some(function(value, index, arr) {
//     console.log(value)
//     return true;
// })

// console.log(res)

/*
    自己实现filter
*/

// function filter(arr, callback) {
//     let newArray = [];
//     for(const value of arr) {
//         if(callback(value) === true) {
//             newArray.push(value)
//         }
//     }
//     return newArray;
// }

// console.log(filter(arr, function(value) {
//     return value === 'wmg';
// }))

/*
    map映射数组
*/

// let arr = [
//     {title: '王妙歌', age: '26'},
//     {title: '孔德凯', age: '30'},
//     {title: '张永梅', age: '52'}
// ]

// let hd = arr.map(function(value, index, arr) {
//     // return Object.assign({click: 100}, value);
//     return {
//         title: value.title,
//         age: value.age,
//         click: 100
//     }
// })

// console.log(hd)

/*
    reduce
*/

// let arr = [1,2,3,4,5];

// arr.reduce(function(pre, value, index, array) {
//     console.log(pre, value);
//     return true;
// })

// arr.reduce(function(pre, value, index, array) {
//     console.log(pre, value);
//     return 99;
// }, 0)

//统计
// function arraycount(array, item) {
//     return array.reduce(function(total, cur) {
//         total += cur == item ? 1 : 0;
//         return total;
//     }, 0)
// }
// let arr1 = [1,2,1,1,5];
// console.log(arraycount(arr1, 1))

//求和
// function sum(arr) {
//     return arr.reduce(function(total, cur) {
//         return total += cur;
//     }, 0);
// }

// console.log(sum(arr));

/*
	symbol
*/

// let symbol = Symbol('这是一个symbol类型');
// let hd = {
// 	name: "王妙歌",
// 	[symbol]: "miaokasann"
// };

// //遍历symbol属性
// for(const key of Object.getOwnPropertySymbols(hd)) {
// 	console.log(key);
// }

// //遍历所有属性
// for(const key of Reflect.ownKeys(hd)) {
// 	console.log(key);
// }

// let site = Symbol("这是一个symbol类型");

// class User {
// 	constructor(name) {
// 		this.name = name;
// 		this[site] = "王妙歌";
// 	}
// 	getName() {
// 		return `${this[site]} ${this.name}`
// 	}
// }

// let hd = new User("李四")

// // console.log(hd.getName())

// for(const key in hd) {
// 	console.log(key);
// }

/*
	set
*/

// let set = new Set()

// set.add(1);
// set.add("1");
// //set不能重复

// console.log(set);

// let obj = {
// 	1: 'wang',
// 	"1": 'wangmiagoe'
// }

// let hd = {
// 	[obj]: "后盾人"
// }

// console.log(hd[obj.toString()])

// let set = new Set(["wangmiaoge", "wmg"]);

// let a = [1,2,3,4,"fjkdsj","王妙歌"]
// let set = new Set([...a]);//可以把字符展开成一个一个的,可迭代
// console.log(set)

// console.log(set.delete("aaa"));
// // console.log(set.clear());
// console.log(set.size)
// console.log(set.has(1))
// console.log(set.values());

//类型转换 set和数组互转
// let set = new Set('11243254789');
// set = new Set([...set].filter(item => item < 5))

// console.log(set);

// let arr = [1,1,3,3,6,5,7];

// console.log([...new Set(arr)]);

//遍历set
// for(const value of set) {
// 	console.log(value)
// }

// set.forEach(item => {
// 	console.log(item)
// })

//并集交集差集
// let a = new Set([1,2,4,3,4]);
// let b = new Set([4,3,6,7,8]);

// console.log(new Set([...a, ...b]))

// console.log(
// 	new Set(
// 		[...a].filter(item => {
// 			return !b.has(item);
// 		})
// 	)
// 	)

//weakSet
// let hd = {
//   name: 'wmg',
//   age: 27,
// }
// let edu = hd
// let nodes = new WeakSet()
// nodes.add(hd)

// hd = null
// edu = null
// console.log(nodes)

/*
  map
*/

// let map = new Map()
// // map.set('name', 'wangmiaoge')
// // map.set(function () {}, 'miaokasann')
// // map.set({}, 'wmg')
// // console.log(map)

// let obj = {
//   name: '王妙歌',
// }
// map.set(obj, 'miaokasann.com')
// console.log(map.get(obj))

// //遍历
// for (const [key, value] of map.entries()) {
//   console.log(key, value)
// }

/*
  函数参数 arguments
*/
// function sum() {
//   console.log(arguments)
//   return [...arguments].reduce((a, b) => {
//     return a + b
//   })
// }

// console.log(sum(1, 34, 4, 7, 85, 43))

/*
  函数完成递归算法
*/

// function factirial(num) {
//   if (num == 1) {
//     return 1
//   }
//   return num * factirial(num - 1)
// }

//递归求和
// function sum(...arg) {
//   console.log(arg)
//   return arg.length == 0 ? 0 : arg.pop() + sum(...arg)
// }
// console.log(sum(1, 34, 4, 7, 85, 43))

//递归实现倒三角
// function star(num) {
//   // if (num == 0) {
//   //   return ''
//   // }
//   // document.write('*'.repeat(num) + '</br>')
//   // star(--num)
//   return num ? document.write('*'.repeat(num) + '</br>') || star(--num) : ''
// }
// console.log(star(8))

//递归附加参数使用技巧
// let Lesson = [
//   {
//     title: '咖啡',
//     price: 5,
//   },
//   {
//     title: '护手霜',
//     price: 20,
//   },
//   {
//     title: '水杯',
//     price: 50,
//   },
// ]
// function change(lessons, num = 100, i = 0) {
//   if (i == lessons.length) {
//     return lessons
//   }
//   lessons[i].price += num
//   return change(lessons, num, ++i)
// }
// console.table(change(Lesson))

// function show(title) {
//   alert(`${title + this.name}`)
// }
// let lisi = {
//   name: '李四',
// }
// let wangwu = {
//   name: '王五',
// }
// show.call(lisi, '后盾人')
// show.apply(wangwu, ['HDCMS'])

// let arr = [1, 3, 2, 8]
// console.log(Math.max(arr)) //NaN
// console.log(Math.max.apply(null, arr)) //8
// console.log(Math.max(...arr)) //8

/*
  构造函数属性继承
*/
// function Request() {
//   this.get = function (params = {}) {
//     let option = Object.keys(params)
//       .map((i) => i + '=' + params[i])
//       .join('&')
//     return `${this.url}?${option}`
//   }
// }
// //文章的构造函数
// function Article() {
//   this.url = 'wmg/article'
//   Request.call(this)
// }
// let hd = new Article()
// console.log(
//   hd.get({
//     id: 1,
//     title: 'aaa',
//   })
// )

/*
  bind
  不会立即执行
  会复制新的函数
*/
// let a = function hd(a, b) {
//   return this.f + a + b
// }
// let newFunc = a.bind({ f: 1 }, 2)
// //bind的时候可以携带参数
// console.log(newFunc(3, 4))
// console.log(newFunc == a)

/*
  闭包
*/
// for (let i = 0; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, 1000)
// }

// let arr = [3, 2, 4, 1, 5, 6]
// function between(a, b) {
//   //filter中调用between方法 把a和b传进来，然后return作为回调函数执行filter方法的循环
//   return function (v) {
//     return v >= a && v <= b
//   }
// }
// console.log(arr.filter(between(3, 5)))

// console.log(
//   arr.sort((a, b) => {
//     return a > b ? 1 : -1
//   })
// )

/*this历史遗留问题*/
// let hd = {
//   user: '后盾人',
//   get: function () {
//     console.log(this)
//     return function () {
//       return this.user
//     }
//   },
// }
// console.log(hd.get()())

/*
 展开语法参数合并
*/
// function upload(params = {}) {
//   let config = {
//     size: 100,
//     type: '*.png,*jpeg',
//   }
//   config = { ...config, ...params }
//   console.log(config)
// }
// upload({ size: 99 })

// let user = { name: '王妙歌', age: 18 }
// let { name, age } = user
// console.log(name, age)

//解构赋值简写
// let name = 'miaokasann',
//   url = 'miaokasann.com'
// let opt = { name, url }
// console.log(opt)

//多层对象解构
// let wmg = {
//   name: 'miaokasann',
//   lesson: {
//     title: 'aaa',
//   },
// }
// let {
//   lesson: { title },
// } = wmg
// console.log(title)

//解构赋值 默认值

/*
  计算属性 assign
*/
// const lessons = [
//   {
//     title: '媒体查询响应式布局',
//     category: 'css',
//   },
//   {
//     title: 'FLEX 弹性盒模型',
//     category: 'css',
//   },
//   {
//     title: 'MYSQL多表查询随意操作',
//     category: 'mysql',
//   },
// ]
// let newObj = lessons.reduce((obj, cur, index) => {
//   obj[`${cur['category']}-${index + 1}`] = cur
//   return obj
// }, {})
// console.log(JSON.stringify(newObj, null, 2))

// function upload(params) {
//   let options = {
//     size: 99,
//   }
//   options = Object.assign(options, params)
//   console.log(JSON.stringify(options, null, 2))
// }

// upload({ name: 'aaa' })

/*
  遍历操作与DOM配置
*/
// let lessons = {
//   name: 'aaa',
//   year: '2021',
// }
// console.log(JSON.stringify(Object.entries(lessons), null, 2))

// for (const key in lessons) {
//   console.log(lessons[key])
// }

/*
    递归实现深拷贝
*/
// function copy(obj) {
//   let res = obj instanceof Array ? [] : {}
//   for (const [k, v] of Object.entries(obj)) {
//     res[k] = v instanceof Object ? copy(v) : v
//   }
//   return res
// }
// let hd = {
//   name: 'wmg',
//   like: {
//     a: 'bb',
//   },
//   arr: [1, 2],
// }
// let miao = copy(hd)
// console.log(miao)

function hd(name) {}
console.log(hd.constructor)

//抽象
// function User(name, age) {
//   //   this.name = name
//   //   this.age = age
//   let data = { name, age }
//   let info = function () {
//     return data.age > 50 ? '老年' : '青年'
//   }
//   this.show = function () {
//     console.log(`${data.name}是${info()}`)
//   }
// }
// let wmg = new User('王妙歌', 18)
// wmg.info = function () {
//   console.log(this)
//   return ''
// }
// wmg.name = 'aaa'
// wmg.show()

/*
    对象属性特征
*/
const user = {
  name: '王妙歌',
  age: 18,
}
console.log(JSON.stringify(Object.getOwnPropertyDescriptor(user, 'age'), null, 2))
Object.defineProperty(user, 'name', {
  value: '后盾人',
})
console.log(user)
console.log(user.name)
