// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.getElementById ("button1");
// const colors = ['red', 'yellow','blue','green','orange'];
// const texts = ['change1','change2','change3','change4','change5'];

// button.addEventListener('click', handleButtonClick);

// function handleButtonClick () {
//     let count = 0;

//     function changeBackgroundAndText () {
//         if (count<colors.length) {
//             document.body.style.backgroundColor = colors[count];
//             document.querySelector('h1').textContent = texts [count];
//             count ++;
//             setTimeout(changeBackgroundAndText, 5000);
//         }
//     }
    
//     changeBackgroundAndText ();
// }
// });


// promises
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById ("button1");
    const colors = ['red', 'yellow','blue','green','orange'];
    const texts = ['change1','change2','change3','change4','change5'];
    
    button.addEventListener('click', handleButtonClick);

    function delay (seconds) {
        return new Promise (resolve => {
            setTimeout(resolve, seconds * 1000);
        });
    }
    
    async function handleButtonClick () {
        for (let count =0; count< colors.length; count++) {
            document.body.style.backgroundColor = colors [count];
            document.querySelector('h1').textContent = texts[count];
            await delay(5);
        }
    }
});













