const isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function';

// 배열, 문자열, Map, Set 등은 이터러블이다.
console.log(isIterable([])); // ture
console.log(isIterable("")); // ture
console.log(isIterable(new Map())); // ture
console.log(isIterable(new Set())); // ture
console.log(isIterable({})); // false

const array = [1, 2, 3];

// 배열은 Array.prototype의 Symbol.iterable 메서드를 상속받는 이터러블이다.
console.log(Symbol.iterator in array); // true