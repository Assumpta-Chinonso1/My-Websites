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
    // const logo = document.querySelector('img')
    // function onclick(event) {
      //  console.log(event.target);
        
     //}

     //logo.addEventListener('click', function (event) {
      //  console.log(event);
        
    //})

    //const onClick = () => console.log('click event');
   //const onDoubleClick = () => {

    // if ( document.body.style.backgroundColor !== 'purple') {
    //document.body.style.backgroundColor = 'purple'
    //document.body.style.color = 'white'
     //} else{
   // document.body.style.backgroundColor = 'white'
   // document.body.style.color = 'black'
  //}

   //};
  //const onRightClick = () => console.log('right click event');
  //const onMouseDown = () => console.log('mouse down event');
//Event Listener

   //logo.addEventListener('click', onClick)
  //logo.addEventListener('dblclick', onDoubleClick)
 //logo.addEventListener('contextMenu', onRightClick)
   //logo.addEventListener('mousedown', onMouseDown)


//Keyboard Event and Keyboard Properties

//const itemInput = document.getElementById('item-input')

    // const onKeyPress = (e) => {
    // console.log('keypress');
   //};

  //const onKeyUp = (e)  => {
 // console.log('keyup');
   //}

     //const onKeyDown = (e)  => {
         //key
       //if (e.key === 'Enter') {
       // alert('You Pressed enter')
      // }

         //keyCode
            //if (e.keyCode === 13) {
             // alert('You pressed enter')
              
          //  }

         //Code

        // if (e.code === 'Digit1') {
          //console.log('You pressed 1');
          
        // }
         //if (e.repeat) {
        //  console.log('You are holding down ' + e.key);
        // }
        // console.log('Shift ' + e.shiftKey);
         //console.log('Control ' + e.ctrlKey);
         //console.log('Alt: ' + e.altKey);


        // if (e.shiftKey && e.key === 'k') {
         // console.log('You hit shift + k');
          
        // }
///}


//itemInput.addEventListener('keypress', onKeyPress);

//itemInput.addEventListener('keyup'. onKeyUp)

//itemInput.addEventListener('keydown', onKeyDown)


//Input Event
         //const itemInputs = document.getElementById('item-input')
             //const priorityInput = document.getElementById('priority-input')
         //const checkBox = document.getElementById('checkbox')
       //const heading = document.querySelector('h1')

    //function onInput(e) {
  //heading.textContent = e.target.value;
  
    //}
////function onChecked(e) {
  
  //const isChecked = e.target.checked;

  //heading.textContent = isChecked ? 'Checked' : 'Not Checked'
    ///}
       //function onFcus(e) {

        //console.log('Input is Focused');
         //itemInputs.style.outlineStyle = 'solid'
         //itemInputs.style.outlineWidth = '1px'
         //itemInputs.style.outlineColor = 'red'
        
       //}

       //function onBlur() {

          // console.log('Input is not Focus');
        //itemInputs.style.outlineStyle = 'none'
       //}
///itemInputs.addEventListener('keydown', onInput)
//priorityInput.addEventListener('change', onInput)
//checkBox.addEventListener('input', onChecked)
  //itemInputs.addEventListener('focus', onFcus)
    //itemInputs.addEventListener('blur', onBlur)



//Form Submission and Form Data Object

const form = document.getElementById('item-form')

function onSubmit(e) {
  e.preventDefault ();
  
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input')
  
  if (item === '' || priority === '0') {
    alert('please fill in all fields')
    return;
  }

  console.log(item, priority);
}

function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form)
  const item = formData.get('item')

  const priority = formData.get('priority')

  const entries = formData.entries()

  //console.log(entries);

  for (let entry of entries) {
    console.log(entry[1]);
    
    
  }

  //console.log(item, priority);

}

form.addEventListener('submit', onSubmit2)



//Event Bubbling
const button = document.querySelector('form button');

const div = document.querySelector('form div:nth-child(2)')

const forms = document.querySelector('form')


button.addEventListener('click', (e) => {
  alert('The button was clicked')
  e.stopPropagation();
})
  //div.addEventListener('click', () =>  {
  //alert('Div was clicked')
   //})

forms.addEventListener('click', () => {
  alert('Form was clicked')
})

document.body.addEventListener('click', () => {
  alert('body was Clicked')
})

//Even Delegation and Multiple elements
const listIems = document.querySelectorAll('li')
const list = document.querySelector('ul')


   //listIems.forEach((items) => {
   //items.addEventListener('click', (e) =>{
  ///   e.target.remove();
 // })
//})

list.addEventListener('click', (e) =>{
  if (e.target.tagName === 'LI') {
    e.target.remove();
    
  }
})


list.addEventListener('mouseover', (e) =>{
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'green';
    
  }
})




