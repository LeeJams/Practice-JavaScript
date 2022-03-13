const fn = () => {}
const set = new Set([1, 2, 3, function setFn() {}, fn]);

console.log(set.has(3));
console.log(set.has(function setFn() {}));
console.log(set.has(fn));

console.log(set);

set.delete(fn);
console.log(set);