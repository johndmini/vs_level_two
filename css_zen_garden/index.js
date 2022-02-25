let list = document.getElementsByClassName('designarray');
let navigations = document.getElementsByClassName('navigation')
let previous = document.getElementById('previous')
let next = document.getElementById('next')


navigations[0].style.display = 'none'

list[0].hidden = false;
list[1].hidden = true;
list[2].hidden = true;
list[3].hidden = true;


for(let i = 0; i < list.length; i++) {
    let nextCount = 0
    next.addEventListener('click', function(e){
        e.preventDefault()
        let countUp = nextCount
        countUp += 1
        console.log(nextCount)
        if(navigations[0].style.display === 'none') {
            navigations[0].style.display = 'inline-block';
        }
        if(navigations[0].style.display !== 'none' && countUp === 1) {
            list[0].hidden = true;
            list[1].hidden = false;
        } if(countUp === 2) {
            list[1].hidden = true;
            list[2].hidden = false;
        } if(countUp === 3) {
            list[2].hidden = true;
            list[3].hidden = false;
        } if(countUp === 0) {
            navigations[0].style.display === 'none'
            list[0].hidden = false;
            list[1].hidden = true;
        }
        nextCount = countUp
    })
}

// for(let i = 0; i < list.length; i++){
//         previous.addEventListener('click', function(e){
//         e.preventDefault()
//         let countDown = nextCount

//         countDown -= 1
//         console.log(nextCount)
//         if(navigations[0].style.display === 'none') {
//             navigations[0].style.display = 'inline-block';
//         }
//         if(navigations[0].style.display !== 'none' && countDown === 1) {
//             list[0].hidden = true;
//             list[1].hidden = false;
//         } if(countDown === 2) {
//             list[1].hidden = true;
//             list[2].hidden = false;
//         } if(countDown === 3) {
//             list[2].hidden = true;
//             list[3].hidden = false;
//         } if(countDown === 0) {
//             navigations[0].style.display === 'none'
//             list[0].hidden = false;
//             list[1].hidden = true;
//         }
//         nextCount = countUp
//     })
// }
