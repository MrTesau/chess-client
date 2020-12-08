// import thumbnails
import pawn_team_1 from "./imgs/minion.gif";
import rook_team_1 from "./imgs/tryn.gif";
import rook2_team_1 from "./imgs/jax.gif";
import knight_team_1 from "./imgs/hec.gif";
import knight2_team_1 from "./imgs/cho.gif";
import team_1_queen from "./imgs/shyv.gif";
import team_1_king from "./imgs/sion.gif";
import team_1_bishop1 from "./imgs/vlad.gif";
import team_1_bishop2 from "./imgs/swain.gif";
import pawn_team_2 from "./imgs/pawn2.gif";
import rook_team_2 from "./imgs/mundo.gif";
import rook2_team_2 from "./imgs/yorik.gif";
import knight_team_2 from "./imgs/nasus.gif";
import knight2_team_2 from "./imgs/voli.gif";
import queen_team_2 from "./imgs/pan.gif";
import team_2_king from "./imgs/trundle.gif";

import team_2_bishop from "./imgs/vi.jpg";
import team_2_bishop2 from "./imgs/jinx.jpg";

import vi1 from "./audio/vi1.mp3";
import vi2 from "./audio/vi2.mp3";
import jinx from "./audio/jinx.mp3";

import pan1 from "./audio/pan1.mp3";
import pan2 from "./audio/pan2.mp3";
import pan3 from "./audio/p3.mp3";
import pan4 from "./audio/p4.mp3";
import pan5 from "./audio/p5.mp3";
import pan6 from "./audio/p6.mp3";
import pan7 from "./audio/p7.mp3";
import pan8 from "./audio/p8.mp3";
import pan9 from "./audio/p9.mp3";
// Nasus
import n1 from "./audio/1.mp3";
import n2 from "./audio/2.mp3";
import n3 from "./audio/3.mp3";
import n4 from "./audio/4.mp3";
import n5 from "./audio/5.mp3";
import n6 from "./audio/6.mp3";
import n7 from "./audio/7.mp3";
import n8 from "./audio/8.mp3";
import n9 from "./audio/8.mp3";
import n10 from "./audio/10.mp3";
import n11 from "./audio/11.mp3";
// trundle
import t1 from "./audio/t1.mp3";
import t2 from "./audio/t2.mp3";
/*
import knight_team_1 from "./imgs/knight1.gif";
import knight2_team_1 from "./imgs/knight1.gif";
import team_1_bishop1 from "./imgs/mel.gif";
import team_1_bishop2 from "./imgs/thoros.gif";
import team_1_queen from "./imgs/dany.gif";
import team_1_king from "./imgs/jon.gif";
*/
//import Sounds
import vol1 from "./audio/vol1.mp3";
import vol2 from "./audio/vol2.mp3";
import vol3 from "./audio/vol3.mp3";

import minionSound from "./audio/ping.mp3";
import ping2 from "./audio/ping2.mp3";
import r1 from "./audio/tryn1.mp3";
import r2 from "./audio/tryn2.mp3";
import r3 from "./audio/tryn3.mp3";
import r4 from "./audio/tryn4.mp3";
import r5 from "./audio/tryn5.mp3";
import r6 from "./audio/tryn6.mp3";
import r7 from "./audio/tryn7.mp3";
//jax
import j1 from "./audio/j1.mp3";
import j2 from "./audio/j2.mp3";
import j3 from "./audio/j3.mp3";
import j4 from "./audio/j4.mp3";
// hec
import h1 from "./audio/h1.mp3";
import h2 from "./audio/h2.mp3";
import h3 from "./audio/h3.mp3";
import h4 from "./audio/h4.mp3";
import h5 from "./audio/h5.mp3";
// cho
import c1 from "./audio/c1.mp3";
import c2 from "./audio/c2.mp3";
import c3 from "./audio/c3.mp3";
import c4 from "./audio/c4.mp3";
import c5 from "./audio/c5.mp3";
// sion
import s1 from "./audio/s1.mp3";
import s2 from "./audio/s2.mp3";
import s3 from "./audio/s3.mp3";
import s4 from "./audio/s4.mp3";
import s5 from "./audio/s5.mp3";
import s6 from "./audio/s6.mp3";
import s7 from "./audio/s7.mp3";
import s8 from "./audio/s8.mp3";
import s9 from "./audio/s9.mp3";
import s10 from "./audio/s10.mp3";
import s11 from "./audio/s11.mp3";
import s12 from "./audio/s12.mp3";
import s13 from "./audio/s13.mp3";
import s14 from "./audio/s14.mp3";
// shyv
import shyv1 from "./audio/shyv1.mp3";
import shyv2 from "./audio/shyv2.mp3";
import shyv3 from "./audio/shyv3.mp3";
import shyv4 from "./audio/shyv4.mp3";

