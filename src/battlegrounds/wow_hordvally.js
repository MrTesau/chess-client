import pawn from "../assets/img/Untitled.gif";
import rook from "../assets/img/rook.gif";
import orcKnight from "../assets/img/orcRaider.gif";
import orcBishop from "../assets/img/shaman.gif";
import orcQueen from "../assets/img/sylv.gif";
import orcKing from "../assets/img/thrall.gif";
import orcSoundOne from "../assets/orc1.mp3";
import orcSoundTwo from "../assets/doing.mp3";
import orcSoundThree from "../assets/happy.mp3";
import orcSoundFour from "../assets/ok-dokie.mp3";
import orcSoundFive from "../assets/yes.mp3";
//orc king
import orcKingSound from "../assets/orcKingSounds/ThrallGreeting01.ogg";
// orc Q
import orcQueenSounds_1 from "../assets/orcQueenSounds/1.ogg";
// Raider
import orcRaiderSounds_1 from "../assets/orcRaiderSounds/2.mp3";
import orcRaiderSounds_2 from "../assets/orcRaiderSounds/obey.mp3";
import orcRaiderSounds_3 from "../assets/orcRaiderSounds/3.mpeg";
import orcRaiderSounds_4 from "../assets/orcRaiderSounds/4.mpeg";
// Shaman
import shamanSound from "../assets/orcShamanSounds/1.ogg";
import shamanSound_1 from "../assets/orcShamanSounds/4r.ogg";
import shamanSound_2 from "../assets/orcShamanSounds/12.ogg";
import shamanSound_3 from "../assets/orcShamanSounds/34.ogg";
import shamanSound_4 from "../assets/orcShamanSounds/123.ogg";
import shamanSound_5 from "../assets/orcShamanSounds/re.ogg";
// rook
import taurenRook from "../assets/taurenRookSounds/greetings-traveller.mp3";
import sound_rook_1 from "../assets/taurenRookSounds/2.mp3";
import taurenRook2 from "../assets/taurenRookSounds/3.ogg";
import taurenRook3 from "../assets/taurenRookSounds/4.ogg";
import taurenRook4 from "../assets/taurenRookSounds/5.ogg";
// Human Imports
import humanPawn from "../assets/img/footmen.gif";
import humanRook from "../assets/img/druid.gif";
import humanKnight from "../assets/img/knight.gif";
import humanKing from "../assets/img/var.gif";
import humanBishop from "../assets/img/wiz.gif";
import humanQueen from "../assets/img/jana.gif";
//Bishop
import bishopSound_1 from "../assets/humanBishopSounds/1.ogg";
import bishopSound_2 from "../assets/humanBishopSounds/2.ogg";
import bishopSound_3 from "../assets/humanBishopSounds/3.ogg";
import bishopSound_4 from "../assets/humanBishopSounds/4.ogg";
import bishopSound_5 from "../assets/humanBishopSounds/5.ogg";
import bishopSound_6 from "../assets/humanBishopSounds/alright.mp3";
import bishopSound_7 from "../assets/humanBishopSounds/hello.mp3";
//king
import kingSounds from "../assets/humanKingSounds/1.mpeg";
//knight
import knightSound from "../assets/humanKnightSounds/ax.mp3";
// Q
import queenSound_1 from "../assets/humanQueenSounds/1.ogg";
import queenSound_2 from "../assets/humanQueenSounds/2.ogg";
import queenSound_3 from "../assets/humanQueenSounds/3.ogg";
import queenSound_4 from "../assets/humanQueenSounds/4.ogg";
import queenSound_5 from "../assets/humanQueenSounds/5.ogg";
import queenSound_6 from "../assets/humanQueenSounds/6.ogg";
//rook
import r1 from "../assets/humanRookSounds/1.mpeg";
import r2 from "../assets/humanRookSounds/2.mpeg";
import r3 from "../assets/humanRookSounds/3.mpeg";
import r4 from "../assets/humanRookSounds/4.mpeg";
import r5 from "../assets/humanRookSounds/5.mpeg";
import r6 from "../assets/humanRookSounds/6.mpeg";
import r7 from "../assets/humanRookSounds/7.mpeg";
import r8 from "../assets/humanRookSounds/8.mpeg";
import r9 from "../assets/humanRookSounds/9.mpeg";
import r10 from "../assets/humanRookSounds/10.mpeg";
// Human pawn
import p1 from "../assets/humanPawnAudio/alone.mp3";
import p2 from "../assets/humanPawnAudio/charge.mp3";
import p3 from "../assets/humanPawnAudio/run.mp3";
import p4 from "../assets/humanPawnAudio/serve.mp3";
import p5 from "../assets/humanPawnAudio/yes-lord.mp3";

const WoWBattleground = {
  // Horde Objects
  team_1_pawn: {
    team: 1,
    name: "team_1_pawn",
    img: pawn,
    sounds: [
      orcSoundOne,
      orcSoundTwo,
      orcSoundThree,
      orcSoundFour,
      orcSoundFive,
    ],
  },
  team_1_rook: {
    team: 1,
    name: "team_1_rook",
    img: rook,
    sounds: [taurenRook, taurenRook2, sound_rook_1, taurenRook3, taurenRook4],
  },
  team_1_knight: {
    team: 1,
    name: "team_1_knight",
    img: orcKnight,
    sounds: [
      orcSoundOne,
      orcRaiderSounds_1,
      orcRaiderSounds_2,
      orcRaiderSounds_3,
      orcRaiderSounds_4,
    ],
  },
  team_1_bishop: {
    team: 1,
    name: "team_1_bishop",
    img: orcBishop,
    sounds: [
      shamanSound,
      orcSoundOne,
      shamanSound_1,
      shamanSound_2,
      shamanSound_3,
      shamanSound_4,
      shamanSound_5,
    ],
  },
  team_1_queen: {
    team: 1,
    name: "team_1_queen",
    img: orcQueen,
    sounds: [
      orcQueenSounds_1,
      queenSound_1,
      queenSound_2,
      queenSound_3,
      queenSound_4,
      queenSound_5,
      queenSound_6,
    ],
  },
  team_1_king: {
    team: 1,
    name: "team_1_king",
    img: orcKing,
    sounds: [orcKingSound, orcSoundOne],
  },
  // Alliance Objects
  team_2_rook: {
    team: 2,
    name: "team_2_rook",
    img: humanRook,
    sounds: [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10],
  },
  team_2_pawn: {
    team: 2,
    name: "team_2_pawn",
    img: humanPawn,
    sounds: [p1, p2, p3, p4, p5],
  },
  team_2_knight: {
    team: 2,
    name: "team_2_knight",
    img: humanKnight,
    sounds: [knightSound, p5],
  },
  team_2_bishop: {
    team: 2,
    name: "team_2_bishop",
    img: humanBishop,
    sounds: [
      bishopSound_1,
      bishopSound_2,
      bishopSound_3,
      bishopSound_4,
      bishopSound_5,
      bishopSound_6,
      bishopSound_7,
    ],
  },
  team_2_queen: {
    team: 2,
    name: "team_2_queen",
    img: humanQueen,
    sounds: [
      queenSound_1,
      queenSound_2,
      queenSound_3,
      queenSound_4,
      queenSound_5,
      queenSound_6,
    ],
  },
  team_2_king: {
    team: 2,
    name: "team_2_king",
    img: humanKing,
    sounds: [kingSounds, knightSound],
  },
};

export default WoWBattleground;
