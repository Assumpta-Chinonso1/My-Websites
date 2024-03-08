             function insertAfter(newEl, existingEl) {
            existingEl.parentElement.insertBefore(newEl,existingEl.nextSibling);
    
     }
       const li = document.createElement('li')
             li.textContent = 'Insert Me After!'

        //Existing element to insert after
            const firstItem = document.querySelector('li:first-child')

              //our custom function

                 insertAfter(li, firstItem)


 //Replace Element
 function replaceFirstItem() {

    const firstItem = document.querySelector('li:first-child')

    const li = document.createElement('li')
    li.textContent = ' Replace First '

    firstItem.replaceWith(li)
    
 }

 function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)')

    secondItem.outerHTML = '<li>Replace Second </li>'
 }

 function replaceAllItems() {
    const lis = document.querySelectorAll('li')

    lis.forEach((item, index) => {
         //item.outerHTML = '<li> Replace All </li>'
         if (index === 1) {
            
         } else {
            item.innerHTML = 'Replace All'
         }
    });
    
   
    lis.forEach((item,index) => (item.outerHTML = index === 1 ? '<li> Second Item </li>': '<li> Item</li>')
    );
 }

 function replaceChildHeading() {
    
    const header = document.querySelector('header')

    const h1 = document.querySelector('header h1')

    const h2 = document.createElement('h2')
    h2.id = 'app-title';
    h2.textContent = 'Shopping List'

    header.replaceChild(h2, h1)
 }


 replaceFirstItem();
 replaceSecondItem();
 replaceAllItems();
 replaceChildHeading()



 //Remove Element

 function removeClearButton() {

    const  removeBtn = document.querySelector('#clear')
   removeBtn .remove()
    
 }

 function removeFirstItem() {

    const ul = document.querySelector('ul')
    const li = document.querySelector('li:first-child')

      ul.removeChild(li)
 }

 function removeItem(itemNumber) {

    const ul = document.querySelector('ul')
    const li = document.querySelector(`li:nth-child(${itemNumber})`)

    ul.removeChild(li)
 }

 function removeItem2(itemNumber) {

    const ul = document.querySelector('ul')
    const li = document.querySelectorAll('li') [itemNumber - 1]

    ul.removeChild(li)
 }




 removeClearButton()
 //removeFirstItem()
 removeItem2(1)