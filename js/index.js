// function list(type) {
// 	var result = "<" + type + "l><li>";
// 	var args = Array.prototype.slice.call(arguments, 1);
// 	result += args.join("</li><li>");
// 	result += "</li></" + type + "l>"; // end list return result;
// }

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

let hd = {
  name: 'wmg',
  age: 27,
}

let edu = hd

let nodes = new WeakSet()
nodes.add(hd)

hd = null
edu = null

console.log(nodes)
