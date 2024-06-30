document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('thankyou.html', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            alert("Vielen Dank! Ihre Nachricht wurde erfolgreich versendet. Wir werden uns in Kürze bei Ihnen melden.")
        });
    })
});
