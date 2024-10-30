// Checking if a number is greater than another number
let num1 = 59
let num2 = 40
console.log('code above condition');
if (num1 < num2) {
    console.log(num1, 'is greateer than', num2);
} else {

}
console.log('code below condition');

// Checking if a string is equal to another string:
let fruit1 = 'apple'
let fruit2 = 'apple'
if (fruit1 == fruit2) {
    console.log('choose another fruit');
} else {
    console.log('both fruits are not same');
}

//Checking if a variable is a number or not:
let num = 50
if (typeof (num) == 'number') {
    console.log(num, 'is number');
} else {
    console.log(num, 'is not a number');
}

//Checking if a boolean value is true or false:
let billPayed = true
if (billPayed === true) {
    console.log('bill is payed for this month');
} else {
    console.log('bill needs to be payed');
}

// Checking if an array is empty or not:
let cart = []
let length = cart.length
if (length === 0) {
    console.log('cart is empty');
} else {
    console.log('cart is not emptyy');
}

