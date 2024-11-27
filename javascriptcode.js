const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Stap 2: Het canvas vullen met de juiste grootte
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Stap 3: Basis game-objecten
let speler = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    width: 50,
    height: 50,
    speed: 5,
    color: 'blue'
};

// Stap 4: Eventlisteners voor toetsindrukken
let keys = {
    left: false,
    right: false
};

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') keys.left = true;
    if (e.key === 'ArrowRight') keys.right = true;
});

window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') keys.left = false;
    if (e.key === 'ArrowRight') keys.right = false;
});

// Stap 5: Game loop (de functie die de game steeds opnieuw tekent)
function gameLoop() {
    // Stap 5a: Canvas schoonmaken
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Stap 5b: Speler bewegen
    if (keys.left && speler.x > 0) {
        speler.x -= speler.speed;
    }
    if (keys.right && speler.x + speler.width < canvas.width) {
        speler.x += speler.speed;
    }

    // Stap 5c: Teken de speler
    ctx.fillStyle = speler.color;
    ctx.fillRect(speler.x, speler.y, speler.width, speler.height);

    // Stap 5d: Vraag de volgende frame aan
    requestAnimationFrame(gameLoop);
}

// Start de game loop
gameLoop();