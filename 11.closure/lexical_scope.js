var x = 'global';

function foo() {
  var x = 'function scope';
  bar();
}

function bar() {
  console.log(x);
}

foo();
bar();

// 실행 결과
// global
// global
