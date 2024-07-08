import { webSocketUrl } from "../utils/baseUrl.js";

import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";

const socket = io(webSocketUrl);

export { socket };
