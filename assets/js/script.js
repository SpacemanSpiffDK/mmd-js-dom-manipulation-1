// JS by Dan Høegh
// UCN MMD 2020

// querySelector()
// To find an element to manipulate, we can find a single one using querySelector

// Since we only search for one element, we get the first one found
let elm_firstLI = document.querySelector('li');
console.log(elm_firstLI);

// we can use all css selectors
let elm_secondLI = document.querySelector('li:nth-child(2)');
console.log(elm_secondLI);

let elm_thirdLI = document.querySelector('#li3');
console.log(elm_thirdLI);

// What happens if we look for an element that has children?
let elm_ul = document.querySelector('ul');
console.log(elm_ul);

// querySelectorAll()
// We can find more elements at once, which will give us an array of elements
let arr_li = document.querySelectorAll('li');
console.log(arr_li);

console.log('for-loop ---------------------');
for (let i = 0; i < arr_li.length; i++){
    console.log(arr_li[i]);
}

console.log('forEach-loop ---------------------');
arr_li.forEach(elm => {
    console.log(elm);
});

// remove attribute
let image = document.querySelector('#imageId');
image.removeAttribute('class');

// change an attribute
// image.src="assets/images/blood-band.gif";
// image.title="Blood band";

// createElement()


// appendChild()
// removeChild()
// replaceChild()
// cloneNode()
// insertBefore()

// addEventListener()
// removeEventListener()