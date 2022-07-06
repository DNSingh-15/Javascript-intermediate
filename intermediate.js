console.log("hello");

// random number    ... random number lies in between 0 to < 1

var _math = Math.random();
console.log(_math);

var _math = Math.random();
m = _math * 6;
console.log(m);

// Math.floor method

var _math = Math.random();
m = Math.floor(_math * 6) + 1;                               //number between 1 to < 6
console.log(m);




//concept(challenge)   - create love calculator and show the what % love connection between them ..........Enter their name through promt and show the result in the form of alert

prompt(`what is your 👦 name?`);
prompt(`what is her 👸 name?`);

var _loveScore = Math.random() * 100;
_loveScore = Math.floor(_loveScore) + 1;
alert(`Your love 💗 score is ${_loveScore} %`);


// aplying conditions

if(_loveScore > 70){
    alert(`your love 💓 score is ${_loveScore} That's why you are a perfect lover💗💗 like Romeo and Juliate`);
} else{
    alert(`your love 💓 score is ${_loveScore} That's why you are not a perfect lover 😞`);
}




// condition or branching(if else condition)

a = 1;
b = "1";
if (a == b) {                  // == is only check the equal value only it doesn,t care about the datatype
    console.log(`yes`);
} else {
    console.log(`No`);
}

if (a === b) {                        // === is only check the equal value as well as datatype also
    console.log(`yes`);
} else {
    console.log(`No`);
}

// combining the operator ( && , ||)

_a = 50;
_b = 100;
if (_a == _b && _a <= _b) {
    console.log(`true`);
} else {
    console.log(`False`);
}

if (_a == _b || _a < _b) {
    console.log(`conditon is true`);
} else {
    console.log(`condition is false`);
}


// question 4  - BMI Calculator Advanced with some randome conditions --with the using variable interpretation

function bmiCalculator(weight, height) {

    var bmi = weight / Math.pow(height, 2);
    var interpretation;

    if (bmi < 18.5) {
        interpretation = `Your BMI is ${bmi} , so you are underweight.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = `Your BMI is ${bmi}, so you have a normal weight.`;
    } else {
        interpretation = `Your BMI is ${bmi}, so you have overweight.`;
    }
    return interpretation;
}
console.log(bmiCalculator(115, 2));




// concept   .. for leap year
// 2000

function isLeapYear(year) {

    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                console.log(`${year} is a leap year`);
            } else {
                console.log(`${year} is not a leap year`);
            }

        } else {
            console.log(`${year} is a leap year`);
        }

    } else {
        console.log(`${year} is not a leap year`);
    }
}
console.log(isLeapYear(2024));




// array

var guestList = ["Rohan", "Shubham", "Deepshikha", "Shivam"];
console.log(guestList[0]);
console.log(guestList.length);

// how to insert array element

const cars = [];
cars[0] = "Saab";
cars[2] = "BMW";
cars[1] = "Volvo";
cars.push("tata");
cars.push("audi");
cars.pop()
console.log(cars);
// replace the element
cars[0] = "Opel";
console.log(cars);


// question 5 - write a function to adding the number inside the empty aray and evry single time when we run the code number will increase.

var num = [];
var count = 1;
function _addNum() {
    num.push(count);
    count++;
    console.log(num);
}

// when add is divisible by 3 change by a "rockey" and if add is divided by 5 change by "buzz"

var output = [];
var add = 1;
function _addNum1() {
    if (add % 3 == 0) {
        output.push("rockey");
    } else if (add % 5 == 0) {
        output.push("buzz");
    } else {
        output.push(add);
    }
    add++;
    console.log(output);
}




// concept  ..for Guest list allowance for party

var _guestList = ["Rohan", "Shubham", "Sushma", "Anuradha", "Deepshikha", "Shivam"];
var guestname = prompt("what is your name");

if (_guestList.includes(guestname)) {
    alert(`welcome ${guestname} 🥰`);
} else {
    alert(`sorry ${guestname} 😞 you are not allowed to party`);
}




// question 6  - create a function which will select a random name from a list(array) of names. selected person will have to pay for everybody's food bill.

var names  = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
var random = Math.floor(Math.random() * names.length);
console.log(`oh ${names[random]} 😃 is the selected person that's why ${names[random]} will have to pay everybody's food bill`);
