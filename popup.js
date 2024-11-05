let isConnecting = false;
const startButton = document.getElementById("start");
const counterElement = document.getElementById("counter");

startButton.addEventListener("click", () => {
  isConnecting = !isConnecting;
  startButton.textContent = isConnecting ? "STOP CONNECTING" : "START CONNECTING";
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: isConnecting ? "start" : "stop" });
  });
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "updateCounter") {
    counterElement.textContent = parseInt(counterElement.textContent) + 1;
  }
});
