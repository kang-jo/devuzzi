document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('mousemove', (e) => {
    const background = document.querySelector('.background');
    const x = e.clientX;
    const y = e.clientY;

    const gradient = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.25), transparent 100%)`;

    background.style.backgroundImage = gradient;
});

function showBox(element) {
    const popupBox = element.querySelector('.popup-box');
    popupBox.style.display = 'block';
}

function hideBox(element) {
    const popupBox = element.querySelector('.popup-box');
    popupBox.style.display = 'none';
}

