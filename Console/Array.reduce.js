const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = number.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 0);

const sum2 = number.reduce((accumulator, curr) => accumulator + curr, 10)

console.log(sum2);

//using a for loop

const sum3 = () =>{
    let accumulator = 0;
    for (const currentValue of number) {
        accumulator += currentValue
        
    }
    return accumulator
}
console.log(sum3());

const cart = [
    {id: 1, name: 'product1', price: 500},
    {id: 2, name: 'product2', price: 1000},
    {id: 3, name: 'product3', price: 400}
];

const total = cart.reduce(function (accumulator, product) {
    return accumulator + product.price
    
}, 0)
console.log(total);
