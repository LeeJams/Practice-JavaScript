// 기본
const handler = {
  get: function (target, name) {
    return name === "name" ? `${target.a} ${target.b}` : target[name];
  },
};

const p = new Proxy({a: 'Kimbloom', b: 'is lol zangin', test: 'test'}, handler);
console.log(p.test);

// 심화
function createReactiveObject(target, callback) {
  const proxy = new Proxy(target, {
    set(obj, prop, value) {
      console.log("obj = ", obj);
      console.log("prop = ", prop);
      console.log("value = ", value);
      if (value !== obj[prop]) {
        const prev = obj[prop];
        obj[prop] = value;
        callback(`${prop}가 [${prev}] >> [${value}] 로 변경되었습니다`);
      }
      return true;
    },
  });
  return proxy;
}
const a = {
  형규: "솔로",
};
const b = createReactiveObject(a, console.log);
b.형규 = "커플";
// 형규가 [솔로] >> [커플] 로 변경되었습니다
