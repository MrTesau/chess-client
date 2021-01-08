export const ENDPOINT =
  window.location.hostname === "localhost"
    ? "http://localhost:5000/"
    : "https://fantasy-chess-server.herokuapp.com/";

// cors issues, stackOverflow solution
export const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};
