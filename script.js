document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    // Send form data to API endpoint
    fetch('YOUR_API_ENDPOINT', { method: 'POST', body: new FormData(this) })
    .then(response => response.json())
    .then(data => alert('Message sent!'))
    .catch(error => console.error('Error:', error));
});