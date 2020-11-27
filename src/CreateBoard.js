import React from "react";
import "./App.css";

// Battleground themes
import gameOfThrones_1 from "./battlegrounds/got/got_North_V_Zombies.js";

// Orc Imports
import pawn from "./assets/img/Untitled.gif";
import rook from "./assets/img/rook.gif";
import orcKnight from "./assets/img/orcRaider.gif";
import orcBishop from "./assets/img/shaman.gif";
import orcQueen from "./assets/img/sylv.gif";
import orcKing from "./assets/img/thrall.gif";
import orcSoundOne from "./assets/orc1.mp3";
import orcSoundTwo from "./assets/doing.mp3";
import orcSoundThree from "./assets/happy.mp3";
import orcSoundFour from "./assets/ok-dokie.mp3";
import orcSoundFive from "./assets/yes.mp3";
//orc king
import orcKingSound from "./assets/orcKingSounds/ThrallGreeting01.ogg";
// orc Q
import orcQueenSounds_1 from "./assets/orcQueenSounds/1.ogg";
// Raider
import orcRaiderSounds_1 from "./assets/orcRaiderSounds/2.mp3";
import orcRaiderSounds_2 from "./assets/orcRaiderSounds/obey.mp3";
import orcRaiderSounds_3 from "./assets/orcRaiderSounds/3.mpeg";
import orcRaiderSounds_4 from "./assets/orcRaiderSounds/4.mpeg";
// Shaman
import shamanSound from "./assets/orcShamanSounds/1.ogg";
import shamanSound_1 from "./assets/orcShamanSounds/4r.ogg";
import shamanSound_2 from "./assets/orcShamanSounds/12.ogg";
import shamanSound_3 from "./assets/orcShamanSounds/34.ogg";
import shamanSound_4 from "./assets/orcShamanSounds/123.ogg";
import shamanSound_5 from "./assets/orcShamanSounds/re.ogg";
// rook
import taurenRook from "./assets/taurenRookSounds/greetings-traveller.mp3";
import sound_rook_1 from "./assets/taurenRookSounds/2.mp3";
import taurenRook2 from "./assets/taurenRookSounds/3.ogg";
import taurenRook3 from "./assets/taurenRookSounds/4.ogg";
import taurenRook4 from "./assets/taurenRookSounds/5.ogg";
// Human Imports
import humanPawn from "./assets/img/footmen.gif";
import humanRook from "./assets/img/druid.gif";
import humanKnight from "./assets/img/knight.gif";
import humanKing from "./assets/img/var.gif";
import humanBishop from "./assets/img/wiz.gif";
import humanQueen from "./assets/img/jana.gif";
//Bishop
import bishopSound_1 from "./assets/humanBishopSounds/1.ogg";
import bishopSound_2 from "./assets/humanBishopSounds/2.ogg";
import bishopSound_3 from "./assets/humanBishopSounds/3.ogg";
import bishopSound_4 from "./assets/humanBishopSounds/4.ogg";
import bishopSound_5 from "./assets/humanBishopSounds/5.ogg";
import bishopSound_6 from "./assets/humanBishopSounds/alright.mp3";
import bishopSound_7 from "./assets/humanBishopSounds/hello.mp3";
//king
import kingSounds from "./assets/humanKingSounds/1.mpeg";
//knight
import knightSound from "./assets/humanKnightSounds/ax.mp3";
// Q
import queenSound_1 from "./assets/humanQueenSounds/1.ogg";
import queenSound_2 from "./assets/humanQueenSounds/2.ogg";
import queenSound_3 from "./assets/humanQueenSounds/3.ogg";
import queenSound_4 from "./assets/humanQueenSounds/4.ogg";
import queenSound_5 from "./assets/humanQueenSounds/5.ogg";
import queenSound_6 from "./assets/humanQueenSounds/6.ogg";
//rook
import r1 from "./assets/humanRookSounds/1.mpeg";
import r2 from "./assets/humanRookSounds/2.mpeg";
import r3 from "./assets/humanRookSounds/3.mpeg";
import r4 from "./assets/humanRookSounds/4.mpeg";
import r5 from "./assets/humanRookSounds/5.mpeg";
import r6 from "./assets/humanRookSounds/6.mpeg";
import r7 from "./assets/humanRookSounds/7.mpeg";
import r8 from "./assets/humanRookSounds/8.mpeg";
import r9 from "./assets/humanRookSounds/9.mpeg";
import r10 from "./assets/humanRookSounds/10.mpeg";
// Human pawn
import p1 from "./assets/humanPawnAudio/alone.mp3";
import p2 from "./assets/humanPawnAudio/charge.mp3";
import p3 from "./assets/humanPawnAudio/run.mp3";
import p4 from "./assets/humanPawnAudio/serve.mp3";
import p5 from "./assets/humanPawnAudio/yes-lord.mp3";
//var wow = "./assets/img/wowBG.jpg";
//var currentBG = wowBg;

