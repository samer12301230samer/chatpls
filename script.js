const messages = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value;
    if (messageText) {
        const messageElement = document.createElement('div');
        messageElement.textContent = messageText;
        messages.appendChild(messageElement);
        messageInput.value = '';
        messages.scrollTop = messages.scrollHeight; // للتمرير إلى الأسفل تلقائيًا
    }
});