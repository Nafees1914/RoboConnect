let stopFlag = false;

async function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function waitRandomTime(min, max) {
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`Waiting for ${delay} milliseconds`);
  return sleep(delay);
}

function getConnectButtons() {
  const buttons = document.querySelectorAll("button");
  return Array.from(buttons).filter((button) => button && button.innerText.trim() === "Connect");
}

async function clickConnectButton(button) {
  if (button.innerText.trim() === "Connect") {
    button.scrollIntoView();
    await sleep(500);
    button.click();
    chrome.runtime.sendMessage({ action: "updateCounter" });
    console.log("Clicked 'Connect' button and updated counter");
  } else {
    console.log("Skipped a button that was not 'Connect'.");
  }
}

async function startSendingRequests() {
  let connectButtons;
  while (!stopFlag) {
    connectButtons = getConnectButtons();
    if (connectButtons.length === 0) break;

    for (let button of connectButtons) {
      if (stopFlag) return;
      await waitRandomTime(5000, 10000);
      await clickConnectButton(button);
    }
  }
  console.log("All connect requests sent on the current page.");
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "start") {
    stopFlag = false;
    startSendingRequests();
  } else if (message.action === "stop") {
    stopFlag = true;
  }
});
