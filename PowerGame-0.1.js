// This project was helped by Gemini 2.5 Flash!
// PowerGame-0.1.js - An Electric.js Game Enhancement Plugin
console.log("PowerGame-0.1.js script started loading."); // Diagnostic log

// Ensure Electric class is available before trying to extend it.
// This script assumes Electric.js (Ninja-0.1.js) is loaded before it.
if (typeof Electric === 'undefined') {
    console.error("PowerGame-0.1.js: 'Electric' class is not defined. Make sure Ninja-0.1.js is loaded first.");
    // Define a dummy Electric class to prevent further errors if not loaded
    window.Electric = class {
        constructor() { console.error("Electric.js dummy constructor called. PowerGame will not function."); }
        addObject() {}
        startAnimation() {}
        destroy() {}
        createCanvasButton() { return {}; }
        createAudio() { return { play: () => {}, pause: () => {}, setVolume: () => {}, getVolume: () => 0.5 }; }
        createSprite() { return {}; }
        createVideoDisplay() { return null; }
        createRectangle() { return {}; }
        createNinjaStar() { return {}; }
        createNinjaCharacter() { return {}; }
        createDojoBackground() { return {}; }
        createImage() { return {}; }
        integrateVideo() { return null; }
        loadElecPlayerFile() {}
        createElecPlayerFile() {}
        checkAABBCollision() { return false; }
    };
}

/**
 * @class PowerGame
 * @augments Electric
 * @description Extends the Electric.js class to provide enhanced game elements
 * with more dynamic behavior, visual effects, and advanced interactions.
 */
class PowerGame extends Electric { // Changed class name to PowerGame
    /**
     * Creates an instance of PowerGame.
     * @param {string|HTMLCanvasElement} canvasTarget - The ID of the canvas element or the canvas element itself.
     * @param {object} [options={}] - Configuration options for the Electric instance.
     */
    constructor(canvasTarget, options = {}) {
        // Call the parent Electric class constructor
        super(canvasTarget, options);
        console.log("PowerGame instance initialized.");
    }

    /**
     * Creates an enhanced "Power Ninja" character with more dynamic animations.
     * @param {number} x - X coordinate of the character's base (feet center).
     * @param {number} y - Y coordinate of the character's base (feet center).
     * @param {number} scale - Scale factor for the character.
     * @param {string} bodyColor - Main body color of the ninja.
     * @param {string} accentColor - Accent color for headband/belt.
     * @param {number} [layer=2] - The drawing layer for the character.
     * @returns {object} A renderable and animatable Power Ninja character object.
     */
    createPowerNinja(x, y, scale, bodyColor = '#000000', accentColor = '#cc0000', layer = 2) {
        // Use the base createNinjaCharacter method, but add more advanced update logic
        const ninja = this.createNinjaCharacter(x, y, scale, bodyColor, accentColor, layer);

        // Enhance the ninja's update method for more dynamic movement/animation
        let bobbingOffset = 0;
        let bobbingSpeed = 5; // radians per second
        const originalUpdate = ninja.update; // Store original update if it exists

        ninja.update = (deltaTime) => {
            if (originalUpdate) {
                originalUpdate(deltaTime); // Call original update logic first
            }

            // Add a subtle bobbing animation
            bobbingOffset += bobbingSpeed * deltaTime;
            // Apply bobbing to the character's y-position or a transformation
            // For simplicity, we'll just log it here, but in draw, you'd translate by it.
            // In the draw method of createNinjaCharacter, it already translates by bodyBounce,
            // so we'd need to modify that directly or add another translation.
            // For now, let's just make the ninja's color pulsate slightly.

            const pulseFactor = (Math.sin(bobbingOffset) + 1) / 2; // 0 to 1
            const r = parseInt(bodyColor.substring(1, 3), 16);
            const g = parseInt(bodyColor.substring(3, 5), 16);
            const b = parseInt(bodyColor.substring(5, 7), 16);

            const pulsedR = Math.floor(r * (0.8 + 0.2 * pulseFactor));
            const pulsedG = Math.floor(g * (0.8 + 0.2 * pulseFactor));
            const pulsedB = Math.floor(b * (0.8 + 0.2 * pulseFactor));

            ninja.bodyColor = `rgb(${pulsedR},${pulsedG},${pulsedB})`;
        };

        console.log("Power Ninja created with enhanced dynamics.");
        return ninja;
    }

