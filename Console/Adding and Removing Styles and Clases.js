const text = document.querySelector('p')
const itemList = document.querySelector('.item-list')
const items = document.querySelectorAll('li')


function run(){

    //ClassName
    console.log(itemList.className);
    text.className =  ' card dark'

    //classList

    console.log(itemList.classList);

    itemList.classList.forEach((c) => console.log(c));

    //text.classList.add('dark')
   //text.classList.remove('card')
  // text.classList.toggle('hidden')
  text.classList.replace('card', 'dark')

  //changle style
   // itemList.computedStyleMap.linHeight = '3'

   items.forEach((item, index) => {
    item.style.color = 'red'

    if (index === 2) {
        item.style.color = 'blue'
        
    }
   });
}

document.querySelector('button').onclick = run