// vlad
import v1 from "./audio/v1.mp3";
import v2 from "./audio/v2.mp3";
import v3 from "./audio/v3.mp3";
import v4 from "./audio/v4.mp3";
import v5 from "./audio/v5.mp3";

//swain
import sw1 from "./audio/sw1.mp3";
import sw2 from "./audio/sw2.mp3";
import sw3 from "./audio/sw3.mp3";

import dr1 from "./audio/dr1.mp3";
import dr2 from "./audio/dr2.mp3";
import dr3 from "./audio/dr3.mp3";
import dr4 from "./audio/dr4.mp3";
import dr5 from "./audio/dr5.mp3";
import dr6 from "./audio/dr6.mp3";
// yorik
import y1 from "./audio/y1.mp3";
import y2 from "./audio/y2.mp3";
import y3 from "./audio/y3.mp3";
import y4 from "./audio/y4.mp3";
import y5 from "./audio/y5.mp3";
import y6 from "./audio/y6.mp3";
import y7 from "./audio/y7.mp3";
import y8 from "./audio/y8.mp3";
import y9 from "./audio/y9.mp3";
// team 2 imports
//imgs
/*

import rook_team_2 from "./imgs/zombieGiant.gif";
import knight_team_2 from "./imgs/zombieHorse.gif";
import team_2_bishop from "./imgs/walker.gif";
import team_2_queen from "./imgs/dragUndead.gif";
import team_2_king from "./imgs/nk.gif";
*/
//team 2 responses

const pieces = {
  // Team 1
  team_1_pawn: {
    team: 1,
    name: "team_1_pawn",
    img: pawn_team_1,
    piece: "Pawn",
    sounds: [minionSound, ping2],
  },
  team_1_rook: {
    team: 1,
    name: "team_1_rook",
    piece: "Rook",
    img: rook_team_1,
    sounds: [r1, r2, r4, r3, r5, r6, r7],
  },

  team_1_rook2: {
    team: 1,
    name: "team_1_rook",
    piece: "Rook",
    img: rook2_team_1,
    sounds: [j1, j2, j3, j4],
  },
  team_1_knight: {
    team: 1,
    name: "team_1_knight",
    piece: "Knight",
    img: knight_team_1,
    sounds: [h1, h2, h3, h4, h5],
  },
  team_1_knight2: {
    team: 1,
    name: "team_1_knight",
    piece: "Knight",
    img: knight2_team_1,
    sounds: [c1, c2, c3, c4, c5],
  },

  team_1_queen: {
    team: 1,
    name: "team_1_queen",
    piece: "Queen",
    img: team_1_queen,
    sounds: [shyv1, shyv2, shyv3, shyv4],
  },
  team_1_king: {
    team: 1,
    name: "team_1_king",
    piece: "King",
    img: team_1_king,
    sounds: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14],
  },

  team_2_pawn: {
    team: 2,
    name: "team_2_pawn",
    piece: "Pawn",
    img: pawn_team_2,
    sounds: [minionSound, ping2],
  },
  team_1_bishop: {
    team: 1,
    name: "team_1_bishop",
    piece: "Bishop",
    sounds: [v1, v2, v3, v4, v5],
    img: team_1_bishop1,
  },
  team_1_bishop2: {
    team: 1,
    name: "team_1_bishop",
    piece: "Bishop",
    img: team_1_bishop2,
    sounds: [sw1, sw2, sw3],
  },
  team_2_rook: {
    team: 2,
    name: "team_2_rook",
    piece: "Rook",
    img: rook_team_2,
    sounds: [dr1, dr2, dr3, dr4, dr5, dr6],
  },
  team_2_rook2: {
    team: 2,
    name: "team_2_rook",
    piece: "Rook",
    img: rook2_team_2,
    sounds: [y1, y2, y3, y4, y5, y6, y7, y8, y9],
  },

  team_2_knight: {
    team: 2,
    piece: "Knight",
    name: "team_2_knight",
    img: knight_team_2,
    sounds: [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11],
  },
  team_2_knight2: {
    team: 2,
    piece: "Knight",
    name: "team_2_knight",
    img: knight2_team_2,
    sounds: [vol1, vol2, vol3],
  },

  team_2_queen: {
    team: 2,
    piece: "Queen",
    name: "team_2_queen",
    img: queen_team_2,
    sounds: [pan1, pan2, pan3, pan4, pan5, pan6, pan7, pan8, pan9],
  },

  team_2_king: {
    team: 2,
    piece: "King",
    name: "team_2_king",
    img: team_2_king,
    sounds: [t1, t2],
  },
  team_2_bishop2: {
    team: 2,
    piece: "Bishop",
    name: "team_2_bishop",
    img: team_2_bishop2,
    sounds: [jinx],
  },
  team_2_bishop: {
    team: 2,
    piece: "Bishop",
    name: "team_2_bishop",
    img: team_2_bishop,
    sounds: [vi1, vi2],
  },
};

export default pieces;
