// Bintang di layar awal
function createTwinklingStars() {
    const container = document.getElementById('stars-container');
    if (!container) return;
    const starCount = 60; 

    for (let i = 0; i < starCount; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        let size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
        star.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(star);
    }
}

window.onload = function() {
    createTwinklingStars();
};

// Fungsi saat kado diklik
function openGift() {
    const giftScreen = document.getElementById('gift-screen');
    const mainContent = document.getElementById('main-content');
    const whiteFlash = document.getElementById('white-flash');

    if (!giftScreen || !mainContent) return;

    // Kilatan putih
    if (whiteFlash) whiteFlash.style.opacity = '1';

    // Ledakan
    createFlowerExplosion();

    setTimeout(() => {
        giftScreen.style.display = 'none';
        mainContent.style.display = 'flex';
        void mainContent.offsetWidth;
        mainContent.style.opacity = '1';

        if (whiteFlash) whiteFlash.style.opacity = '0';

        // Hujan bunga
        createFlowerParticles();
    }, 400); 
}

function createFlowerExplosion() {
    const flowers = ['🌸', '💮', '🌺', '🥀', '✨', '💖'];
    const particleCount = 30; 
    
    for (let i = 0; i < particleCount; i++) {
        let particle = document.createElement('div');
        particle.className = 'explosion-particle';
        particle.innerText = flowers[Math.floor(Math.random() * flowers.length)];
        particle.style.setProperty('--random-rotate', (Math.random() * 360) + 'deg');
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000); 
    }
}

function createFlowerParticles() {
    const items = ['🌸', '💮', '🌺', '🍃', '🍂'];
    const particleCount = 40; 
    
    for (let i = 0; i < particleCount; i++) {
        const item = items[Math.floor(Math.random() * items.length)];
        let particle = document.createElement('div');
        particle.className = (item === '🍃' || item === '🍂') ? 'leaf-particle' : 'flower-particle';
        particle.innerText = item;
        
        particle.style.left = Math.random() * 100 + 'vw';
        
        const fallDuration = Math.random() * 10 + 15; 
        const swayDuration = Math.random() * 5 + 5; 
        const delay = Math.random() * 15; 
        
        particle.style.animationName = 'fall, sway';
        particle.style.animationDuration = `${fallDuration}s, ${swayDuration}s`;
        particle.style.animationTimingFunction = 'linear, ease-in-out';
        particle.style.animationIterationCount = 'infinite, infinite';
        particle.style.animationDelay = `${delay}s, 0s`; 
        particle.style.animationFillMode = 'both';

        let size = Math.random() * 10 + 8;
        particle.style.fontSize = size + 'px';

        document.body.appendChild(particle);
    }
}