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

// function hd(name) {}
// console.log(hd.constructor)

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
// const user = {
//   name: '王妙歌',
//   age: 18,
// }
// console.log(JSON.stringify(Object.getOwnPropertyDescriptor(user, 'age'), null, 2))
// Object.defineProperty(user, 'name', {
//   value: '后盾人',
// })
// console.log(user)
// console.log(user.name)

/*
    js 原型
*/
// let mg = {}
// let wmg = {}
// console.log(Object.getPrototypeOf(mg))
// console.log(Object.getPrototypeOf(mg) == Object.getPrototypeOf(wmg))

// //完全数据字典对象 使用这种方法创建的对象是没有原型的
// let hd = Object.create(null, {
//   name: {
//     value: '后盾人',
//   },
// })
// console.log(Object.getPrototypeOf(hd))
// console.log(hd.hasOwnProperty('name'))

// let hd = {
//   show() {
//     console.log('后盾人')
//   },
//   render() {
//     console.log('hd . render')
//   },
// }
// hd.__proto__.render = function () {
//   console.log('向军')
// }
// console.log(hd)

// hd.render()

// let hd = new Object()
// hd.name = '后盾人'
// Object.prototype.show = function () {
//   console.log('hodunren.com')
// }
// hd.show()

// function User() {}
// console.dir(User)
// let xj = new User()
// xj.show()
// User.show()

// function User() {
//   this.name = name
// }
// let hd = new User('mg')
// function createByObject(obj, ...args) {
//   const constructor = Object.getPrototypeOf(obj).constructor
//   return new constructor(...args)
// }
// let xj = createByObject(hd, '向军')
// xj.show()

// let hd = {
//   d: [1, 2, 3, 4, 5, 6],
// }
// Object.setPrototypeOf(hd, {
//   max: function () {
//     return this.d.sort((a, b) => b - a)[0]
//   },
// })
// console.log(hd.max())

// let xj = {
//   lessons: {
//     js: 88,
//     php: 100,
//     node: 99,
//   },
//   get d() {
//     return Object.values(this.lessons)
//   },
// }
// console.log(hd.max.call(xj))

// let User = {
//   show() {
//     return this.name
//   },
// }
//定义对象的原型，不能获取原型
// let hd = Object.create(User, {
//   name: {
//     value: '后盾人',
//   },
// })
// hd.name = 'miaokasann'

//2.设置原型方法2
// hd.__proto__ = User
// let hd = { name: '王妙歌' }
//3.官方设置原型的方法
// Object.setPrototypeOf(hd, User)
// console.log(hd.show())

//__proto__是属性访问器
// let hd = {
//   name: '王妙歌',
// }
// hd.__proto__ = {
//   show() {
//     console.log(this.name)
//   },
// }
// hd.__proto__ = 99
// console.log(hd.__proto__)

//使用父类函数初始属性
// function User(name, age) {
//   this.name = name
//   this.age = age
// }
// User.prototype.show = function () {
//   console.log(this.name, this.age)
// }

// function Admin(...args) {
//   User.apply(this, args)
// }
// Admin.prototype = Object.create(User.prototype)

// let xj = new Admin('向军', 18)
// xj.show()

// console.log(Admin.prototype)
// console.log(User.prototype)

//使用原型工厂封装继承
//sub继承sup
// function extend(sub, sup) {
//   sub.prototype = Object.create(sup.prototype)
//   Object.defineProperty(sub.prototype, 'constructor', {
//     value: sub,
//     enumerable: false,
//   })
// }

// function User(name) {
//   this.name = name
//   console.log(this)
// }
// User.prototype.getUserName = function () {
//   return this.name
// }
// function Admin(name) {
//   User.call(this, name)
// }
// // Admin.prototype = Object.create(User.prototype)
// Admin.prototype.role = function () {}
// let xj = new Admin('向军大叔')
// //sub继承sup
// function extend(sub, sup) {
//   sub.prototype = Object.create(sup.prototype)
//   sub.prototype.constructor = sub
// }
// extend(Admin, User)
// console.dir(Admin)

