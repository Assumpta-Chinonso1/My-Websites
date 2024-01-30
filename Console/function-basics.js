
function sayHello() {
    console.log("Good Morning");
}

sayHello(); //invoking or calling a function

function add(num1, num2) // this is a parameter, provided during function definition
 {
    console.log(num1 + num2);
}

add(34, 78); //passing a value here is called an argument, provided during function call

function subtract(num1, num2) {
    console.log('AFter the return');
   return num1 - num2
  
}

   const result  =   subtract(16, 12)

   console.log(result,'checking result before definition');

   const varible1 = 5

   console.log('Varaible before declaration', varible1);


    // console.log(results2);

   function addNumbers(a, b) {
    const sum = a + b;
    return sum;
   }

   
  const results2 = addNumbers(3, 10);
  console.log(results2);

   
  