    /**
     * Creates an enhanced "Power Shuriken" with a glowing trail effect.
     * @param {number} x - X coordinate of the star's center.
     * @param {number} y - Y coordinate of the star's center.
     * @param {number} size - Size of the star (radius).
     * @param {string} color - Fill color of the star.
     * @param {number} [layer=3] - The drawing layer for the star.
     * @returns {object} A renderable and animatable Power Shuriken object.
     */
    createPowerShuriken(x, y, size, color, layer = 3) {
        const shuriken = this.createNinjaStar(x, y, size, color, layer);

        // Add a trail effect
        const trail = [];
        const maxTrailLength = 15;
        const trailFadeSpeed = 0.05; // Adjust for faster/slower fade

        const originalUpdate = shuriken.update;
        shuriken.update = (deltaTime) => {
            originalUpdate(deltaTime); // Call original update for movement

            if (!shuriken.isAttached && (shuriken.speedX !== 0 || shuriken.speedY !== 0)) {
                // Add current position to trail
                trail.push({ x: shuriken.x, y: shuriken.y, alpha: 1.0, size: shuriken.size });

                // Limit trail length and fade old segments
                while (trail.length > maxTrailLength) {
                    trail.shift(); // Remove oldest
                }
                trail.forEach(segment => {
                    segment.alpha -= trailFadeSpeed;
                    segment.size *= 0.95; // Shrink
                });
                // Remove fully faded segments
                trail.filter(segment => segment.alpha > 0);
            } else {
                // Clear trail if attached or not moving
                trail.length = 0;
            }
        };

        const originalDraw = shuriken.draw;
        shuriken.draw = (graphics) => {
            // Draw trail segments first
            for (let i = 0; i < trail.length; i++) {
                const segment = trail[i];
                graphics.save();
                graphics.translate(segment.x, segment.y);
                graphics.rotate(shuriken.rotation); // Trail segments rotate with shuriken
                graphics.setFill(`rgba(${parseInt(color.substring(1,3), 16)}, ${parseInt(color.substring(3,5), 16)}, ${parseInt(color.substring(5,7), 16)}, ${segment.alpha})`);
                graphics.beginPath();
                // Draw a simple circle for each trail segment
                graphics.arc(0, 0, segment.size * 0.5, 0, Math.PI * 2);
                graphics.fill();
                graphics.restore();
            }
            originalDraw(graphics); // Draw the main shuriken
        };

        console.log("Power Shuriken created with glowing trail.");
        return shuriken;
    }

    /**
     * Creates an enhanced "Power Energy Orb" with pulsating glow and dynamic movement.
     * @param {number} x - X coordinate of the orb's center.
     * @param {number} y - Y coordinate of the orb's center.
     * @param {number} size - Base size of the orb.
     * @param {string} color - Base color of the orb.
     * @param {number} [layer=1.5] - The drawing layer.
     * @returns {object} A renderable and animatable Power Energy Orb object.
     */
    createPowerEnergyOrb(x, y, size, color, layer = 1.5) {
        const orb = {
            x: x,
            y: y,
            size: size,
            color: color,
            pulse: 0,
            pulseSpeed: 4, // radians per second
            moveDirectionX: 1,
            moveDirectionY: 1,
            moveSpeed: 50, // pixels per second
            draw: (graphics) => {
                graphics.save();
                // Pulsating glow
                const glowAlpha = (Math.sin(orb.pulse) + 1) / 2; // 0 to 1
                const glowRadius = orb.size * (1 + 0.3 * glowAlpha); // Pulsate radius

                // Inner core
                graphics.setFill(orb.color);
                graphics.beginPath();
                graphics.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
                graphics.fill();

                // Outer glow
                const gradient = graphics.ctx.createRadialGradient(
                    orb.x, orb.y, orb.size,
                    orb.x, orb.y, glowRadius
                );
                gradient.addColorStop(0, `rgba(${parseInt(color.substring(1,3), 16)}, ${parseInt(color.substring(3,5), 16)}, ${parseInt(color.substring(5,7), 16)}, ${0.8 * glowAlpha})`);
                gradient.addColorStop(1, `rgba(${parseInt(color.substring(1,3), 16)}, ${parseInt(color.substring(3,5), 16)}, ${parseInt(color.substring(5,7), 16)}, 0)`);
                graphics.setFill(gradient);
                graphics.beginPath();
                graphics.arc(orb.x, orb.y, glowRadius, 0, Math.PI * 2);
                graphics.fill();

                graphics.restore();
            },
            update: (deltaTime) => {
                orb.pulse += orb.pulseSpeed * deltaTime;

                // Dynamic movement (bouncing within a small area)
                orb.x += orb.moveDirectionX * orb.moveSpeed * deltaTime;
                orb.y += orb.moveDirectionY * orb.moveSpeed * deltaTime;

                const boundsX = this.canvas.width / (window.devicePixelRatio || 1);
                const boundsY = this.canvas.height / (window.devicePixelRatio || 1);

                // Reverse direction if hitting boundaries
                if (orb.x + orb.size > boundsX || orb.x - orb.size < 0) {
                    orb.moveDirectionX *= -1;
                }
                if (orb.y + orb.size > boundsY || orb.y - orb.size < 0) {
                    orb.moveDirectionY *= -1;
                }
            },
            // New method to activate a short glitch effect
            activateGlitch: () => {
                // For a simple demo, we'll just make it flash.
                // In a real implementation, this would involve more complex visual distortion.
                const originalColor = orb.color;
                orb.color = '#FFFFFF'; // Flash white
                setTimeout(() => {
                    orb.color = originalColor; // Revert color
                }, 100); // Flash for 100ms
                console.log("Power Energy Orb: Glitch activated!");
            }
        };
        this.addObject(orb, layer);
        console.log("Power Energy Orb created with pulsating glow and dynamic movement.");
        return orb;
    }

