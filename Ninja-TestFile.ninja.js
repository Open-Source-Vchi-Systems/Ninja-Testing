// This project was helped by Gemini 2.5 Flash!
console.log("Electric.js (Ninja) Test File script started loading."); // Diagnostic log

try {
    // Ensure Electric class is available before trying to use it.
    if (typeof Electric === 'undefined') {
        console.error("Electric.js: 'Electric' class is not defined. Make sure Ninja-0.1.js is loaded first.");
        // Define a dummy Electric class to prevent further errors if not loaded
        window.Electric = class {
            constructor() { console.error("Electric.js dummy constructor called. Library not loaded."); }
            addObject() {}
            startAnimation() {}
            destroy() {}
            createCanvasButton() { return {}; }
            createAudio() { return { play: () => {}, pause: () => {}, setVolume: () => {}, getVolume: () => 0.5 }; }
            createSprite() { return {}; }
            createVideoDisplay() { return null; }
            createRectangle() { return {}; } // Dummy for test file
            createNinjaStar() { return {}; } // Dummy for test file
            createNinjaCharacter() { return {}; } // Dummy for test file
            createDojoBackground() { return {}; } // Dummy for test file
            createImage() { return {}; } // Dummy for test file
            integrateVideo() { return null; } // Dummy for test file
            loadElecPlayerFile() {} // Dummy for test file
            createElecPlayerFile() {} // Dummy for test file
        };
    }

    // Changed from DOMContentLoaded to window.onload for more robust DOM readiness
    window.addEventListener('load', () => {
        // --- Electric.js Instance 1: Main Canvas for all elements and controls ---
        const electricCanvasElement = document.getElementById('electricCanvas');

        // IMPORTANT: Check if the canvas element was found AND if Electric.js is defined
        if (!electricCanvasElement || typeof Electric === 'undefined') {
            if (electricCanvasElement) {
                const ctx = electricCanvasElement.getContext('2d');
                const dpr = window.devicePixelRatio || 1;
                electricCanvasElement.width = electricCanvasElement.clientWidth * dpr;
                electricCanvasElement.height = electricCanvasElement.clientHeight * dpr;
                ctx.scale(dpr, dpr);
                ctx.fillStyle = '#333333'; // Dark background for fallback
                ctx.fillRect(0, 0, electricCanvasElement.width / dpr, electricCanvasElement.height / dpr);
                ctx.fillStyle = '#e2e8f0'; // Light text for fallback
                ctx.font = '24px Inter';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText("Ninja/Electric Player isn't supported or installed.", electricCanvasElement.width / (2 * dpr), electricCanvasElement.height / (2 * dpr));
            }
            console.error("Electric.js initialization failed: Canvas element 'electricCanvas' not found or Electric.js not loaded. Aborting script execution for this canvas.");
            return; // Stop script execution for this canvas if the canvas element was not found or Electric is not available
        }

        const ultimateApp = new Electric(electricCanvasElement, { backgroundColor: '#0a0a0a' }); // Pass the actual element

        // Adjust canvas size to be responsive and account for device pixel ratio
        const setCanvasSize = () => {
            const container = document.querySelector('.main-container'); // Assuming .main-container wraps the canvas
            const desiredWidth = container ? container.clientWidth * 0.95 : window.innerWidth * 0.95;
            const maxCanvasWidth = 1000;
            const actualWidth = Math.min(desiredWidth, maxCanvasWidth);

            ultimateApp.canvas.width = actualWidth * (window.devicePixelRatio || 1);
            ultimateApp.canvas.height = (actualWidth * 0.6) * (window.devicePixelRatio || 1);
            ultimateApp.canvas.style.width = actualWidth + 'px';
            ultimateApp.canvas.style.height = (actualWidth * 0.6) + 'px';

            ultimateApp.draw();
        };

        window.addEventListener('resize', setCanvasSize);
        setCanvasSize(); // Initial call to set size

        // --- Global Game State Variables ---
        let shurikens = [];
        const MAX_SHURIKENS = 5; // Limit the number of shurikens on screen
        let score = 0;

        // --- Keyboard Event Listener for Shuriken Reset ---
        window.addEventListener('keydown', (event) => {
            if (event.key === 'r' || event.key === 'R') {
                shurikens.forEach(star => star.reset());
                shurikens = [];
                ultimateApp.draw();
            }
        });

        // --- Mouse Click Listener for Shuriken Throw ---
        ultimateApp.canvas.addEventListener('click', (event) => {
            if (event.button === 0) { // Left click
                if (shurikens.length < MAX_SHURIKENS) {
                    const targetX = ultimateApp.input.mouseX;
                    const targetY = ultimateApp.input.mouseY;

                    const newStar = ultimateApp.createNinjaStar(
                        mainNinja.x + 50,
                        mainNinja.y - 100,
                        30,
                        '#' + Math.floor(Math.random()*16777215).toString(16),
                        2
                    );
                    shurikens.push(newStar);
                    newStar.throw(targetX, targetY);
                } else {
                    console.log("Max shurikens reached! Press 'R' to reset.");
                }
            }
        });


        // --- Scene Elements ---
        const dojoBackground = ultimateApp.createDojoBackground(
            ultimateApp.canvas.width / (window.devicePixelRatio || 1),
            ultimateApp.canvas.height / (window.devicePixelRatio || 1)
        );

        const mainNinja = ultimateApp.createNinjaCharacter(
            ultimateApp.canvas.width / (window.devicePixelRatio || 1) * 0.2,
            ultimateApp.canvas.height / (window.devicePixelRatio || 1) - 100,
            1.2,
            '#222222'
        );

        const secondNinja = ultimateApp.createNinjaCharacter(
            ultimateApp.canvas.width / (window.devicePixelRatio || 1) * 0.8,
            ultimateApp.canvas.height / (window.devicePixelRatio || 1) - 100,
            1.0,
            '#003300',
            '#00CC00'
        );
        let secondNinjaMoveDirection = -1;
        secondNinja.update = (deltaTime) => {
            secondNinja.x += secondNinjaMoveDirection * 80 * deltaTime;
            if (secondNinja.x <= ultimateApp.canvas.width / (window.devicePixelRatio || 1) * 0.6 ||
                secondNinja.x >= ultimateApp.canvas.width / (window.devicePixelRatio || 1) * 0.9) {
                secondNinjaMoveDirection *= -1;
            }
        };

        const energySpriteSheet = 'https://placehold.co/400x100/4f46e5/ffffff?text=Energy+Sprite';
        const energyEffect = ultimateApp.createSprite(energySpriteSheet,
            { x: ultimateApp.canvas.width / (window.devicePixelRatio || 1) * 0.7, y: ultimateApp.canvas.height / (window.devicePixelRatio || 1) * 0.2, frameWidth: 100, frameHeight: 100, frameCount: 4, frameRate: 8, loop: true, scaleX: 1.5, scaleY: 1.5 },
            0.5
        );
        energyEffect.isHit = false;
        energyEffect.hitTimer = 0;
        energyEffect.hitDuration = 0.2;
        const originalEnergyEffectUpdate = energyEffect.update;
        energyEffect.update = (deltaTime) => {
            originalEnergyEffectUpdate(deltaTime);
            if (energyEffect.isHit) {
                energyEffect.hitTimer += deltaTime;
                if (energyEffect.hitTimer >= energyEffect.hitDuration) {
                    energyEffect.isHit = false;
                    energyEffect.hitTimer = 0;
                }
            }
        };
        const originalEnergyEffectDraw = energyEffect.draw;
        energyEffect.draw = (graphics) => {
            graphics.save();
            if (energyEffect.isHit) {
                graphics.setFilter('brightness(150%) hue-rotate(180deg)');
            }
            originalEnergyEffectDraw(graphics);
            graphics.restore();
        };

        const glassPanel = ultimateApp.createGlassPanel(
            ultimateApp.canvas.width / (window.devicePixelRatio || 1) * 0.1,
            ultimateApp.canvas.height / (window.devicePixelRatio || 1) * 0.1,
            ultimateApp.canvas.width / (window.devicePixelRatio || 1) * 0.2,
            ultimateApp.canvas.height / (window.devicePixelRatio || 1) * 0.3,
            1
        );

        const target = {
            x: ultimateApp.canvas.width / (window.devicePixelRatio || 1) * 0.45,
            y: ultimateApp.canvas.height / (window.devicePixelRatio || 1) * 0.3,
            width: 80,
            height: 80,
            color: '#FFD700',
            isHit: false,
            hitTimer: 0,
            hitDuration: 0.1,
            draw: (graphics) => {
                graphics.save();
                if (target.isHit) {
                    graphics.setFilter('brightness(200%)');
                }
                graphics.setFill(target.color);
                graphics.beginPath();
                graphics.arc(target.x + target.width / 2, target.y + target.height / 2, target.width / 2, 0, Math.PI * 2);
                graphics.fill();
                graphics.setStroke('#8B0000');
                graphics.setLineWidth(3);
                graphics.stroke();
                graphics.restore();
            },
            update: (deltaTime) => {
                if (target.isHit) {
                    target.hitTimer += deltaTime;
                    if (target.hitTimer >= target.hitDuration) {
                        target.isHit = false;
                        target.hitTimer = 0;
                    }
                }
            }
        };
        ultimateApp.addObject(target, 1.5);

        const scoreDisplay = {
            x: ultimateApp.canvas.width / (window.devicePixelRatio || 1) - 100,
            y: 50,
            draw: (graphics) => {
                graphics.save();
                graphics.setFill('#FFFFFF');
                graphics.setFont('bold 24px Inter');
                graphics.setTextAlign('right');
                graphics.fillText(`Score: ${score}`, scoreDisplay.x, scoreDisplay.y);
                graphics.restore();
            },
            update: () => {}
        };
        ultimateApp.addObject(scoreDisplay, 100);

        const epicSoundtrack = ultimateApp.createAudio('bg_music.mp3', { loop: true, volume: 0.4 });
        const energySound = ultimateApp.createAudio('energy_blast.mp3', { volume: 0.7, loop: false });

        // --- Collision Logic and Input Handling in main animation loop ---
        const originalAnimate = ultimateApp.animate;
        ultimateApp.animate = (currentTime) => {
            originalAnimate(currentTime);

            let directionX = 0;
            const input = ultimateApp.input;
            const deltaTime = (currentTime - ultimateApp.lastTime) / 1000;

            if (input.keysPressed['ArrowLeft'] || input.keysPressed['a']) {
                directionX = -1;
            } else if (input.keysPressed['ArrowRight'] || input.keysPressed['d']) {
                directionX = 1;
            }

            if (input.isMouseDown) {
                const ninjaCurrentX = mainNinja.x;
                const threshold = 5;
                if (Math.abs(input.mouseX - ninjaCurrentX) > threshold) {
                    directionX = Math.sign(input.mouseX - ninjaCurrentX);
                } else {
                    directionX = 0;
                }
            }

            mainNinja.setMovement(directionX, 0, deltaTime);

            shurikens.forEach(star => {
                const starRect = {
                    x: star.x - star.size,
                    y: star.y - star.size,
                    width: star.size * 2,
                    height: star.size * 2
                };

                const energyRect = {
                    x: energyEffect.x,
                    y: energyEffect.y,
                    width: energyEffect.width,
                    height: energyEffect.height
                };
                if (!star.isAttached && ultimateApp.checkAABBCollision(starRect, energyRect)) {
                    console.log("Collision detected between Ninja Star and Energy Sprite!");
                    star.reset();
                    star.x = mainNinja.x + 50;
                    star.y = mainNinja.y - 100;
                    energyEffect.isHit = true;
                    energySound.play();
                }

                const targetRect = {
                    x: target.x,
                    y: target.y,
                    width: target.width,
                    height: target.height
                };
                if (!star.isAttached && ultimateApp.checkAABBCollision(starRect, targetRect)) {
                    console.log("Collision detected between Ninja Star and Target!");
                    star.reset();
                    star.x = mainNinja.x + 50;
                    star.y = mainNinja.y - 100;
                    target.isHit = true;
                    score++;
                }

                if (!star.isAttached && (star.x < -star.size || star.x > ultimateApp.canvas.width / (window.devicePixelRatio || 1) + star.size ||
                                          star.y < -star.size || star.y > ultimateApp.canvas.height / (window.devicePixelRatio || 1) + star.size)) {
                    const index = shurikens.indexOf(star);
                    if (index > -1) {
                        shurikens.splice(index, 1);
                        console.log("Shuriken went off-screen and was removed.");
                    }
                }
            });

            shurikens.forEach(star => {
                if (star.isAttached) {
                    const shurikenOffsetX = 50 * mainNinja.scale;
                    const shurikenOffsetY = -100 * mainNinja.scale;
                    star.x = mainNinja.x + shurikenOffsetX;
                    star.y = mainNinja.y + shurikenOffsetY;
                }
            });
        };

        // --- Interactive Buttons (HTML buttons controlling Electric.js elements) ---
        document.getElementById('playMusicBtn').addEventListener('click', () => epicSoundtrack.play());
        document.getElementById('pauseMusicBtn').addEventListener('click', () => epicSoundtrack.pause());

        let audioVolume = 0.5;
        document.getElementById('volUpBtn').addEventListener('click', () => {
            audioVolume = Math.min(1, audioVolume + 0.1);
            epicSoundtrack.setVolume(audioVolume);
        });
        document.getElementById('volDownBtn').addEventListener('click', () => {
            audioVolume = Math.max(0, audioVolume - 0.1);
            epicSoundtrack.setVolume(audioVolume);
        });

        let isEnergySpritePlaying = false;
        document.getElementById('toggleEnergyBtn').addEventListener('click', () => {
            if (isEnergySpritePlaying) {
                energySound.pause();
            } else {
                energySound.play();
            }
            isEnergySpritePlaying = !isEnergySpritePlaying;
        });

        ultimateApp.createCanvasButton(
            ultimateApp.canvas.width / (window.devicePixelRatio || 1) / 2 - 50,
            ultimateApp.canvas.height / (window.devicePixelRatio || 1) - 50,
            100, 40,
            'Reset All', '#6b7280', '#e2e8f0',
            () => {
                shurikens.forEach(star => star.reset());
                shurikens = [];
                score = 0;
                ultimateApp.draw();
            }
        );


        // --- ElecPlayer Functionality UI ---
        const elecPlayerSection = document.createElement('div');
        elecPlayerSection.className = 'electric-section';
        elecPlayerSection.innerHTML = `
            <h2 class="text-2xl font-semibold">ElecPlayer File Management</h2>
            <p>Load and create .elecplayer files (ZIP archives of HTML, JS, CSS).</p>
            <div class="flex flex-col items-center gap-4 w-full">
                <input type="file" id="elecPlayerFileInput" accept=".elecplayer" class="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"/>
                <button id="loadElecPlayerBtn" class="btn-primary w-full">Load .elecplayer</button>

                <h3 class="text-xl font-medium mt-6">Create Custom ElecPlayer</h3>
                <p>Write your own Ninja program code here to package it into an .elecplayer file.</p>
                <textarea id="customNinjaCode" class="w-full p-4 h-80 bg-gray-900 text-green-300 font-mono text-sm rounded-lg border border-gray-700 resize-y"
                          placeholder="Write your Ninja program code here... Example:&#10;const myRect = ultimateApp.createRectangle(10, 10, 50, 50, 'red');&#10;myRect.update = (dt) => { myRect.x += 20 * dt; if (myRect.x > ultimateApp.canvas.width / (window.devicePixelRatio || 1)) myRect.x = -myRect.width; };&#10;ultimateApp.startAnimation();"></textarea>
                <button id="createCustomElecPlayerBtn" class="btn-primary w-full">Generate .elecplayer from Custom Code</button>
                
                <div id="elecPlayerOutput" class="w-full h-96 border border-gray-600 rounded-lg overflow-hidden bg-gray-800">
                    <p class="text-center text-gray-400 mt-4">Loaded ElecPlayer content will appear here.</p>
                </div>
            </div>
        `;
        document.querySelector('.container').appendChild(elecPlayerSection);

        // Populate the custom code textarea with a simple example on load
        document.getElementById('customNinjaCode').value = `
// Your custom Ninja program starts here!
// You have 'ultimateApp' (an Electric.js instance) available.

const myCircle = ultimateApp.createRectangle(50, 50, 80, 80, '#FF00FF');
myCircle.update = (deltaTime) => {
    myCircle.x += 100 * deltaTime;
    if (myCircle.x > ultimateApp.canvas.width / (window.devicePixelRatio || 1)) {
        myCircle.x = -myCircle.width;
    }
};

const pulsingRect = ultimateApp.createRectangle(
    ultimateApp.canvas.width / (window.devicePixelRatio || 1) - 150,
    ultimateApp.canvas.height / (window.devicePixelRatio || 1) - 150,
    100, 100, 'blue');
let pulseScale = 1;
let pulseDir = 1;
pulsingRect.update = (deltaTime) => {
    pulseScale += pulseDir * 0.5 * deltaTime; // Speed of pulse
    if (pulseScale > 1.2 || pulseScale < 0.8) {
        pulseDir *= -1;
    }
    pulsingRect.width = 100 * pulseScale;
    pulsingRect.height = 100 * pulseScale;
    // Keep it centered while scaling
    pulsingRect.x = (ultimateApp.canvas.width / (window.devicePixelRatio || 1) - pulsingRect.width) / 2;
    pulsingRect.y = (ultimateApp.canvas.height / (window.devicePixelRatio || 1) - pulsingRect.height) / 2;
};


ultimateApp.startAnimation();
`;


        // Event Listeners for ElecPlayer functionality
        const elecPlayerFileInput = document.getElementById('elecPlayerFileInput');
        const loadElecPlayerBtn = document.getElementById('loadElecPlayerBtn');
        const createCustomElecPlayerBtn = document.getElementById('createCustomElecPlayerBtn'); // New button ID
        const customNinjaCodeTextarea = document.getElementById('customNinjaCode'); // Reference to the textarea
        const elecPlayerOutput = document.getElementById('elecPlayerOutput');

        loadElecPlayerBtn.addEventListener('click', async () => {
            if (elecPlayerFileInput.files.length > 0) {
                const file = elecPlayerFileInput.files[0];
                await ultimateApp.loadElecPlayerFile(file, 'elecPlayerOutput');
            } else {
                alert('Please select an .elecplayer file to load.');
            }
        });

        createCustomElecPlayerBtn.addEventListener('click', async () => { // Event listener for the new button
            const jsContent = customNinjaCodeTextarea.value; // Get JS from the textarea

            // Basic HTML template for the .elecplayer file
            // Note: The HTML will look for a canvas with ID 'elecPlayerGameCanvas'
            // and assume 'ultimateApp' will be created within its script.js
            const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Custom ElecPlayer App</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://raw.githubusercontent.com/username/repo/main/Ninja-0.1.js"></script>
    <style>
        body { margin: 0; overflow: hidden; display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #1a1a1a; }
        canvas { display: block; background-color: #000; width: 800px; height: 450px; border: 2px solid #63b3ed; }
        .game-canvas-container {
            border: 5px solid #4CAF50; /* A distinct border to show it's custom content */
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 15px rgba(76, 175, 80, 0.7);
            display: inline-block; /* To make border fit content */
        }
    </style>
</head>
<body>
    <div class="game-canvas-container">
        <canvas id="elecPlayerGameCanvas"></canvas>
    </div>
    <script>
        // This script will be executed *after* Electric.js is loaded in the iframe
        // It's crucial that the custom code initializes Electric.js on the specific canvas ID.
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof Electric === 'undefined') {
                console.error("Electric.js not loaded inside elecplayer iframe. Custom code might fail.");
                const canvas = document.getElementById('elecPlayerGameCanvas');
                if (canvas) {
                    const ctx = canvas.getContext('2d');
                    ctx.fillStyle = 'red';
                    ctx.fillRect(0,0,canvas.width,canvas.height);
                    ctx.fillStyle = 'white';
                    ctx.font = '20px Arial';
                    ctx.fillText('Electric Not Loaded!', 10, 50);
                }
                return;
            }
            
            // Re-initialize Electric.js for the custom code if needed
            // For simplicity, we assume the custom script will use a 'ultimateApp' or similar variable
            // and create it itself, or we can make it available here.
            // Let's make it available as 'ultimateApp' for consistency with the main test file examples.
            const ultimateApp = new Electric('elecPlayerGameCanvas', { backgroundColor: '#2a2a2a' });

            // Execute the custom user-provided JavaScript code
            try {
                eval(window.elecPlayerCustomCode); // Execute the passed code
                console.log("Custom ElecPlayer code executed successfully.");
            } catch (e) {
                console.error("Error executing custom ElecPlayer code:", e);
                const canvas = document.getElementById('elecPlayerGameCanvas');
                if (canvas) {
                    const ctx = canvas.getContext('2d');
                    ctx.fillStyle = 'orange';
                    ctx.fillRect(0,0,canvas.width,canvas.height);
                    ctx.fillStyle = 'black';
                    ctx.font = '20px Arial';
                    ctx.fillText('CODE ERROR!', 10, 50);
                    ctx.fillText(e.message, 10, 80);
                }
            }
        });
    </script>
    <script>
        // Store the custom code globally within the iframe's window for eval
        window.elecPlayerCustomCode = \`${jsContent.replace(/`/g, '\\`')}\`; // Escape backticks
    </script>
</body>
</html>
            `;

            // Basic CSS template for the .elecplayer file
            const cssContent = `
body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #222;
    color: #eee;
    font-family: 'Inter', sans-serif;
}
.game-container {
    border: 5px solid #63b3ed;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 179, 255, 0.5);
}
canvas {
    display: block;
    background-color: #000;
    width: 800px; /* Example size */
    height: 450px; /* Example size */
}
            `;

            const filename = prompt("Enter filename for your custom .elecplayer (e.g., myCustomGame.elecplayer):", "myCustomGame.elecplayer");
            if (filename) {
                // Ensure the filename has the correct extension
                const finalFilename = filename.endsWith('.elecplayer') ? filename : filename + '.elecplayer';
                await ultimateApp.createElecPlayerFile(htmlContent, jsContent, cssContent, finalFilename);
                alert(`'${finalFilename}' created successfully! Check your downloads.`);
            }
        });


        // Start the main animation loop
        ultimateApp.startAnimation();

        // Cleanup on page unload
        window.addEventListener('beforeunload', () => {
            ultimateApp.destroy();
        });
    });

} catch (e) {
    console.error("Electric.js: An error occurred during script execution:", e);
}
