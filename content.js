// content.js
console.log("Electric Player Loader Content Script started.");

// Listener for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "loadElecPlayerFile") {
        console.log("Received ElecPlayer file content from popup.");

        const { html, js, css, filename } = request;

        const injectContent = async () => {
            try {
                // The main HTML content of the game
                const htmlBlob = new Blob([html], { type: 'text/html' });
                const htmlUrl = URL.createObjectURL(htmlBlob);

                const iframe = document.createElement('iframe');
                iframe.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; border: none; z-index: 9999;';
                iframe.src = htmlUrl;
                document.body.appendChild(iframe);
                console.log("Iframe created and appended to body.");

                iframe.onload = async () => {
                    URL.revokeObjectURL(htmlUrl);
                    const iframeDoc = iframe.contentWindow.document;
                    
                    // Function to inject a script and wait for it to load
                    const injectScript = (scriptSrc) => {
                        return new Promise((resolve, reject) => {
                            const script = iframeDoc.createElement('script');
                            script.src = chrome.runtime.getURL(scriptSrc);
                            script.onload = () => resolve();
                            script.onerror = (e) => reject(new Error(`Failed to load script: ${scriptSrc}`));
                            iframeDoc.head.appendChild(script);
                        });
                    };

                    try {
                        // Inject scripts in the correct order to avoid race conditions
                        await injectScript("Ninja-0.1.js");
                        console.log("Ninja-0.1.js loaded successfully.");
                        
                        await injectScript("PowerGame-0.1.js");
                        console.log("PowerGame-0.1.js loaded successfully.");

                        // Inject CSS if it exists
                        if (css) {
                            const style = iframeDoc.createElement('style');
                            style.textContent = css;
                            iframeDoc.head.appendChild(style);
                            console.log("CSS loaded successfully.");
                        }
                        
                        // Inject the main game script if it exists
                        if (js) {
                            const script = iframeDoc.createElement('script');
                            script.textContent = js;
                            iframeDoc.body.appendChild(script);
                            console.log("Main game script loaded successfully.");
                        }

                        console.log(`"${filename}" loaded into iframe successfully.`);
                        sendResponse({ success: true });
                    } catch (error) {
                        console.error("Error during sequential script injection:", error);
                        sendResponse({ success: false, error: "Error during file injection." });
                    }
                };

                iframe.onerror = (e) => {
                    URL.revokeObjectURL(htmlUrl);
                    console.error("Iframe loading error:", e);
                    sendResponse({ success: false, error: "Failed to load iframe content." });
                };

            } catch (error) {
                console.error("Error during iframe script injection:", error);
                sendResponse({ success: false, error: "Error during file injection." });
            }
        };

        // Run the injection logic
        injectContent();

        // Must return true to indicate an asynchronous response
        return true;
    }
});
