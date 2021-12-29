function lostFunc() {
  var name = "LeeJam";
  function getName() {
    return name;
  }
  return getName;
}

var checkFunc = lostFunc();

console.log(checkFunc());
/* 
실행결과

LeeJam
*/