const socialMedias = ['Instagram', 'Twitter', 'Facebook', 'Linkdlin']

       //console.log(socialMedias._proto_);
  //socialMedias.forEach (function (item) {

    //console.log(item);
    
    //})

    socialMedias.forEach((item, index, arr) => console.log(`${index}- ${item}`,arr));

    function enterSocial(socialMedias) {
        console.log(socialMedias);
        
    }
    socialMedias.forEach(enterSocial)

    const socialObj = [
        {name:'instagram', url:  'htttp://instagram.com'},  
        {name:'Twitter', url:  'htttp://twitter.com'}, 
         {name:'Facebook', url:  'htttp://Facebook.com'},  
         {name:'Linkdlin', url:  'htttp://linkdlin.com'},
           ]

    socialObj.forEach((item) => console.log(item.url));