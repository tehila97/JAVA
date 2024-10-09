const triggerButton = document.getElementById("triggerPromise");

triggerButton.addEventListener('click',handleButtonClick);

function handleButtonClick (){
    const isRejected = document.getElementById('triggerRejection').checked;
    const messageDiv = document.getElementById('message');
    
    const promise = new Promise ((resolve , reject) =>{
        setTimeout (() => {
         if(isRejected) {
             reject('the promise has been rejected!'); 
         } else {
             resolve ('the promise has been resolved !'); 
        }
        }, 1000);
        });

    promise 
    .then ((message)=>{
        messageDiv.textContent = message;
        messageDiv.classList.add('resolved');
        messageDiv.classList.remove('rejected');
    })
    .catch((errorMessage) =>{
        messageDiv.textContent = errorMessage;
        messageDiv.classList.add('rejected');
        messageDiv.classList.remove('resolved');
    });
}
