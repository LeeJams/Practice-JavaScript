function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    }
}

const circle1 = new Circle(10);
console.log(circle1.getDiameter());

const circle2 = new Circle(20);
console.log(circle2.getDiameter());

// new 연산자가 없으면 생성자 함수가 아닌 일반 함수로서 호출이 된다
const circle3 = Circle(5);

// 일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환한다.
console.log(circle3)

// 일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킨다.
console.log(radius);

// 일반 함수 정의: 함수 선언문, 함수 표현식
function foo() {}
const bar = function() {};

// 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다.
// 이는 메소드로 인정하지 않는다.
const baz = {
	x: function() {}
}

new foo(); // -> foo {}
new bar(); // -> bar {}
new baz.x(); // -> x {}

// 화살표 함수 정의
const arrow = () => {};

new arrow(); // TypeError: arrow is not a constructor