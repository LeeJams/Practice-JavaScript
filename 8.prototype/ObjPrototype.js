const obj = {name: 'Lee', age: '29'};
console.dir(obj.__proto__ === Object.prototype);
const test = Object.prototype;
console.dir(test.__proto__)
console.log('=======')
const arr = [];
console.dir(arr)
console.dir(arr.__proto__ === Array.prototype)
console.dir(Array.__proto__ === Function.prototype)
const bool = false;
console.dir(bool.__proto__ === Boolean.prototype);

const numProto = Number.__proto__;
const fnProto = Function.__proto__;

console.log(numProto === Function.prototype);
console.log(fnProto.__proto__ === Object.prototype);