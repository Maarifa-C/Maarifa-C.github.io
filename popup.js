chrome.runtime.onMessage.addListener((request) => {
    if (request.message === "send_prompt_button_clicked") {
        document.getElementById('status').innerText = 'Send button clicked!';
    }
});