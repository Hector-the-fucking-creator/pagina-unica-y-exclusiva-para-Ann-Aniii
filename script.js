// FUNCIÓN PARA CREAR TULIPANES
function createTulips() {
    const body = document.body;
    for (let i = 0; i < 20; i++) {
        const tulip = document.createElement('div');
        tulip.className = 'tulip';
        tulip.style.left = `${Math.random() * 100}%`;
        tulip.style.top = `${Math.random() * 100}%`;
        tulip.style.animationDelay = `${Math.random() * 2}s`;
        body.appendChild(tulip);
    }
}

// EVENTO AL CARGAR LA PÁGINA
document.addEventListener('DOMContentLoaded', (event) => {
    createTulips();
    
    // INTERACTIVIDAD DEL SOBRE
    const envelope = document.querySelector('.envelope');
    envelope.addEventListener('click', function() {
        this.style.transform = this.style.transform === 'rotateY(180deg)' 
            ? 'rotateY(0deg)' 
            : 'rotateY(180deg)';
    });
});