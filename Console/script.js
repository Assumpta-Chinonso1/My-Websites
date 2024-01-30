

  //object challenge step 1

  const library = [
    {
    title: 'My school LIbrary',
    author:  'Mrs Uzo',
    stauts: {
      own: true,
      reading: false,
      read: false,
 }
},
      
  {
    title: 'My own LIbrary',
    author:  'Mrs Nkem',
    stauts:{
      own: true,
      reading: false,
      read: false,
 }
},


  {
    title: "My dad's LIbrary",
    author:  'Mrs Dan',
    stauts:  {
         own: true,
         reading: false,
         read: false,
    }
  },

  ];

    //step 2

   library[0].stauts.read = true;
   library[1].stauts.read = true;
   library[2].stauts.read = true;

   console.log(library);

   //step 3
    
   const {title: firstBook} = library [1];

   console.log(firstBook);

   //step 4s

   const libraryJSon = JSON.stringify(library)

   console.log(libraryJSon)

   function sayHi() {
     console.log('Good Morning ');
   }
