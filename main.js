
document.addEventListener('DOMContentLoaded', (event) => {
    
    const textArray = [
        'create your own image',
        'download your favourite pics',
        'use online software photoshop',
        'personalise your photos'
    ];
    const typewriterElement = document.getElementById('typewriter');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 150;

    function type() {
        const currentText = textArray[textIndex];
        if (isDeleting) {
            typewriterElement.innerHTML = currentText.substring(0, charIndex--);
            delay = 50;
            if (charIndex < 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length;
                delay = 500;
            }
        } else {
            typewriterElement.innerHTML = currentText.substring(0, charIndex++);
            delay = 100;
            if (charIndex === currentText.length + 1) {
                isDeleting = true;
                delay = 1000;
            }
        }
        setTimeout(type, delay);
    }

    type();
    
});

document.addEventListener('DOMContentLoaded', (event) => {
    const text = "welcome to Glitz";
    const typewriterElement = document.getElementById('typewrite');
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriterElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();
});