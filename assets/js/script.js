// JS by Dan Høegh
// UCN MMD 2020

// querySelector()
// To find an element to manipulate, we can find a single one using querySelector

// Since we only search for one element, we get the first one found
let elm_firstLI = document.querySelector('li');
console.log(elm_firstLI);

// we can use all kinds of css selectors
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

// we can loop through an array of elements in two different ways
// the for-loop
console.log('for-loop ---------------------');
for (let i = 0; i < arr_li.length; i++) {
    console.log(arr_li[i]);
}

// forEach-loop
console.log('forEach-loop ---------------------');
arr_li.forEach(function (elm) {
    console.log(elm);
});

// forEach-loop with i counter
console.log('forEach-loop with i counter ---------------------');
arr_li.forEach(function (elm, i) {
    console.log(i);
    console.log(elm);
});

// the for-each-loop - with arrow function
console.log('forEach-loop w/ arrow-function -------------');
arr_li.forEach(elm => {
    console.log(elm);
});

// the for-each-loop - with arrow function and i counter
console.log('forEach-loop w/ arrow-function and i counter-------------');
arr_li.forEach((elm, index) => {
    console.log(index);
    console.log(elm);
});


// remove attribute
let image = document.querySelector('#imageId');
image.removeAttribute('class');

// change an attribute
image.src = "assets/images/blood-band.gif";
image.title = "Blood band";


// removeChild([element])
// remove the main tag from the HTML DOM - we do this by finding the parent element and then removing the child element
const elmMain = document.querySelector('main');
const elmArticleToBeRemoved = document.querySelector('#removeThisArticle');
elmMain.removeChild(elmArticleToBeRemoved);

// createElement([string with tag-name])
const newArticle = document.createElement('article'); // creates the element in memory, it is not placed in the DOM yet!
const newHeadline = document.createElement('h1');
newHeadline.textContent = 'My headline';
console.log(newArticle);
console.log(newHeadline);

// appendChild([element]) - adds an element as the last child to another element
newArticle.appendChild(newHeadline); // append (add) newHeadline to newArticle as a child element
console.log(newArticle);
document.querySelector('main').appendChild(newArticle); // append newArticle to the main element in HTML

// replaceChild([newElement],[oldElement])
// Instead of using removeChild() and THEN using appendChild()
// to replace an element, we can use replaceChild()
const oldChildElement = document.querySelector('h1');
const newChildElement = document.createElement('h2');
newChildElement.textContent = 'Replaced headline';
oldChildElement.parentElement.replaceChild(newChildElement, oldChildElement);

// cloneNode([deep (boolean - should the descendants be cloned as well?)])
// first we create a list to try this on

const newList = document.createElement('ul');
newList.id = 'ul3';
for (i = 0; i < 5; i++){
    const newListItem = document.createElement('li');
    newListItem.textContent = `Number ${i+1}`;
    newList.appendChild(newListItem);
}
const article = document.querySelector('article');
article.appendChild(newList);

// Let's clone a list without deep
const ul1 = document.querySelector('#ul3');
const cloneShallow = ul1.cloneNode(false);
cloneShallow.id = 'ul4';
article.appendChild(cloneShallow);

// Let's clone a list WITH deep
const cloneDeep = document.querySelector('#ul3').cloneNode(true);
cloneDeep.id = 'ul5';
article.appendChild(cloneDeep);

// insertBefore(newElement, referenceElement)
// let's insert an h2 headline before #ul5
const ul5 = document.querySelector('#ul5');
const newHead = document.createElement('h2');
newHead.textContent = 'Header - InsertBefore';
ul5.parentElement.insertBefore(newHead, ul5);

function youClicked(){
    alert('You clicked!');
}

// addEventListener()
const newListener = document.querySelector('li').addEventListener('click', youClicked);

// removeEventListener()
document.querySelector('li').removeEventListener('click', youClicked);

// Read more here:
// https://www.hongkiat.com/blog/dom-manipulation-javascript-methods/