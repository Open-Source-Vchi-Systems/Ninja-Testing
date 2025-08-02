// popup.js
document.addEventListener('DOMContentLoaded', () => {
    const elecPlayerFileInput = document.getElementById('elecPlayerFileInput');
    const selectFileBtn = document.getElementById('selectFileBtn');
    const statusMessage = document.getElementById('statusMessage');

    // Trigger file input click when the custom button is clicked
    selectFileBtn.addEventListener('click', () => {
        elecPlayerFileInput.click();
    });

    elecPlayerFileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            statusMessage.textContent = `Loading "${file.name}"...`;
            const reader = new FileReader();

            reader.onload = async (e) => {
                const arrayBuffer = e.target.result;
                try {
                    // Use JSZip to load the .elecplayer file (which is a zip)
                    const zip = new JSZip();
                    const contents = await zip.loadAsync(arrayBuffer);

                    let htmlContent = null;
                    let jsContent = null;
                    let cssContent = null;
                    let fileFound = false;

                    // Read files from the zip
                    for (const filename in contents.files) {
                        if (filename.endsWith('.html')) {
                            htmlContent = await contents.files[filename].async('text');
                            fileFound = true;
                        } else if (filename.endsWith('.js')) {
                            jsContent = await contents.files[filename].async('text');
                        } else if (filename.endsWith('.css')) {
                            cssContent = await contents.files[filename].async('text');
                        }
                    }

                    if (!fileFound) {
                         throw new Error("No HTML file found in the .elecplayer archive.");
                    }

                    // Send the extracted content to the active tab's content script
                    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                        const activeTab = tabs[0];
                        if (activeTab) {
                            chrome.tabs.sendMessage(activeTab.id, {
                                action: "loadElecPlayerFile",
                                html: htmlContent,
                                js: jsContent,
                                css: cssContent,
                                filename: file.name
                            }, (response) => {
                                if (response && response.success) { // Check if response is not null/undefined
                                    statusMessage.textContent = `"${file.name}" loaded successfully!`;
                                } else {
                                    statusMessage.textContent = `Failed to load "${file.name}": ${response ? response.error : 'Unknown error'}`;
                                    console.error("Error loading .elecplayer file:", response ? response.error : 'No response received');
                                }
                            });
                        } else {
                            statusMessage.textContent = "No active tab found.";
                        }
                    });

                } catch (error) {
                    statusMessage.textContent = `Error processing .elecplayer file: ${error.message}`;
                    console.error("Error processing .elecplayer file:", error);
                }
            };

            reader.onerror = (error) => {
                statusMessage.textContent = `Error reading file: ${error.message}`;
                console.error("Error reading file:", error);
            };

            reader.readAsArrayBuffer(file); // Read as ArrayBuffer for JSZip
        } else {
            statusMessage.textContent = "No file selected.";
        }
    });
});
