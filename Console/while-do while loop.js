    // while loop
      let i = 10
    while (i <= 20) {
        console.log('number ' + i);
        i++;
    }

    //loop over array
      let j = 0
    const arr = [10, 20, 30, 40]

    while (j < arr.length) {
        console.log(arr[j]);

        j++;
        
    } 

    //nesting while loop

    let a = 1;

    while (a <= 5) {
        console.log('number ' + a);

        let b = 1;

        while (b <= 5) {
            console.log(`${a} * ${b} = ${a * b}`);

            b++;
        }

        a++;
    }    

      //Do loop

      let k = 2;

      do {
        console.log('figure ' + k);
         
        k++

      } while (k <= 8);