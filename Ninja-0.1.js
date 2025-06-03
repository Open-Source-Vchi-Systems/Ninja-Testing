// This project was helped by Gemini 2.5 Flash!
// Ninja 0.1/Electric Player 0.1
console.log("Electric.js (Ninja) script started loading."); // Diagnostic log

// Import JSZip and FileSaver.js libraries
// JSZip for creating/reading zip files
// FileSaver.js for saving files on the client-side
// These are essential for .elecplayer functionality
document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>');
document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>');


try {
    /**
     * @class ElectricGraphics
     * @description A high-quality graphics system built on CanvasRenderingContext2D,
     * providing a more structured and extensible drawing API.
     */
    class ElectricGraphics {
        /**
         * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
         */
        constructor(ctx) {
            this.ctx = ctx;
        }

        /**
         * Saves the current drawing state onto a stack.
         */
        save() {
            this.ctx.save();
        }

        /**
         * Restores the most recently saved drawing state from the stack.
         */
        restore() {
            this.ctx.restore();
        }

        /**
         * Translates the canvas origin by (x, y).
         * @param {number} x - The horizontal translation.
         * @param {number} y - The vertical translation.
         */
        translate(x, y) {
            this.ctx.translate(x, y);
        }

        /**
         * Scales the canvas by (x, y).
         * @param {number} x - The horizontal scaling factor.
         * @param {number} y - The vertical scaling factor.
         */
        scale(x, y) {
            this.ctx.scale(x, y);
        }

        /**
         * Rotates the canvas by a given angle (in radians).
         * @param {number} angle - The rotation angle in radians.
         */
        rotate(angle) {
            this.ctx.rotate(angle);
        }

        /**
         * Sets the fill color.
         * @param {string} color - The color string (e.g., '#RRGGBB', 'rgba(R,G,B,A)').
         */
        setFill(color) {
            this.ctx.fillStyle = color;
        }

        /**
         * Sets the stroke color.
         * @param {string} color - The color string.
         */
        setStroke(color) {
            this.ctx.strokeStyle = color;
        }

        /**
         * Sets the line width for strokes.
         * @param {number} width - The line width in pixels.
         */
        setLineWidth(width) {
            this.ctx.lineWidth = width;
        }

        /**
         * Sets the line cap style.
         * @param {'butt'|'round'|'square'} cap - The line cap style.
         */
        setLineCap(cap) {
            this.ctx.lineCap = cap;
        }

        /**
         * Begins a new path.
         */
        beginPath() {
            this.ctx.beginPath();
        }

        /**
         * Closes the current path.
         */
        closePath() {
            this.ctx.closePath();
        }

        /**
         * Moves the sub-path to the specified point.
         * @param {number} x - The x-coordinate.
         * @param {number} y - The y-coordinate.
         */
        moveTo(x, y) {
            this.ctx.moveTo(x, y);
        }

        /**
         * Adds a straight line to the current sub-path.
         * @param {number} x - The x-coordinate.
         * @param {number} y - The y-coordinate.
         */
        lineTo(x, y) {
            this.ctx.lineTo(x, y);
        }

        /**
         * Adds an arc to the current sub-path.
         * @param {number} x - The x-coordinate of the arc's center.
         * @param {number} y - The y-coordinate of the arc's center.
         * @param {number} radius - The arc's radius.
         * @param {number} startAngle - The starting angle in radians.
         * @param {number} endAngle - The ending angle in radians.
         * @param {boolean} [counterClockwise=false] - If true, draws counter-clockwise.
         */
        arc(x, y, radius, startAngle, endAngle, counterClockwise = false) {
            this.ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
        }

        /**
         * Adds an ellipse to the current sub-path.
         * @param {number} x - The x-coordinate of the ellipse's center.
         * @param {number} y - The y-coordinate of the ellipse's center.
         * @param {number} radiusX - The x-radius of the ellipse.
         * @param {number} radiusY - The y-radius of the ellipse.
         * @param {number} rotation - The rotation of the ellipse in radians.
         * @param {number} startAngle - The starting angle in radians.
         * @param {number} endAngle - The ending angle in radians.
         * @param {boolean} [counterClockwise=false] - If true, draws counter-clockwise.
         */
        ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterClockwise = false) {
            this.ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterClockwise);
        }

        /**
         * Adds a rectangle to the current path.
         * @param {number} x - The x-coordinate of the rectangle's top-left corner.
         * @param {number} y - The y-coordinate of the rectangle's top-left corner.
         * @param {number} width - The width of the rectangle.
         * @param {number} height - The height of the rectangle.
         */
        rect(x, y, width, height) {
            this.ctx.rect(x, y, width, height);
        }

        /**
         * Fills the current path.
         */
        fill() {
            this.ctx.fill();
        }

        /**
         * Strokes the current path.
         */
        stroke() {
            this.ctx.stroke();
        }

        /**
         * Draws a filled rectangle.
         * @param {number} x - The x-coordinate of the rectangle's top-left corner.
         * @param {number} y - The y-coordinate of the rectangle's top-left corner.
         * @param {number} width - The width of the rectangle.
         * @param {number} height - The height of the rectangle.
         */
        fillRect(x, y, width, height) {
            this.ctx.fillRect(x, y, width, height);
        }

        /**
         * Draws a stroked rectangle.
         * @param {number} x - The x-coordinate of the rectangle's top-left corner.
         * @param {number} y - The y-coordinate of the rectangle's top-left corner.
         * @param {number} width - The width of the rectangle.
         * @param {number} height - The height of the rectangle.
         */
        strokeRect(x, y, width, height) {
            this.ctx.strokeRect(x, y, width, height);
        }

        /**
         * Draws a rectangle with rounded corners.
         * @param {number} x - The x-coordinate of the rectangle's top-left corner.
         * @param {number} y - The y-coordinate of the rectangle's top-left corner.
         * @param {number} width - The width of the rectangle.
         * @param {number} height - The height of the rectangle.
         * @param {number|number[]} radii - The radius or an array of radii for the corners.
         */
        roundRect(x, y, width, height, radii) {
            // Check if roundRect is natively supported, otherwise provide fallback
            if (this.ctx.roundRect) {
                this.ctx.beginPath();
                this.ctx.roundRect(x, y, width, height, radii);
                this.ctx.fill();
                this.ctx.stroke();
            } else {
                // Fallback for browsers not supporting roundRect (e.g., older versions)
                this.ctx.beginPath();
                this.ctx.moveTo(x + radii, y);
                this.ctx.lineTo(x + width - radii, y);
                this.ctx.arcTo(x + width, y, x + width, y + height, radii);
                this.ctx.lineTo(x + width, y + height - radii);
                this.ctx.arcTo(x + width, y + height, x + width - radii, y + height, radii);
                this.ctx.lineTo(x + radii, y + height);
                this.ctx.arcTo(x, y + height, x, y + height - radii, radii);
                this.ctx.lineTo(x, y + radii);
                this.ctx.arcTo(x, y, x + radii, y, radii);
                this.ctx.closePath();
                this.ctx.fill();
                this.ctx.stroke();
            }
        }

        /**
         * Draws an image onto the canvas.
         * @param {CanvasImageSource} image - The image to draw.
         * @param {number} sx - The x-coordinate of the top-left corner of the source rectangle.
         * @param {number} sy - The y-coordinate of the top-left corner of the source rectangle.
         * @param {number} sWidth - The width of the source rectangle.
         * @param {number} sHeight - The height of the source rectangle.
         * @param {number} dx - The x-coordinate of the top-left corner of the destination rectangle.
         * @param {number} dy - The y-coordinate of the top-left corner of the destination rectangle.
         * @param {number} dWidth - The width of the destination rectangle.
         * @param {number} dHeight - The height of the destination rectangle.
         */
        drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
            this.ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        }

        /**
         * Sets the text alignment.
         * @param {'start'|'end'|'left'|'right'|'center'} align - The text alignment.
         */
        setTextAlign(align) {
            this.ctx.textAlign = align;
        }

        /**
         * Sets the text baseline.
         * @param {'top'|'hanging'|'middle'|'alphabetic'|'ideographic'|'bottom'} baseline - The text baseline.
         */
        setTextBaseline(baseline) {
            this.ctx.textBaseline = baseline;
        }

        /**
         * Sets the font style.
         * @param {string} font - The font string (e.g., '20px Arial').
         */
        setFont(font) {
            this.ctx.font = font;
        }

        /**
         * Draws filled text.
         * @param {string} text - The text string.
         * @param {number} x - The x-coordinate of the text.
         * @param {number} y - The y-coordinate of the text.
         */
        fillText(text, x, y) {
            this.ctx.fillText(text, x, y);
        }

        /**
         * Sets the filter property for the canvas.
         * @param {string} filterString - The CSS filter string (e.g., 'grayscale(100%) blur(5px)').
         */
        setFilter(filterString) {
            this.ctx.filter = filterString;
        }

        /**
         * Clears a rectangular area of the canvas.
         * @param {number} x - The x-coordinate of the top-left corner.
         * @param {number} y - The y-coordinate of the top-left corner.
         * @param {number} width - The width of the rectangle.
         * @param {number} height - The height of the rectangle.
         */
        clearRect(x, y, width, height) {
            this.ctx.clearRect(x, y, width, height);
        }
    }


    class Electric {
        /**
         * Creates an instance of Electric.js, attaching it to a canvas element.
         * @param {string|HTMLCanvasElement} canvasTarget - The ID of the canvas element or the canvas element itself.
         * @param {object} [options={}] - Configuration options for the Electric instance.
         * @param {string} [options.backgroundColor='#0a0a0a'] - Background color of the canvas.
         */
        constructor(canvasTarget, options = {}) {
            /** @type {HTMLCanvasElement} */
            this.canvas = typeof canvasTarget === 'string' ? document.getElementById(canvasTarget) : canvasTarget;
            if (!this.canvas) {
                console.error('Electric.js: Canvas target not found!', canvasTarget);
                return;
            }

            /** @type {ElectricGraphics} */
            this.graphics = new ElectricGraphics(this.canvas.getContext('2d'));
            this.options = {
                backgroundColor: '#0a0a0a', // Default dark background
                ...options
            };

            /** @type {Array<object>} */
            this.animatedObjects = []; // Stores objects with an 'update' method
            /** @type {Array<object>} */
            this.renderableObjects = []; // Stores objects with a 'draw' method, sorted by layer
            /** @type {Array<object>} */
            this.canvasButtons = []; // Stores internal buttons for click detection
            /** @type {Array<HTMLAudioElement>} */
            this.audioElements = []; // Stores audio elements for management and cleanup

            this.frameId = null; // For requestAnimationFrame
            this.lastTime = 0; // For delta time calculation

            // --- Input State ---
            this.input = {
                keysPressed: {},
                isMouseDown: false,
                mouseX: 0,
                mouseY: 0
            };

            this.resizeCanvas();
            window.addEventListener('resize', () => this.resizeCanvas());

            // Add input event listeners
            window.addEventListener('keydown', this._handleKeyDown.bind(this));
            window.addEventListener('keyup', this._handleKeyUp.bind(this));
            this.canvas.addEventListener('mousedown', this._handleMouseDown.bind(this));
            this.canvas.addEventListener('mouseup', this._handleMouseUp.bind(this));
            this.canvas.addEventListener('mousemove', this._handleMouseMove.bind(this));
            // Add touch event listeners for mobile responsiveness
            this.canvas.addEventListener('touchstart', this._handleTouchStart.bind(this), { passive: false });
            this.canvas.addEventListener('touchend', this._handleTouchEnd.bind(this));
            this.canvas.addEventListener('touchmove', this._handleTouchMove.bind(this), { passive: false });


            console.log(`Electric.js instance initialized on canvas: ${this.canvas.id || 'unnamed canvas'}`);
            this.drawBackground(); // Initial background draw
        }

        /**
         * Handles keydown events to update input state.
         * @param {KeyboardEvent} event
         * @private
         */
        _handleKeyDown(event) {
            this.input.keysPressed[event.key] = true;
        }

        /**
         * Handles keyup events to update input state.
         * @param {KeyboardEvent} event
         * @private
         */
        _handleKeyUp(event) {
            this.input.keysPressed[event.key] = false;
        }

        /**
         * Converts raw client coordinates to canvas-relative, DPR-adjusted coordinates.
         * @param {number} clientX
         * @param {number} clientY
         * @returns {{x: number, y: number}}
         * @private
         */
        _getCanvasCoordinates(clientX, clientY) {
            const rect = this.canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            const scaleX = this.canvas.width / rect.width / dpr;
            const scaleY = this.canvas.height / rect.height / dpr;
            return {
                x: (clientX - rect.left) * scaleX,
                y: (clientY - rect.top) * scaleY
            };
        }

        /**
         * Handles mousedown events to update input state.
         * @param {MouseEvent} event
         * @private
         */
        _handleMouseDown(event) {
            this.input.isMouseDown = true;
            const coords = this._getCanvasCoordinates(event.clientX, event.clientY);
            this.input.mouseX = coords.x;
            this.input.mouseY = coords.y;
            // Prevent default to avoid text selection on drag
            event.preventDefault();
        }

        /**
         * Handles mouseup events to update input state.
         * @param {MouseEvent} event
         * @private
         */
        _handleMouseUp(event) {
            this.input.isMouseDown = false;
        }

        /**
         * Handles mousemove events to update input state.
         * @param {MouseEvent} event
         * @private
         */
        _handleMouseMove(event) {
            const coords = this._getCanvasCoordinates(event.clientX, event.clientY);
            this.input.mouseX = coords.x;
            this.input.mouseY = coords.y;
        }

        /**
         * Handles touchstart events for mobile input.
         * @param {TouchEvent} event
         * @private
         */
        _handleTouchStart(event) {
            if (event.touches.length > 0) {
                this.input.isMouseDown = true; // Treat touch as mouse down
                const touch = event.touches[0];
                const coords = this._getCanvasCoordinates(touch.clientX, touch.clientY);
                this.input.mouseX = coords.x;
                this.input.mouseY = coords.y;
            }
            event.preventDefault(); // Prevent scrolling/zooming
        }

        /**
         * Handles touchend events for mobile input.
         * @param {TouchEvent} event
         * @private
         */
        _handleTouchEnd(event) {
            if (event.touches.length === 0) {
                this.input.isMouseDown = false; // All touches lifted
            }
        }

        /**
         * Handles touchmove events for mobile input.
         * @param {TouchEvent} event
         * @private
         */
        _handleTouchMove(event) {
            if (event.touches.length > 0) {
                const touch = event.touches[0];
                const coords = this._getCanvasCoordinates(touch.clientX, touch.clientY);
                this.input.mouseX = coords.x;
                this.input.mouseY = coords.y;
            }
            event.preventDefault(); // Prevent scrolling
        }


        /**
         * Handles clicks on the canvas to detect interaction with internal buttons.
         * @param {MouseEvent} event - The click event.
         * @private
         */
        _handleCanvasClick(event) {
            const rect = this.canvas.getBoundingClientRect();
            // Account for CSS styling and device pixel ratio for accurate coordinates
            const scaleX = this.canvas.width / rect.width / (window.devicePixelRatio || 1);
            const scaleY = this.canvas.height / rect.height / (window.devicePixelRatio || 1);

            const mouseX = (event.clientX - rect.left) * scaleX;
            const mouseY = (event.clientY - rect.top) * scaleY;

            for (let i = this.canvasButtons.length - 1; i >= 0; i--) {
                const button = this.canvasButtons[i];
                if (button.containsPoint && button.containsPoint(mouseX, mouseY)) {
                    if (button.callback) {
                        button.callback();
                    }
                    return; // Only trigger one button per click
                }
            }
        }

        /**
         * Resizes the canvas to fill its parent container or the window,
         * and adjusts for device pixel ratio for high-DPI (HD/4K/8K) rendering.
         */
        resizeCanvas() {
            const displayWidth = this.canvas.clientWidth;
            const displayHeight = this.canvas.clientHeight;

            // Get the device pixel ratio
            const dpr = window.devicePixelRatio || 1;

            // Set the canvas's internal drawing buffer size to match the display size multiplied by DPR
            this.canvas.width = displayWidth * dpr;
            this.canvas.height = displayHeight * dpr;

            // Scale the graphics context to ensure drawings are rendered at the higher resolution
            this.graphics.ctx.scale(dpr, dpr);

            this.draw(); // Redraw content after resize
            console.log(`Canvas resized to ${displayWidth}x${displayHeight} (CSS) with ${this.canvas.width}x${this.canvas.height} (DPR: ${dpr}) internal resolution.`);
        }

        /**
         * Draws the background color.
         */
        drawBackground() {
            this.graphics.setFill(this.options.backgroundColor);
            // Fill the *scaled* context, so it covers the CSS visible area
            this.graphics.fillRect(0, 0, this.canvas.width / (window.devicePixelRatio || 1), this.canvas.height / (window.devicePixelRatio || 1));
        }

        /**
         * Adds an object to be animated and rendered.
         * Objects should have `update(deltaTime)` and `draw(graphics)` methods.
         * @param {object} obj - The object to add.
         * @param {number} [layer=0] - The drawing layer for the object (lower numbers drawn first).
         */
        addObject(obj, layer = 0) {
            obj.layer = layer; // Assign layer to the object
            if (typeof obj.update === 'function') {
                this.animatedObjects.push(obj);
            }
            if (typeof obj.draw === 'function') {
                this.renderableObjects.push(obj);
                // Keep renderableObjects sorted by layer for correct drawing order
                this.renderableObjects.sort((a, b) => a.layer - b.layer);
            }
        }

        /**
         * The main animation loop.
         * @param {DOMHighResTimeStamp} currentTime - The current time provided by requestAnimationFrame.
         */
        animate = (currentTime) => {
            const deltaTime = (currentTime - this.lastTime) / 1000; // Convert to seconds
            this.lastTime = currentTime;

            this.drawBackground(); // Clear canvas for redraw

            // Update animated objects
            this.animatedObjects.forEach(obj => {
                obj.update(deltaTime);
            });

            // Draw all renderable objects in sorted order
            this.renderableObjects.forEach(obj => {
                this.graphics.save(); // Save graphics state before drawing each object
                obj.draw(this.graphics);
                this.graphics.restore(); // Restore graphics state
            });

            this.frameId = requestAnimationFrame(this.animate);
        }

        /**
         * Starts the animation loop.
         */
        startAnimation() {
            if (!this.frameId) {
                this.lastTime = performance.now(); // Initialize lastTime
                this.frameId = requestAnimationFrame(this.animate);
                console.log('Electric.js animation started.');
            }
        }

        /**
         * Stops the animation loop.
         */
        stopAnimation() {
            if (this.frameId) {
                cancelAnimationFrame(this.frameId);
                this.frameId = null;
                console.log('Electric.js animation stopped.');
            }
        }

        /**
         * Redraws all static and dynamic content. Call this after any non-animated
         * changes or canvas resize.
         */
        draw() {
            this.drawBackground();
            this.renderableObjects.forEach(obj => {
                this.graphics.save(); // Save graphics state before drawing each object
                obj.draw(this.graphics);
                this.graphics.restore(); // Restore graphics state
            });
        }

        /**
         * Creates an interactive button directly on the canvas.
         * @param {number} x - X coordinate of the top-left corner of the button.
         * @param {number} y - Y coordinate of the top-left corner of the button.
         * @param {number} width - Width of the button.
         * @param {number} height - Height of the button.
         * @param {string} text - Text to display on the button.
         * @param {string} [buttonColor='#63b3ed'] - Background color of the button.
         * @param {string} [textColor='#1a202c'] - Color of the button text.
         * @param {function} callback - Function to execute when the button is clicked.
         * @param {number} [layer=100] - The drawing layer for the button.
         * @returns {object} The created button object.
         */
        createCanvasButton(x, y, width, height, text, buttonColor = '#63b3ed', textColor = '#1a202c', callback, layer = 100) {
            const button = {
                x: x,
                y: y,
                width: width,
                height: height,
                text: text,
                buttonColor: buttonColor,
                textColor: textColor,
                callback: callback,
                isHovered: false, // For future hover effects
                draw: (graphics) => {
                    graphics.save();
                    // Button background
                    graphics.setFill(button.buttonColor);
                    graphics.beginPath();
                    graphics.roundRect(button.x, button.y, button.width, button.height, 8); // Rounded corners
                    graphics.fill();

                    // Button text
                    graphics.setFill(button.textColor);
                    graphics.setFont(`bold ${height * 0.4}px Inter`); // Responsive font size
                    graphics.setTextAlign('center');
                    graphics.setTextBaseline('middle');
                    graphics.fillText(button.text, button.x + button.width / 2, button.y + button.height / 2);
                    graphics.restore();
                },
                // Method to check if a point is inside the button
                containsPoint: (px, py) => {
                    return px >= button.x && px <= button.x + button.width &&
                           py >= button.y && py <= button.y + button.height;
                }
            };
            this.addObject(button, layer); // Add to renderable objects with specified layer
            this.canvasButtons.push(button); // Add to internal button list for click detection
            // Add click listener to the canvas if not already added
            if (!this._canvasClickListenerAdded) {
                this.canvas.addEventListener('click', this._handleCanvasClick.bind(this));
                this._canvasClickListenerAdded = true;
            }
            return button;
        }

        /**
         * Creates a simple rectangle shape.
         * @param {number} x - X coordinate of the top-left corner.
         * @param {number} y - Y coordinate of the top-left corner.
         * @param {number} width - Width of the rectangle.
         * @param {number} height - Height of the rectangle.
         * @param {string} color - Fill color of the rectangle.
         * @param {number} [layer=0] - The drawing layer for the rectangle.
         * @returns {object} A renderable rectangle object.
         */
        createRectangle(x, y, width, height, color, layer = 0) {
            const rect = {
                x: x,
                y: y,
                width: width,
                height: height,
                color: color,
                draw: (graphics) => {
                    graphics.setFill(rect.color);
                    graphics.fillRect(rect.x, rect.y, rect.width, rect.height);
                },
                update: (deltaTime) => {
                    // Example: Simple horizontal movement
                    rect.x += 50 * deltaTime; // Move 50 pixels per second
                    if (rect.x > this.canvas.width / (window.devicePixelRatio || 1) - rect.width) {
                        rect.x = 0; // Reset position
                    }
                }
            };
            this.addObject(rect, layer);
            return rect;
        }

        /**
         * Creates a simple Ninja Star (Shuriken) shape.
         * @param {number} x - X coordinate of the star's center.
         * @param {number} y - Y coordinate of the star's center.
         * @param {number} size - Size of the star (radius).
         * @param {string} color - Fill color of the star.
         * @param {number} [layer=1] - The drawing layer for the star.
         * @returns {object} A renderable and animatable Ninja Star object.
         */
        createNinjaStar(x, y, size, color, layer = 1) {
            let currentX = x;
            let currentY = y;
            let rotation = 0;
            let speedX = 0;
            let speedY = 0;
            let rotationSpeed = 0; // degrees per second

            const star = {
                x: currentX,
                y: currentY,
                size: size,
                color: color,
                rotation: rotation, // in radians
                speedX: speedX, // Added for external control
                speedY: speedY, // Added for external control
                rotationSpeed: rotationSpeed, // Added for external control
                isAttached: true, // New property to track if it's attached to ninja
                draw: (graphics) => {
                    graphics.save(); // Save the current graphics state
                    graphics.translate(star.x, star.y); // Move origin to star's center
                    graphics.rotate(star.rotation); // Rotate around the new origin

                    graphics.setFill(star.color);
                    graphics.beginPath();
                    // Draw a 4-point star (simple shuriken)
                    for (let i = 0; i < 4; i++) {
                        const angle = (Math.PI / 2) * i;
                        const outerX = star.size * Math.cos(angle);
                        const outerY = star.size * Math.sin(angle);
                        const innerX = (star.size / 3) * Math.cos(angle + Math.PI / 4);
                        const innerY = (star.size / 3) * Math.sin(angle + Math.PI / 4);

                        if (i === 0) {
                            graphics.moveTo(outerX, outerY);
                        } else {
                            graphics.lineTo(outerX, outerY);
                        }
                        graphics.lineTo(innerX, innerY);
                    }
                    graphics.closePath();
                    graphics.fill();
                    graphics.restore(); // Restore graphics state
                },
                update: (deltaTime) => {
                    if (!star.isAttached) { // Only update if not attached
                        star.x += star.speedX * deltaTime;
                        star.y += star.speedY * deltaTime;
                        star.rotation += (star.rotationSpeed * Math.PI / 180) * deltaTime; // Convert degrees to radians

                        // Simple boundary check (e.g., star disappears or bounces off screen)
                        if (star.x < -star.size || star.x > this.canvas.width / (window.devicePixelRatio || 1) + star.size ||
                            star.y < -star.size || star.y > this.canvas.height / (window.devicePixelRatio || 1) + star.size) {
                            // For this example, we'll just stop its movement and rotation
                            star.speedX = 0;
                            star.speedY = 0;
                            star.rotationSpeed = 0;
                        }
                    }
                },
                // Method to "throw" the star
                throw: (targetX, targetY, throwSpeed = 300, spinSpeed = 720) => {
                    star.isAttached = false; // Detach from ninja
                    const dx = targetX - star.x;
                    const dy = targetY - star.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance === 0) return;

                    const duration = distance / throwSpeed; // seconds
                    star.speedX = dx / duration;
                    star.speedY = dy / duration;
                    star.rotationSpeed = spinSpeed; // degrees per second
                    console.log(`Ninja star thrown towards (${targetX}, ${targetY})!`);
                },
                reset: () => {
                    // Resetting position will be handled by the update loop when attached
                    star.rotation = 0;
                    star.speedX = 0;
                    star.speedY = 0;
                    star.rotationSpeed = 0;
                    star.isAttached = true; // Re-attach to ninja
                }
            };
            this.addObject(star, layer);
            return star;
        }

        /**
         * Creates a detailed Ninja character using vector drawing.
         * @param {number} x - X coordinate of the character's base (feet center).
         * @param {number} y - Y coordinate of the character's base (feet center).
         * @param {number} scale - Scale factor for the character.
         * @param {string} bodyColor - Main body color of the ninja.
         * @param {string} accentColor - Accent color for headband/belt.
         * @param {number} [layer=2] - The drawing layer for the character.
         * @returns {object} A renderable and animatable Ninja character object.
         */
        createNinjaCharacter(x, y, scale, bodyColor = '#000000', accentColor = '#cc0000', layer = 2) {
            let currentX = x;
            let currentY = y;
            let isMoving = false;
            let targetX = x;
            let moveSpeed = 150; // pixels per second
            let animationFrame = 0; // For simple walk cycle
            const walkCycleFrames = 8;
            let frameTimer = 0;
            const frameDuration = 0.1; // seconds per frame

            const character = {
                x: currentX,
                y: currentY,
                scale: scale,
                bodyColor: bodyColor,
                accentColor: accentColor,
                draw: (graphics) => {
                    graphics.save();
                    graphics.translate(character.x, character.y);
                    graphics.scale(character.scale, character.scale);

                    // Animation parameters based on frame
                    const legOffset = Math.sin(animationFrame / walkCycleFrames * Math.PI * 2) * 10; // Vertical offset for legs
                    const armOffset = Math.sin(animationFrame / walkCycleFrames * Math.PI * 2 + Math.PI / 2) * 10; // Vertical offset for arms
                    const bodyBounce = Math.abs(Math.sin(animationFrame / walkCycleFrames * Math.PI * 2)) * 10; // Vertical bounce for whole body

                    // Adjust Y based on body bounce
                    graphics.translate(0, -bodyBounce);

                    // --- Ninja Body ---
                    // Main body with gradient shading
                    const bodyGradient = graphics.ctx.createLinearGradient(0, -60, 0, 20);
                    bodyGradient.addColorStop(0, character.bodyColor);
                    bodyGradient.addColorStop(0.5, 'rgba(0,0,0,0.8)'); // Darker shade in middle
                    bodyGradient.addColorStop(1, character.bodyColor);
                    graphics.setFill(bodyGradient);
                    graphics.setStroke('#111111'); // Darker outline
                    graphics.setLineWidth(2);

                    // Torso (more defined shape)
                    graphics.beginPath();
                    graphics.moveTo(-25, -60); // Top-left shoulder
                    graphics.lineTo(25, -60);  // Top-right shoulder
                    graphics.lineTo(30, 20);   // Outer hip right
                    graphics.lineTo(-30, 20);  // Outer hip left
                    graphics.closePath();
                    graphics.fill();
                    graphics.stroke();

                    // Head (distinct shape)
                    graphics.beginPath();
                    graphics.arc(0, -85, 25, 0, Math.PI * 2); // Head circle
                    graphics.fill();
                    graphics.stroke();

                    // Hood / Face covering (more integrated with head)
                    graphics.beginPath();
                    graphics.moveTo(-25, -95); // Left side of hood
                    graphics.lineTo(-15, -70); // Left jawline
                    graphics.lineTo(15, -70);  // Right jawline
                    graphics.lineTo(25, -95);  // Right side of hood
                    graphics.lineTo(0, -110);  // Top point of hood
                    graphics.closePath();
                    graphics.fill();
                    graphics.stroke();

                    // Exposed Skin / Face mask area (smaller, more defined)
                    graphics.setFill('#E0B99B'); // Skin tone
                    graphics.beginPath();
                    graphics.moveTo(-10, -80); // Top-left of mask
                    graphics.lineTo(10, -80);  // Top-right of mask
                    graphics.lineTo(8, -70);   // Bottom-right of mask
                    graphics.lineTo(-8, -70);  // Bottom-left of mask
                    graphics.closePath();
                    graphics.fill();

                    // Eyes (slanted, more ninja-like)
                    graphics.setFill('#000000'); // Black for eyes
                    graphics.beginPath();
                    graphics.ellipse(-7, -85, 3, 5, -Math.PI / 8, 0, Math.PI * 2); // Left eye (slanted)
                    graphics.fill();
                    graphics.beginPath();
                    graphics.ellipse(7, -85, 3, 5, Math.PI / 8, 0, Math.PI * 2); // Right eye (slanted)
                    graphics.fill();

                    // --- Arms ---
                    graphics.setStroke(character.bodyColor);
                    graphics.setLineWidth(3);
                    graphics.setLineCap('round');

                    // Right arm (with elbow bend)
                    graphics.beginPath();
                    graphics.moveTo(20, -50); // Shoulder
                    graphics.lineTo(40, -10 + armOffset); // Elbow
                    graphics.lineTo(55, 30 + armOffset); // Hand
                    graphics.stroke();

                    // Left arm (with elbow bend)
                    graphics.beginPath();
                    graphics.moveTo(-20, -50); // Shoulder
                    graphics.lineTo(-40, -10 - armOffset); // Elbow
                    graphics.lineTo(-55, 30 - armOffset); // Hand
                    graphics.stroke();

                    // --- Legs ---
                    graphics.setStroke(character.bodyColor);
                    graphics.setLineWidth(4); // Thicker legs
                    graphics.setLineCap('round');

                    // Right leg (with knee bend)
                    graphics.beginPath();
                    graphics.moveTo(15, 20); // Hip
                    graphics.lineTo(20, 60 + legOffset); // Knee
                    graphics.lineTo(15, 100 + legOffset); // Ankle
                    graphics.stroke();

                    // Left leg (with knee bend)
                    graphics.beginPath();
                    graphics.moveTo(-15, 20); // Hip
                    graphics.lineTo(-20, 60 - legOffset); // Knee
                    graphics.lineTo(-15, 100 - legOffset); // Ankle
                    graphics.stroke();

                    // --- Feet ---
                    graphics.setFill(character.bodyColor);
                    graphics.setStroke('#111111');
                    graphics.setLineWidth(2);
                    graphics.beginPath();
                    graphics.roundRect(10, 100 + legOffset, 20, 15, 5); // Right foot
                    graphics.fill();
                    graphics.stroke();

                    graphics.beginPath();
                    graphics.roundRect(-30, 100 - legOffset, 20, 15, 5); // Left foot
                    graphics.fill();
                    graphics.stroke();

                    // --- Belt ---
                    graphics.setFill(character.accentColor);
                    graphics.setStroke('#000000');
                    graphics.setLineWidth(1);
                    graphics.fillRect(-30, 10, 60, 10); // Belt rectangle
                    graphics.strokeRect(-30, 10, 60, 10); // Belt outline

                    // Belt buckle (simple grey rectangle)
                    graphics.setFill('#aaaaaa'); // Grey for buckle
                    graphics.setStroke('#333333');
                    graphics.setLineWidth(1);
                    graphics.beginPath();
                    graphics.roundRect(-8, 11, 16, 8, 3); // Rounded buckle
                    graphics.fill();
                    graphics.stroke();

                    graphics.restore();
                },
                update: (deltaTime) => {
                    if (isMoving) {
                        const dx = targetX - character.x;
                        const distance = Math.abs(dx);

                        // Use a fixed speed, but apply over deltaTime
                        const step = moveSpeed * deltaTime;

                        if (distance > step) {
                            character.x += Math.sign(dx) * step;
                            frameTimer += deltaTime;
                            if (frameTimer >= frameDuration) {
                                animationFrame = (animationFrame + 1) % walkCycleFrames;
                                frameTimer -= frameDuration;
                            }
                        } else {
                            character.x = targetX;
                            isMoving = false;
                            animationFrame = 0; // Reset animation frame when stopped
                            console.log('Ninja arrived at destination.');
                        }
                    } else {
                        animationFrame = 0; // Keep animation frame at 0 when not moving
                    }
                },
                // Method to make the character move
                moveTo: (newX) => {
                    targetX = newX;
                    isMoving = true;
                    console.log(`Ninja moving to X: ${newX}`);
                },
                // Method to control movement with keyboard/mouse
                setMovement: (directionX, directionY, deltaTime) => { // Added deltaTime parameter
                    if (directionX !== 0) {
                        character.x += directionX * moveSpeed * deltaTime; // Use deltaTime for smooth movement
                        isMoving = true; // Keep animation playing
                        frameTimer += deltaTime; // Advance frame timer
                        if (frameTimer >= frameDuration) {
                            animationFrame = (animationFrame + 1) % walkCycleFrames;
                            frameTimer -= frameDuration;
                        }
                    } else {
                        isMoving = false;
                        animationFrame = 0; // Stop animation when no horizontal movement
                    }
                    // Clamp position within canvas bounds
                    character.x = Math.max(0, Math.min(character.x, this.canvas.width / (window.devicePixelRatio || 1)));
                    character.y = Math.max(0, Math.min(character.y, this.canvas.height / (window.devicePixelRatio || 1)));
                }
            };
            this.addObject(character, layer);
            return character;
        }

        /**
         * Draws a detailed Dojo background.
         * @param {number} canvasWidth - The width of the canvas.
         * @param {number} canvasHeight - The height of the canvas.
         * @param {number} [layer=-1] - The drawing layer for the background.
         * @returns {object} A renderable background object.
         */
        createDojoBackground(canvasWidth, canvasHeight, layer = -1) {
            const background = {
                draw: (graphics) => {
                    graphics.save();

                    // Floor (wooden planks with subtle texture and radial gradient for light source)
                    const floorHeight = canvasWidth * 0.3;
                    const floorY = canvasHeight - floorHeight;

                    // Radial gradient for a light source in the middle of the floor
                    const floorGradient = graphics.ctx.createRadialGradient(
                        canvasWidth / 2, floorY + floorHeight / 2, 50, // Inner circle
                        canvasWidth / 2, floorY + floorHeight / 2, Math.max(canvasWidth, floorHeight) / 2 // Outer circle
                    );
                    floorGradient.addColorStop(0, '#8b4513'); // Lighter wood in center
                    floorGradient.addColorStop(0.5, '#6a401c'); // Medium wood
                    floorGradient.addColorStop(1, '#4a2c0f'); // Darker wood at edges
                    graphics.setFill(floorGradient);
                    graphics.fillRect(0, floorY, canvasWidth, floorHeight);

                    // Add plank lines and subtle variations
                    graphics.setStroke('rgba(48, 30, 10, 0.5)');
                    graphics.setLineWidth(2);
                    const numPlanks = 12;
                    for (let i = 0; i < numPlanks; i++) {
                        graphics.beginPath();
                        graphics.moveTo(0, floorY + (floorHeight / numPlanks) * i);
                        graphics.lineTo(canvasWidth, floorY + (floorHeight / numPlanks) * i);
                        graphics.stroke();
                        // Add some vertical grain lines
                        for (let j = 0; j < 5; j++) {
                            graphics.beginPath();
                            graphics.moveTo((canvasWidth / 5) * j + (Math.random() * 20 - 10), floorY + (floorHeight / numPlanks) * i);
                            graphics.lineTo((canvasWidth / 5) * j + (Math.random() * 20 - 10), floorY + (floorHeight / numPlanks) * (i + 1));
                            graphics.setStroke(`rgba(48, 30, 10, ${0.2 + Math.random() * 0.3})`); // Semi-transparent
                            graphics.setLineWidth(0.5);
                            graphics.stroke();
                        }
                    }

                    // Walls (linear gradient for depth)
                    const wallHeight = canvasHeight - floorHeight;
                    const wallGradient = graphics.ctx.createLinearGradient(0, 0, 0, wallHeight);
                    wallGradient.addColorStop(0, '#505050'); // Darker at top
                    wallGradient.addColorStop(0.5, '#787878'); // Lighter in middle
                    wallGradient.addColorStop(1, '#505050'); // Darker at bottom
                    graphics.setFill(wallGradient);
                    graphics.fillRect(0, 0, canvasWidth, wallHeight);

                    // Wall texture (subtle noise/lines)
                    for (let i = 0; i < 100; i++) {
                        const x1 = Math.random() * canvasWidth;
                        const y1 = Math.random() * wallHeight;
                        const x2 = x1 + (Math.random() * 10 - 5);
                        const y2 = y1 + (Math.random() * 10 - 5);
                        graphics.beginPath();
                        graphics.moveTo(x1, y1);
                        graphics.lineTo(x2, y2);
                        graphics.setStroke(`rgba(0,0,0,${0.05 + Math.random() * 0.1})`);
                        graphics.setLineWidth(0.5);
                        graphics.stroke();
                    }


                    // Shoji Screens (right side) - More detailed
                    const shojiWidth = canvasWidth * 0.3;
                    const shojiHeight = wallHeight * 0.8;
                    const shojiX = canvasWidth - shojiWidth - 20;
                    const shojiY = wallHeight * 0.1;

                    graphics.setFill('#f0e68c'); // Khaki color for paper
                    graphics.fillRect(shojiX, shojiY, shojiWidth, shojiHeight);

                    graphics.setStroke('#4a2c0f'); // Wood color for frame
                    graphics.setLineWidth(4); // Thicker frame
                    graphics.strokeRect(shojiX, shojiY, shojiWidth, shojiHeight);

                    // Shoji grid (more lines for detail)
                    graphics.setLineWidth(1.5);
                    const numHorizontal = 6;
                    const numVertical = 5;
                    for (let i = 1; i < numHorizontal; i++) {
                        graphics.beginPath();
                        graphics.moveTo(shojiX, shojiY + (shojiHeight / numHorizontal) * i);
                        graphics.lineTo(shojiX + shojiWidth, shojiY + (shojiHeight / numHorizontal) * i);
                        graphics.stroke();
                    }
                    for (let i = 1; i < numVertical; i++) {
                        graphics.beginPath();
                        graphics.moveTo(shojiX + (shojiWidth / numVertical) * i, shojiY);
                        graphics.lineTo(shojiX + (shojiWidth / numVertical) * i, shojiY + shojiHeight);
                        graphics.stroke();
                    }

                    // Dojo entrance/archway (left side) - More detailed
                    const archWidth = canvasWidth * 0.25;
                    const archHeight = wallHeight * 0.7;
                    const archX = 20;
                    const archY = wallHeight * 0.15;

                    // Dark opening
                    graphics.setFill('#1a1a1a');
                    graphics.fillRect(archX, archY, archWidth, archHeight);

                    // Wood frame for archway
                    graphics.setStroke('#4a2c0f');
                    graphics.setLineWidth(6); // Thicker frame
                    graphics.strokeRect(archX, archY, archWidth, archHeight);

                    // Add a simple scroll hanging in the archway
                    const scrollWidth = archWidth * 0.6;
                    const scrollHeight = archHeight * 0.7;
                    const scrollX = archX + (archWidth - scrollWidth) / 2;
                    const scrollY = archY + archHeight * 0.1;

                    graphics.setFill('#fdf5e6'); // Old paper color
                    graphics.fillRect(scrollX, scrollY, scrollWidth, scrollHeight);
                    graphics.setStroke('#8b4513'); // Dark wood for scroll ends
                    graphics.setLineWidth(2);
                    graphics.strokeRect(scrollX, scrollY, scrollWidth, scrollHeight);
                    graphics.fillRect(scrollX, scrollY - 5, scrollWidth, 10); // Top bar
                    graphics.fillRect(scrollX, scrollY + scrollHeight - 5, scrollWidth, 10); // Bottom bar

                    graphics.setFill('#333333');
                    graphics.setFont('bold 20px Inter');
                    graphics.setTextAlign('center');
                    graphics.setTextBaseline('middle');
                    graphics.fillText('道', scrollX + scrollWidth / 2, scrollY + scrollHeight / 2 + 10); // Japanese character for "Do" (way)

                    graphics.restore();
                },
                update: () => {} // Background is static
            };
            this.addObject(background, layer); // Background layer
            return background;
        }

        /**
         * Creates a translucent glass panel with a gradient reflection.
         * @param {number} x - X coordinate of the top-left corner.
         * @param {number} y - Y coordinate of the top-left corner.
         * @param {number} width - Width of the panel.
         * @param {number} height - Height of the panel.
         * @param {number} [layer=1] - The drawing layer.
         * @returns {object} A renderable glass panel object.
         */
        createGlassPanel(x, y, width, height, layer = 1) {
            const panel = {
                x: x,
                y: y,
                width: width,
                height: height,
                draw: (graphics) => {
                    graphics.save();
                    // Base translucent glass color
                    graphics.setFill('rgba(150, 200, 255, 0.2)'); // Light blue, semi-transparent
                    graphics.fillRect(panel.x, panel.y, panel.width, panel.height);

                    // Gradient for reflection in the middle
                    const reflectionGradient = graphics.ctx.createLinearGradient(
                        panel.x, panel.y, panel.x + panel.width, panel.y + panel.height
                    );
                    reflectionGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
                    reflectionGradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.4)'); // White highlight
                    reflectionGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)'); // Strongest highlight
                    reflectionGradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.4)');
                    reflectionGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                    graphics.setFill(reflectionGradient);
                    graphics.fillRect(panel.x, panel.y, panel.width, panel.height);

                    // Optional: subtle border
                    graphics.setStroke('rgba(200, 220, 255, 0.3)');
                    graphics.setLineWidth(1);
                    graphics.strokeRect(panel.x, panel.y, panel.width, panel.height);

                    graphics.restore();
                },
                update: () => {} // Static by default
            };
            this.addObject(panel, layer);
            return panel;
        }


        /**
         * Loads and displays an image on the canvas, with advanced options for sprites.
         * @param {string} imageUrl - The URL of the image.
         * @param {object} options - Options for image display.
         * @param {number} options.x - X coordinate for the image.
         * @param {number} options.y - Y coordinate for the image.
         * @param {number} [options.width] - Display width. If not provided, uses natural width.
         * @param {number} [options.height] - Display height. If not Provided, uses natural height.
         * @param {number} [options.sourceX=0] - X coordinate to start clipping from the source image.
         * @param {number} [options.sourceY=0] - Y coordinate to start clipping from the source image.
         * @param {number} [options.sourceWidth] - Width of the clipped area from the source image. If not provided, uses natural width.
         * @param {number} [options.sourceHeight] - Height of the clipped area from the source image. If not provided, uses natural height.
         * @param {number} [options.rotation=0] - Rotation in radians.
         * @param {number} [options.scaleX=1] - Horizontal scale.
         * @param {number} [options.CaleY=1] - Vertical scale.
         * @param {number} [layer=0] - The drawing layer for the image.
         * @returns {object} A renderable image object with properties for manipulation.
         */
        createImage(imageUrl, options, layer = 0) {
            const defaults = {
                x: 0, y: 0, width: null, height: null,
                sourceX: 0, sourceY: 0, sourceWidth: null, sourceHeight: null,
                rotation: 0, scaleX: 1, scaleY: 1
            };
            const opts = { ...defaults, ...options };

            const img = new Image();
            let imageLoaded = false;

            // Define onload and onerror on the imageObject for proper scope and reload handling
            const imageObject = {
                imageElement: img,
                x: opts.x,
                y: opts.y,
                width: opts.width,
                height: opts.height,
                sourceX: opts.sourceX,
                sourceY: opts.sourceY,
                sourceWidth: opts.sourceWidth,
                sourceHeight: opts.sourceHeight,
                rotation: opts.rotation,
                scaleX: opts.scaleX,
                scaleY: opts.scaleY,
                loaded: false,
                draw: (graphics) => {
                    if (imageLoaded) {
                        graphics.save();
                        graphics.translate(imageObject.x + imageObject.width / 2, imageObject.y + imageObject.height / 2);
                        graphics.rotate(imageObject.rotation);
                        graphics.scale(imageObject.scaleX, imageObject.scaleY);
                        graphics.drawImage(
                            img,
                            imageObject.sourceX, imageObject.sourceY,
                            imageObject.sourceWidth, imageObject.sourceHeight,
                            -imageObject.width / 2, -imageObject.height / 2,
                            imageObject.width, imageObject.height
                        );
                        graphics.restore();
                    } else {
                        // Draw loading placeholder
                        graphics.setFill('#cccccc');
                        graphics.fillRect(imageObject.x, imageObject.y, imageObject.width || 100, imageObject.height || 100);
                        graphics.setFill('#333333');
                        graphics.setFont('12px Inter');
                        graphics.setTextAlign('center');
                        graphics.fillText('Loading...', imageObject.x + (imageObject.width || 100) / 2, imageObject.y + (imageObject.height || 100) / 2);
                    }
                },
                update: () => {} // Images are static by default, unless animated explicitly
            };

            img.onload = () => {
                imageLoaded = true;
                imageObject.loaded = true;
                // Set default source/display dimensions if not provided after load
                imageObject.sourceWidth = imageObject.sourceWidth || img.naturalWidth;
                imageObject.sourceHeight = imageObject.sourceHeight || img.naturalHeight;
                imageObject.width = imageObject.width || imageObject.sourceWidth;
                imageObject.height = imageObject.height || imageObject.sourceHeight;
                console.log(`Electric.js: Image loaded: ${imageUrl}`);
                this.draw(); // Redraw canvas once image is loaded
            };
            img.onerror = () => {
                console.error(`Electric.js: Failed to load image: ${imageUrl}`);
                imageObject.loaded = false;
                this.draw();
            };
            img.src = imageUrl;

            this.addObject(imageObject, layer);
            return imageObject;
        }

        /**
         * Creates an animated sprite from a sprite sheet.
         * @param {string} imageUrl - URL of the sprite sheet.
         * @param {object} options - Options for the sprite animation.
         * @param {number} options.x - X coordinate for the sprite.
         * @param {number} options.y - Y coordinate for the sprite.
         * @param {number} options.frameWidth - Width of a single frame in the sprite sheet.
         * @param {number} options.frameHeight - Height of a single frame in the sprite sheet.
         * @param {number} options.frameCount - Total number of frames in the animation.
         * @param {number} [options.frameRate=10] - Frames per second for the animation.
         * @param {boolean} [options.loop=true] - Whether the animation should loop.
         * @param {number} [options.rotation=0] - Initial rotation in radians.
         * @param {number} [options.scaleX=1] - Horizontal scale.
         * @param {number} [options.scaleY=1] - Vertical scale.
         * @param {number} [layer=1] - The drawing layer for the sprite.
         * @returns {object} An animatable sprite object.
         */
        createSprite(imageUrl, options, layer = 1) {
            const defaults = {
                x: 0, y: 0, frameWidth: 0, frameHeight: 0, frameCount: 1,
                frameRate: 10, loop: true, rotation: 0, scaleX: 1, scaleY: 1
            };
            const opts = { ...defaults, ...options };

            const img = new Image();
            let imageLoaded = false;
            let currentFrame = 0;
            let frameTimer = 0;
            const frameDuration = 1 / opts.frameRate; // seconds per frame

            const spriteObject = {
                imageElement: img,
                x: opts.x, y: opts.y,
                width: opts.frameWidth, height: opts.frameHeight, // Display dimensions are frame dimensions
                frameWidth: opts.frameWidth, frameHeight: opts.frameHeight,
                frameCount: opts.frameCount,
                frameRate: opts.frameRate,
                loop: opts.loop,
                rotation: opts.rotation,
                scaleX: opts.scaleX,
                scaleY: opts.scaleY,
                isPlaying: true,
                draw: (graphics) => {
                    if (imageLoaded) {
                        graphics.save();
                        graphics.translate(spriteObject.x + spriteObject.width / 2, spriteObject.y + spriteObject.height / 2);
                        graphics.rotate(spriteObject.rotation);
                        graphics.scale(spriteObject.scaleX, spriteObject.scaleY);

                        const sourceX = (currentFrame % (img.naturalWidth / spriteObject.frameWidth)) * spriteObject.frameWidth;
                        const sourceY = Math.floor(currentFrame / (img.naturalWidth / spriteObject.frameWidth)) * spriteObject.frameHeight;

                        graphics.drawImage(
                            img,
                            sourceX, sourceY, spriteObject.frameWidth, spriteObject.frameHeight,
                            -spriteObject.width / 2, -spriteObject.height / 2, spriteObject.width, spriteObject.height
                        );
                        graphics.restore();
                    } else {
                        // Draw loading placeholder
                        graphics.setFill('#cccccc');
                        graphics.fillRect(spriteObject.x, spriteObject.y, spriteObject.width, spriteObject.height);
                        graphics.setFill('#333333');
                        graphics.setFont('12px Inter');
                        graphics.setTextAlign('center');
                        graphics.fillText('Loading Sprite...', spriteObject.x + spriteObject.width / 2, spriteObject.y + spriteObject.height / 2);
                    }
                },
                update: (deltaTime) => {
                    if (spriteObject.isPlaying && imageLoaded) {
                        frameTimer += deltaTime;
                        if (frameTimer >= frameDuration) {
                            currentFrame++;
                            if (currentFrame >= spriteObject.frameCount) {
                                if (spriteObject.loop) {
                                    currentFrame = 0; // Loop back
                                } else {
                                    spriteObject.isPlaying = false; // Stop on last frame
                                    currentFrame = spriteObject.frameCount - 1;
                                }
                            }
                            frameTimer -= frameDuration;
                        }
                    }
                },
                play: () => { spriteObject.isPlaying = true; },
                pause: () => { spriteObject.isPlaying = false; },
                goToFrame: (frameNum) => {
                    if (frameNum >= 0 && frameNum < opts.frameCount) {
                        currentFrame = frameNum;
                        frameTimer = 0;
                    }
                }
            };

            img.onload = () => {
                imageLoaded = true;
                console.log(`Electric.js: Sprite sheet loaded: ${imageUrl}`);
                this.draw();
            };
            img.onerror = () => {
                console.error(`Electric.js: Failed to load sprite sheet: ${imageUrl}`);
                imageLoaded = false;
                this.draw();
            };
            img.src = imageUrl;

            this.addObject(spriteObject, layer);
            return spriteObject;
        }


        /**
         * Integrates with an HTML5 video element, allowing drawing to canvas with effects.
         * @param {string|HTMLVideoElement} videoTarget - The ID of the video element or the video element itself.
         * @param {object} [options={}] - Options for video display and effects.
         * @param {number} [options.x=0] - X coordinate for drawing the video on canvas.
         * @param {number} [options.y=0] - Y coordinate for drawing the video on canvas.
         * @param {number} [options.width] - Display width. If not provided, uses video's natural width.
         * @param {number} [options.height] - Display height. If not Provided, uses video's natural height.
         * @param {boolean} [options.grayscale=false] - Apply grayscale filter.
         * @param {number} [options.blur=0] - Apply blur filter (in pixels).
         * @param {number} [layer=0] - The drawing layer for the video.
         * @returns {object|null} An object with video control methods and effect toggles.
         */
        integrateVideo(videoTarget, options = {}, layer = 0) {
            const defaults = { x: 0, y: 0, width: null, height: null, grayscale: false, blur: 0 };
            const opts = { ...defaults, ...options };

            /** @type {HTMLVideoElement} */
            const video = typeof videoTarget === 'string' ? document.getElementById(videoTarget) : videoTarget;
            if (!video) {
                console.error('Electric.js: Video target not found!', videoTarget);
                return null;
            }

            console.log(`Electric.js integrating with video: ${video.id || 'unnamed video'}`);

            const videoDisplay = {
                videoElement: video,
                x: opts.x, y: opts.y, width: opts.width, height: opts.height,
                grayscale: opts.grayscale,
                blur: opts.blur,
                draw: (graphics) => {
                    if (!video.paused && !video.ended) {
                        graphics.save();
                        // Apply filters
                        let filters = [];
                        if (videoDisplay.grayscale) filters.push('grayscale(100%)');
                        if (videoDisplay.blur > 0) filters.push(`blur(${videoDisplay.blur}px)`);
                        graphics.setFilter(filters.join(' '));

                        // Ensure width/height are set if not provided in options
                        const displayWidth = videoDisplay.width || video.videoWidth;
                        const displayHeight = videoDisplay.height || video.videoHeight;

                        graphics.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, videoDisplay.x, videoDisplay.y, displayWidth, displayHeight);
                        graphics.restore(); // Restore to clear filters for other elements
                    }
                },
                play: () => video.play(),
                pause: () => video.pause(),
                setVolume: (vol) => video.volume = vol,
                toggleGrayscale: () => { videoDisplay.grayscale = !videoDisplay.grayscale; this.draw(); },
                setBlur: (value) => { videoDisplay.blur = value; this.draw(); }
            };
            this.addObject(videoDisplay, layer); // Add to renderable objects to draw frames

            // Ensure initial width/height are set based on video metadata once loaded
            video.onloadedmetadata = () => {
                videoDisplay.width = videoDisplay.width || video.videoWidth;
                videoDisplay.height = videoDisplay.height || video.videoHeight;
                this.draw();
            };

            return videoDisplay;
        }

        /**
         * Loads and controls an audio element.
         * @param {string} audioUrl - The URL of the audio file.
         * @param {object} [options={}] - Options for audio playback.
         * @param {boolean} [options.loop=false] - Whether the audio should loop.
         * @param {number} [options.volume=1] - Initial volume (0.0 to 1.0).
         * @returns {object|null} An object with audio control methods.
         */
        createAudio(audioUrl, options = {}) {
            const defaults = { loop: false, volume: 1 };
            const opts = { ...defaults, ...options };

            const audio = new Audio();
            audio.src = audioUrl;
            audio.loop = opts.loop;
            audio.volume = opts.volume;

            audio.onerror = () => {
                console.error(`Electric.js: Failed to load audio: ${audioUrl}`);
            };

            console.log(`Electric.js creating audio object for: ${audioUrl}`);
            this.audioElements.push(audio); // Keep track of audio elements for cleanup

            const audioController = {
                audioElement: audio,
                play: () => {
                    audio.play().catch(e => console.error("Error playing audio:", e));
                    console.log(`Playing audio: ${audioUrl}`);
                },
                pause: () => {
                    audio.pause();
                    console.log(`Paused audio: ${audioUrl}`);
                },
                setVolume: (vol) => {
                    audio.volume = Math.max(0, Math.min(1, vol)); // Clamp between 0 and 1
                    console.log(`Set volume for ${audioUrl} to ${audio.volume}`);
                },
                setLoop: (loop) => {
                    audio.loop = loop;
                    console.log(`Set loop for ${audioUrl} to ${audio.loop}`);
                },
                getVolume: () => audio.volume,
                getLoop: () => audio.loop
            };
            return audioController;
        }

        /**
         * Checks for Axis-Aligned Bounding Box (AABB) collision between two objects.
         * Objects must have x, y, width, and height properties.
         * @param {object} rect1 - The first object with bounding box properties.
         * @param {object} rect2 - The second object with bounding box properties.
         * @returns {boolean} True if collision detected, false otherwise.
         */
        checkAABBCollision(rect1, rect2) {
            // Account for potential scaling on sprites if they have scaleX/scaleY
            const rect1Width = rect1.width * (rect1.scaleX || 1);
            const rect1Height = rect1.height * (rect1.scaleY || 1);
            const rect2Width = rect2.width * (rect2.scaleX || 1);
            const rect2Height = rect2.height * (rect2.scaleY || 1);

            return rect1.x < rect2.x + rect2Width &&
                   rect1.x + rect1Width > rect2.x &&
                   rect1.y < rect2.y + rect2Height &&
                   rect1.y + rect1Height > rect2.y;
        }

        /**
         * Cleans up the Electric.js instance.
         */
        destroy() {
            this.stopAnimation();
            window.removeEventListener('resize', () => this.resizeCanvas());
            // Remove input event listeners
            window.removeEventListener('keydown', this._handleKeyDown.bind(this));
            window.removeEventListener('keyup', this._handleKeyUp.bind(this));
            this.canvas.removeEventListener('mousedown', this._handleMouseDown.bind(this));
            this.canvas.removeEventListener('mouseup', this._handleMouseUp.bind(this));
            this.canvas.removeEventListener('mousemove', this._handleMouseMove.bind(this));
            this.canvas.removeEventListener('touchstart', this._handleTouchStart.bind(this));
            this.canvas.removeEventListener('touchend', this._handleTouchEnd.bind(this));
            this.canvas.removeEventListener('touchmove', this._handleTouchMove.bind(this));

            this.canvas.removeEventListener('click', this._handleCanvasClick); // Remove click listener
            this.animatedObjects = [];
            this.renderableObjects = [];
            this.canvasButtons = []; // Clear internal buttons
            // Pause and clear all managed audio elements
            this.audioElements.forEach(audio => {
                audio.pause();
                audio.src = ''; // Clear source to release resources
                audio.load(); // Reload to apply source clear
            });
            this.audioElements = [];
            console.log('Electric.js instance destroyed.');
        }

        /**
         * Loads an .elecplayer file (ZIP archive) and runs its contents in an iframe.
         * @param {File} file - The .elecplayer file (a File object from an input).
         * @param {string} targetElementId - The ID of the HTML element where the iframe will be inserted.
         */
        async loadElecPlayerFile(file, targetElementId) {
            const targetElement = document.getElementById(targetElementId);
            if (!targetElement) {
                console.error(`Target element '${targetElementId}' not found for loading .elecplayer file.`);
                return;
            }

            console.log(`Loading .elecplayer file: ${file.name}`);
            targetElement.innerHTML = '<p>Loading .elecplayer...</p>';

            try {
                const zip = new JSZip();
                const contents = await zip.loadAsync(file);

                const htmlFile = contents.file("index.html");
                const jsFile = contents.file("script.js");
                const cssFile = contents.file("style.css");

                if (!htmlFile || !jsFile || !cssFile) {
                    throw new Error("Invalid .elecplayer file: Missing index.html, script.js, or style.css");
                }

                const htmlContent = await htmlFile.async("string");
                const jsContent = await jsFile.async("string");
                const cssContent = await cssFile.async("string");

                // Create a Blob URL for the iframe content
                const iframeContent = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>ElecPlayer Content</title>
                        <style>${cssContent}</style>
                    </head>
                    <body>
                        ${htmlContent}
                        <script>${jsContent}</script>
                    </body>
                    </html>
                `;

                const blob = new Blob([iframeContent], { type: 'text/html' });
                const blobUrl = URL.createObjectURL(blob);

                const iframe = document.createElement('iframe');
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.border = 'none';
                iframe.src = blobUrl;

                // Clear previous content and append iframe
                targetElement.innerHTML = '';
                targetElement.appendChild(iframe);

                iframe.onload = () => {
                    console.log(".elecplayer content loaded into iframe.");
                    URL.revokeObjectURL(blobUrl); // Clean up the Blob URL
                };

            } catch (error) {
                console.error("Failed to load .elecplayer file:", error);
                targetElement.innerHTML = `<p style="color: red;">Error loading .elecplayer: ${error.message}</p>`;
            }
        }

        /**
         * Creates an .elecplayer file (ZIP archive) from provided HTML, JS, and CSS content.
         * @param {string} htmlContent - The HTML content for index.html.
         * @param {string} jsContent - The JavaScript content for script.js.
         * @param {string} cssContent - The CSS content for style.css.
         * @param {string} filename - The desired filename for the .elecplayer file (e.g., "myGame.elecplayer").
         */
        async createElecPlayerFile(htmlContent, jsContent, cssContent, filename) {
            if (typeof JSZip === 'undefined' || typeof saveAs === 'undefined') {
                console.error("JSZip or FileSaver.js is not loaded. Cannot create .elecplayer file.");
                return;
            }

            const zip = new JSZip();
            zip.file("index.html", htmlContent);
            zip.file("script.js", jsContent);
            zip.file("style.css", cssContent);

            console.log(`Creating .elecplayer file: ${filename}`);

            try {
                const blob = await zip.generateAsync({ type: "blob" });
                saveAs(blob, filename);
                console.log(".elecplayer file created successfully!");
            } catch (error) {
                console.error("Failed to create .elecplayer file:", error);
            }
        }
    }

    // Expose Electric globally for easy use in HTML
    window.Electric = Electric;
    console.log("Electric.js script finished loading and exposed Electric globally."); // Diagnostic log

} catch (e) {
    console.error("Electric.js: An error occurred during script execution:", e);
}
