import { io, Socket } from "socket.io-client";

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  test: () => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

// please note that the types are reversed
const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:8000";
export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(URL);

// Debugging
socket.on("connect", () => {
  console.log("Connected to the server");
});

socket.on("connect_error", (error: Error) => {
  console.log("Connection Error", error);
});

socket.on("disconnect", () => {
  console.log("Disconnected from the server");
});
