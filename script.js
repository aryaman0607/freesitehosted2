$('.chat-button').on('click', function () {
    $('.chat-button').css({ "display": "none" });
    $('.chat-box').css({ "visibility": "visible" });
    console.log("expanded UI");//remove
        // Replace 'parent' with the actual reference to the parent window
        window.parent.postMessage({ type: 'chatbotExpand' }, '*');
});

$('.chat-box .chat-box-header p').on('click', function () {
    $('.chat-button').css({ "display": "block" });
    $('.chat-box').css({ "visibility": "hidden" });
     console.log("expanded UI");//remove
        // Replace 'parent' with the actual reference to the parent window
        window.parent.postMessage({ type: 'chatbotExpand' }, '*');
    //console.log("expanded UI");//remove
    // Replace 'parent' with the actual reference to the parent window
    //window.parent.postMessage({ type: 'chatbotExpand' }, '*');
       
       
});

$("#addExtra").on("click", function () {
    $(".modal").toggleClass("show-modal");
});

$(".modal-close-button").on("click", function () {
    $(".modal").toggleClass("show-modal");
});

// Function to handle user input and send messages
function sendMessage() {
    // Get the user's input message
    var userMessage = $('.chat-box-footer input').val();

    // Clear the input field
    $('.chat-box-footer input').val('');

    // Display the user's message in the chat box
    displayMessage(userMessage, 'user');

    // Simulate a delay for the bot to respond (you can customize this)
    setTimeout(function () {
        // Generate an automatic response from the bot
        var botMessage = "Lorem ipsum slur color dolomet";

        // Display the bot's message in the chat box
        displayMessage(botMessage, 'bot');
    }, 500); // Adjust the delay as needed
}

// Function to display messages in the chat box
function displayMessage(message, sender) {
    var messageContainer = $('<div class="chat-box-body-' + sender + '"></div>');
    var messageContent = $('<p></p>').text(message);
    var messageTimestamp = $('<span></span>').text(getCurrentTime());

    // Append message content and timestamp to the container
    messageContainer.append(messageContent).append(messageTimestamp);

    // Append the container to the chat box body
    $('.chat-box-body').append(messageContainer);

    // Scroll to the bottom of the chat box to show the latest message
    $('.chat-box-body').scrollTop($('.chat-box-body')[0].scrollHeight);
}

// Function to get the current time in HH:mm format
function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    return hours + ':' + (minutes < 10 ? '0' : '') + minutes;
}

// Event handler for the send button
$('.chat-box-footer .send').on('click', function () {
    sendMessage();
});

// Event handler for pressing Enter key in the input field
$('.chat-box-footer input').keypress(function (e) {
    if (e.which === 13) {
        // 13 is the key code for Enter
        sendMessage();
    }
});


// Function to handle user input and send messages
function sendMessage() {
    // Get the user's input message
    var userMessage = $('.chat-box-footer input').val();

    // Clear the input field
    $('.chat-box-footer input').val('');

    // Display the user's message in the chat box on the right side
    displayMessage(userMessage, 'user', 'right');
    
    // Simulate a delay for the bot to respond (you can customize this)
    setTimeout(function () {
        // Generate an automatic response from the bot
        var botMessage = "Lorem ipsum slur color dolomite";

        // Display the bot's message in the chat box on the left side
        displayMessage(botMessage, 'bot', 'left');
    }, 500); // Adjust the delay as needed
}

// Function to display messages in the chat box
function displayMessage(message, sender, position) {
    var messageContainer = $('<div class="chat-box-body-' + sender + '-' + position + '"></div>');
    var messageContent = $('<p></p>').text(message);
    var messageTimestamp = $('<span></span>').text(getCurrentTime());

    // Append message content and timestamp to the container
    messageContainer.append(messageContent).append(messageTimestamp);

    // Append the container to the chat box body
    $('.chat-box-body').append(messageContainer);

    // Scroll to the bottom of the chat box to show the latest message
    $('.chat-box-body').scrollTop($('.chat-box-body')[0].scrollHeight);
}

// Inside your chatbot iframe JavaScript code
// Emit an event when the chatbot expands
