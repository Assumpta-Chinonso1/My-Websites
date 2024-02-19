  // ||=
let x = 0;

if ( x ||= 10 ) {
 //  x = 10 
 console.log(x);
}
  
//x = x || 10

  //x ||= 10


 //console.log(x);

//&&=

let y = 30

if (y) {
    y = 60
}
  y = y && 20
  y &&= 50

console.log(y);

//??=

let z = null
if (z === null || z === undefined) {
    z = 90
}
 z = z ?? 90
 z ??= 90

console.log(z);
