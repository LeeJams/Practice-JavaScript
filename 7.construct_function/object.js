// 빈 객체의 생성
const person = new Object();

// 프로퍼티 추가
person.name = "Lee";
person.sayHello = function () {
    console.log("Hello");
}

console.log(person); // { name: 'Lee', sayHello: [Function (anonymous)] }

const strObj = new String('Lee');
console.log(typeof strObj); // object
console.log(strObj); // String {'Lee'}

const numObj = new Number(123);
console.log(typeof numObj); // object
console.log(numObj); // Number {123}

// 등등등