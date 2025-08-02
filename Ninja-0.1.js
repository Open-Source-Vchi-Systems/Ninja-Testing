// This project was helped by Gemini 2.5 Flash!
// Ninja 0.1/Electric Player 0.1
console.log("Electric.js (Ninja) Multimedia Ready Template script started loading."); // Diagnostic log

try {
    /**
     * @class ElectricGraphics
     * @description A high-quality graphics system built on CanvasRenderingContext2D,
     * providing a more structured and extensible drawing API.
     */
    class ElectricGraphics {
        /**
         * @param {CanvasRenderingRenderingContext2D} ctx - The 2D rendering context of the canvas.
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
         * Sets the global alpha (transparency) value for all subsequent drawing operations.
         * @param {number} alpha - The alpha value (0.0 for fully transparent, 1.0 for fully opaque).
         */
        setGlobalAlpha(alpha) {
            this.ctx.globalAlpha = Math.max(0, Math.min(1, alpha)); // Clamp between 0 and 1
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

    /**
     * Calculates the SHA-256 hash of a given text.
     * @param {string} text - The text to hash.
     * @returns {Promise<string>} A promise that resolves to the SHA-256 hash in hexadecimal.
     */
    async function calculateSHA256(text) {
        const textEncoder = new TextEncoder();
        const data = textEncoder.encode(text);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
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

            /** @type {object} */
            this.physics = {
                gravity: 1200, // Pixels per second squared
                damping: 0.9 // For future use with more advanced physics
            };

            /** @type {object} */
            this.lighting = {
                ambient: '#ffffff', // Default ambient light color
                sources: [], // Array to hold light source objects {x, y, radius, color}
                /**
                 * Adds a conceptual light source.
                 * @param {number} x - X coordinate of the light source.
                 * @param {number} y - Y coordinate of the light source.
                 * @param {number} radius - Radius of influence for the light.
                 * @param {string} color - Color of the light.
                 */
                addLightSource: function(x, y, radius, color) {
                    this.sources.push({ x, y, radius, color });
                    console.log(`Added light source at (${x}, ${y}) with radius ${radius} and color ${color}`);
                },
                /**
                 * Clears all conceptual light sources.
                 */
                clearLightSources: function() {
                    this.sources = [];
                    console.log('Cleared all light sources.');
                }
            };

            /** @type {object} */
            this.network = {
                isConnected: false,
                serverUrl: null,
                _ws: null, // Internal WebSocket instance
                onMessage: null, // Callback for incoming messages
                onOpen: null,    // Callback for connection opened
                onClose: null,   // Callback for connection closed
                onError: null,   // Callback for connection errors

                /**
                 * Connects to a WebSocket server.
                 * @param {string} url - The WebSocket server URL.
                 * @param {function} [onMessageCallback] - Callback function for incoming messages.
                 * @param {function} [onOpenCallback] - Callback function for connection open.
                 * @param {function} [onCloseCallback] - Callback function for connection close.
                 * @param {function} [onErrorCallback] - Callback function for connection error.
                 */
                connectToServer: function(url, onMessageCallback, onOpenCallback, onCloseCallback, onErrorCallback) {
                    if (this._ws && this._ws.readyState === WebSocket.OPEN) {
                        console.warn('Network: Already connected to a server.');
                        return;
                    }
                    this.serverUrl = url;
                    this.onMessage = onMessageCallback;
                    this.onOpen = onOpenCallback;
                    this.onClose = onCloseCallback;
                    this.onError = onErrorCallback;

                    this._ws = new WebSocket(url);

                    this._ws.onopen = (event) => {
                        this.isConnected = true;
                        console.log('Network: Connected to server:', url);
                        if (this.onOpen) this.onOpen(event);
                    };

                    this._ws.onmessage = (event) => {
                        console.log('Network: Message received:', event.data);
                        if (this.onMessage) this.onMessage(event.data);
                    };

                    this._ws.onclose = (event) => {
                        this.isConnected = false;
                        console.log('Network: Disconnected from server:', event.code, event.reason);
                        if (this.onClose) this.onClose(event);
                    };

                    this._ws.onerror = (event) => {
                        console.error('Network: WebSocket error:', event);
                        if (this.onError) this.onError(event);
                    };
                },

                /**
                 * Sends data to the connected WebSocket server.
                 * @param {string|object} data - The data to send. If an object, it will be stringified.
                 */
                sendData: function(data) {
                    if (this._ws && this._ws.readyState === WebSocket.OPEN) {
                        const payload = typeof data === 'object' ? JSON.stringify(data) : data;
                        this._ws.send(payload);
                        console.log('Network: Data sent:', payload);
                    } else {
                        console.warn('Network: Not connected to a server. Data not sent.');
                    }
                },

                /**
                 * Disconnects from the WebSocket server.
                 */
                disconnectFromServer: function() {
                    if (this._ws) {
                        this._ws.close();
                        this._ws = null;
                        this.isConnected = false;
                        this.serverUrl = null;
                        console.log('Network: Disconnected from server.');
                    }
                }
            };


            /** @type {Array<object>} */
            this.animatedObjects = []; // Stores objects with an 'update' method
            /** @type {Array<object>} */
            this.renderableObjects = []; // Stores objects with a 'draw' method, sorted by layer
            /** @type {Array<object>} */
            this.canvasButtons = []; // Stores internal buttons for click detection
            /** @type {Map<string, HTMLAudioElement[]>} */
            this.audioChannels = new Map(); // Stores audio elements by channel

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

            // If a gameLoopHook is defined, call it to run game-specific logic
            if (typeof this.gameLoopHook === 'function') {
                this.gameLoopHook(deltaTime, this);
            }

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
                },
                callback: callback // Store callback directly on the button object
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
            let angle = 0;
            let speed = 0;
            let targetX = x;
            let targetY = y;
            let isThrown = false;
            let isAttached = true; // Starts attached to ninja

            const star = {
                x: x,
                y: y,
                size: size,
                color: color,
                rotation: angle, // in radians
                speedX: 0, // Added for external control
                speedY: 0, // Added for external control
                rotationSpeed: 0, // Added for external control
                isAttached: isAttached, // New property to track if it's attached to ninja
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
                    if (isThrown) {
                        const dx = targetX - star.x;
                        const dy = targetY - star.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance > 10) { // Move towards target
                            star.x += (dx / distance) * speed * deltaTime;
                            star.y += (dy / distance) * speed * deltaTime;
                            star.rotation += (rotationSpeed * Math.PI / 180) * deltaTime; // Convert degrees to radians
                        } else { // Reached target, stop moving
                            isThrown = false;
                            speed = 0;
                            rotationSpeed = 0;
                            // Optionally, make it disappear or attach to target
                        }
                    }
                },
                // Method to "throw" the star
                throw: (tx, ty, throwSpeed = 300, spinSpeed = 720) => {
                    targetX = tx;
                    targetY = ty;
                    speed = throwSpeed; // Pixels per second
                    rotationSpeed = spinSpeed; // degrees per second
                    isThrown = true;
                    isAttached = false;
                    console.log(`Ninja star thrown towards (${targetX}, ${targetY})!`);
                },
                reset: () => {
                    isThrown = false;
                    speed = 0;
                    angle = 0;
                    rotationSpeed = 0;
                    isAttached = true; // Re-attach to ninja
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
         * @param {number} [options.CaleY=1] - Vertical scale.
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
        createVideoDisplay(videoTarget, options = {}, layer = 0) {
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
                    if (video.readyState >= 2) { // Check if video data is ready
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
         * @param {string} [options.channel='default'] - The channel name for audio management.
         * @returns {object|null} An object with audio control methods.
         */
        createAudio(audioUrl, options = {}) {
            const defaults = { loop: false, volume: 1, channel: 'default' };
            const opts = { ...defaults, ...options };

            const audio = new Audio();
            audio.src = audioUrl;
            audio.loop = opts.loop;
            audio.volume = opts.volume;

            audio.onerror = () => {
                console.error(`Electric.js: Failed to load audio: ${audioUrl}`);
            };

            console.log(`Electric.js creating audio object for: ${audioUrl} on channel: ${opts.channel}`);

            if (!this.audioChannels.has(opts.channel)) {
                this.audioChannels.set(opts.channel, []);
            }
            this.audioChannels.get(opts.channel).push(audio);

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
                stop: () => { // New stop method
                    audio.pause();
                    audio.currentTime = 0;
                    console.log(`Stopped audio: ${audioUrl}`);
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
                getLoop: () => audio.loop,
                getChannel: () => opts.channel // New method to get channel
            };
            return audioController;
        }

        /**
         * Stops all audio currently managed by Electric.js across all channels.
         */
        stopAllAudio() {
            console.log("Stopping all audio...");
            this.audioChannels.forEach(channelAudios => {
                channelAudios.forEach(audio => {
                    audio.pause();
                    audio.currentTime = 0;
                });
            });
        }

        /**
         * Sets the volume for all audio elements within a specific channel.
         * @param {string} channelName - The name of the audio channel.
         * @param {number} volume - The target volume (0.0 to 1.0).
         */
        setChannelVolume(channelName, volume) {
            const clampedVolume = Math.max(0, Math.min(1, volume));
            if (this.audioChannels.has(channelName)) {
                this.audioChannels.get(channelName).forEach(audio => {
                    audio.volume = clampedVolume;
                });
                console.log(`Set volume for channel '${channelName}' to ${clampedVolume}`);
            } else {
                console.warn(`Channel '${channelName}' not found.`);
            }
        }

        /**
         * Fades the volume of a specific audio channel to a target volume over a duration.
         * @param {string} channelName - The name of the audio channel.
         * @param {number} targetVolume - The target volume (0.0 to 1.0).
         * @param {number} duration - The duration of the fade in milliseconds.
         */
        fadeChannel(channelName, targetVolume, duration) {
            const clampedTargetVolume = Math.max(0, Math.min(1, targetVolume));
            if (!this.audioChannels.has(channelName)) {
                console.warn(`Channel '${channelName}' not found for fading.`);
                return;
            }

            const channelAudios = this.audioChannels.get(channelName);
            if (channelAudios.length === 0) return;

            const startVolume = channelAudios[0].volume; // Assume all audios in channel have same starting volume
            const startTime = performance.now();

            const animateFade = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const currentVolume = startVolume + (clampedTargetVolume - startVolume) * progress;

                channelAudios.forEach(audio => {
                    audio.volume = currentVolume;
                });

                if (progress < 1) {
                    requestAnimationFrame(animateFade);
                } else {
                    console.log(`Channel '${channelName}' fade complete to volume ${clampedTargetVolume}.`);
                }
            };
            requestAnimationFrame(animateFade);
        }

        /**
         * Creates a particle emitter.
         * @param {object} options - Configuration for the particle emitter.
         * @param {number} options.x - X coordinate of the emitter.
         * @param {number} options.y - Y coordinate of the emitter.
         * @param {string} [options.color='#ffffff'] - Base color of particles.
         * @param {number} [options.count=10] - Number of particles to emit per burst/continuously.
         * @param {number} [options.speed=100] - Max initial speed of particles.
         * @param {number} [options.lifetime=1] - Lifetime of each particle in seconds.
         * @param {number} [options.size=5] - Initial size of particles.
         * @param {number} [options.spread=Math.PI*2] - Angle spread in radians (e.g., Math.PI for half circle, Math.PI*2 for full circle).
         * @param {number} [options.emissionRate=0] - Particles per second (0 for burst).
         * @param {number} [options.duration=0] - Duration of continuous emission in seconds (0 for infinite or burst).
         * @param {number} [layer=50] - Drawing layer for particles.
         * @returns {object} The particle emitter object.
         */
        createParticleEmitter(options) {
            const defaults = {
                x: 0, y: 0, color: '#ffffff', count: 10, speed: 100,
                lifetime: 1, size: 5, spread: Math.PI * 2, emissionRate: 0, duration: 0, layer: 50
            };
            const opts = { ...defaults, ...options };

            const particles = [];
            let emissionTimer = 0;
            let activeDuration = 0;
            let isEmitting = true;

            const emitter = {
                x: opts.x, y: opts.y,
                color: opts.color,
                size: opts.size,
                emissionRate: opts.emissionRate,
                duration: opts.duration,
                isPlaying: true, // Controls if the emitter is active
                draw: (graphics) => {
                    graphics.save();
                    particles.forEach(p => {
                        const alpha = p.lifetime / p.maxLifetime; // Fade out
                        graphics.setGlobalAlpha(alpha);
                        graphics.setFill(p.color);
                        graphics.beginPath();
                        graphics.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2); // Shrink and fade
                        graphics.fill();
                    });
                    graphics.restore();
                },
                update: (deltaTime) => {
                    if (!emitter.isPlaying) return;

                    // Update existing particles
                    for (let i = particles.length - 1; i >= 0; i--) {
                        const p = particles[i];
                        p.x += p.vx * deltaTime;
                        p.y += p.vy * deltaTime;
                        p.lifetime -= deltaTime;

                        if (p.lifetime <= 0) {
                            particles.splice(i, 1); // Remove dead particles
                        }
                    }

                    // Emit new particles if continuous or burst
                    if (opts.emissionRate > 0) { // Continuous emission
                        if (opts.duration === 0 || activeDuration < opts.duration) {
                            emissionTimer += deltaTime;
                            while (emissionTimer >= (1 / opts.emissionRate)) {
                                emitter._emitParticle();
                                emissionTimer -= (1 / opts.emissionRate);
                            }
                            activeDuration += deltaTime;
                        } else {
                            isEmitting = false; // Stop after duration
                        }
                    } else if (isEmitting && particles.length === 0) { // Burst emission (only once if not continuous)
                        for (let i = 0; i < opts.count; i++) {
                            emitter._emitParticle();
                        }
                        isEmitting = false; // Burst only once
                    }
                },
                _emitParticle: () => {
                    const angle = Math.random() * opts.spread - (opts.spread / 2); // Random angle within spread
                    const speed = Math.random() * opts.speed;
                    const vx = speed * Math.cos(angle);
                    const vy = speed * Math.sin(angle);

                    particles.push({
                        x: emitter.x,
                        y: emitter.y,
                        vx: vx,
                        vy: vy,
                        color: emitter.color,
                        size: emitter.size,
                        lifetime: opts.lifetime,
                        maxLifetime: opts.lifetime // Store for alpha calculation
                    });
                },
                play: () => { emitter.isPlaying = true; isEmitting = true; activeDuration = 0; },
                stop: () => { emitter.isPlaying = false; isEmitting = false; },
                burst: (count = opts.count) => { // Trigger a manual burst
                    for (let i = 0; i < count; i++) {
                        emitter._emitParticle();
                    }
                },
                // Method to clear all particles (useful for resetting)
                clearParticles: () => {
                    particles.length = 0;
                }
            };

            this.addObject(emitter, opts.layer);
            return emitter;
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
         * Loads an .elecplayer file (ZIP archive containing HTML, JS, CSS) and displays its content.
         * @param {File} file - The .elecplayer file to load.
         * @param {string} outputElementId - The ID of the HTML element where the loaded content will be displayed.
         */
        async loadElecPlayerFile(file, outputElementId) {
            const outputElement = document.getElementById(outputElementId);
            if (!outputElement) {
                console.error(`ElecPlayer: Output element with ID '${outputElementId}' not found.`);
                return;
            }

            outputElement.innerHTML = '<p class="text-center text-gray-400 mt-4">Loading ElecPlayer file...</p>';

            try {
                // Conceptual call to WebAssembly for decoding/parsing
                await this.decodeWithWASM(file.name, 'ElecPlayer File'); // Await the conceptual WASM decoding

                const zip = new JSZip();
                const contents = await zip.loadAsync(file);

                let htmlContent = '';
                let jsContent = '';
                let cssContent = '';

                // Read files from the zip
                for (const filename in contents.files) {
                    if (filename.endsWith('.html')) {
                        htmlContent = await contents.files[filename].async('text');
                    } else if (filename.endsWith('.js') && filename !== 'electric.js' && filename !== 'PowerGame-0.1.js') { // Exclude bundled libraries
                        jsContent = await contents.files[filename].async('text');
                    } else if (filename.endsWith('.css')) {
                        cssContent = await contents.files[filename].async('text');
                    }
                }

                if (!htmlContent) {
                    outputElement.innerHTML = '<p class="text-center text-red-400 mt-4">Error: No HTML file found in .elecplayer archive.</p>';
                    return;
                }

                // Create an iframe to sandbox the loaded content
                const iframe = document.createElement('iframe');
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.border = 'none';
                iframe.sandbox = 'allow-scripts allow-same-origin'; // Restrict iframe capabilities

                outputElement.innerHTML = ''; // Clear loading message
                outputElement.appendChild(iframe);

                iframe.onload = () => {
                    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                    iframeDoc.open();
                    iframeDoc.write(htmlContent); // Write HTML
                    iframeDoc.close();

                    // Inject CSS
                    if (cssContent) {
                        const style = iframeDoc.createElement('style');
                        style.textContent = cssContent;
                        iframeDoc.head.appendChild(style);
                    }

                    // Inject bundled Electric.js first if it exists
                    if (contents.files['electric.js']) {
                        contents.files['electric.js'].async('text').then(electricJsCode => {
                            const electricScriptInIframe = iframeDoc.createElement('script');
                            electricScriptInIframe.textContent = electricJsCode;
                            iframeDoc.head.appendChild(electricScriptInIframe);
                            console.log("Bundled electric.js injected into iframe.");

                            // After electric.js, check for PowerGame-0.1.js
                            if (contents.files['PowerGame-0.1.js']) {
                                contents.files['PowerGame-0.1.js'].async('text').then(powerGameCode => {
                                    const powerGameScriptInIframe = iframeDoc.createElement('script');
                                    powerGameScriptInIframe.textContent = powerGameCode;
                                    iframeDoc.head.appendChild(powerGameScriptInIframe);
                                    console.log("Bundled PowerGame-0.1.js injected into iframe.");

                                    // Finally, inject custom JS content after all libraries
                                    if (jsContent) {
                                        const script = iframeDoc.createElement('script');
                                        script.textContent = jsContent;
                                        iframeDoc.body.appendChild(script);
                                    }
                                }).catch(e => console.error("Error loading bundled PowerGame-0.1.js:", e));
                            } else {
                                console.warn("No bundled PowerGame-0.1.js found in archive. The loaded app might not function correctly.");
                                // If PowerGame-0.1.js is not bundled, still inject main jsContent
                                if (jsContent) {
                                    const script = iframeDoc.createElement('script');
                                    script.textContent = jsContent;
                                    iframeDoc.body.appendChild(script);
                                }
                            }
                        }).catch(e => console.error("Error loading bundled electric.js:", e));
                    } else {
                        console.warn("No bundled electric.js found in archive. The loaded app might not function correctly.");
                        // If no electric.js, still inject main jsContent
                        if (jsContent) {
                            const script = iframeDoc.createElement('script');
                            script.textContent = jsContent;
                            iframeDoc.body.appendChild(script);
                        }
                    }
                };

                console.log("ElecPlayer file content prepared for iframe.");

            } catch (error) {
                console.error("Error loading ElecPlayer file:", error);
                outputElement.innerHTML = `<p class="text-center text-red-400 mt-4">Error loading ElecPlayer file: ${error.message}</p>`;
            }
        }

        /**
         * Creates an .elecplayer file (ZIP archive) from provided HTML, JS, and CSS content.
         * This method no longer includes PowerGameTest.js specifically.
         * @param {string} htmlContent - The HTML content for the main file.
         * @param {string} jsContent - The JavaScript content for the main script.
         * @param {string} cssContent - The CSS content for styling.
         * @param {string} filename - The desired filename for the .elecplayer file (e.g., 'myGame.elecplayer').
         */
        async createElecPlayerFile(htmlContent, jsContent, cssContent, filename) {
            console.log("Creating ElecPlayer file:", filename);
            const zip = new JSZip();

            // Add core files
            zip.file("index.html", htmlContent);
            zip.file("script.js", jsContent); // This is the user's custom code
            zip.file("style.css", cssContent);

            // Fetch the content of the currently loaded Electric.js library itself
            const currentElectricScript = document.getElementById('electric-js-prototype');
            if (currentElectricScript && currentElectricScript.src) {
                try {
                    const response = await fetch(currentElectricScript.src);
                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                    const electricJsCode = await response.text();
                    zip.file("electric.js", electricJsCode); // Bundle Electric.js itself
                    console.log("Electric.js bundled into .elecplayer file.");
                } catch (error) {
                    console.error("Failed to fetch Electric.js for bundling:", error);
                    // Continue without bundling if fetch fails, but log the error
                }
            } else {
                console.warn("Could not find Electric.js script element with ID 'electric-js-prototype' or its src. It will not be bundled.");
            }

            // --- NEW: Bundle PowerGame-0.1.js ---
            const powerGameScript = document.querySelector('script[src="PowerGame-0.1.js"]'); // Find by src
            if (powerGameScript && powerGameScript.src) {
                try {
                    const response = await fetch(powerGameScript.src);
                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                    const powerGameCode = await response.text();
                    zip.file("PowerGame-0.1.js", powerGameCode); // Bundle PowerGame-0.1.js
                    console.log("PowerGame-0.1.js bundled into .elecplayer file.");
                } catch (error) {
                    console.error("Failed to fetch PowerGame-0.1.js for bundling:", error);
                }
            } else {
                console.warn("Could not find PowerGame-0.1.js script element. It will not be bundled.");
            }
            // --- END NEW ---

            // Generate the ZIP file
            const content = await zip.generateAsync({ type: "blob" });

            // Save the file
            saveAs(content, filename);
            console.log(`ElecPlayer file '${filename}' generated and saved.`);
        }

        /**
         * Conceptual method to demonstrate WebAssembly decoding.
         * In a real application, this would involve loading a WASM module
         * and calling its decoding functions.
         * @param {string} dataIdentifier - A name or identifier for the data being decoded.
         * @param {string} dataType - The type of data being decoded (e.g., 'video', 'audio', 'custom format').
         */
        async decodeWithWASM(dataIdentifier, dataType) {
            console.log(`[WASM Conceptual]: Attempting to decode '${dataIdentifier}' (${dataType}) using WebAssembly...`);
            // In a real scenario, you would:
            // 1. Fetch and compile your .wasm module:
            //    const response = await fetch('your_decoder.wasm');
            //    const bytes = await response.arrayBuffer();
            //    const { instance } = await WebAssembly.instantiate(bytes, importObject);
            //
            // 2. Call a function from the WASM module to decode the data:
            //    const decodedData = instance.exports.decode(data);
            //
            // 3. Handle the decoded output.
            //
            // For this demonstration, we just simulate the process.
            await new Promise(resolve => setTimeout(resolve, 500)); // Simulate decoding time
            console.log(`[WASM Conceptual]: Successfully simulated WebAssembly decoding for '${dataIdentifier}'.`);
        }

        /**
         * Creates a scene based on a simplified configuration object.
         * This method demonstrates a higher-level API for content creation.
         * @param {object} sceneConfig - Configuration object for the scene.
         * @param {string} [sceneConfig.background] - Background color or type (e.g., 'dojo').
         * @param {Array<object>} [sceneConfig.elements] - Array of element configurations.
         * @returns {object} An object representing the created scene, containing references to its elements.
         */
        createScene(sceneConfig) {
            console.log("Creating scene with config:", sceneConfig);
            const sceneElements = {};
            const canvasWidth = this.canvas.width / (window.devicePixelRatio || 1);
            const canvasHeight = this.canvas.height / (window.devicePixelRatio || 1);

            if (sceneConfig.background) {
                if (sceneConfig.background === 'dojo') {
                    sceneElements.background = this.createDojoBackground(canvasWidth, canvasHeight);
                } else {
                    this.options.backgroundColor = sceneConfig.background; // Set background color
                }
            }

            if (sceneConfig.elements && Array.isArray(sceneConfig.elements)) {
                sceneConfig.elements.forEach(elementConfig => {
                    switch (elementConfig.type) {
                        case 'rectangle':
                            sceneElements[elementConfig.id || 'rect'] = this.createRectangle(
                                elementConfig.x, elementConfig.y, elementConfig.width, elementConfig.height,
                                elementConfig.color, elementConfig.layer
                            );
                            break;
                        case 'ninjaCharacter':
                            sceneElements[elementConfig.id || 'ninja'] = this.createNinjaCharacter(
                                elementConfig.x, elementConfig.y, elementConfig.scale,
                                elementConfig.bodyColor, elementConfig.accentColor, elementConfig.layer
                            );
                            break;
                        case 'ninjaStar':
                            sceneElements[elementConfig.id || 'star'] = this.createNinjaStar(
                                elementConfig.x, elementConfig.y, elementConfig.size,
                                elementConfig.color, elementConfig.layer
                            );
                            break;
                        case 'particleEmitter':
                            sceneElements[elementConfig.id || 'emitter'] = this.createParticleEmitter(elementConfig);
                            break;
                        // Add more element types as needed
                        default:
                            console.warn(`Unknown element type in scene config: ${elementConfig.type}`);
                    }
                });
            }

            console.log("Scene created with elements:", sceneElements);
            return sceneElements;
        }


        /**
         * Cleans up the Electric.js instance.
         */
        destroy() {
            this.stopAnimation();
            window.removeEventListener('resize', () => this.resizeCanvas());
            this.canvas.removeEventListener('click', this._handleCanvasClick); // Remove click listener
            this.animatedObjects = [];
            this.renderableObjects = [];
            this.canvasButtons = []; // Clear internal buttons
            // Pause and clear all managed audio elements
            this.audioChannels.forEach(channelAudios => {
                channelAudios.forEach(audio => {
                    audio.pause();
                    audio.src = ''; // Clear source to release resources
                    audio.load(); // Reload to apply source clear
                });
            });
            this.audioChannels.clear(); // Clear the map
            // Disconnect from network if connected
            if (this.network.isConnected) {
                this.network.disconnectFromServer();
            }
            console.log('Electric.js instance destroyed.');
        }
    }

    // Expose Electric globally for easy use in HTML
    window.Electric = Electric;
    console.log("Electric.js script finished loading and exposed Electric globally."); // Diagnostic log

} catch (e) {
    console.error("Electric.js: An error occurred during script execution:", e);
}
