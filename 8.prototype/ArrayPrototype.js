Array.prototype.add = () => 1 + 2;

const arr = ['Lee', 'Kim', 'Park'];

const newArr = arr.map(n => n + '1'); // ['Lee1', 'Kim1', 'Park1']
const newArr2 = arr.concat('Cho'); // ['Lee', 'Kim', 'Park', 'Cho']
const newArr3 = arr.filter(n => n.startsWith('L'));

console.dir(arr);
console.log(arr.add());

console.log(newArr);
console.log(newArr2);
console.log(newArr3);