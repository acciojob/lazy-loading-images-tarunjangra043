function loadImage(image) {
    const src = image.getAttribute('data-src');
    if (!src) {
        return;
    }
    console.log(`Loading image: ${src}`);
    image.src = src;
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadImage(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, options);

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img.lazy');
    images.forEach(image => {
        observer.observe(image);
    });
});
