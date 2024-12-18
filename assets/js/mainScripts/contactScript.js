function loadContactMainContent() {
  clearMainContentClasses();
  mainContent.classList.add("contact-content");
  mainContent.innerHTML = "";

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Contact me";
  const contactForm = document.createElement("form");
  contactForm.className = "contact-form";
  const nameField = document.createElement("div");
  nameField.className = "form-field";
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.className = "form-input";
  nameInput.placeholder = "Your Name";
  const nameError = document.createElement("span");
  nameError.className = "error-message";
  const emailField = document.createElement("div");
  emailField.className = "form-field";
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email";
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.className = "form-input";
  emailInput.placeholder = "email@example.com";
  const emailError = document.createElement("span");
  emailError.className = "error-message";
  const messageField = document.createElement("div");
  messageField.className = "form-field message-field";
  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Message";
  const messageInput = document.createElement("input");
  messageInput.type = "text";
  messageInput.className = "form-input";
  messageInput.placeholder = "Hello, my name is . . .";
  const messageError = document.createElement("span");
  messageError.className = "error-message";

  nameField.appendChild(nameLabel);
  nameField.appendChild(nameInput);
  nameField.appendChild(nameError);
  emailField.appendChild(emailLabel);
  emailField.appendChild(emailInput);
  emailField.appendChild(emailError);
  messageField.appendChild(messageLabel);
  messageField.appendChild(messageInput);
  messageField.appendChild(messageError);

  const sendButton = document.createElement("button");
  sendButton.type = "submit";
  sendButton.textContent = "Send message";
  sendButton.className = "send-button";

  nameInput.addEventListener("input", () => {
    if (nameInput.value.length < 3) {
      nameInput.style.borderColor = "red";
      nameError.textContent = "The name must be at least 3 characters long.";
    } else if (nameInput.value.length > 20) {
      nameInput.style.borderColor = "red";
      nameError.textContent = "The name must not exceed 20 characters.";
    } else {
      nameInput.style.borderColor = "white";
      nameError.textContent = "";
    }
  });

  emailInput.addEventListener("input", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailInput.style.borderColor = "red";
      emailError.textContent = "Please enter a valid email address.";
    } else {
      emailInput.style.borderColor = "white";
      emailError.textContent = "";
    }
  });

  messageInput.addEventListener("input", () => {
    if (messageInput.value.trim() === "") {
      messageInput.style.borderColor = "red";
      messageError.textContent = "The message cannot be empty.";
    } else if (messageInput.value.length > 100) {
      messageInput.style.borderColor = "red";
      messageError.textContent = "The message must not exceed 100 characters.";
    } else {
      messageInput.style.borderColor = "white";
      messageError.textContent = "";
    }
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;

    if (nameInput.value.length < 3) {
      nameError.textContent = "The name must be at least 3 characters long.";
      nameInput.style.borderColor = "red";
      isValid = false;
    } else if (nameInput.value.length > 20) {
      nameError.textContent = "The name must not exceed 20 characters.";
      nameInput.style.borderColor = "red";
      isValid = false;
    } else {
      nameError.textContent = "";
      nameInput.style.borderColor = "white";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email address.";
      emailInput.style.borderColor = "red";
      isValid = false;
    } else {
      emailError.textContent = "";
      emailInput.style.borderColor = "white";
    }

    if (messageInput.value.trim() === "") {
      messageError.textContent = "The message cannot be empty.";
      messageInput.style.borderColor = "red";
      isValid = false;
    } else if (messageInput.value.length > 100) {
      messageError.textContent = "The message must not exceed 100 characters.";
      messageInput.style.borderColor = "red";
      isValid = false;
    } else {
      messageError.textContent = "";
      messageInput.style.borderColor = "white";
    }

    if (isValid) {
      messages.push({
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
      });

      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";

      nameInput.style.borderColor = "";
      emailInput.style.borderColor = "";
      messageInput.style.borderColor = "";
    }
  });

  contactForm.appendChild(nameField);
  contactForm.appendChild(emailField);
  contactForm.appendChild(messageField);
  contactForm.appendChild(sendButton);
  mainContent.appendChild(contactTitle);
  mainContent.appendChild(contactForm);
}
