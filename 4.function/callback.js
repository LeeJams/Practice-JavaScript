// 고차함수 & 콜백함수
// 고차함수 - 변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수
function repeat(n, f) {
	for (var i = 0; i < n; i++) {
		f(i); // i를 전달하면서 f를 호출
	}
}

// 콜백함수 - 다른 함수의 내부로 전달되는 함수
var logAll = function (i) {
	console.log(i);
}

// 반복 호출할 함수를 인수로 전달
repeat(5, logAll); // 0 1 2 3 4

var logOdds = function (i) {
	if (i % 2) console.log(i);
}

// 반복 호출할 함수를 인수로 전달
repeat(5, logOdds ); // 1 3

// 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수라고 하며, 
// 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수를 고차 함수라고 한다.