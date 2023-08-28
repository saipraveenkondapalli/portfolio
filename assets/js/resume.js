
function resume_tracker(id) {
    // using fetch API
    let promise = fetch("https://flask-apis.vercel.app/api/tracker?id=" + id)
        .then(response => response.json())
        .then(data => {
                console.log(data);
                if (data.hasOwnProperty('msg')){
                    title = "Message from Sai";
                    text = `Thank you recruiter from <strong>${data.company}</strong> for visting. I hope you liked my resume. Please contact me if you have any questions.I hope to hear from you soon`;
                    delay = 2000;
                    generateMessage(title, text, delay);
                }
            }
        )
        .catch(error => console.log(error));

}


// get id from URL param 'id'
var urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
if (id != null) {
    resume_tracker(id);
}



const notification = document.querySelector('.notification');

// function called when the button to dismiss the message is clicked
function dismissMessage() {
    // remove the .received class from the .notification widget
    notification.classList.remove('received');
    document.getElementById('notification').style.display = 'none';


}

// function showing the message
function showMessage() {
    // add a class of .received to the .notification container
    document.getElementById('notification').style.display = 'block';
    notification.classList.add('received');


    // attach an event listener on the button to dismiss the message
    // include the once flag to have the button register the click only one time
    const button = document.querySelector('.notification__message button');
    button.addEventListener('click', dismissMessage, { once: true });
}

// function generating a message with a random title and text
function generateMessage(title, text, delay) {
    // after an arbitrary and brief delay create the message and call the function to show the element
    const timeoutID = setTimeout(() => {

        // update the message with the random values and changing the class name to the title's option
        const message = document.querySelector('.notification__message');

        message.querySelector('h1').textContent = title;
        message.querySelector('p').innerHTML = text;
        message.className = `notification__message message--info`;

        // call the function to show the message
        showMessage();
        clearTimeout(timeoutID);
    }, delay);
}







