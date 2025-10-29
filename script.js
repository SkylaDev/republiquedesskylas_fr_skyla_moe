// Wow creative name huh

const quoteURL = 'https://cloud.skyla.moe/raw/quotes/'

const music = document.getElementById('music');


function toggleMusic() {
    if (music.paused) { music.play(); }
    else { music.pause(); }
}


function spawnQuote() {
    const img = document.createElement('img');
    img.src = quoteURL + `${Math.floor(Math.random() * 65) + 1}.png`;
    img.classList.add('quote');
    img.style.opacity = (0.2 + Math.random() * 0.2).toString();

    const dir = Math.random() < 0.5 ? 'L' : 'R';

    if (dir === 'L') { img.style.left = `${window.innerWidth}px`; }
    else { img.style.left = '-320px'; }
    img.style.top = `${Math.random() * (window.innerHeight - 320)}px`;

    document.body.appendChild(img);

    let pos = dir === 'L' ? window.innerWidth : -320;
    const speed = 5 + Math.random() * 3;

    function move() {
        if (dir === 'L') {
            pos -= speed;
            if (pos < -320) {
                img.remove();
                return;
            }
        }
        else {
            pos += speed;
            if (pos > window.innerWidth + 320) {
                img.remove();
                return;
            }
        }
        img.style.left = pos + 'px';
        requestAnimationFrame(move);
    }
    move();
}

setInterval(spawnQuote, 1000);
