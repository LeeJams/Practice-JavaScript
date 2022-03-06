// 배열은 이터러블이다.
const array = [1, 2, 3];

// Symblo.iterator 메서드는 이터레이션을 반환한다. 이터레이터는 next 메서드를 갖는다.
const iterator = array[Symbol.iterator]();

// next 메서드를 호출하면 이터러블을 순회하며 순쇠 결과를 나타내는 이터레이터 리절트 객체를 반환한다.
// 이터레이터 리절트 객체는 value와 done 프로퍼티를 갖는 객체다.
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const test = [1,2,3,4,5,6];

const iteratorTest = test[Symbol.iterator]();

console.log(iteratorTest.next());
console.log(iteratorTest.next());

for (let i of test) {
  console.log(i);
}

console.log(iteratorTest.next());