const WoWBattleground = {
  // Horde Objects
  team_1_pawn: {
    team: 1,
    name: "pawn",
    img: pawn,
    sounds: [
      orcSoundOne,
      orcSoundTwo,
      orcSoundThree,
      orcSoundFour,
      orcSoundFive,
    ],
    rules: (currentPosition, targetPosition, squares) => {
      // team collision check
      //if (squares.filter((square) => square.col === targetPosition.col && square.row === targetPosition.row).length > 0)
      if (
        targetPosition.row === currentPosition.row + 1 &&
        targetPosition.col === currentPosition.col + 1 &&
        targetPosition.occupied &&
        targetPosition.occupied.team !== currentPosition.occupied.team
      )
        return true;
      else if (
        targetPosition.row === currentPosition.row + 1 &&
        targetPosition.col === currentPosition.col - 1 &&
        targetPosition.occupied &&
        targetPosition.occupied.team !== currentPosition.occupied.team
      )
        return true;
      else if (targetPosition.occupied) return false;
      else if (
        targetPosition.row === currentPosition.row + 1 &&
        targetPosition.col === currentPosition.col
      ) {
        return true;
      }
      return false;
    },
  },
  team_1_rook: {
    team: 1,
    name: "rook",
    img: rook,
    sounds: [taurenRook, taurenRook2, sound_rook_1, taurenRook3, taurenRook4],
    rules: (currentPosition, targetPosition) => {
      if (
        targetPosition.row === currentPosition.row ||
        targetPosition.col === currentPosition.col
      ) {
        return true;
      }
      return false;
    },
  },
  team_1_knight: {
    team: 1,
    name: "knight",
    img: orcKnight,
    sounds: [
      orcSoundOne,
      orcRaiderSounds_1,
      orcRaiderSounds_2,
      orcRaiderSounds_3,
      orcRaiderSounds_4,
    ],
    rules: (currentPosition, targetPosition) => {
      if (
        targetPosition.row === currentPosition.row - 2 &&
        targetPosition.col === currentPosition.col - 1
      )
        return true;
      else if (
        targetPosition.row === currentPosition.row - 2 &&
        targetPosition.col === currentPosition.col + 1
      )
        return true;
      else if (
        targetPosition.row === currentPosition.row + 2 &&
        targetPosition.col === currentPosition.col + 1
      )
        return true;
      else if (
        targetPosition.row === currentPosition.row + 2 &&
        targetPosition.col === currentPosition.col - 1
      )
        return true;
      if (
        targetPosition.row === currentPosition.row - 1 &&
        targetPosition.col === currentPosition.col - 2
      )
        return true;
      else if (
        targetPosition.row === currentPosition.row - 1 &&
        targetPosition.col === currentPosition.col + 2
      )
        return true;
      else if (
        targetPosition.row === currentPosition.row + 1 &&
        targetPosition.col === currentPosition.col + 2
      )
        return true;
      else if (
        targetPosition.row === currentPosition.row + 1 &&
        targetPosition.col === currentPosition.col - 2
      )
        return true;
      else return false;
    },
  },
  team_1_bishop: {
    team: 1,
    name: "bishop",
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
    rules: (currentPosition, targetPosition) => {
      // up or down? target > current
      // that leaves 2 arrays
      // find array current position is located in
      // find squares between target and current that are occupied,
      // dont need to go right up to target as friendly will switch select and enemy will be eaten
      // if squares between are occupied return false
      let arr = [
        ...targetPosition.leftUp,
        ...targetPosition.leftDown,
        ...targetPosition.rightUp,
        ...targetPosition.rightDown,
      ];
      if (arr.indexOf(currentPosition.idx) > -1) return true;
      return false;
    },
  },
  team_1_queen: {
    team: 1,
    name: "queen",
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
    rules: (currentPosition, targetPosition) => {
      if (currentPosition.row === targetPosition.row) return true;
      else if (currentPosition.col === targetPosition.col) return true;
      else {
        let arr = [
          ...targetPosition.leftUp,
          ...targetPosition.leftDown,
          ...targetPosition.rightUp,
          ...targetPosition.rightDown,
        ];
        if (arr.indexOf(currentPosition.idx) > -1) return true;
        return false;
      }
    },
  },
  team_1_king: {
    team: 1,
    name: "king",
    img: orcKing,
    sounds: [orcKingSound, orcSoundOne],
    rules: (currentPosition, targetPosition) => {
      if (
        targetPosition.row > currentPosition.row + 1 ||
        targetPosition.row < currentPosition.row - 1 ||
        targetPosition.col > currentPosition.col + 1 ||
        targetPosition.col < currentPosition.col - 1
      )
        return false;
      return true;
    },
  },
  // Alliance Objects
  team_2_rook: {
    team: 2,
    name: "rook",
    img: humanRook,
    sounds: [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10],
    rules: (currentPosition, targetPosition) => {
      //..try and implement rules of movement here
    },
  },
  team_2_pawn: {
    team: 2,
    name: "pawn",
    img: humanPawn,
    sounds: [p1, p2, p3, p4, p5],
    rules: (currentPosition, targetPosition, squares) => {
      // team collision check
      //if (squares.filter((square) => square.col === targetPosition.col && square.row === targetPosition.row).length > 0)
      if (
        targetPosition.row === currentPosition.row - 1 &&
        targetPosition.col === currentPosition.col + 1 &&
        targetPosition.occupied &&
        targetPosition.occupied.team !== currentPosition.occupied.team
      )
        return true;
      else if (
        targetPosition.row === currentPosition.row - 1 &&
        targetPosition.col === currentPosition.col - 1 &&
        targetPosition.occupied &&
        targetPosition.occupied.team !== currentPosition.occupied.team
      )
        return true;
      else if (targetPosition.occupied) return false;
      else if (
        targetPosition.row === currentPosition.row - 1 &&
        targetPosition.col === currentPosition.col
      ) {
        return true;
      }
      return false;
    },
  },
  team_2_knight: {
    team: 2,
    name: "knight",
    img: humanKnight,
    sounds: [knightSound, p5],
    rules: (currentPosition, targetPosition) => {
      if (
        targetPosition.row === currentPosition.row - 2 &&
        targetPosition.col === currentPosition.col - 1
      )
        return true;
      else if (
        targetPosition.row === currentPosition.row - 2 &&
        targetPosition.col === currentPosition.col + 1
      )
        return true;
      else if (
        targetPosition.row === currentPosition.row + 2 &&
        targetPosition.col === currentPosition.col + 1
      )
        return true;
      else if (
        targetPosition.row === currentPosition.row + 2 &&
        targetPosition.col === currentPosition.col - 1
      )
        return true;
      if (
        targetPosition.row === currentPosition.row - 1 &&
        targetPosition.col === currentPosition.col - 2
      )
        return true;
      else if (
        targetPosition.row === currentPosition.row - 1 &&
        targetPosition.col === currentPosition.col + 2
      )
        return true;
      else if (
        targetPosition.row === currentPosition.row + 1 &&
        targetPosition.col === currentPosition.col + 2
      )
        return true;
      else if (
        targetPosition.row === currentPosition.row + 1 &&
        targetPosition.col === currentPosition.col - 2
      )
        return true;
      else return false;
    },
  },
  team_2_bishop: {
    team: 2,
    name: "bishop",
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
    rules: (currentPosition, targetPosition) => {
      //..try and implement rules of movement here
      let arr = [
        ...targetPosition.leftUp,
        ...targetPosition.leftDown,
        ...targetPosition.rightUp,
        ...targetPosition.rightDown,
      ];
      if (arr.indexOf(currentPosition.idx) > -1) return true;
      return false;
    },
  },
  team_2_queen: {
    team: 2,
    name: "queen",
    img: humanQueen,
    sounds: [
      queenSound_1,
      queenSound_2,
      queenSound_3,
      queenSound_4,
      queenSound_5,
      queenSound_6,
    ],
    rules: (currentPosition, targetPosition) => {
      if (currentPosition.row === targetPosition.row) return true;
      else if (currentPosition.col === targetPosition.col) return true;
      else {
        let arr = [
          ...targetPosition.leftUp,
          ...targetPosition.leftDown,
          ...targetPosition.rightUp,
          ...targetPosition.rightDown,
        ];
        if (arr.indexOf(currentPosition.idx) > -1) return true;
        return false;
      }
    },
  },
  team_2_king: {
    team: 2,
    name: "king",
    img: humanKing,
    sounds: [kingSounds, knightSound],
    rules: (currentPosition, targetPosition) => {
      if (
        targetPosition.row > currentPosition.row + 1 ||
        targetPosition.row < currentPosition.row - 1 ||
        targetPosition.col > currentPosition.col + 1 ||
        targetPosition.col < currentPosition.col - 1
      )
        return false;
      return true;
    },
  },
};

