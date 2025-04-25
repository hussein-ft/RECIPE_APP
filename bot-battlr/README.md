# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# Bot Battlr

Bot Battlr is a React application that allows users to browse through a list of robots, view a robot's details, and enlist them into their own bot army.

## Table of Contents
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Core Deliverables](#core-deliverables)
- [Advanced Deliverables](#advanced-deliverables)

## Features

- Browse and view profiles of all available bots
- Add bots to your personal army by clicking on them
- Release bots from your army by clicking on them
- Permanently discharge bots from service by clicking the red "x" button

## Setup

To get started with this project:

1. Clone this repository to your local machine
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```
4. Start the JSON server (for backend data):
   ```
   json-server --watch db.json --port 8001
   ```
5. In a new terminal, start the React application:
   ```
   npm start
   ```
6. Open your browser and visit [http://localhost:3000](http://localhost:3000)

## Usage

1. **Browse Bots**: View all available bots in the Bot Collection section
2. **Enlist Bot**: Click on a bot card to add it to your army
3. **Release Bot**: In Your Bot Army section, click on a bot to release it
4. **Discharge Bot**: Click the red "x" button on any bot card to permanently remove it

## Core Deliverables

- [x] See profiles of all bots rendered in BotCollection
- [x] Add an individual bot to my army by clicking on it
- [x] Release a bot from my army by clicking on it
- [x] Discharge a bot from service by clicking the red "x" button

## Advanced Deliverables (Future Enhancements)

- [ ] Display a bot's details in BotSpecs view
- [ ] Sort bots by health, damage, or armor
- [ ] Filter bots by class
- [ ] Only enlist one bot from each class

---

Created with React as part of the Bot Battlr project.