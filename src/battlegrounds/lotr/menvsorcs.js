import pawn1 from "./men/pawn1.jpg";
import rook1 from "./men/rook1.jpg";
import rook2 from "./men/rook2.jpg";
import queen from "./men/queen.jpg";
import knight1 from "./men/knight1.jpg";
import knight2 from "./men/knight2.png";
import bishop1 from "./men/bishop1.jpg";
import bishop2 from "./men/bishop2.jpg";
import king from "./men/king.png";
//Mordor
import orcKnight from "./orcs/knight.jpg";
import orcPawn from "./orcs/pawn.jpg";
import orcRook from "./orcs/rook.jpg";
import orcBishop from "./orcs/bishop.jpg";
import orcQueen from "./orcs/queen.jpg";
import orcKing from "./orcs/Sauron.jpg";
//sounds
import theo from "./men/theo.mp3";
import el from "./men/el.mp3";
import sam1 from "./men/ruin.mp3";
import sam2 from "./men/taters1.mp3";
import sam3 from "./men/taters2.mp3";
import sam4 from "./men/hopeless.mp3";
import sam5 from "./men/chips.mp3";
import sam6 from "./men/connies.mp3";
import sam7 from "./men/no.mp3";

import k from "./men/k.mp3";
import clever from "./men/terriblyclever.mp3";
import late from "./men/wizardneverlate.mp3";
import soldiers from "./men/pawn.mp3";
import pass from "./men/pass.mp3";
import flee from "./men/flee.mp3";
import one from "./men/one.mp3";
import hob from "./men/hobbits.mp3";
import gim1 from "./men/gim1.mp3";
import gim2 from "./men/gim2.mp3";
import gim3 from "./men/gim3.mp3";
import gim4 from "./men/gim4.mp3";
import hate from "./men/hate.mp3";
import took from "./men/took.mp3";
import tricks from "./men/tricks.mp3";
import orc1 from "./orcs/orc1.mp3";
import orc2 from "./orcs/orc2.mp3";
import orc3 from "./orcs/orc3.mp3";
import orc4 from "./orcs/orc4.mp3";
import troll from "./orcs/troll.mp3";
import horn from "./orcs/horn.mp3";
import leaf from "./orcs/leaf.mp3";
import w from "./orcs/wraiths.mp3";
import b from "./orcs/bishop.mp3";
import sau from "./orcs/sau.mp3";
import mush from "./orcs/mush.mp3";
const lotrBattleground = {
  // Horde Objects
  team_1_pawn: {
    team: 1,
    name: "team_1_pawn",
    img: pawn1,
    piece: "Pawn",
    sounds: [soldiers, flee],
  },

  team_1_rook: {
    team: 1,
    name: "team_1_rook",
    img: rook1,
    piece: "Rook",
    sounds: [gim1, gim2, gim3, gim4, one],
  },
  team_1_rook2: {
    team: 1,
    name: "team_1_bishop",
    uniqueN: "team_1_rook2",
    piece: "Bishop",
    img: rook2,
    sounds: [hob],
  },
  team_1_knight2: {
    team: 1,
    name: "team_1_knight",
    uniqueN: "team_1_knight2",
    piece: "Bishop",
    img: knight2,
    sounds: [theo],
  },

  team_1_knight: {
    team: 1,
    name: "team_1_knight",
    piece: "Knight",
    img: knight1,
    sounds: [hate],
  },
  team_1_bishop: {
    team: 1,
    name: "team_1_bishop",
    piece: "Bishop",
    img: bishop1,
    sounds: [took, pass, tricks, late, clever],
  },
  team_1_queen: {
    team: 1,
    name: "team_1_queen",
    piece: "Queen",
    img: queen,
    sounds: [sam1, sam2, sam3, sam4, sam5, sam6, sam7],
  },
  team_1_bishop2: {
    team: 1,
    name: "team_1_bishop",
    uniqueN: "team_1_bishop2",
    piece: "Bishop",
    img: bishop2,
    sounds: [el],
  },
  team_1_king: {
    team: 1,
    name: "team_1_king",
    piece: "King",
    img: king,
    sounds: [k],
  },
  // Alliance Objects */
  team_2_rook: {
    team: 2,
    name: "team_2_rook",
    piece: "Rook",
    img: orcRook,
    sounds: [troll],
  },

  team_2_pawn: {
    team: 2,
    name: "team_2_pawn",
    piece: "Pawn",
    img: orcPawn,
    sounds: [orc1, orc2, orc3, orc4],
  },

  team_2_knight: {
    team: 2,
    name: "team_2_knight",
    piece: "Knight",
    img: orcKnight,
    sounds: [horn],
  },

  team_2_bishop: {
    team: 2,
    name: "team_2_bishop",
    piece: "Bishop",
    img: orcBishop,
    sounds: [w, b, b, b, b, w],
  },

  team_2_queen: {
    team: 2,
    name: "team_2_queen",
    piece: "Queen",
    img: orcQueen,
    sounds: [leaf, mush],
  },
  team_2_king: {
    team: 2,
    name: "team_2_king",
    piece: "King",
    img: orcKing,
    sounds: [sau],
  },
};

export default lotrBattleground;
