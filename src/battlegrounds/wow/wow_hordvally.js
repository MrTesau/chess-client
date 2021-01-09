import pawn from "./img/Untitled.gif";
import rook from "./img/rook.gif";
import orcKnight from "./img/orcRaider.gif";
import orcBishop from "./img/shaman.gif";
import orcQueen from "./img/sylv.gif";
import orcKing from "./img/thrall.gif";
import orcSoundOne from "./audio/orc1.mp3";
import orcSoundTwo from "./audio/doing.mp3";
import orcSoundThree from "./audio/happy.mp3";
import orcSoundFour from "./audio/ok-dokie.mp3";
import orcSoundFive from "./audio/yes.mp3";
//orc king
import orcKingSound from "./audio/ThrallGreeting01.ogg";
// orc Q
import orcQueenSounds_1 from "./audio/1.ogg";
// Raider
import orcRaiderSounds_1 from "./audio/2raider.mp3";
import orcRaiderSounds_2 from "./audio/obey.mp3";
import orcRaiderSounds_3 from "./audio/3.mpeg";
import orcRaiderSounds_4 from "./audio/4.mpeg";
// Shaman
import shamanSound from "./audio/1shaman.ogg";
import shamanSound_1 from "./audio/4r.ogg";
import shamanSound_2 from "./audio/12.ogg";
import shamanSound_3 from "./audio/34.ogg";
import shamanSound_4 from "./audio/123.ogg";
import shamanSound_5 from "./audio/re.ogg";
// rook
import taurenRook from "./audio/greetings-traveller.mp3";
import sound_rook_1 from "./audio/2r.mp3";
import taurenRook2 from "./audio/3r.ogg";
import taurenRook3 from "./audio/4ro.ogg";
import taurenRook4 from "./audio/5r.ogg";
// Human Imports
import humanPawn from "./img/footmen.gif";
import humanRook from "./img/druid.gif";
import humanKnight from "./img/knight.gif";
import humanKing from "./img/var.gif";
import humanBishop from "./img/wiz.gif";
import humanQueen from "./img/jana.gif";
//Bishop
import bishopSound_1 from "./audio/1b.mp3";
import bishopSound_2 from "./audio/2b.mp3";
import bishopSound_3 from "./audio/3b.mp3";
import bishopSound_4 from "./audio/4b.mp3";
import bishopSound_5 from "./audio/5b.mp3";
import bishopSound_6 from "./audio/alright.mp3";
import bishopSound_7 from "./audio/hello.mp3";
//king
import kingSounds from "./audio/1.mpeg";
//knight
import knightSound from "./audio/ax.mp3";
// Q
import queenSound_1 from "./audio/1hq.mp3";
import queenSound_2 from "./audio/2hq.mp3";
import queenSound_3 from "./audio/3hq.mp3";
import queenSound_4 from "./audio/4hq.mp3";
import queenSound_5 from "./audio/5hq.mp3";
import queenSound_6 from "./audio/6hq.mp3";
//rook
import r1 from "./audio/1.mp3";
import r2 from "./audio/2.mp3";
import r3 from "./audio/3.mp3";
import r4 from "./audio/4.mp3";
import r5 from "./audio/5.mp3";
import r6 from "./audio/6.mp3";
import r7 from "./audio/7.mp3";
import r8 from "./audio/8.mp3";
import r9 from "./audio/9.mp3";
import r10 from "./audio/10.mp3";
// Human pawn
import p1 from "./audio/alone.mp3";
import p2 from "./audio/charge.mp3";
import p3 from "./audio/run.mp3";
import p4 from "./audio/serve.mp3";
import p5 from "./audio/yes-lord.mp3";

const WoWBattleground = {
  // Horde Objects
  team_1_pawn: {
    team: 1,
    name: "team_1_pawn",
    img: pawn,
    piece: "Pawn",
    sounds: [
      orcSoundOne,
      orcSoundTwo,
      orcSoundThree,
      orcSoundFour,
      orcSoundFive,
    ].map((sound) => new Audio(sound)),
  },
  team_1_rook: {
    team: 1,
    name: "team_1_rook",
    img: rook,
    piece: "Rook",
    sounds: [
      taurenRook,
      taurenRook2,
      sound_rook_1,
      taurenRook3,
      taurenRook4,
    ].map((sound) => new Audio(sound)),
  },
  team_1_knight: {
    team: 1,
    name: "team_1_knight",
    piece: "Knight",
    img: orcKnight,
    sounds: [
      orcSoundOne,
      orcRaiderSounds_1,
      orcRaiderSounds_2,
      orcRaiderSounds_3,
      orcRaiderSounds_4,
    ].map((sound) => new Audio(sound)),
  },
  team_1_bishop: {
    team: 1,
    name: "team_1_bishop",

    piece: "Bishop",
    img: orcBishop,
    sounds: [
      shamanSound,
      orcSoundOne,
      shamanSound_1,
      shamanSound_2,
      shamanSound_3,
      shamanSound_4,
      shamanSound_5,
    ].map((sound) => new Audio(sound)),
  },
  team_1_queen: {
    team: 1,
    name: "team_1_queen",
    piece: "Queen",
    img: orcQueen,
    sounds: [
      orcQueenSounds_1,
      queenSound_1,
      queenSound_2,
      queenSound_3,
      queenSound_4,
      queenSound_5,
      queenSound_6,
    ].map((sound) => new Audio(sound)),
  },
  team_1_king: {
    team: 1,
    name: "team_1_king",
    piece: "King",
    img: orcKing,
    sounds: [orcKingSound, orcSoundOne].map((sound) => new Audio(sound)),
  },
  // Alliance Objects
  team_2_rook: {
    team: 2,
    name: "team_2_rook",
    piece: "Rook",
    img: humanRook,
    sounds: [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10].map(
      (sound) => new Audio(sound)
    ),
  },
  team_2_pawn: {
    team: 2,
    name: "team_2_pawn",
    piece: "Pawn",
    img: humanPawn,
    sounds: [p1, p2, p3, p4, p5].map((sound) => new Audio(sound)),
  },
  team_2_knight: {
    team: 2,
    name: "team_2_knight",
    piece: "Knight",
    img: humanKnight,
    sounds: [knightSound, p5].map((sound) => new Audio(sound)),
  },
  team_2_bishop: {
    team: 2,
    name: "team_2_bishop",
    piece: "Bishop",
    img: humanBishop,
    sounds: [
      bishopSound_1,
      bishopSound_2,
      bishopSound_3,
      bishopSound_4,
      bishopSound_5,
      bishopSound_6,
      bishopSound_7,
    ].map((sound) => new Audio(sound)),
  },
  team_2_queen: {
    team: 2,
    name: "team_2_queen",
    piece: "Queen",
    img: humanQueen,
    sounds: [
      queenSound_1,
      queenSound_2,
      queenSound_3,
      queenSound_4,
      queenSound_5,
      queenSound_6,
    ].map((sound) => new Audio(sound)),
  },
  team_2_king: {
    team: 2,
    name: "team_2_king",
    piece: "King",
    img: humanKing,
    sounds: [kingSounds, knightSound].map((sound) => new Audio(sound)),
  },
};

export default WoWBattleground;