const row = (i) => {
  return i < 9
    ? 1
    : i < 17
    ? 2
    : i < 25
    ? 3
    : i < 33
    ? 4
    : i < 41
    ? 5
    : i < 49
    ? 6
    : i < 57
    ? 7
    : 8;
};
const col = (i) => {
  return i < 9
    ? i
    : i < 17
    ? i - 8
    : i < 25
    ? i - 16
    : i < 33
    ? i - 24
    : i < 41
    ? i - 32
    : i < 49
    ? i - 40
    : i < 57
    ? i - 48
    : i - 56;
};

// IMPROVEMENT:
// These functions could be implemented directly on movement rules of a piece
// and not stored directly in square objects only to filter through later

// test function that replaces all 4:
// edgeRow, edgeCol, directionVertical, directionHorizontal
const findDiagonals = (i, edgeRow, edgeCol, directUpDown, directLeftRight) => {
  let arr = [];
  if (row(i) === edgeRow) return ["none"];
  if (col(i) === edgeCol) return ["none"];
  // updown = +
  // leftright = amount
  if (directUpDown === "down") {
    // problem
    for (
      let square = i + directLeftRight;
      square <= 64;
      square += directLeftRight
    ) {
      if (row(square) === edgeRow) {
        arr.push(square);
        return arr;
      } else if (col(square) === edgeCol) {
        arr.push(square);
        return arr;
      } else {
        arr.push(square);
      }
    }
    return arr;
  } else {
    for (
      let square = i - directLeftRight;
      square >= 1;
      square -= directLeftRight
    ) {
      if (row(square) === edgeRow) {
        arr.push(square);
        return arr;
      } else if (col(square) === edgeCol) {
        arr.push(square);
        return arr;
      } else {
        arr.push(square);
      }
    }
    return arr;
  }
};
// These can be replaced with calls to the above function
const findDiagonalsLeftDown = (i) => {
  let arr = [];
  if (row(i) === 8) return ["none"];
  if (col(i) === 1) return ["none"];
  for (let squareLeft = i + 7; squareLeft < 64; squareLeft += 7) {
    if (row(squareLeft) === 8) {
      arr.push(squareLeft);
      return arr;
    } else if (col(squareLeft) === 1) {
      arr.push(squareLeft);
      return arr;
    } else {
      arr.push(squareLeft);
    }
  }
  return arr;
};

