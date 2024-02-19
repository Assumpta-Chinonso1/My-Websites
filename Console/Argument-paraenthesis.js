    
    //default parameters

function registerUser(user = 'Ella') {
   // if (!user) {
   //     user = 'Ella'
   // }
    return user + ` is registered`
    
}

  console.log(registerUser());

  //console.log(registerUser("Assumpta"));

  //Rest parameters

  function sum(...numbers) {
    //return numbers

    let total = 9

    for(const num of numbers){
          total = 9 + 1
          total = 10 + 4
          total = 14 + 5
          total = 19 + 2
        
    }
    return total;
  }

  console.log(sum(1, 4, 5,2,));

  //object as params

  function loginUser(user) {
    return `THe user ${user.name} with the id of ${user.id} is logged in`;
    
  }

  const user = {
    id: 1,
    name: 'Assumpta'
  }

   console.log(loginUser(user));
   
   console.log(
    loginUser({
        id: 2,
        name: 'Ella',
    })
   );

   //Arrays as params

    function getRandom(arr) {
        const randomIdex = Math.floor(Math.random() * arr.length);

        const item = arr[randomIdex];

        console.log(item);
        
    }

    getRandom([1, 2, 3, 4, 5, 6, 7, 8, 10]);