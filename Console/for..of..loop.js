     //loop over arrays
const properties = ['Table', 'Chair', 'Wardrob', 'Shoe Rack']

for (let i = 0; i < properties.length; i++) {
    console.log(properties[i]);
}

    const candidates = [
        {name: 'Stanly'},
        {name: 'Victor'},
        {name: 'Miracle'}
    ];
    


    //now using For..of loop, a clearer or say cleaner way to write this

    for (const propertie of properties) {
        console.log(propertie);
        
    } 

    for (const candidate of candidates) {
        console.log(candidate.name);
        
    }

    //loop over string

      const str = 'Hello Bestie'

      for (const note of str) {
        console.log(note);
        
      }

      //loop over map

     const map = new Map ();
     map.set('name', 'Hellen')
     map.set('age', 18)

     for (const [key, value] of map) {
        console.log(key,value);
        
     }