// function User(name, age) {
//   this.name = name
//   this.age = age
// }
// User.prototype.show = function () {
//   console.log(this.name, this.age)
// }
// function Admin(name, age) {
//   let instance = Object.create(User.prototype)
//   User.call(instance, name, age)
//   instance.role = function () {
//     console.log('admin.role')
//   }
//   return instance
// }
// let hd = Admin('后盾人', 19)
// hd.role()
// function member(name, age) {
//   let instance = Object.create(User.prototype)
//   User.call(instance, name, age)
//   return instance
// }
// let lisi = member('李四', 28)
// lisi.role()

// function extend(sub, sup) {
//   sub.prototype = Object.create(sup.prototype)
//   sub.prototype.constructor = sub
// }
// function Credit() {}
// function Request() {}
// function User(name, age) {
//   this.name = name
//   this.age = age
// }
// extend(Request, Credit)
// extend(User, Request)
// Credit.prototype.total = function () {
//   console.log('统计积分')
// }
// Request.prototype.ajax = function () {
//   console.log('请求后台')
// }
// User.prototype.show = function () {
//   console.log(this.name, this.age)
// }
// function Admin(...args) {
//   User.apply(this, args)
// }
// extend(Admin, User)
// let hd = new Admin('向军', 19)
// hd.show()
// hd.total() //统计积分
// hd.ajax() //请求后台

// function extend(sub, sup) {
//   sub.prototype = Object.create(sup.prototype)
//   sub.prototype.constructor = sub
// }
// function User(name, age) {
//   this.name = name
//   this.age = age
// }
// User.prototype.show = function () {
//   console.log(this.name, this.age)
// }
// const Credit = {
//   total() {
//     console.log('统计积分')
//   },
// }
// const Request = {
//   ajax() {
//     console.log('请求后台')
//   },
// }

// function Admin(...args) {
//   User.apply(this, args)
// }
// extend(Admin, User)
// Object.assign(Admin.prototype, Request, Credit)
// let hd = new Admin('向军', 19)
// hd.show()
// hd.total() //统计积分
// hd.ajax() //请求后台

// function extend(sub, sup) {
//   sub.prototype = Object.create(sup.prototype)
//   sub.prototype.constructor = sub
// }
// function User(name, age) {
//   this.name = name
//   this.age = age
// }
// User.prototype.show = function () {
//   console.log(this.name, this.age)
// }
// const Request = {
//   ajax() {
//     return '请求后台'
//   },
// }
// const Credit = {
//   __proto__: Request,
//   total() {
//     console.log(super.ajax() + ',统计积分')
//   },
// }

// function Admin(...args) {
//   User.apply(this, args)
// }
// extend(Admin, User)
// Object.assign(Admin.prototype, Request, Credit)
// let hd = new Admin('向军', 19)
// console.log(Admin.prototype)
// console.log(Credit)

// hd.show()
// hd.total() //统计积分
// hd.ajax() //请求后台

// function User() {}
// User.__proto__.view = function () {
//   console.log('我是user构造函数的view方法')
// }
// User.prototype.show = function () {
//   console.log('我是user原型上的方法')
// }
// User.view()
// console.dir(User)

// let hd = new User()
// // hd.view()
// console.dir(hd)
// console.dir(User.__proto__.__proto__ == Object.prototype)

//__proto__上的方法一般是给构造函数自己使用的
//prototype原型上的方法提供给实例化出的对象使用

// function User() {}
// let xj = new User()
// console.log(xj.__proto__ == User.prototype)

// console.dir(xj)

// let hd = {}
// let parent = { name: 'parent' }
// Object.setPrototypeOf(hd, parent) //把hd的原型设为parent
// console.log(hd)
// console.log(Object.getPrototypeOf(hd))

// function hd() {
//   this.show = function () {
//     return 'show method'
//   }
// }
// const obj = new hd() //true
// console.log(obj.constructor)
// console.dir(hd)

// console.log(obj instanceof hd)

// const obj2 = new obj.constructor()
// console.dir(obj2.show()) //show method

// 'use strict'
// function User() {}
// User.prototype.getName = function () {
//   return this.name
// }

// function Stu(name) {
//   this.name = name
// }
// Stu.prototype = new User()
// const lisi = new Stu('李四')

// console.log(lisi.__proto__)
// console.log(lisi.getName())

