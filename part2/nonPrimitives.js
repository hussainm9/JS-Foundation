//objects
const person  = {
    firstName: 'Mehmood',
    isAuthenticated: true
}



// const a = 120
// a = 200
// console.log(a,'a'); //TypeError: Assignment to constant variable.

console.log(person.firstName,'firstName');
person["last name"] = 'Hussain'
console.log(person,'peerso');

//arrays
const heros = ["batman", "superman"]
 
//properties of object
const today = new Date()
console.log(today.getDate());

//implicit type conversion
let isValue = "2abc";
console.log(typeof Number(isValue));
console.log(Number(null));