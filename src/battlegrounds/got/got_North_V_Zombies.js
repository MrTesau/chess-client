// import thumbnails
import pawn_team_1 from "./imgs/pawn_1.gif";
import rook_team_1 from "./imgs/rook1.gif";
import rook2_team_1 from "./imgs/rook2_team_1.gif";
import knight_team_1 from "./imgs/knight1.gif";
import team_1_bishop1 from "./imgs/mel.gif";
import team_1_bishop2 from "./imgs/thoros.gif";
import team_1_queen from "./imgs/dany.gif";
import team_1_king from "./imgs/jon.gif";
//import Sounds
import team_1_sound_rook_11 from "./audio/beric_1.mp3";
import team_1_sound_rook_21 from "./audio/beric-dondarrion.mp3";
import team_1_sound_rook_1 from "./audio/r1.mp3";
import team_1_sound_rook_2 from "./audio/r2.mp3";
import team_1_sound_rook_3 from "./audio/r3.mp3";
import team_1_sound_rook_4 from "./audio/r4.mp3";
import team_1_sound_rook_5 from "./audio/r5.mp3";
import team_1_sound_rook_6 from "./audio/r6.mp3";
import team_1_sound_rook_7 from "./audio/r7.mp3";
import team_1_sound_rook_8 from "./audio/r8.mp3";
import team_1_sound_rook_9 from "./audio/r9.mp3";
import team_1_sound_rook_10 from "./audio/r10.mp3";
import hodor from "./audio/hodor.mp3";
import dream from "./audio/dream.mp3";
import pawn from "./audio/pawn.mp3";
import pawn2 from "./audio/pawn2.mp3";
import pawn3 from "./audio/pawn3.mp3";
import pawn4 from "./audio/pawn4.mp3";
import pawn5 from "./audio/pawn5.mp3";
import pawn6 from "./audio/pawn6.mp3";
import pawn7 from "./audio/pawn7.mp3";
import knight_sound_1 from "./audio/knight_sound_1.mp3";
import knight_sound_2 from "./audio/knight_sound_2.mp3";
import bishop1team1sound from "./audio/mel1.mp3";
import bishop1team1sound2 from "./audio/mel2.mp3";
import bishop1team1sound3 from "./audio/mel3.mp3";
import bishop1team1sound4 from "./audio/mel4.mp3";
import bishop2team1sound from "./audio/thoros.mp3";
import bishop2team1sound2 from "./audio/thoros2.mp3";
import king1sounds from "./audio/jon1.mp3";
import king1sounds2 from "./audio/j2.mp3";
import king1sounds3 from "./audio/j3.mp3";
import king1sounds4 from "./audio/j4.mp3";
import king1sounds5 from "./audio/j5.mp3";
import king1sounds6 from "./audio/j6.mp3";
import king1sounds7 from "./audio/j7.mp3";
import king1sounds8 from "./audio/j8.mp3";
import dragons from "./audio/dragons.mp3";
import queen1sounds1 from "./audio/d1.mp3";
import queen1sounds2 from "./audio/d2.mp3";
import queen1sounds4 from "./audio/d4.mp3";
import queen1sounds3 from "./audio/d3.mp3";
import queen1sounds5 from "./audio/d5.mp3";
import queen1sounds6 from "./audio/d6.mp3";

// team 2 imports
//imgs
import pawn_team_2 from "./imgs/zombie.gif";
import rook_team_2 from "./imgs/zombieGiant.gif";
import knight_team_2 from "./imgs/zombieHorse.gif";
import team_2_bishop from "./imgs/walker.gif";
import team_2_queen from "./imgs/dragUndead.gif";
import team_2_king from "./imgs/nk.gif";
//team 2 responses
import footsteps from "./audio/zombies/foots.mp3";
import freeze from "./audio/zombies/freeze.mp3";

import giant1 from "./audio/zombies/giant1.mpeg";
import giant2 from "./audio/zombies/giant2.mpeg";
import giant3 from "./audio/zombies/giant3.mpeg";
import giant4 from "./audio/zombies/giant4.mpeg";

import monster from "./audio/zombies/monster.mp3";

import pain from "./audio/zombies/pain.mp3";

import walker from "./audio/zombies/walker.mpeg";

import zombie1 from "./audio/zombies/z1.mp3";
import zombie2 from "./audio/zombies/z2.mp3";
import zombie3 from "./audio/zombies/z3.mp3";
import zombie4 from "./audio/zombies/z4.mpeg";
import zombie6 from "./audio/zombies/z6.mpeg";
import zombie7 from "./audio/zombies/z7.mpeg";
import zombie8 from "./audio/zombies/z8.mpeg";
import zombie9 from "./audio/zombies/z09.mpeg";
import zombies from "./audio/zombies/zombie.mp3";
import zombies2 from "./audio/zombies/zombie232.mpeg";

