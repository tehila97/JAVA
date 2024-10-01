const myLi = document.querySelector('li.start-here');

myLi.textContent = 'main title';

const myLiNextSibling = myLi.nextElementSibling;

const myUi = myLiNextSibling.firstElementChild;

const newSubTitle = document.createElement('li'); 

const subTitleText = document.createTextNode('sub title 4') ;

newSubTitle.appendChild(subTitleText); 

myUl.appendChild(newSubTitle);

const myLiParent = myLi.parentElement;

myLiParent.lastElementChild.remove();

const head = document.head;

const title = document.head.querySelector('title');

title.textContent = 'DOM Master';

const title = head.lastChild.nodeName === 'TITLE' ? head.lastChild : head.querySelector('title');
