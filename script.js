document.addEventListener('DOMContentLoaded', function() {
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');
    const mensajeDiv = document.getElementById('mensaje');
    
    const messages = {
        positive: "I'm glad you're well and remember that I will always be there to support you in whatever you want and decide! ❤️",
        negative: "I understand that you are going through a difficult time. Don't put too much pressure on yourself, take things slowly. I'm here if you need to talk or just tune out. Everything gets better with time. 😊"
    };
    
    btnSi.addEventListener('click', function() {
        showMessage(messages.positive);
        animateButton(this);
    });
    
    btnNo.addEventListener('click', function() {
        showMessage(messages.negative);
        animateButton(this);
    });
    
    function showMessage(text) {
        mensajeDiv.textContent = text;
        mensajeDiv.style.display = 'block';
        
        // Smooth scroll to message
        mensajeDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    function animateButton(button) {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300);
    }
    
    // Keyboard accessibility
    [btnSi, btnNo].forEach(btn => {
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});
