// Task 1
let classA = ["An", "Binh", "Chi"];
let classB = classA;
classB[0] = "An Updated";
console.log(classA);
//Mảng là kiểu tham chiếu, Biến classA, classB chỉ giữ địa chỉ bộ nhớ, Gán classB = classA → dùng chung mảng, Thay đổi nội dung mảng → mọi biến cùng trỏ đều bị ảnh hưởng, Địa chỉ bộ nhớ không đổi.

// Task 2
let x = "10";
let y= 2;
console.log(x + y);
console.log(x - y);
console.log(x * "3");
console.log("Hello" - y);

//    "+" có 2 chức năng: cộng số, nối chuỗi -> ưu tiên nối chuỗi , sẽ chuyển toán hạng còn lại thành chuỗi và thực hiện nối chuỗi.
//    "-" chỉ xử lý số, không có chức năng nối chuỗi ->chuyển kiểu chuỗi chuyển sang kiểu số rồi thực hiện phép trừ.
//    NaN là viết tắt của Not a Number → Nghĩa là không phải là một số
//    "-" chuyển kiểu của chuỗi "Hello" sang số -> Nhưng "Hello" không thể chuyển thành số hợp lệ -> NaN -> NaN - 2 => NaN.

// Task 3

let age;
let mathScore;
let isVIP;

// Test case 1:
age = 9;
mathScore = 10;
isVIP = false;
let canEnter = (age >= 10 && mathScore  > 7) || isVIP;
console.log(canEnter);

// Test case 2:
age = 9;
mathScore = 10;
isVIP = true;
canEnter = (age >= 10 && mathScore  > 7) || isVIP;
console.log(canEnter);
// !(age < 10) và age >= 10 giống nhau.

// Task 4
const laptop = {
    brand: "Dell",
    price: 1000,
    spec: { ram: "8GB", ssd: "256GB" }
};

const myLaptop = laptop;
myLaptop.brand = "Apple";

const mySpec = laptop.spec;
mySpec.ram = "16GB";

console.log(laptop.brand);
console.log(laptop.spec.ram);


// dự đoán :
// laptop.brand: Apple
//laptop.spec.ram: 16GB

//myLaptop = laptop → dùng chung object
//mySpec = laptop.spec → dùng chung object con
//Thay đổi ở đâu → tất cả biến cùng trỏ đều bị ảnh hưởng