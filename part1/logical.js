// && - and operator
// || - or operator
//  ! - not operator 
let isLoggedIn = true 
let isPaid = false
console.log(isLoggedIn && isPaid)

let isEmailLogin = true
let isGoogleLogin = false
console.log(isEmailLogin || isGoogleLogin)


let is10GreaterThan11 = false
console.log(!is10GreaterThan11);

//assignment operator and shorthand assignment operator
let assign = 80
assign = 100
assign += 40
console.log(assign,'assign'); //140
//similarly for sub,mul,div\
//______________________________________
// use paranthesis for calculating
let operation = (((3 + (3 * 5)) /2) * 6) //54
// let operation = 3 + 3 * 5 /2 * 6 //48

console.log(operation,'operation');