/*
    类
*/
//class语法糖的声明的方法是不可以遍历的
// class User {
//   constructor(name) {
//     this.name = name
//   }
//   show() {}
// }
// let u = new User('aaa')
// console.log(User)
// console.log(JSON.stringify(Object.getOwnPropertyDescriptor(User.prototype, 'show'), null, 2))
// for (const i in u) {
//   console.log(i)
// }

//class默认使用严格模式
// class User {
//   show() {
//     function test() {
//       console.log(this)
//     }
//     test()
//   }
// }
// let hd = new User()
// hd.show()

//静态属性，分配给构造函数的属性我们叫它静态属性
// class Request {
//   static HOST = 'https://www.houdunren.com'

//   query(api) {
//     return Request.HOST + '/' + api
//   }
// }
// let request = new Request()

// class User {
//   constructor(name) {
//     this.name = name
//   }
//   static create(name) {
//     return new User(name)
//   }
// }
// const xj = User.create('向军大叔')
// console.log(xj)

/*
    静态方法练习
*/
// const data = [
//   { name: 'js', price: 100 },
//   { name: 'mysql', price: 212 },
//   { name: 'vue.js', price: 98 },
// ]
// class Lesson {
//   constructor(data) {
//     this.model = data
//   }
//   get price() {
//     return this.model.price
//   }
//   get name() {
//     return this.model.name
//   }
//   static createBatch(data) {
//     return data.map((item) => new Lesson(item))
//   }
//   static maxPrice(data) {
//     return data.sort((a, b) => b.price - a.price)[0]
//   }
// }
// const lessons = Lesson.createBatch(data)
// console.log(lessons)
// console.log(Lesson.maxPrice(lessons).name)

//访问器在类中的使用
// class User {
//   constructor(name) {
//     this.data = { name }
//   }
//   get name() {
//     return this.data.name
//   }
//   set name(value) {
//     if (value.trim() == '') throw new Error('invalid params')
//     this.data.name = value
//   }
// }
// let hd = new User('miaokasann')
// console.log(hd)

// hd.name = '王妙歌'
// console.log(hd.name)

//属性的保护
//使用symbol
// const protecteds = Symbol()
// class Common {
//   constructor() {
//     this[protecteds] = {}
//     this[protecteds].host = 'https://houdunren.com'
//   }
//   set host(url) {
//     if (!/^https?:/i.test(url)) {
//       throw new Error('非常网址')
//     }
//     this[protecteds].host = url
//   }
//   get host() {
//     return this[protecteds].host
//   }
// }
// class User extends Common {
//   constructor(name) {
//     super()
//     this[protecteds].name = name
//   }
//   get name() {
//     return this[protecteds].name
//   }
// }
// let hd = new User('后盾人')
// hd.host = 'https://www.hdcms.com'
// console.log(hd[Symbol()])
// console.log(hd.host)

//使用weakmap
// const host = new WeakMap()
// class Common {
//   constructor(name) {
//     this.name = name
//     host.set(this, 'http://www.houdunren.com')
//   }
//   set host(url) {
//     if (!/^https?:/i.test(url)) {
//       throw new Error('非常网址')
//     }
//     host.set(this, url)
//   }
//   get host() {
//     return host.get(this)
//   }
// }
// let hd = new Common('miaokasann.com')
// console.log(hd.host)

// const protecteds = new WeakMap()
// class Common {
//   constructor() {
//     protecteds.set(this, {
//       host: 'https://houdunren.com',
//       port: '80',
//     })
//   }
//   set host(url) {
//     if (!/^https:\/\//i.test(url)) {
//       throw new Error('网址错误')
//     }
//     console.log(protecteds.get(this))

//     protecteds.set(this, { ...protecteds.get(this), host: url })
//   }
// }
// class Article extends Common {
//   constructor() {
//     super()
//   }
//   lists() {
//     return `${protecteds.get(this).host}/article`
//   }
// }
// let article = new Article()
// console.log(article.lists()) //https://houdunren.com/article
// article.host = 'https://hdcms.com'
// console.log(article.lists()) //https://hdcms.com/article

