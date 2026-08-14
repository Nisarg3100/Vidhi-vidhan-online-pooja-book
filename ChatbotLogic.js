// Toggle Chatbot visibility
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot-section');
    const isActive = chatbot.classList.toggle('active');
    
    // Store the state in localStorage
    localStorage.setItem('chatbotActive', isActive);
}

// Function to send a message
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    
    if (message === "") {
        return; // Don't send empty messages
    }

    // Display user message
    displayMessage(message, 'user-message');
    
    // Clear input field
    userInput.value = "";
    
    // Simulate bot response
    setTimeout(() => {
        displayMessage("Thank you for your message. We'll get back to you soon!", 'bot-message');
    }, 1000);
}

// Helper function to display messages
function displayMessage(text, messageType) {
    const chatbotBody = document.getElementById('chatbot-body');
    const messageElement = document.createElement('div');
    
    messageElement.classList.add('message', messageType);
    messageElement.textContent = text;
    
    chatbotBody.appendChild(messageElement);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

// Handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Initialize chatbot when page loads
window.onload = function() {
    // Check if chatbot was previously open
    const wasActive = localStorage.getItem('chatbotActive') === 'true';
    
    // Only open automatically if it wasn't closed by the user
    if (wasActive) {
        document.getElementById('chatbot-section').classList.add('active');
    }
    
    // Set up event listeners
    document.getElementById('send-button').addEventListener('click', sendMessage);
    document.getElementById('user-input').addEventListener('keypress', handleKeyPress);
    document.getElementById('chatbot-toggle').addEventListener('click', toggleChatbot);
};