// console.log('yo lib');

// async function registerSubscribeListener() {
//     const inputId = 'subscribeInput';
//     const input = document.getElementById(inputId);

//     listener = async function (event) {
//         const email = input.value;
        
//         if (isValidEmail(email)) {
//             updateSubscribeMsg('Saving your email...');

//             await saveEmail(email);
//         } else {
//             console.log('Invalid email: ', email)
//         }
//     }

//     const btnId = 'subscribeBtn';
//     const btn = document.getElementById(btnId);
//     btn.addEventListener('click', listener)

//     // also set a listener for "Enter" button press on text box
//     input.addEventListener('keypress', async function (e) {
//         if (e.key === 'Enter') {
//             console.log('enerpressed')
//             await listener()
//         }
//     });

// }

// function isValidEmail(email) {
//     // source: https://stackoverflow.com/a/46181/3578289
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// async function hideEmailBox() {
//     // 1. hide email input box and subscribe button
//     document.getElementById('emailBox').innerHTML = '';
//     // 2. show a message too
    
//     updateSubscribeMsg('Thank you for your interest :)');
// }

// function updateSubscribeMsg(msg) {
//     document.getElementById('subscribeMsg').innerText = msg;
// }

// async function saveEmail(email) {
//     const url = 'http://api.alternate.parts/ro/api/v1/subscribe';
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             email: email
//         }) 
//     });

//     console.log(await response.json())

//     hideEmailBox()
// }

// // set the subscribe listener
// registerSubscribeListener()
