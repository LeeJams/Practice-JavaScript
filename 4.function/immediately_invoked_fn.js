// 즉시 실행 함수
// 함수 정의와 동시에 즉시 호출되는 함수 ( 단 한번만 호출되며 다시 호출할 수 없다. )

// 익명 즉시 실행 함수
(function () {
	var a = 3;
	var b = 5;
	return a * b;
}());

// 기명 즉시 실행 함수
(function mul() {
	var a = 3;
	var b = 5;
	return a * b;
}());

mul(); // ReferenceError: mul is not defined

// 즉시 실행 함수는 익명 함수를 사용하는 것이 일반적이다.

// 즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있다.
var res = (function () {
	var a = 3;
	var b = 5;
	return a * b;
}());

console.log(res); // 15