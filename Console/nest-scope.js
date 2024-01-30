function first() {

    const x = 500;
    

    function second() {

        const y = 300;

        console.log(x + y);
        
    }

     //console.log(x); cannot access from the child scope


    //  console.log(x);
           second()

       }   
        first()



            if (true) {
                 const x = 20;

                 if (x === 20) {

                    const y = 50

                    console.log(x + y);
                    
                 }
            }
