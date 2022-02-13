// this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
const foo = function () {
  console.dir(this);
}

// 동일한 함수도 다양한 방식으로 호출할 수 있다.

// 1. 일반 함수 호출
foo(); // window

// 2. 메소드 호출
const obj = { foo };
obj.foo(); // obj

// 3. 생성자 함수 호출
new foo(); // foo {}

// 4. Fucntion.prototype.apply/call/bind 메소드에 의한 간접 호출
const bar = { name: "bar" };
foo.call(bar); // bar
foo.apply(bar); // bar
foo.bind(bar)(); // bar