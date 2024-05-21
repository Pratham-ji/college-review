const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');
const form = document.getElementById('college-review-form');
const formContainer = document.getElementById('form-container');
const thankYouMessage = document.getElementById('thank-you-message');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        ratingValue.value = rating;
        stars.forEach((s, index) => {
            if (index < rating) {
                s.classList.add('selected');
            } else {
                s.classList.remove('selected');
            }
        });
    });
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: form.method,
        body: formData,
    }).then(response => {
        if (response.ok) {
            formContainer.classList.add('hidden');
            thankYouMessage.classList.remove('hidden');
        } else {
            alert('There was an error submitting your form. Please try again.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your form. Please try again.');
    });
});
