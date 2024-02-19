const email = "assumptachinonso42@gmail.com"

if (email) {
    console.log('I passed an email');
}
console.log(Boolean(email));


         //falsy Values
           
         const grades = "A1"

         if (grades) {
            console.log("This is Truthy");
         }else{
            console.log("This is Falsy");
         }

         console.log(Boolean(grades));


         // Truthy and Falsy Caveats

         let courses;

         if (courses !== undefined) {
            console.log(`I have ${courses} courses`);
            
         }else{
            console.log("I don't have Courses");
         }

         //Checking arrays

         const daysOff = ["Monday", "Tuesday"]

         if (daysOff.length > 1) {
            console.log("This is  my off Days");
            
         }else{
            console.log("No Days");
         }
           
         //Checking for objects

         const ages = {}

         if (ages) {
            console.log("This is my age");
         }else{
            console.log("This is not my age");
         }





