console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').getAttribute('id'));

//set attributes

 //document.getElementById('app-title').id = 'new-id'
document.getElementById('app-title').title = 'Shopping List'

document.getElementById('app-title').setAttribute('class', 'title')

const title = document.getElementById('app-title')

console.log(title);

//get or change a content

console.log(title.textContent);
title.textContent = 'Hello World'
title.innerText = "Okay, cool"
title.innerHTML = '<strong>Shopping Lists</strong>'


//change styles
title.style.color = 'red'
title.style.backgroundColor = 'black'
title.style.padding = '10px'
title.style.borderRadius = '10px'

//document.querySelector()
console.log(document.querySelector('h1'));
    console.log(document.querySelector('#app-title'));

    console.log(document.querySelector('input[type="text"]'));

    console.log(document.querySelector('Li:nth-child(2)').innerText);

    const secondItem = document.querySelector('Li:nth-child(2)')
    secondItem.innerText = 'Wristwatch'
    secondItem.style.color = 'blue'

    //using this methods on other elements

    const lists = document.querySelector('ul')
    console.log(lists);

const firstItem =    lists.querySelector('li')

firstItem.style.color = 'orange'
