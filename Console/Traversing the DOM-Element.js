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



console.dir(output);