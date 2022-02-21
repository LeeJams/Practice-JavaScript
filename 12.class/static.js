class MyMath {
  static PI = 22 / 7;

  static #num = 10;

  static increase() {
    return ++this.#num
  }
}

console.log(MyMath.PI);
console.log(MyMath.increase());
// console.log(MyMath.#num);