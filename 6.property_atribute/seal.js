const person = { name: "Lee" };

// 객체 밀봉 - 프로퍼티 추가, 삭제, 재정의 금지
Object.seal(person);
console.log(Object.isSealed(person)); // ture

// 밀봉된 객체는 configurable이 false이다.
console.log(Object.getOwnPropertyDescriptors(person));
// name: { value: 'Lee', writable: true, enumerable: true, configurable: false }

// 프로퍼티가 추가되지 않는다.
person.age = 20; // 무시. strict mode에서는 에러
console.log(person); // { name: "Lee" }

// 프로퍼티 삭제 금지
delete person.name;
console.log(person); // { name: "Lee" }

// 프로퍼티 값 갱신은 가능
person.name = "Kim";
console.log(person); //{ name: "Kim" }

// 프로퍼티 어트리뷰트 재정의 금지
Object.defineProperty(person, 'name', { configurable: true });
// TypeError: Cannot redefine property: name