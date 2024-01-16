import http from "http";
import express from "express";
import ws from "ws";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(cors());
const server = http.createServer(app);
const wss = new ws.Server({ server });

wss.on("connection", () => {
  console.log("websocket connection established");
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
