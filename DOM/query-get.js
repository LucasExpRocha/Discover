// getElementById

const Id = document.getElementById('blog-title')
const Class = document.getElementsByClassName('myname')
const TagName = document.getElementsByTagName('meta')
const element = document.querySelector('.myname')
const elementAll = document.querySelectorAll('.myname')


//Node List - html colection
//faz forEach - não faz

elementAll.forEach(el => console.log(el))

// Qual deles usar?

// getElementById
// getElementByClassName    (html colection) 
// getElementByTagName
// querySelector
// querySelectorAll         (node list)