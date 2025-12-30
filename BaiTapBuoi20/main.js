// Part 1
// 1
const name = "Ngan";
const age = 22;
const isStudent = false;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Is student: ${isStudent}`);

//2

let a = 5;
let b = 10;
a = 10;
b = 5;
console.log(a, b);

// Part 2 : const / let / var
// - const khác let ở điểm nào?

// + const : khai báo hằng số, không thể gán lại giá trị
// + let : có thể gán lại giá trị

// Khi nào nên dùng const?
// +Dùng const khi cần định nghĩa một hằng số

// Sai. Vì const khai báo hằng số, không thể gán lại giá trị

// Part 3

// 100: Number
// "100": String
// True: boolean
// [1, 2, 3]: Array
// {name: "An", age: 20}: Object
// null: Object
// undefined: Undefined

const student = {
  name: "Ngan",
  age: 22,
  scores: [1, 2, 3],
};

console.log(student);

//  Part 4

let x = Number("1000");
let y = String(1000);
let z = String(true);
console.log(x, y, z);
console.log(typeof x, typeof y, typeof z);

// Part 5

// Boolean(0)           false
// Boolean(1)           true
// Boolean("")          false
// Boolean("hello")     true
// Boolean(null)        false
// Boolean([])          true

// Part 6

const numbers = [4, 3, 1, 5, 1];
console.log(numbers[0]);
console.log(numbers[4]);

//numbers là mảng → kiểu object, numbers chứa địa chỉ vùng nhớ của mảng
// khi gán const a = numbers; , a chứa địa chỉ vùng nhớ mảng đó
// => a và numbers cùng trỏ đên 1 vùng nhớ
