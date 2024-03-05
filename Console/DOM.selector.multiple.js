const listItems = document.querySelectorAll['.item']
console.log(listItems[1].innerText);

listItems.style.color = 'red'

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