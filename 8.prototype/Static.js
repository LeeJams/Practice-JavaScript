function SelfIntroduction(name) {
  this.name = name;
  this.getGreeting = function() {
    return `안녕하세요 제 이름은 ${this.name}입니다. 반갑습니다.`
  }
}

SelfIntroduction.prototype.getGreeting2 = function () {
  return `안녕하세요 제 이름은 ${this.name}입니다. 반갑습니다.`
}

// 반지름이 1인 인스턴스
const kim = new SelfIntroduction("철수");
// 반지름이 2인 인스턴스
const lee = new SelfIntroduction("영희");
console.log(kim.getGreeting2());
console.log(kim.getGreeting2 === lee.getGreeting2);