const pieces = {
  // Team 1
  team_1_rook: {
    team: 1,
    name: "team_1_rook",
    uniqueN: "team_1_rook",
    piece: "Rook",
    img: rook_team_1,
    sounds: [team_1_sound_rook_11, team_1_sound_rook_21],
  },
  // secondary rook
  team_1_rook2: {
    team: 1,
    name: "team_1_rook",
    piece: "Rook",
    uniqueN: "team_1_rook2",
    img: rook2_team_1,
    sounds: [
      team_1_sound_rook_1,
      team_1_sound_rook_2,
      team_1_sound_rook_3,
      team_1_sound_rook_4,
      team_1_sound_rook_5,
      team_1_sound_rook_6,
      team_1_sound_rook_7,
      team_1_sound_rook_8,
      team_1_sound_rook_9,
      team_1_sound_rook_10,
    ],
  },
  team_1_pawn: {
    team: 1,
    name: "team_1_pawn",
    uniqueN: "team_1_pawn",
    piece: "Pawn",
    img: pawn_team_1,
    sounds: [
      dream,
      hodor,
      pawn,
      pawn2,
      pawn3,
      pawn3,
      pawn4,
      pawn4,
      pawn5,
      pawn6,
      pawn7,
      pawn7,
    ],
  },
  team_1_knight: {
    team: 1,
    piece: "Knight",
    name: "team_1_knight",
    uniqueN: "team_1_knight",
    img: knight_team_1,
    sounds: [knight_sound_1, knight_sound_2],
  },
  team_1_bishop: {
    team: 1,
    name: "team_1_bishop",
    uniqueN: "team_1_bishop1",
    piece: "Bishop",
    sounds: [bishop2team1sound, bishop2team1sound2],
    img: team_1_bishop2,
  },
  team_1_bishop2: {
    team: 1,
    name: "team_1_bishop",
    uniqueN: "team_1_bishop2",
    piece: "Bishop",
    img: team_1_bishop1,
    sounds: [
      bishop1team1sound,
      bishop1team1sound2,
      bishop1team1sound3,
      bishop1team1sound4,
    ],
  },
  team_1_queen: {
    team: 1,
    name: "team_1_queen",
    uniqueN: "team_1_queen",
    piece: "Queen",
    img: team_1_queen,
    sounds: [
      queen1sounds1,
      queen1sounds1,
      queen1sounds1,
      dragons,
      queen1sounds1,
      dragons,
      queen1sounds2,
      dragons,
      queen1sounds3,
      dragons,
      queen1sounds4,
      queen1sounds5,
      queen1sounds5,
      queen1sounds5,
      queen1sounds5,
      queen1sounds6,
      dragons,
    ],
  },
  team_1_king: {
    team: 1,
    name: "team_1_king",
    uniqueN: "team_1_king",
    piece: "King",
    img: team_1_king,
    sounds: [
      king1sounds,
      king1sounds2,
      king1sounds3,
      king1sounds4,
      king1sounds5,
      king1sounds6,
      king1sounds7,
      king1sounds8,
    ],
  },
  // zombie Objects
  team_2_rook: {
    team: 2,
    name: "team_2_rook",
    uniqueN: "team_2_rook",
    piece: "Rook",
    img: rook_team_2,
    sounds: [giant1, giant2, giant3, giant4],
  },
  team_2_pawn: {
    team: 2,
    name: "team_2_pawn",
    uniqueN: "team_2_pawn",
    piece: "Pawn",
    img: pawn_team_2,
    sounds: [
      pain,
      zombie1,
      zombie2,
      zombie3,
      zombie4,
      zombie6,
      zombie7,
      zombie8,
      zombie9,
      zombies,
      zombies2,
      zombie9,
    ],
  },
  team_2_knight: {
    team: 2,
    name: "team_2_knight",
    uniqueN: "team_2_knight",
    piece: "Knight",
    img: knight_team_2,
    sounds: [freeze, walker, footsteps],
  },
  team_2_bishop: {
    team: 2,
    name: "team_2_bishop",
    uniqueN: "team_2_bishop",
    piece: "Bishop",
    img: team_2_bishop,
    sounds: [footsteps, freeze, walker, monster],
  },
  team_2_queen: {
    team: 2,
    name: "team_2_queen",
    uniqueN: "team_2_queen",
    piece: "Queen",
    img: team_2_queen,
    sounds: [monster, knight_sound_1, knight_sound_2, monster],
  },
  team_2_king: {
    team: 2,
    name: "team_2_king",
    uniqueN: "team_2_king",
    piece: "King",
    img: team_2_king,
    sounds: [freeze, footsteps],
  },
};

export default pieces;
