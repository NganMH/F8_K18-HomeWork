// Lesson 1

function getTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Not a triangle";
  }

  if (a === b && b === c) {
    return "Equilateral triangle";
  }

  if (
    a * a === b * b + c * c ||
    b * b === a * a + c * c ||
    c * c === a * a + b * b
  ) {
    return "Right Triangle";
  }

  if (a === b || a === c || b === c) {
    return "Isosceles triangle";
  }

  return "General triangle";
}

let checkTriangle = getTriangle(3, 3, 3);
console.log(checkTriangle);

// Lesson 2

function isPerfectSquare(a) {
  if (a < 0) return false;
  let b = a ** 0.5;
  return Number.isInteger(b);
}

console.log(isPerfectSquare(10));
console.log(isPerfectSquare(4));
