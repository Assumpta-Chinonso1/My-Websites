   //sssconst text = document.querySelector('p')
   //const itemList = document.querySelector('.item-list')
   //const items = document.querySelectorAll('li')

     



    //function run(){

    //ClassName
      //console.log(itemList.className);
    ///text.className =  ' card dark'

    //classList

    ///console.log(itemList.classList);

   //// itemList.classList.forEach((c) => console.log(c));

    //text.classList.add('dark')
   //text.classList.remove('card')
  // text.classList.toggle('hidden')
    ///text.classList.replace('card', 'dark')

  //changle style
   // itemList.computedStyleMap.linHeight = '3'

  /// items.forEach((item, index) => {
   // item.style.color = 'red'

   // if (index === 2) {
     //   item.style.color = 'blue'
        
   // }
   //});
   //}

//document.querySelector('button').onclick = run








//Mouse Event and Event Object
     const logo = document.querySelector('img')
     function onclick(event) {
        console.log(event.target);
        
     }

     logo.addEventListener('click', function (event) {
        console.log(event);
        
     })

const onClick = () => console.log('click event');
const onDoubleClick = () => {

  if ( document.body.style.backgroundColor !== 'purple') {
    document.body.style.backgroundColor = 'purple'
    document.body.style.color = 'white'
  } else{
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  }

};
const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
//Event Listener

logo.addEventListener('click', onClick)
logo.addEventListener('dblclick', onDoubleClick)
logo.addEventListener('contextMenu', onRightClick)
logo.addEventListener('mousedown', onMouseDown)
