/* 
행동 / 이벤트 카테고리

한 주제 객체의 상태가 바뀌면 다른 구독 객체들에게 상태와 변경을 알림

관찰 대상의 주제객체와 관찰을 하는 구독객체가 존재

구독객체는 자유롭게 주제객체를 등록 및 취소할 수 있다.
한 주제 객체의 상태가 바뀌면 다른 구독 객체들에게 상태와 변경을 알림
*/

class Subject {
  constructor() {
    this.observers = [];
  }
  getObserversList() {
    return this.observers;
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notifyAll() {
    this.observers.forEach((subscriber) => {
      try {
        subscriber.update(this.constructor.name);
      } catch (e) {
        console.error("error: ", e);
      }
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update(subj) {
    console.log(`${this.name}: notified from ${subj} class!`);
  }
}

const subj = new Subject();

const a = new Observer("A");
const b = new Observer("B");
const c = new Observer("C");

subj.subscribe(a);
subj.subscribe(b);
subj.subscribe(c);

console.log(subj.getObserversList());
subj.notifyAll();
console.log();
subj.unsubscribe(b);
subj.notifyAll();
