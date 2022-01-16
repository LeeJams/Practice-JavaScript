// number 숫자 타입
var integer = 10;
var double = 10.12;
var negative = -210;

var binary = 0b1000001; // 2진수 0b로 시작
var octal = 0o101; // 8진수 0o로 시작
var hex = 0x41; // 16진수 0x로 시작

console.log('진수');
console.log(binary);
console.log(octal);
console.log(hex);

// 숫자 타입의 세 가지 특별한 값
console.log(10 / 0);
console.log(10 / -0);
console.log(1 * 'String');

// string 문자 타입
var str1 = '작은 따옴표';
var str1 = "큰 따옴표";
var str1 = `백틱 - 템플릿 리터럴`;


// boolean 참/거짓 타입
var bool = true;
bool = false;

// undefined 타입
var unde = undefined;

// null 타입
var foo = 'foo';
foo = null;

// symbol 심벌 타입
console.log('Symbol Type');
var key = Symbol('key');
console.log(typeof key);
console.log(key);

var obj = {
  test: 'gg'
};
// 이름이 출돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]);