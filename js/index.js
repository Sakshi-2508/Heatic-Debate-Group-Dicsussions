(function () {
    emailjs.init("API_KEY") // Replace with your EmailJS Public Key
})();

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const loadingModal = new bootstrap.Modal(document.getElementById('loadingDialog'));
    loadingModal.show();

    emailjs.sendForm("SERVICE_KEY", "TEMPLATE_ID", this)
        .then(() => {
            loadingModal.hide();
            alert('Message sent successfully!');
            this.reset();
        }, (error) => {
            loadingModal.hide();
            alert('Failed to send message. Please try again later.');
            console.error('EmailJS Error:', error);
        });
});