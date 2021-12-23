var x = 'global';

function foo() {
  var x = 'function scope';
  bar();
}

function bar() {
  console.log(x);
}

function aaa() {
  var x = 'gdkjgd';
  const bbb = () => {
    console.log(x);
    bar();
  }
  bbb();
}

foo();
bar();
aaa();

// var x = 'global';

// function foo () {
//   var x = 'function scope';
//   console.log(x);
// }

// foo(); // ?
// console.log(x); // ?

// var x = 'global';

// function foo() {
//   var x = 'local';
//   console.log(x);

//   function bar() {  // 내부함수
//     console.log(x); // ?
//   }

//   bar();
// }
// foo();
// console.log(x); // ?