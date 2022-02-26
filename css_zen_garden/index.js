let list = document.getElementsByClassName('designarray');
let navigations = document.getElementsByClassName('navigation')
let previous = document.getElementById('previous')
let next = document.getElementById('next')


navigations[0].style.display = 'none'

list[0].hidden = false;
list[1].hidden = true;
list[2].hidden = true;
list[3].hidden = true;

let nextCount = 0

function scrollLinks(){
    if(nextCount === 1) {
        navigations[0].style.display = 'inline-block'
        list[0].hidden = true;
        list[1].hidden = false;
        list[2].hidden = true;
        list[3].hidden = true;
    } 
    if(nextCount === 2) {
        list[0].hidden = true;
        list[1].hidden = true;
        list[2].hidden = false;
        list[3].hidden = true;
    } 
    if(nextCount === 3) {
        list[0].hidden = true;
        list[1].hidden = true;
        list[2].hidden = true;
        list[3].hidden = false;
    } 
    if(nextCount === 0) {
        navigations[0].style.display === 'none'
        list[0].hidden = false;
        list[1].hidden = true;
        list[2].hidden = true;
        list[3].hidden = true;
    }
}

function countUp() {
    nextCount++
    scrollLinks()
    console.log(nextCount)
    
}
next.addEventListener('click', countUp)

function countDown() {
    nextCount--
    scrollLinks()
    console.log(nextCount)
}
previous.addEventListener('click', countDown)