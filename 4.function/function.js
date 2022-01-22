function add(x, y) {
  return x + y;
}

add(5, 10);

/* function checkArguments(x, y) {
  console.log(arguments[3]);
}

checkArguments(1, 2, 3, 4); */

function changeVal(primitive, obj) {
	primitive += 100;
	obj.name = 'Kim';

  console.log('primitive: ', primitive)
}

var num = 100;
var person = { name: 'Lee' };

console.log(num); // 100
console.log(person); // { name: 'Lee' }

changeVal(num, person);

// 원시 값은 훼손되지 않는다.
console.log(num); // 100

// 객체는 원본이 훼손된다.
console.log(person); // { name: 'Kim' }