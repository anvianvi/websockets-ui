import { httpServer } from "./src/http_server/index.js";
import { runWebSocketServer } from "./src/websocket_server/index.js";

const HTTP_PORT = Number(process.env.HTTP_PORT ?? 8181);
const WEBSOCKET_PORT = Number(process.env.WEBSOCKET_PORT ?? 3000);

httpServer.listen(HTTP_PORT);
runWebSocketServer(WEBSOCKET_PORT);

console.log(`Static HTTP server is running on port ${HTTP_PORT}!`);
console.log(`WebSocket server is running on port ${WEBSOCKET_PORT}!`);

