//chati

if (["/", "/menu"].includes(window.location.href)) {
  const socket = io();
  const messageContainer = document.getElementById("message-container");
  const messageForm = document.getElementById("send-container");
  const messageImput = document.getElementById("message-input");
  const emri = document.getElementById("emri");
  const personWrites = document.getElementById("personwrite");

  console.log("messageForm", messageForm);

  socket.on("send-write", (data) => {
    personWrites.innerText = "";
    personWrites.innerHTML = `<i>${data}</i>`;
  });
  messageImput.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      const message = messageImput.value;
      appendMessage(message, true);
      socket.emit("send-chat-message", message);
      messageImput.value = "";
    } else {
      e.preventDefault();
      socket.emit("send-write", `${emri.value} osht tu shkrujt`);
    }
  });
  messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = messageImput.value;
    appendMessage(message, true);
    socket.emit("send-chat-message", message);
    messageImput.value = "";
  });
  function appendMessage(message, format = false) {
    const messageElement = document.createElement("div");
    messageElement.innerText = message;
    if (format) {
      messageElement.style.textAlign = "right";
      messageElement.style.color = "blue";
    }

    messageContainer.append(messageElement);
    messageContainer.scrollTo(0, messageContainer.scrollHeight + 10);
  }
}
