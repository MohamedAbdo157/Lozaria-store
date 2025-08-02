// Add your client-side JavaScript here
document.querySelectorAll('.product button').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});