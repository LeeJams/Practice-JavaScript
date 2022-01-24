const person = {
  // 데이터 프로퍼티
  firstName: 'Unmo',
  lastName: 'Lee',

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // setter 함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName + ' ' + person.lastName);

// 접근자 프로퍼티 fullName에 값을 자장하면 setter 함수가 호출된다.
person.fullName = 'Jams Lee';
console.log(person);

// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName);

// firstName은 데이터 프로퍼티다.
let descriptorData = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptorData);

// {value: 'Jams', writable: true, enumerable: true, configurable: true}

// fullName은 접근자 프로퍼티다.
let descriptorAccessor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptorAccessor);

// {enumerable: true, configurable: true, get: ƒ, set: ƒ}