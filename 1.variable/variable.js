console.log("score: ", score);

score = 80;
var score;

console.log("score: ", score);

//호이스팅
console.log(owner);
var owner = 'LeeJam';
console.log(owner);

// let, const도 호이스팅이 되지만 애러를 발생시킨다.
// console.log(test);
let test = 'test';
console.log(test);

console.log(testFn());
function testFn() {
  console.log('Hi, testFn');
}
console.log(testFn());

// console.log(letTestFn());
let letTestFn = () => {
  console.log('Hi, letTestFn');
}
console.log(letTestFn());
