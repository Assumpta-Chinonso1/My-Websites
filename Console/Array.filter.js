const nums = [1,2,3,4,5,6,7,8,9,10];

//const evenNums = nums.filter(function (nums) {
   // return  nums % 2 === 0
    
//})
              //shorter way to use filter
       const evenNums = nums.filter((nums => nums % 2 === 0));

        console.log(evenNums);

// same as using forEach
            const numms = [11,12,13,14,15,16,17,18,19,20]

            const oddNums = [];

            numms.forEach((numms) => {
        
               
            if (numms % 2 === 0) {
                oddNums.push(numms)
            }


        })

        console.log(oddNums);

        const students = [
            {name: 'Anthony', RegNo: 2346, gender: 'Male', Dept: 'Computer'},
            {name: 'Lovely', RegNo: 3829, gender: 'Female', Dept: 'Basics'},
            {name: 'Mark', RegNo: 7697, gender: 'Male', Dept: 'Maths'},
            {name: 'Princess', RegNo: 86781, gender: 'female', Dept: 'Computer'},
            {name: 'Berry', RegNo: 4728, gender: 'female', Dept: 'Chemistry'},
            {name: 'Dan', RegNo: 3426, gender: 'Male', Dept: 'Physics'},
            {name: 'Bobby', RegNo: 89542, gender: 'Male', Dept: 'Maths'},
            {name: 'Goodseed', RegNo: 9028, gender: 'female', Dept: 'Maths'},
            {name: 'Tony', RegNo: 9833, gender: 'Male', Dept: 'Art'},

        ];
          //getting only Male
        const nGender = students.filter((names) => names.gender === 'Male'

        )
        console.log(nGender);
          
        //getting students with same dept

        const nDept = students.filter((Deptss) => Deptss.Dept === 'Computer')
        console.log(nDept);

        //getting two students with same dept

        const mDept = students.filter((Good) => Good.Dept >= 'Computer' && Good.Dept <= 'Maths')

        console.log(mDept);

    