// class User {
//   constructor(name) {
//     this.name = name
//   }
//   show() {
//     console.log(333)
//   }
// }
// class Admin extends User {
//   constructor(name) {
//     super(name)
//   }
// }
// let hd = new Admin('miaokasann')
// console.dir(Admin)

// class Controller {
//   sum() {
//     // console.log('parent method')
//     return this.data.reduce((t, c) => t + c.price, 0)
//   }
// }
// class Lesson extends Controller {
//   constructor(data) {
//     super()
//     this.data = data
//   }
//   info() {
//     return {
//       totalPrice: super.sum(),
//       data: this.data,
//     }
//   }
// }
// let data = [
//   { name: 'js', price: 100 },
//   { name: 'mysql', price: 212 },
//   { name: 'vue.js', price: 98 },
// ]
// let hd = new Lesson(data)
// console.log(hd.info())

// function User() {}
// User.site = '后盾人'
// User.url = function () {
//   return 'houdunren.com'
// }
// function Admin() {}
// Admin.__proto__ = User
// console.dir(Admin)
// console.log(Admin.url())

// function User() {}
// function Admin() {}
// Admin.prototype = Object.create(User.prototype)
// let hd = new Admin()
// //验证admin的原型是否在hd的原型链上
// console.log(hd instanceof Admin) //true
// console.log(hd instanceof User) //true

// console.log(hd.__proto__ == Admin.prototype)
// console.log(hd.__proto__.__proto__ == User.prototype)

// function checkPrototype(obj, constructor) {
//   if (!obj.__proto__) return false
//   debugger
//   console.log(obj.__proto__ == constructor.prototype)
//   if (obj.__proto__ == constructor.prototype) return true
//   return checkPrototype(obj.__proto__, constructor)
// }
// checkPrototype(hd, User)

// let a = {}
// let b = {
//   __proto__: a,
// }
// console.log(a.isPrototypeOf(b))

// class User {}
// class Admin extends User {}
// let hd = new Admin()
// console.log(Admin.prototype.isPrototypeOf(hd))

// function Arr(...args) {
//   console.log(args)
//   console.log(this)
//   args.forEach((item) => this.push(item))
//   this.first = function () {
//     return this[0]
//   }
// }
// Arr.prototype = Object.create(Array.prototype)
// console.dir(Arr)
// let hd = new Arr(1, 3, 5, 66, 65)
// console.log(hd.first())

// class Arr extends Array {
//   constructor(...args) {
//     super(...args)
//   }
//   first() {
//     return this[0]
//   }
//   add(...args) {
//     this.push(...args)
//   }
//   remove(value) {
//     let pos = this.findIndex((item) => item == value)
//     this.splice(pos, 1)
//   }
// }

// let hd = new Arr(1, 3, 5, 66, 65)
// hd.remove(3)
// hd.add(3, 5)
// console.log(hd)

//混合类
// const Tool = {
//   max(key) {
//     return this.data.sort((a, b) => b[key] - a[key])[0]
//   },
// }
// class Lesson {
//   constructor(lessons) {
//     this.lessons = lessons
//   }
//   get data() {
//     return this.lessons
//   }
// }
// Object.assign(Lesson.prototype, Tool)
// const data = [
//   { name: 'js', price: 100 },
//   { name: 'mysql', price: 212 },
//   { name: 'vue.js', price: 98 },
// ]
// let hd = new Lesson(data)
// console.log(hd.max('price'))
// class User {
//   constructor(name) {
//     this.name = name
//   }
//   show() {
//     console.log(this.name)
//   }
// }
// let xj = new User('向军')
// //不会枚举出show属性
// for (const key in xj) {
//   console.log(key)
// }

// function Hd(name) {
//   this.name = name
// }
// Hd.prototype.show = function () {
//   console.log(this.name)
// }
// let obj = new Hd('后盾人')
// for (const key in obj) {
//   console.log(key)
// }

/*
  模块化
*/
// let module = (function () {
//   const moduleList = []
//   //这个方法帮助我们定义模块
//   function define(name, modules, action) {
//     modules.map((m, i) => {
//       modules[i] = moduleList[m]
//     })
//     moduleList[name] = action.apply(null, modules)
//     console.log(moduleList)
//   }
//   return {
//     define,
//   }
// })()
// module.define('hd', [], function () {
//   return {
//     first(arr) {
//       return arr[0]
//     },
//     max(arr, key) {
//       return arr.sort((a, b) => b[key] - a[key])[0]
//     },
//     site: 'wangmiaoge',
//   }
// })