    /**
     * Creates an enhanced "Power Dojo Background" with subtle parallax scrolling or animated elements.
     * @param {number} canvasWidth - The width of the canvas.
     * @param {number} canvasHeight - The height of the canvas.
     * @param {number} [layer=-1] - The drawing layer for the background.
     * @returns {object} A renderable Power Dojo Background object.
     */
    createPowerDojoBackground(canvasWidth, canvasHeight, layer = -1) {
        const background = this.createDojoBackground(canvasWidth, canvasHeight, layer);

        // Add subtle animated elements (e.g., floating dust particles or light rays)
        const particles = [];
        const numParticles = 50;
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * canvasWidth,
                y: Math.random() * canvasHeight,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 10,
                speedY: (Math.random() - 0.5) * 10,
                alpha: Math.random() * 0.5 + 0.2 // Semi-transparent
            });
        }

        const originalDraw = background.draw;
        background.draw = (graphics) => {
            originalDraw(graphics); // Draw the base dojo background

            // Draw particles
            graphics.save();
            particles.forEach(p => {
                graphics.setFill(`rgba(255, 255, 255, ${p.alpha})`); // White particles
                graphics.beginPath();
                graphics.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                graphics.fill();
            });
            graphics.restore();
        };

        const originalUpdate = background.update;
        background.update = (deltaTime) => {
            if (originalUpdate) {
                originalUpdate(deltaTime);
            }

            // Animate particles
            particles.forEach(p => {
                p.x += p.speedX * deltaTime;
                p.y += p.speedY * deltaTime;

                // Wrap particles around
                if (p.x < 0) p.x = canvasWidth;
                if (p.x > canvasWidth) p.x = 0;
                if (p.y < 0) p.y = canvasHeight;
                if (p.y > canvasHeight) p.y = 0;
            });
        };

        console.log("Power Dojo Background created with animated particles.");
        return background;
    }

    /**
     * Creates enhanced audio with dynamic effects (e.g., pitch modulation, spatial audio concept).
     * Note: Full spatial audio requires Web Audio API, this is a conceptual enhancement.
     * @param {string} audioUrl - The URL of the audio file.
     * @param {object} [options={}] - Options for audio playback.
     * @param {boolean} [options.loop=false] - Whether the audio should loop.
     * @param {number} [options.volume=1] - Initial volume (0.0 to 1.0).
     * @returns {object|null} An object with enhanced audio control methods.
     */
    createPowerAudio(audioUrl, options = {}) {
        const audioController = this.createAudio(audioUrl, options);

        // Add conceptual pitch modulation
        let currentPitch = 1.0; // PlaybackRate
        const pitchModulationSpeed = 0.5; // How fast pitch changes

        const originalPlay = audioController.play;
        audioController.play = () => {
            originalPlay();
            // In a real scenario, you'd use Web Audio API for pitch control
            // audioController.audioElement.playbackRate = currentPitch;
            console.log(`Power Audio: Playing with pitch: ${currentPitch}`);
        };

        audioController.modulatePitch = (factor) => {
            currentPitch = Math.max(0.5, Math.min(2.0, currentPitch * factor));
            // if (audioController.audioElement) {
            //     audioController.audioElement.playbackRate = currentPitch;
            // }
            console.log(`Power Audio: Pitch modulated to: ${currentPitch}`);
        };

        console.log("Power Audio created with conceptual pitch modulation.");
        return audioController;
    }

    /**
     * Creates an enhanced video display with additional visual effects (e.g., pixelation, glitch).
     * @param {string|HTMLVideoElement} videoTarget - The ID of the video element or the video element itself.
     * @param {object} [options={}] - Options for video display and effects.
     * @param {number} [options.x=0] - X coordinate for drawing the video on canvas.
     * @param {number} [options.y=0] - Y coordinate for drawing the video on canvas.
     * @param {number} [options.width] - Display width.
     * @param {number} [options.height] - Display height.
     * @param {boolean} [options.grayscale=false] - Apply grayscale filter.
     * @param {number} [options.blur=0] - Apply blur filter (in pixels).
     * @param {number} [layer=0] - The drawing layer.
     * @returns {object|null} An object with enhanced video control methods and effect toggles.
     */
    createPowerVideoDisplay(videoTarget, options = {}) {
        const videoDisplay = this.integrateVideo(videoTarget, options);
        if (!videoDisplay) return null;

        let pixelationLevel = 0; // 0 = no pixelation, higher = more pixelated
        let glitchEffectActive = false;
        let glitchTimer = 0;
        const glitchDuration = 0.1; // seconds for a single glitch burst

        const originalDraw = videoDisplay.draw;
        videoDisplay.draw = (graphics) => {
            graphics.save();

            // Apply pixelation by drawing to a smaller buffer and then scaling up
            if (pixelationLevel > 0) {
                const tempCanvas = document.createElement('canvas');
                const tempCtx = tempCanvas.getContext('2d');
                tempCanvas.width = videoDisplay.width / pixelationLevel;
                tempCanvas.height = videoDisplay.height / pixelationLevel;

                tempCtx.drawImage(videoDisplay.videoElement, 0, 0, tempCanvas.width, tempCanvas.height);
                graphics.ctx.drawImage(tempCanvas, videoDisplay.x, videoDisplay.y, videoDisplay.width, videoDisplay.height);
            } else {
                // If no pixelation, draw normally
                originalDraw(graphics);
            }

            // Apply glitch effect
            if (glitchEffectActive && glitchTimer > 0) {
                graphics.setFilter(`hue-rotate(${Math.random() * 360}deg) saturate(${1 + Math.random() * 2})`);
                graphics.ctx.globalAlpha = 0.5 + Math.random() * 0.5; // Random transparency
                // Draw multiple slightly offset images for a glitch look
                for (let i = 0; i < 3; i++) {
                    const offsetX = (Math.random() - 0.5) * 20;
                    const offsetY = (Math.random() - 0.5) * 20;
                    graphics.ctx.drawImage(videoDisplay.videoElement, videoDisplay.x + offsetX, videoDisplay.y + offsetY, videoDisplay.width, videoDisplay.height);
                }
            }
            graphics.restore();
        };

        const originalUpdate = videoDisplay.update;
        videoDisplay.update = (deltaTime) => {
            if (originalUpdate) {
                originalUpdate(deltaTime);
            }

            if (glitchEffectActive) {
                glitchTimer -= deltaTime;
                if (glitchTimer <= 0) {
                    glitchEffectActive = false;
                    console.log("Power Video: Glitch effect ended.");
                }
            }
        };

        videoDisplay.setPixelation = (level) => {
            pixelationLevel = Math.max(0, level);
            console.log(`Power Video: Pixelation set to ${pixelationLevel}`);
            this.draw(); // Redraw immediately to show effect
        };

        videoDisplay.activateGlitch = () => {
            glitchEffectActive = true;
            glitchTimer = glitchDuration;
            console.log("Power Video: Glitch effect activated.");
        };

        console.log("Power Video Display created with enhanced effects.");
        return videoDisplay;
    }
}

// Expose PowerGame globally (changed from PowerGameTest)
window.PowerGame = PowerGame;
console.log("PowerGame-0.1.js script finished loading and exposed PowerGame globally.");
