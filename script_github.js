// Features:
// 1) Ask the user for their name
// 2) Display time in 24-hour format
// 3) Update the time every minute in real time

//const myName = prompt("Please enter your name:", "myName") || "myName";

function getCurrentTime24h() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
}

const messageElement = document.getElementById("message");
//const timeMessage = document.createElement("p");

function updateMessage() {
    messageElement.textContent = messageElement.textContent + ` and it is ${getCurrentTime24h()}`;
}

updateMessage();              // initial display
//messageElement.after(timeMessage);
setInterval(updateMessage, 60000); // update every minute