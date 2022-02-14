const x = 1;
const y = 2;

function foo(a) {
  // console.log(x); error
  test();
  const x = 10;
  const y = 20;
  console.log(a + x + y);
  function test () {
    console.log('test');
  }
}

foo(100);

console.log(x + y);