const person = { name: "Lee" };

// person은 현재 확장 가능이다.
console.log(Object.isExtensible(person)); // true

// person의 확장을 금지하여 프로퍼티 추가를 금지한다.
Object.preventExtensions(person);

// 확장 금지 상태
console.log(Object.isExtensible(person)); // false

// 프로퍼티가 추가되지 않는다.
person.age = 20; // 무시. strict mode에서는 에러
console.log(person);

// 프로퍼티 삭제는 가능
delete person.name;
console.log(person);

// 프로퍼티 정의에 의한 추가도 금지
Object.defineProperty(person, "age", { value: 20 });
// Cannot define property age, object is not extensible
