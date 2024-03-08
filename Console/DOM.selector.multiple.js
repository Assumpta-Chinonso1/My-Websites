const listItems = document.querySelectorAll['.item']
console.log(listItems[1].innerText);

listItems[1].style.color = 'red'

listItems.forEach((item) => {
    item.style.color = 'red'

    if (index === 1) {
        item.remove()
    }

    if (index === 0) {
        item.innerHTML = ` wigs
        <button class="remove btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
        </button>`
    }
});

const listItems2 = document.getElementsByClassName
('item')

console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2)

listItemsArray.forEach((item) => {
    console.log(item.innerText);
})


//innerHTML vs creaeElement

//Quick and Dirty
function createListItem(item) {

    const li = document.createElement('li')

    li.innerHTML = `$(item)
    <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
             </button> `

            
             document.querySelector('.item').appendChild(li)
    
}




//Clear and performant

function createNewItem(item) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(item))

    const button = document.createElement('button')
                       
    button.className = '   remove-item btn-link text-red '

    const icon = document.createElement('i')
    icon.className = " fa-solid fa-xmark "

    button.appendChild(icon);
      li.appendChild(button)

    console.log(li.innerHTML);
    
    
}

createListItem('Eggs')
createNewItem ('cheese')

//insertAdjacentElement example

function insertElement() {
    const filter = document.querySelector('.filter')

    const h1 = document.createElement('h1')
    h1.textContent = 'insertAdjacenElement'

    filter.insertAdjacentElement('beforebegin',h1)
    
}


//insertAdjacentText example

function insertText() {
    const item = document.querySelector('li:first-child')
    
    item.insertAdjacentText('afterend')
    
}

//insertAdjacentHTML example
function insertHTML() {
    const clearBtn = document.querySelector('#clear')

    clearBtn.insertAdjacentHTML('afterend', '<h2> insertAdjacentHTML</h2>')
    
}

//insertBefore example

function insertBeforeItem() {
    const ul = document.querySelector('ul')

    const li = document.createElement('li')
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-child(3)')

    ul.insertBefore(li,thirdItem)
    
}


insertElement();
insertText();
insertHTML();
insertBeforeItem()

/*
<!-- beforebegin -->
<p>

<!-- afterbegin -->

foo

<!-- beforeend -->

</p>

<!-- afterend -->


*/



