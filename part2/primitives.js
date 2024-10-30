let balance = 120
let anotherBalance = new Number(120)

console.log(balance, 'balance');
console.log(anotherBalance.valueOf(), 'another Balance');

console.log(typeof (balance));
console.log(typeof (anotherBalance));

//boolean
let isAuthenticated = true
let isTrulyAuthenticated = new Boolean(false)

console.log(isAuthenticated, 'isAuthenticated');
console.log(isTrulyAuthenticated.valueOf(), 'isTrulyAuthenticated');

//undefined and null
let a;
console.log(a, 'a');
let b = null
console.log(b, 'null'); // null means empty

// string
let str1 = 'hi'
let str2 = 'nmd'
console.log(str1 + ' ' + str2);
console.log(`hi ${str2}`)

//symbol
let sm1 = Symbol()
let sm2 = Symbol('nmd')
let sm3 = Symbol('nmd')
console.log(sm1, 'sm1');
console.log(sm1 == sm2);
console.log(sm2 == sm3);