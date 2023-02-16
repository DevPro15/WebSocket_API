const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");

const wss = new WebSocket.Server({ server: server });

wss.on("connection", function connection(ws) {
  // ws.on("error", console.error);
  console.log("new Client connected");
  ws.send("Welcome New Client");

  ws.on("message", function message(data) {
    console.log("received: %s", data);
    ws.send('got Your message its'+ message)
  });

});

app.get("/", (req, res) => res.send("app is working..."));

server.listen(3000, () => console.log(`lisening on port: 3000`));
