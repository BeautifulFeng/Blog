// function mynew(fn, ...args) {
//   const obj = {};
//   obj.__proto__ = fn.prototype;
//   let result = fn.apply(obj, args);
//   return result instanceof Object ? result : obj;
// }
// function myperson(name, age) {
//   this.name = name;
//   this.age = age;
// }
// myperson.prototype.say = function () {
//   console.log(this.name, "的age是", this.age);
// };

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.say = function () {
//   console.log(this.name);

// };

// let a = mynew(Person, "huihui", 123);
// console.log(a); // Person {name: "huihui", age: 123}
// a.say(); // huihui

// let p = mynew(myperson, "huihui", 26);
// console.log(p);
// p.say();

// function mynew(func, ...args) {
//   const obj = {};
//   obj.__proto__ = func.prototype;
//   let result = func.apply(obj, args);
//   return result instanceof Object ? result : obj;
// }
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.say = function () {
//   console.log(this.name);
// };

// let p = mynew(Person, "huihui", 123);
// console.log(p); // Person {name: "huihui", age: 123}
// p.say(); // huihui

// var _a = 0;
// Object.defineProperty(this, "a", {
//   get: function () {
//     return ++_a;
//   },
// });
// var _a = 0;
// Object.defineProperty(this, "a", {
//   get: function () {
//     return ++_a;
//   },
// });
// const a = {
//   i: 1,
//   valueOf() {
//     return this.i++;
//   },
// };

// console.log(a == 1 && a == 2 && a == 3);
// var a;
// var _a = 0;
// Object.defineProperty(this, "a", {
//   get: function () {
//     return ++_a;
//   },
// });
// console.log(a == 1 && a == 2 && a == 3);
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout0");
}, 0);

setTimeout(function () {
  console.log("setTimeout2");
}, 300);

setImmediate(() => console.log("setImmediate"));

process.nextTick(() => console.log("nextTick1"));

async1();

process.nextTick(() => console.log("nextTick2"));

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
  console.log("promise2");
}).then(function () {
  console.log("promise3");
});

console.log("script end");
//最长递增子序列
