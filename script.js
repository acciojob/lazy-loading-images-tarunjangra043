function loadImage(image) {
    const src = image.getAttribute('data-src');
    if (!src) {
        return;
    }
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

const images = document.querySelectorAll('img.lazy-load');
images.forEach(image => {
    observer.observe(image);
});
