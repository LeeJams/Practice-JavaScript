// 1. 새로운 오브젝트를 생성(위임), 그리고 리턴
// 2. 속성, 매개함수를 공유하는 다른타입의 오브젝트를 생성

class Shoe {
  constructor(attrs) {
    this._attrs = attrs || {};
  }
  getName() {
    return this._attrs?.name;
  }
  getSize() {
    return this._attrs?.size;
  }
  getBrand() {
    return this.constructor.name;
  }
}

class Nike extends Shoe {}
class Adidas extends Shoe {}

const data = [
  { type: "Nike", attrs: { name: "SB", size: 300 } },
  { type: "Nike", attrs: { name: "Cortez", size: 270 } },
  { type: "Nike", attrs: { name: "AirMax", size: 240 } },
  { type: "Adidas", attrs: { name: "Super Star", size: 260 } },
  { type: "Adidas", attrs: { name: "Easy Boot", size: 280 } },
];

class ShoeFactory {
  typeMap = {
    nike: Nike,
    adidas: Adidas,
  };
  create(props) {
    try {
      const Brand = this.typeMap[props?.type?.toLowerCase()];
      return new Brand(props.attrs);
    } catch (e) {
      console.error("error creating new shoes", e);
    }
  }
}

const factory = new ShoeFactory();
const nike1 = factory.create({
  type: "Nike",
  attrs: { name: "AirMax", size: 240 },
});

console.log(nike1)
console.log(nike1.getSize())
console.log(nike1.getBrand())
