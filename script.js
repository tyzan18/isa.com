document.addEventListener('DOMContentLoaded', function() {
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');
    const mensajeDiv = document.getElementById('mensaje');
    
    const messages = {
        positive: "Me alegra que estés bien y recuerda que siempre estaré ahí para apoyarte en lo que quieras y decidas! ❤️",
        negative: "Entiendo que estás pasando por un momento difícil. No te presiones demasiado, tómate las cosas con calma. Estoy aquí si necesitas hablar o simplemente desconectar. Todo mejora con el tiempo. 😊"
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
