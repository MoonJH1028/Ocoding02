// // const myButton= document.querySelector('.myButton')

// // function clickedAlert(){
// //     alert('Clicked!');
// // }

// // myButton.addEventListener('click',clickedAlert);

// // const MIN_USER_NAME_LENGTH = 2;

// // const input = document.querySelector('input[type=text]');
// // const msg = document.querySelector('.message');

// // function checkUserNameLength(n) {
// //     if (input.value.length < n){
// //         msg.innerHTML = "이름은" + n + '자 이상이여야 합니다';
// //     } else{
// //         msg.innerHTML = '';
// //     }
// // }input.addEventListener('blur',function(){
// //     checkUserNameLength(MIN_USER_NAME_LENGTH);
// // });

// const quotes = [
//     {
//         quote : '3보 이상 택시',
//         author : '문지혁'
//     },
//     {
//         quote : '3보 이상 택시',
//         author : '문지혁'
//     },
// ];

// const quote = document.querySelector(".quote span:first-child")
// const author = document.querySelector(".quote span:last-child")
// const button = document.querySelector("button");

// function changeSpan(){
//     const firstQuote = quotes[1]
//     quote.innerText = firstQuote.quote;
//     author.innerText = firstQuote.author;
//     author.classList.add('blue')
// }

// button.addEventListener('click', changeSpan);

const clock = document.querySelector(".clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock, 1000)