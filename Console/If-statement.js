let temperature = 80

if (temperature < 900) {
    console.log("It's a warm day");
} 

const a = 30
const b = 50

if (a < b) {
    console.log(`${a} is lesser than ${b}`);
}

   //the else conditional
   const day = 'Thursday'

   if (day == 'Tuesday') {
      console.log("Happy Tuesday");
   } else{
    console.log("Happy thursday");
   }

     
   if (a !== b) {
      const z = 20
      console.log(`${z} is 20`);
   }
     //console.log(z);

     //Else if statement

     const grade = 9
     if (grade >= 10) {
        console.log("D");
     } else if (grade < 80) {
        console.log("C");
     } else if (grade < 85) {
        console.log("B");
     } else {
        console.log("A");
     }

     const d = new Date (15, 2, 2024, 19, 0, 0)

     const hour = d.getHours()

     if (hour < 15) {
        console.log("Good Afternoon");
        
     } else if (hour < 12) {
        console.log("Good Morning");
     } else{
        console.log("Good Night");
     }


           //Nested if

           const temperatures = 30

           const isSummer = true;

           if (isSummer) {
            if (temperatures < 20) {
                console.log("It's a hot Summer");
            } else{
            console.log("It's a warm Summer");
           }
         } else{
                console.log("It's not Summer");
           }



           if (hour < 12) {
            console.log("Good Afternoon");

            if (hour === 6) {
               console.log("Wake up!"); 
            }
         } else if (hour > 18) {
            console.log("Good Morning");
         } else{
            console.log("Good Night");

            if (hour >= 20) {
                console.log("Sleep");
            }
         }

         //Logical Operator
         const age = 23 
         const Nigeria = true;
         if (Nigeria) {

        if (age >= 18) {
         
         
        console.log("You're Eligible");
        }                            
         }
         






