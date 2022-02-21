class Person {
  #job = 'Developer'
  constructor(name) {
    this.name = name;
  }

  sayJob() {
    console.log(this.job);
  }

  static staticTest() {
    console.log('Test');
  }

  get job() {
    return this.#job;
  }
}

const me = new Person('Lee');
console.log(me.job);
// me.job = 'Writer';
// console.log(me.job);
me.sayJob();

Person.staticTest();