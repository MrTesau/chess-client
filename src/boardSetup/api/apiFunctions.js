export const ENDPOINT = "https://fantasy-chess-server.herokuapp.com/";
// "http://localhost:5000/";
// cors issues, budget stackOverflow solution
export const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};
