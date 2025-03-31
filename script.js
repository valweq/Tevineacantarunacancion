// script.js
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    const colors = ['#AC746C', '#A58570', '#F99256', '#C9A99A'];
    balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = (Math.random() * 3 + 3) + 's';
    
    const string = document.createElement('div');
    string.classList.add('string');
    balloon.appendChild(string);
    
    document.body.appendChild(balloon);
    
    setTimeout(() => {
        balloon.remove();
    }, 6000);
}
function createFireworks() {
    for (let i = 0; i < 4; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        
        firework.style.left = 25 + (i * 15) + 'vw';
        firework.style.top = '30vh';
        
        document.body.appendChild(firework);
        
        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
}
setTimeout(() => {
    createFireworks();
}, 1000);
setTimeout(() => {
    document.querySelector('.message').style.opacity = '1';
}, 4000);
setInterval(createBalloon, 500);
