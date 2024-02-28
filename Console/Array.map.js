const numbers = [2, 4, 5, 6, 7, 8]

//const doubleNumber = numbers.map((numbers) => numbers * 2)

const doubleNumber = numbers.map ((numbers) => 'numbers ' + numbers)

console.log(doubleNumber);

//same with forEach
  const doubleNumber2 = []

  numbers.forEach((numbers) =>{
    doubleNumber2.push(numbers * 3)
  }
  )
  console.log(doubleNumber2);


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

//creating an array of studentsname

const studentsNames = students.map ((student) => student.name)
       
console.log(studentsNames);

//creating an array with student with a name and gender

const studentsNamess = students.map ((students) => {

    return{
        name: students.name,
        gender: students.gender
    }

})
console.log(studentsNamess);

