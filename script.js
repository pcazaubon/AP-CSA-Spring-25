// script.js
const runCode = async () => {
    const code = document.getElementById('codeEditor').value;
    const outputElement = document.getElementById('output');
    outputElement.textContent = "Running...";

    try {
        // Replace 'https://your-project-name.glitch.me' with your Glitch project URL
        const response = await fetch('https://hail-amplified-bath.glitch.me', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code })
        });
        
        const result = await response.json();
        outputElement.textContent = result.output;
    } catch (error) {
        outputElement.textContent = "Error connecting to server.";
        console.error(error);
    }
};
