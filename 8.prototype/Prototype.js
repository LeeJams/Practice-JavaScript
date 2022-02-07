
//Object
console.log({}.__proto__);
console.log({}.__proto__ === Object.prototype);

const obj = Object.create(null);
console.log(obj.__proto__); //종점
console.log('----');

//String
console.log('Test'.__proto__);
console.log('Test'.__proto__ === String.prototype);
console.log(String.__proto__ === Function.prototype);
const fnPro = Function.__proto__;
console.log(Function.__proto__ === Object.__proto__);
console.log(Function.__proto__ === Object.prototype);
console.log(fnPro.__proto__ === Object.prototype);
console.log('----');

//Array
console.log([].__proto__ === Array.prototype)
console.log(Array.prototype)