// module.define('lesson', ['hd'], function (hd) {
//   let data = [
//     { name: 'js', price: 99 },
//     { name: 'mysql', price: 78 },
//   ]
//   hd.max(data, 'price')
//   console.log(hd.max(data, 'price'))
//   hd.site = 'miaokasann'
//   console.log(hd.site)
// })

/*
  promise
*/
// console.log(
//   new Promise((resolve, reject) => {
//     // resolve('success')
//     reject('失败')
//   })
// )

// let promise = new Promise((resolve, reject) => {
//   resolve('fulfilled') //3
//   console.log('后盾人') //1
// })
// promise.then((msg) => {
//   console.log(msg)
// })
// console.log('houdunren.com') //2

// const promise = new Promise((resolve) => resolve('success'))
// promise.then(alert) //2
// alert('houdunren.com') //1
// promise.then(() => {
//   alert('后盾人') //3
// })

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('fulfilled')
//   }, 3000)
// }).then(
//   (msg) => {
//     console.log(msg)
//   },
//   (error) => {
//     console.log(error)
//   }
// )

// const p1 = new Promise((resolve, reject) => {
//   // resolve("fulfilled");
//   reject('rejected')
// })
// const p2 = new Promise((resolve) => {
//   resolve(p1)
// }).then(
//   (value) => {
//     console.log(value)
//   },
//   (reason) => {
//     console.log(reason)
//   }
// )

// const p1 = new Promise((resolve, reject) => {
//   resolve(
//     //p2
//     new Promise((s, e) => {
//       s('成功')
//     })
//   )
// }).then((msg) => {
//   console.log(msg)
// })

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('操作成功')
//   }, 2000)
// })
// const p2 = new Promise((resolve, reject) => {
//   resolve(p1)
// }).then(
//   (msg) => {
//     console.log(msg)
//   },
//   (error) => {
//     console.log(error)
//   }
// )

// let promise = new Promise((resolve, reject) => {
//   resolve('resolve')
// })
// let p2 = promise.then()
// promise
//   .then()
//   .then()
//   .then((resolve) => {
//     console.log(resolve)
//   })

// let promise = new Promise((resolve, reject) => {
//   reject('reject')
// })
// let p2 = promise.then(() => {})
// promise
//   .then(
//     () => {},
//     (reject) => {
//       console.log(reject)
//     }
//   )
//   .then(null, null)
//   .then(null, (reject) => {
//     console.log(reject)
//   })

// let promise = new Promise((resolve) => resolve())
// let p1 = promise
//   .then(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(`p1`)
//         resolve()
//       }, 2000)
//     })
//   })
//   .then(() => {
//     return new Promise((a, b) => {
//       console.log(`p2`)
//     })
//   })

// new Promise((resolve, reject) => {
//   resolve()
// })
//   .then((v) => {
//     return new Promise((resolve, reject) => {
//       resolve('第二个promise')
//     }).then((value) => {
//       console.log(value)
//       // return value
//     })
//   })
//   .then((value) => {
//     console.log(value)
//   })

// new Promise((resolve, reject) => {
//   resolve(
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('解决状态')
//       }, 2000)
//     })
//   )
// })
//   .then(
//     (v) => {
//       console.log(`fulfilled: ${v}`)
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           reject('失败状态')
//         }, 2000)
//       })
//     },
//     (v) => {
//       console.log(`rejected: ${v}`)
//     }
//   )
//   .catch((error) => console.log(`rejected: ${error}`))

// new Promise((resolve, reject) => {
//   resolve('success')
// })
//   .then((msg) => {
//     console.log(a)
//   })
//   .catch((reason) => {
//     console.log('error:' + reason)
//   })

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     throw new Error('fail')
//   }, 2000)
// }).catch((msg) => {
//   console.log(msg + '后盾人')
// })

// const promise = new Promise((resolve, reject) => {
//   reject()
// })
//   .catch((msg) => {
//     hd()
//   })
//   .then(null, (error) => {
//     console.log(error)
//   })

