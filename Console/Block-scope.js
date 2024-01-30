   //block scope
   
   if (true) {
    const blockVariable = "I'm in a block scope";
         console.log(blockVariable);
   }
      // console.log(blockVariable);




 function myFunction() {
    if (true) {

        var localVariable = "I'm in block scope"
        let blockVariable = "I'm also in block scope"

       // console.log(blockVariable);
       // console.log(localVariable);
        
    }
    

     console.log(localVariable);

  //  console.log(blockVariable);

}

    myFunction()

//another example

   const x = 100

  if (true) {

    var y = 200;

   console.log(y);    
}

     console.log(x);

   // console.log(x + y);




  //for for loop

  for (let i = 0; i <= 10; i++) {
   console.log(i);
    
  }
  // console.log(i);