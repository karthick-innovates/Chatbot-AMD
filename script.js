const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
const chatbotPopup = document.getElementById('chatbot-popup');
const closeBtn = document.getElementById('close-btn');

chatbotToggleBtn.addEventListener('click', () => {
    chatbotPopup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    chatbotPopup.style.display = 'none';
});

sendBtn.addEventListener('click', async () => {
    const userInputValue = userInput.value.trim();
    if (userInputValue!== '') {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ input: userInputValue }),
        });
        const data = await response.json();
        const chatResponse = data.response;
        chatBox.innerHTML += `
            <p class="user-message">${userInputValue}</p>
            <p class="chatbot-message">${chatResponse}</p>
        `;
        userInput.value = '';
    }
});