// const promise = new Promise((resolve, reject) => {
//   resolve('后盾人')
// })

// console.log(
//   promise.then((hd) => {
//     hd += '-hdcms'
//     console.log(hd)
//   })
// ) //Promise {<pending>}

// new Promise((resolve, reject) => {
//   resolve('第一个promise')
// })
//   .then((msg) => {
//     console.log(msg)
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('第二个promise')
//       }, 3000)
//     })
//   })
//   .then((msg) => {
//     console.log(msg)
//   })

// const hdcms = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('第一个Promise')
//   }, 1000)
// })
// const houdunren = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('第二个异步')
//   }, 1000)
// })
// const hd = Promise.all([hdcms, houdunren])
//   .then((results) => {
//     console.log(results)
//   })
//   .catch((msg) => {
//     console.log(msg)
//   })

/*
promise任务队列
*/
//then中返回promise那么后面的then就是对返回的promise得处理
// function queue(num) {
//   let promise = Promise.resolve('成功')
//   num.map((v) => {
//     console.log(promise)
//     promise = promise.then(() => {
//       return v()
//     })
//   })
// }

// function p1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('p1')
//       resolve()
//     }, 1000)
//   })
// }

// function p2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('p2')
//       resolve()
//     }, 1000)
//   })
// }

// function queue(num) {
//   return num.reduce((promise, v) => {
//     return promise.then(() => {
//       return v()
//     })
//   }, Promise.resolve())
// }

// queue([p1, p2])

// async function sleep(delay = 2000) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     }, delay)
//   })
// }

// async function show() {
//   for (const user of ['王妙歌', 'miaokasann']) {
//     await sleep()
//     console.log(user)
//   }
// }

// show()

// script start
// Promise
// 1111
// async2 end
// script end
// promise1
// promise2
// async1 end
// setTimeout

console.log('script start')

// async function async1() {
//   await async2()
//   console.log('async1 end')
// }
function async1() {
  debugger
  const implicit_promise = new Promise((resolve) => {
    debugger //2
    Promise.resolve(async2()).then((value) => {
      debugger
      console.log('async1 end')
    })
    // new Promise((resolve) => {
    //   debugger //3
    //   resolve(async2())
    // }).then((value) => {
    //   debugger
    //   console.log('async1 end')
    // })
  })
  return implicit_promise
}
async function async2() {
  debugger
  //1
  console.log('async2 end')
}
async1()

setTimeout(function () {
  debugger
  console.log('setTimeout')
}, 0)

new Promise((resolve) => {
  debugger
  console.log('Promise')
  resolve()
})
  .then(function () {
    debugger
    console.log('promise1')
  })
  .then(function () {
    debugger
    console.log('promise2')
  })

console.log('script end')

// async function hd() {
//   console.log('12345678')
// }
// console.log(hd())

// function bb() {
//   let a = new Promise((resolve) => {
//     console.log('async2 end')
//     resolve()
//   }).then((value) => {
//     debugger
//     console.log(value)
//   })
//   return a
// }

// console.log(bb())

//script start => async2 end => Promise => script end => promise1 => promise2 => async1 end => setTimeout
// script start
// index.js:1834 1111
// index.js:1840 async2 end
// index.js:1849 Promise
// index.js:1859 script end
// index.js:1837 async1 end
// index.js:1853 promise1
// index.js:1856 promise2
// index.js:1845 setTimeout

// const p = Promise.resolve()

// ;(async () => {
//   await p
//   console.log('after:await')
// })()

// p.then(() => {
//   console.log('tick:a')
// }).then(() => {
//   console.log('tick:b')
// })

// const p = Promise.resolve()
// const promise = new Promise((res) => res(p))
// console.log(promise)

// const p = Promise.resolve()

// ;(() => {
//   const implicit_promise = new Promise((resolve) => {
//     // const promise = new Promise((res) => res(p))
//     const promise = Promise.resolve(p)
//     promise.then(() => {
//       console.log('after:await')
//       resolve()
//     })
//   })

//   return implicit_promise
// })()

// p.then(() => {
//   console.log('tick:a')
// }).then(() => {
//   console.log('tick:b')
// })
