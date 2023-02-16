# Websocket API

This is a simple Node.js application that provides a Websocket API. The application uses the `ws` library to implement the Websocket server, and the express library to provide a simple HTTP endpoint for clients to connect to.

## Prerequisites

Before running the application, make sure you have the following installed:
1. Node.js v12 or higher
2. NPM or Yarn

## Installation

To install the dependencies for the application, run the following command:

`bash npm install`

## Configuration

The application does not require any configuration, but you may want to adjust the port number that the HTTP server listens on. This can be done by modifying the PORT constant in the index.js file.

## Usage

To start the application, run the following command:

`bash npm start`

This will start the HTTP server and the Websocket server, and you should see a message in the console indicating that the server is listening on the specified port.
To connect to the Websocket server, clients can use any Websocket client library or tool. The endpoint to connect to is ws://localhost:3000.
