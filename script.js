function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    displayMessage('You', userInput, '#244EB1');

    var chatbotResponse = generateChatbotResponse(userInput);
    displayMessage('Chatbot', chatbotResponse, '#B656E2');

    document.getElementById('user-input').value = '';
}

function generateChatbotResponse(userInput) {
    userInput = userInput.toLowerCase();

    // Check for keywords in user input and generate appropriate responses
    if (userInput.includes('hello') || userInput.includes('hi')) {
        return 'Hello! How can I help you with SciAstra?';
    } else if (userInput.includes('product') || userInput.includes('service')) {
        return 'SciAstra offers cutting-edge scientific solutions. Can you specify your query?';
    } else if (userInput.includes('research') || userInput.includes('innovation')) {
        return 'SciAstra is dedicated to advancing research and fostering innovation in the scientific community.';
    } else if (userInput.includes('team') || userInput.includes('experts')) {
        return 'Our team at SciAstra consists of experienced scientists and researchers.';
    } else if (userInput.includes('partnerships') || userInput.includes('collaborations')) {
        return 'SciAstra collaborates with various organizations and institutions to drive scientific progress.';
    } else if (userInput.includes('contact') || userInput.includes('reach') || userInput.includes('address') || userInput.includes('email')) {
        return 'You can contact SciAstra at:<br>Address: SciAstra Education Pvt Ltd, Bhubaneswar, Odisha<br>Email: support@sciastra.com';
    } else {
        return 'I am sorry, I did not understand that. Feel free to ask another question!';
    }
}

function displayMessage(sender, message, color) {
    var chatMessages = document.getElementById('chat-messages');
    var messageDiv = document.createElement('div');

    var nameColor = color; // Set color for the user and chatbot names
    var textColor = '#FFFFFF'; // Set color for the message text
    messageDiv.innerHTML = `<span style="color: ${nameColor};">${sender}:</span> <span style="color: ${textColor};">${message}</span>`;
    chatMessages.appendChild(messageDiv);

    // Adding a horizontal line after each message
    var hrElement = document.createElement('hr');
    hrElement.style.borderTop = '0.2px solid white'; // Adjust the color as needed
    hrElement.style.opacity = '0.5'; // Adjust the opacity for a lighter effect
    hrElement.style.margin = '2px 0';
    chatMessages.appendChild(hrElement);

    // Scroll to the bottom of the chat container
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function openChat() {
    var chatContainer = document.getElementById('chat-container');
    var chatButton = document.getElementById('chat-button');

    chatContainer.style.display = 'block';
    chatButton.style.display = 'none';
}

function closeChat() {
    var chatContainer = document.getElementById('chat-container');
    var chatButton = document.getElementById('chat-button');

    chatContainer.style.display = 'none';
    chatButton.style.display = 'block';
}

function toggleChat() {
    var chatContainer = document.getElementById('chat-container');
    var chatButton = document.getElementById('chat-button');

    if (chatContainer.style.display === 'block') {
        closeChat();
    } else {
        openChat();
    }
}

document.addEventListener('click', function (event) {
    var chatContainer = document.getElementById('chat-container');
    var chatButton = document.getElementById('chat-button');
    var closeChatButton = document.getElementById('close-button');

    // Close the chat if the user clicks outside of the chat container, the chat button, or the close button
    if (!(event.target === chatContainer || chatContainer.contains(event.target)) &&
        event.target !== chatButton && event.target !== closeChatButton) {
        closeChat();
    }
});
