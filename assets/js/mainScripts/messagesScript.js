// Funkcja generująca dynamiczną treść w sekcji MESSAGES
function loadMessagesMainContent() {
  clearMainContentClasses();
  mainContent.classList.add("messages-content");
  mainContent.innerHTML = "";
  const messagesList = document.createElement("ul");
  messagesList.className = "messages-list";

  if (messages.length === 0) {
    const noMessages = document.createElement("p");
    noMessages.textContent = "No messages yet.";
    mainContent.appendChild(noMessages);
    return;
  }

  messages.forEach((msg) => {
    const messageItem = document.createElement("li");
    messageItem.className = "message-item";
    const senderName = document.createElement("p");
    senderName.innerHTML = `<strong>Name:</strong> ${msg.name}`;
    const senderEmail = document.createElement("p");
    senderEmail.innerHTML = `<strong>Email:</strong> ${msg.email}`;
    const messageText = document.createElement("p");
    messageText.innerHTML = `<strong>Message:</strong> ${msg.message}`;

    messageItem.appendChild(senderName);
    messageItem.appendChild(senderEmail);
    messageItem.appendChild(messageText);
    messagesList.appendChild(messageItem);
  });

  mainContent.appendChild(messagesList);
}
