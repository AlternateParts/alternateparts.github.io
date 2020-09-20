console.log("api_caller included");
async function registerSignupListener() {
    const inputId = 'signupInput';
    const input = document.getElementById(inputId);

    listener = async function (event) {
        const email = input.value;

        if (isValidEmail(email)) {
            updateSignupMessage('Sending API Key to ' + email);

            await sendApiKey(email);
        } else {
            console.log('Invalid email: ', email)
        }
    }

    const btnId = 'signupBtn';
    const btn = document.getElementById(btnId);
    btn.addEventListener('click', listener)

    // also set a listener for "Enter" button press on text box
    input.addEventListener('keypress', async function (e) {
        if (e.key === 'Enter') {
            console.log('enerpressed')
            await listener()
        }
    });

}

function isValidEmail(email) {
    // source: https://stackoverflow.com/a/46181/3578289
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

async function hideEmailBox() {
    document.getElementById('emailBox').innerHTML = '';
}

function updateSignupMessage(msg) {
    document.getElementById('sentMsg').innerText = msg;
}

async function sendApiKey(email) {
    const url = 'http://api.alternate.parts/ro/api/v1/signup';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email
            // todo avoid password?
        })
    });

    console.log(await response.json())

    // 1. hide email input box and subscribe button
    hideEmailBox()

    // 2. show a message too
    updateSignupMessage('API Key sent to ' + email + '. Please check your inbox');
}


window.onload = function () {
	console.log('loaded')
	// set the listener to receive signup request in docs
	registerSignupListener()
}