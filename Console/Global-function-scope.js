 //window.alert('Hello Tech Sis')

//console.log(window.innerWidth);

//Global scope

const x = 100

console.log(x, 'In global');

function run() {
    console.log(window.innerHeight);
    console.log(x, 'In function');
}

run()


if (true) {
    console.log(x, 'In block');
}

//function scope
function add() {
    const x = 1 //overiding the global scope which is called varaible shadowing
    const w = 30
    console.log(w + x);
}



add()