const findDiagonalsRightDown = (i) => {
  let arr = [];
  if (row(i) === 8) return ["none"];
  if (col(i) === 8) return ["none"];
  for (let square = i + 9; square <= 64; square += 9) {
    if (row(square) === 8) {
      arr.push(square);
      return arr;
    } else if (col(square) === 8) {
      arr.push(square);
      return arr;
    } else {
      arr.push(square);
    }
  }
  return arr;
};

//create an "in attack range " value for all squares that is false, but turns true when a unit is in range?
// only activate if square is occupid by enemy & in range of unit
// add logic for king that forces a move that cancels in attack range

//or..
// after each unit moves run a function that checks if enemy king is in attack range
// enemy moves then function runs again, if still in attack range allowed to move = false
// if in attack range & no possible pieces to move in range & no possible pieces to kill attacking piece = gameover

// need to make sure the move the king performs does not put him into another pieces attack range
// eg logic to check rows,columns and diagonals + knight attack path: this can be a different function

// or cheat and create user buttons for check, checkmate and concede, dont create logic

// FUNCTION TO INIT BOARD WITH THEME, ONCE DEFAULT THEME CONVERTED REPLACE ABOVE FUNCTION WITH THIS:
const setBattleground = (Battleground) => {
  const {
    team_1_pawn,
    team_1_rook,
    team_1_rook2,
    team_1_bishop,
    team_1_knight,
    team_1_queen,
    team_1_king,
    team_2_pawn,
    team_2_rook,
    team_2_bishop,
    team_2_knight,
    team_2_queen,
    team_2_king,
    team_1_bishop2,
  } = Battleground;
  let arr = [];
  for (let i = 1; i <= 64; i++) {
    arr.push({
      idx: i,
      row: row(i),
      col: col(i),
      // Universal direction finder test
      // findDiagonals (i, edgeRow, edgeCol, directUpDown, directLeftRight)
      leftUp: findDiagonals(i, 1, 1, "up", 9),
      // An array of all the squares connected diagonally left down
      leftDown: findDiagonalsLeftDown(i),
      // An array of all the squares connected diagonally right Up
      rightUp: findDiagonals(i, 1, 8, "up", 7),
      // An array of all the squares connected diagonally right down
      rightDown: findDiagonalsRightDown(i),
      selected: false,
      // Maybe create a seperate function that sets occupied rules
      occupied:
        row(i) === 2
          ? team_1_pawn
          : row(i) === 7
          ? team_2_pawn
          : i === 1
          ? team_1_rook
          : // For boards with 2 characters for 1 piece
          i === 8
          ? team_1_rook2
            ? team_1_rook2
            : team_1_rook
          : i === 2 || i === 7
          ? team_1_knight
          : i === 3
          ? team_1_bishop
          : i === 6
          ? team_1_bishop2
            ? team_1_bishop2
            : team_1_bishop
          : i === 4
          ? team_1_king
          : i === 5
          ? team_1_queen
          : i === 64 || i === 57
          ? team_2_rook
          : i === 63 || i === 58
          ? team_2_knight
          : i === 62 || i === 59
          ? team_2_bishop
          : i === 60
          ? team_2_king
          : i === 61
          ? team_2_queen
          : false,
    });
  }
  // arr of Objects with each square info
  return arr;
};

