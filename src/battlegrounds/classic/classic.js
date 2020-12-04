import chessNoise from "./chessSound.wav";
import pawn1 from "./pawn.gif";
import pawn2 from "./pawn2.gif";
import rook1 from "./rook.gif";
import rook2 from "./rook2.gif";
import knight1 from "./knight.gif";
import knight2 from "./knight2.gif";
import bishop1 from "./bishop.gif";
import bishop2 from "./bishop2.gif";
import queen1 from "./queen.gif";
import queen2 from "./queen2.gif";
import king1 from "./king.gif";
import king2 from "./king2.gif";

const classicBattleground = {
  // Horde Objects
  team_1_pawn: {
    team: 1,
    name: "team_1_pawn",
    img: pawn1,
    piece: "Pawn",
    sounds: [chessNoise],
  },
  team_1_rook: {
    team: 1,
    name: "team_1_rook",
    img: rook1,
    piece: "Rook",
    sounds: [chessNoise],
  },
  team_1_knight: {
    team: 1,
    name: "team_1_knight",
    piece: "Knight",
    img: knight1,
    sounds: [chessNoise],
  },
  team_1_bishop: {
    team: 1,
    name: "team_1_bishop",
    piece: "Bishop",
    img: bishop1,
    sounds: [chessNoise],
  },
  team_1_queen: {
    team: 1,
    name: "team_1_queen",
    piece: "Queen",
    img: queen1,
    sounds: [chessNoise],
  },
  team_1_king: {
    team: 1,
    name: "team_1_king",
    piece: "King",
    img: king1,
    sounds: [chessNoise],
  },
  // Alliance Objects
  team_2_pawn: {
    team: 2,
    name: "team_2_pawn",
    img: pawn2,
    piece: "Pawn",
    sounds: [chessNoise],
  },
  team_2_rook: {
    team: 2,
    name: "team_2_rook",
    img: rook2,
    piece: "Rook",
    sounds: [chessNoise],
  },
  team_2_knight: {
    team: 2,
    name: "team_2_knight",
    piece: "Knight",
    img: knight2,
    sounds: [chessNoise],
  },
  team_2_bishop: {
    team: 2,
    name: "team_2_bishop",
    piece: "Bishop",
    img: bishop2,
    sounds: [chessNoise],
  },
  team_2_queen: {
    team: 2,
    name: "team_2_queen",
    piece: "Queen",
    img: queen2,
    sounds: [chessNoise],
  },
  team_2_king: {
    team: 2,
    name: "team_2_king",
    piece: "King",
    img: king2,
    sounds: [chessNoise],
  },
};

export default classicBattleground;
