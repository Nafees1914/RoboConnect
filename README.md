# RoboConnect (LinkedIn Auto Connect)
The extension uses content scripts to interact with LinkedIn's page. It finds all "Connect" buttons on the page, waits for a random amount of time (between 5-10 seconds), and then clicks them. It automatically skips over the "Message" buttons. The connection requests are sent without the user needing to manually click each button.


# LinkedIn Auto Connect Chrome Extension

## Description
This Chrome extension allows you to automatically send connection requests to people in LinkedIn search results. It works on the first page of search results, and simulates human-like behavior by waiting for a random amount of time (between 5-10 seconds) before sending a request.

### Features:
- Automatically sends connection requests to people who have a "Connect" button.
- Skips profiles with a "Message" button.
- Simple UI to start the process.

## Installation

### 1. Clone the repository

- Open terminal/bash and paste below command
1. git clone https://github.com/Nafees1914/RoboConnect.git
2. cd RoboConnect

### 2. Load the extension in Chrome
Open Chrome and go to **chrome://extensions/.**
Enable "Developer mode" in the top right.
Click "Load unpacked" and select the folder where you cloned the repository.

### 3. Run the Extension
Open LinkedIn and perform a search (e.g., "CEO in Bangalore").
Click on the extension icon in the Chrome toolbar.
Click "Start Connecting" in the popup to begin sending connection requests.

### 4. Requirements
- Chrome version 90 or higher.
- The extension works only on LinkedIn's search page.

### File Descriptions
**1. manifest.json**<br />
Defines the metadata and permissions for the Chrome extension, specifying what scripts are injected and what permissions are needed for interacting with LinkedIn.

**2. popup.html**<br />
Contains the UI for the extension, including a button to start the connection requests and a status message.

**3. popup.js**<br />
Handles the user interaction in the popup and sends a message to content.js to start the connection request process.

**4. content.js**<br />
Interacts with the LinkedIn page to find "Connect" buttons and send connection requests with random delays, while skipping "Message" buttons.

**5. background.js**<br />
(Optional) Handles background tasks if needed. Not used in this basic version but can be extended for more complex operations.

**6. style.css**<br />
Contains the CSS for styling the extension's popup UI, ensuring it is visually appealing and easy to use.
