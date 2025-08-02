// background.js
console.log("Electric Player Plugin [Background]: Service worker loaded.");

// Listen for messages from the popup (if any, e.g., for file loading)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "loadElecPlayerFile") {
        console.log("Electric Player Plugin [Background]: Received request to load ElecPlayer file from popup.");
        // Forward the message to the content script of the active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, request, (response) => {
                    sendResponse(response);
                });
            } else {
                sendResponse({ success: false, error: "No active tab found." });
            }
        });
        return true; // Indicate that sendResponse will be called asynchronously
    }
    // If you had other message types, handle them here
});

// Note: Direct injection of Ninja-0.1.js and PowerGame-0.1.js via executeScript
// has been moved to content.js for more reliable global variable availability.
// This background script now primarily handles messages and other background tasks.
