const body = document.body;
const counter = document["clickcountform"];
const timer = document["inputtimer"];
let counting = counter.clickcount.value

timer.timercount.value = 10;
let interval

function clickMe(e) {
    e.preventDefault();
    counter.clickcount.value++
    counting++
    localStorage.setItem('clickcount', JSON.stringify(counting))
}
counter.clickcount.value = JSON.parse(localStorage.getItem('clickcount'));
body.addEventListener('click', clickMe)

// function decrement(){
//     timer.timercount.value--;
// }

// function decrementTime(){
//     interval = setInterval(decrement, 1000);
// }

// body.addEventListener('click', decrementTime)


// if (counting > 1) {
//     body.removeEventListener('click', decrementTime)
// }




// setTimeout(() => {
//     body.removeEventListener('click', clickMe)
// }, 2000);