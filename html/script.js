document.addEventListener('DOMContentLoaded', () => {
    // Form submission handler
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => data[key] = value);

        alert("Vielen Dank! Ihre Nachricht wurde erfolgreich versendet. Wir werden uns in Kürze bei Ihnen melden.")
    });
});