const Square = ({
  idx, // square 1- 64
  row, // row 1-8
  leftUp,
  rightUp,
  leftDown,
  rightDown,
  handleSelect, // select a square w/unit
  selected, // current square is selected
  occupied, // current square is occupied
  select, // after selecting a square with a unit adopts that unit
  moveUnit, // function to move unit to a new square
  col, // col 1-8
}) => {
  // const occupantRules = occupied.rules;

  const setBg = (row) => {
    if (row % 2 !== 0) {
      return idx % 2 !== 0 ? "white" : "black";
    } else {
      return idx % 2 !== 0 ? "black" : "white";
    }
  };

  const selectOrMove = () => {
    if (select) {
      moveUnit(idx);
    } else if (occupied) {
      handleSelect(idx);
    }
  };
  return (
    <div
      onClick={selectOrMove}
      style={{
        minHeight: "12.5%",
        minWidth: "12.5%",
        border: !selected ? "2px solid black" : "4px solid red",
        background: setBg(row),
        color: "red",
        overflow: "hidden",
        fontSize: "12px",
      }}
    >
      {/*
      Row:{row}
      <br />
      col: {col}
      <br />
     
      col: {col}
      Row:{row}
      idx: {idx}
      <br />
      TestD: {leftUp}
       */}
      {occupied ? <img src={occupied.img} alt="Chest piece"></img> : ""}
    </div>
  );
};
//////
const CreateBoard = ({ setCurrentBG, wowBg, gotBg }) => {
  //const [selected, setSelected] = React.useState(false);
  const [squares, setSquares] = React.useState(
    setBattleground(gameOfThrones_1)
  ); // [{row, idx, selected}]
  const [select, setSelect] = React.useState(undefined);
  //const [mute, setMute] = React.useState(false);
  // Play sound
  const audioReaction = (selectSquare) => {
    if (!selectSquare /*|| mute*/) return;
    //Can we play via select => audio of selected
    let audio = new Audio(
      selectSquare.occupied.sounds[
        Math.round(Math.random() * selectSquare.occupied.sounds.length)
      ]
    );
    audio.play();
  };

  // This seems to work..Cleanup needed?
  React.useEffect(() => {
    //console.log("effect Added");
    audioReaction(select);
    return function cleanup() {
      //...? remove
      // Look at the React useEffect tutorial
    };
  }, [select]);

  // Selecting units
  const handleSelect = (idx) => {
    setSelect(() => squares.filter((i) => i.idx === idx)[0]);
    // Create new Squares array
    // All selected are false except the square which triggered handleSelect
    let newSquares = squares.map((square) => {
      let obj = { ...square };
      obj.selected = obj.idx === idx;
      return obj;
    });
    setSquares(newSquares);
  };

  // Moving Units
  // Only Triggered after select
  const moveUnit = (destinationIdx) => {
    let destinationSquare = squares.filter(
      (square) => square.idx === destinationIdx
    )[0];
    //  Trying to move to a square with another unit
    //  setSelect(new Square) and stop movement attempt
    if (
      squares.filter(
        (i) =>
          i.idx === destinationIdx &&
          i.occupied !== false &&
          i.occupied.team === select.occupied.team
      ).length > 0
    ) {
      return handleSelect(destinationIdx);
    }
    // implement occupied squares rules
    else if (
      select.occupied.rules(select, destinationSquare, squares) === false
    ) {
      return;
    } else {
      // Redraw Squares
      // remove all Selected
      // find Destination and add Occupant piece
      // Find old square with Occupant and remove
      // setSelect to undefined
      let newSquares = squares.map((square) => {
        let newSquareObj = { ...square }; // copy each square
        newSquareObj.selected = false; // remove selected from all
        if (newSquareObj.idx === destinationIdx)
          newSquareObj.occupied = select.occupied; // Add occupant (Pawn/Rook etc object)
        if (newSquareObj.idx === select.idx) {
          newSquareObj.occupied = false; // remove old position
          setSelect(undefined); // remove current selected
        }
        return newSquareObj;
      });
      setSquares(newSquares);
    }
  };
  return (
    <>
      {squares.map((square, index) => (
        <Square
          key={index}
          // Diagonal connecting arrays
          leftUp={square.leftUp}
          rightUp={square.rightUp}
          leftDown={square.leftDown}
          rightDown={square.rightDown}
          // Horizontal and Vertical position
          row={square.row}
          col={square.col}
          // Index of square 1-64
          idx={square.idx}
          handleSelect={handleSelect}
          moveUnit={moveUnit}
          // Square can access if a square is selected ->
          // then runs handleSelect() or moveunit()
          select={select}
          selected={square.selected}
          occupied={square.occupied}
        />
      ))}
      <button
        onClick={() => {
          setCurrentBG(wowBg);
          setSquares(setBattleground(WoWBattleground));
        }}
      >
        World of Warcraft
      </button>
      <button
        onClick={() => {
          setCurrentBG(gotBg);
          setSquares(setBattleground(gameOfThrones_1));
        }}
      >
        Game Of Thrones
      </button>

      {/*}
      <button onClick={() => setMute(!mute)}>
        {mute === true ? "Turn on Sound" : "Mute Sound"}
      </button>
      */}
    </>
  );
};

export default CreateBoard;
