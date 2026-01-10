// Lesson 1

function classifyScore(score) {
    if (score < 0 || score > 10) {
        console.log("Invalid score");
        return;
    }

    if (score >= 9) {
        console.log("Excellent");
    } else if (score >= 8) {
        console.log("Very Good");
    } else if (score >= 6.5) {
        console.log("Good");
    } else if (score >= 5) {
        console.log("Average");
    } else {
        console.log("Weak");
    }
}

let score = 7;
classifyScore(score);

// Lesson 2

function daysInMonth(month) {
    switch (month) {
        case 1: case 3: case 5: case 7:
        case 8: case 10: case 12:
            console.log("31 days");
            break;
        case 4: case 6: case 9: case 11:
            console.log("30 days");
            break;
        case 2:
            console.log("28 days");
            break;
        default:
            console.log("Invalid month");
    }
}

let month = 12;
daysInMonth(month)

// Lesson 3

let n = 9;
let result = (n % 2 === 0) ? "Even" : "Odd";
console.log(result);

// Lesson 4

let age = 10
let ticketPrice = (age < 13) ? 100000 * 0.5 : 100000;
console.log(ticketPrice);

// Lesson 5

function cToF(celsius) {
    return celsius * 1.8 + 32;
}
console.log(cToF(0));

// Lesson 6

function getElectricityBill(kWh) {
    let total = 0;

    if (kWh <= 50) {
        total = kWh * 1678;
    } else if (kWh <= 100) {
        total = 50 * 1678 + (kWh - 50) * 1734;
    } else if (kWh <= 200) {
        total = 50 * 1678 + 50 * 1734 + (kWh - 100) * 2014;
    } else {
        total = 50 * 1678 + 50 * 1734 + 100 * 2014 + (kWh - 200) * 2536;
    }

    return total;
}

console.log(getElectricityBill(100))


