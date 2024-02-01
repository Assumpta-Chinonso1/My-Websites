
  //Regular Arrow function syntax
const add  = (a, b) => {
    return a + b
}

//implicit return = because we are specifying the return keyword
const subtract = (a, b) => a - b;

const doube = a => a * 3 // single para? no need for parenthesis

//Returning an object
const  creatObj = () => ({
    name: 'Assumpta'
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9]

numbers.forEach(function (n) {
    console.log(n);
    
});

//Arrow function in a callback
numbers.forEach ((n) => console.log(n));

console.log(add(1, 2));
console.log(subtract (4, 2) );
console.log(doube(20));
console.log(creatObj());

  (function () {
const user = 'Susu'
console.log(user);
const hello = () => console.log('Hello from the star girl');
hello()
})();

(function (name) {
    console.log('Hello ' + name);
    
})('Amakass')





