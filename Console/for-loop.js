for (let i = 0; i <= 10; i++){
        if (i === 1) {
            console.log("number 1 is my lucky number");
        }
        console.log('number ' + i)
}
       //nested loops
        for (let n = 2; n <= 12; n++) {
            console.log('number ' + n);

            for (let m = 2; m <= 12; m++) {
                console.log(`${n} * ${m} = ${n * m}`);
                
            }
            
        }


         //loop through an array

          const names = ['Joy', 'Favour', 'Grace', 'Wisdom', 'Blesses']

          for (let i = 0; i < names.length; i++) {
            
        if( names [i] === 'Favour'){
           // if (i === 2) {
                 console.log(names [i], 'Is the best');
            }else{
            console.log(names[i]) ;
          }
        }