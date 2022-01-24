const person = {};

Object.defineProperty(person, 'firstName', {
  value: 'Jams',
  writable: true,
  enumerable: true,
  configurable: true,
})

Object.defineProperty(person, 'lastName', {
  value: 'Lee',
})

let descriptors = Object.getOwnPropertyDescriptors(person);
console.log(descriptors);

/* 
  firstName: {value: 'Jams', writable: true, enumerable: true, configurable: true}
  lastName: {value: 'Lee', writable: false, enumerable: false, configurable: false}

  디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다.
*/

// [[enumerable]] 값이 false인 경우 for in문이나 Object.keys 등으로 열거할 수 없다.
console.log(Object.keys(person)); // ["firstName"] - lastName은 열거되지 않음.

// [[Writable]] 값이 false인 경우 해당 프로퍼티의 값을 변경할 수 없다.
// 값을 변경하면 에러는 발생하시 않지만 무시된다.
person.lastName = "Kim";
console.log(person.lastName); // Lee

// [[Configurable]] 값이 false인 경우 해당 프로퍼티를 재정의할 수 없다.
Object.defineProperty(person, 'lastName', { enumerable: true });
// Uncaught TypeError: Cannot redefine property: lastName

// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
  enumerable: true,
  configurable: true,
});

// Object.defineProperties를 통해 한 번에 여러 프로퍼티를 정의할 수 있다.
Object.defineProperties(person, {
  firstName: {
    value: 'Jams',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: 'Lee',
    writable: true,
    enumerable: true,
    configurable: true,
  }
})