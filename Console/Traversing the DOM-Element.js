let output;

//Get Child Element
const parent = document.querySelector('.parent')

output = parent.children

output = parent.children[1].innerText
output = parent.children[1].className
output = parent.children[1].nodeName

parent.children[1].innerText = 'Child Two name is Grace'
parent.children[1].style.color = 'blue'

parent.firstElementChild.innerText = 'Child One'

parent.lastElementChild.innerText = 'Child three'

//Get parent Element

const child = document.querySelector('.child')
output = child.parentElement;

child.parentElement.style.border = '1px solid red'
child.parentElement.style.padding = '10px'

//siblings Element

const secondItem = document.querySelector('.child:nth-child(2)')

output = secondItem

output = secondItem.nextElementSibling

 secondItem.nextElementSibling.style.color = 'green'
 secondItem.previousElementSibling.style.color = 'orange'

 //Traversing the DOM-nodes
   
 output = parent.childNodes
 output = parent.childNodes[0]
 output = parent.childNodes[0].textContent
 output = parent.childNodes[0].nodeName
 output = parent.childNodes[3].textContent
 output = parent.childNodes[3].outerHTML
 output = parent.childNodes[3].innerText = 'Child One One'
 output = parent.childNodes[5].style.color = 'red'

 output = parent.firstChild;
 output = parent.lastChild;

 output = parent.lastChild.textContent = 'Hello Dear!'

 //Parent Nodes

 const childs = document.querySelector('.child')

 output = childs.parentNodes;
 output = childs.parentElement;

 output = childs.parentNode.style.backgroundColor = 'white'

 output = childs.parentNode.style.padding = '30px'

 //siblings

 const secondItems = document.querySelector('.child:nth-child(2)')

output = secondItems

output = secondItems.nextElementSibling

 secondItems.nextElementSibling.style.color = 'green'
 secondItems.previousElementSibling.style.color = 'orange'

console.log(output);




//create and Append Element

const div = document.createElement('div')
div.className = 'my-element'
div.id = 'my-element'
div.setAttribute('title', 'My  Elemnt')

  //div.innerText = 'Hello World'

const text = document.createTextNode('Hello World')
div.appendChild(text)

  //document.body.appendChild(div)

     document.querySelector('ul').appendChild(div)

  //console.log(div);

  function createNewItem(item) {
    const li = document.createElement('li')

    const button = document.createElement('button')
                       
    button.className = '   remove-item btn-link text-red '

    const icon = document.createElement('i')
    icon.className = " fa-solid fa-xmark "

    console.log(button);
    console.log(icon);
    
}