import React from "react";
import "./App.css";
import pawn from "./assets/img/Untitled.gif";
import rook from "./assets/img/rook.gif";
import orcSoundOne from "./assets/orc1.mp3";
import orcSoundTwo from "./assets/doing.mp3";
import orcSoundThree from "./assets/happy.mp3";
import orcSoundFour from "./assets/ok-dokie.mp3";
import orcSoundFive from "./assets/yes.mp3";

const Pawn = {
  name: "pawn",
  img: pawn,
  sounds: [orcSoundOne, orcSoundTwo, orcSoundThree, orcSoundFour, orcSoundFive],
};
const Rook = {
  name: "rook",
  img: rook,
};

const ChessPiece = ({ name, img }) => {
  return (
    <>
      <img src={img}></img>
    </>
  );
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
    : 1 - 56;
};

const initialBoard = () => {
  let arr = [];
  for (let i = 1; i <= 64; i++) {
    arr.push({
      idx: i,
      row: row(i),
      col: col(i),
      selected: false,
      occupied: row(i) === 2 ? Pawn : i === 1 || i === 8 ? Rook : false,
    });
  }
  return arr;
};

const Square = ({
  idx, // square 1- 64
  row, // row 1-8
  handleSelect, // select a square w/unit
  selected, // current square is selected
  occupied, // current square is occupied
  currentUnit, // after selecting a square with a unit adopts that unit
  moveUnit, // function to move unit to a new square
  col, // col 1-8
}) => {
  const setBg = (row) => {
    if (row % 2 !== 0) {
      return idx % 2 !== 0 ? "white" : "black";
    } else {
      return idx % 2 !== 0 ? "black" : "white";
    }
  };

  const selectOrMove = () => {
    if (currentUnit) {
      moveUnit(idx);
    } else if (occupied) {
      //audio.play();
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
      }}
    >
      {/*       
      Row: {row}
      col: {col}
      */}
      {occupied ? <img src={occupied.img}></img> : ""}
    </div>
  );
};
//////

const CreateBoard = () => {
  //const [selected, setSelected] = React.useState(false);
  const [squares, setSquares] = React.useState(initialBoard()); // [{row, idx, selected}]
  const [currentUnit, setCurrentUnit] = React.useState();

  // Play sound
  const audioReaction = () => {
    let audio = new Audio(
      Pawn.sounds[Math.round(Math.random() * Pawn.sounds.length)]
    );
    audio.play();
  };

  // Selecting units
  const handleSelect = (idx) => {
    setCurrentUnit(squares.filter((i) => i.idx === idx)[0]);
    let newSquares = squares.map((square) => {
      let obj = { ...square };
      obj.selected = obj.idx === idx;
      return obj;
    });
    setSquares(newSquares);
    audioReaction();
  };

  // Moving Units
  const moveUnit = (idx) => {
    let selectedSquare = squares.filter((i) => i.idx === idx)[0];
    // check if you clicked a square with another unit
    if (
      squares.filter((i) => i.idx === idx && i.occupied !== false).length > 0
    ) {
      return handleSelect(idx);
    }
    // figure out a rule to only allow units to move 1 square away
    else if (
      selectedSquare.row !== currentUnit.row + 1 ||
      selectedSquare.col !== currentUnit.col
    ) {
      return;
    } else {
      let newSquares = squares.map((square) => {
        let obj = { ...square }; // copy each square
        obj.selected = false; // remove selected
        if (obj.idx === idx) obj.occupied = currentUnit.occupied; // add occupant
        if (currentUnit.idx === obj.idx) {
          obj.occupied = false; // remove old position
          setCurrentUnit(null); // remove current selected
        }
        return obj;
      });
      setSquares(newSquares);
      audioReaction();
    }
  };

  return (
    <>
      {squares.map((square) => (
        <Square
          row={square.row}
          col={square.col}
          idx={square.idx}
          handleSelect={handleSelect}
          moveUnit={moveUnit}
          currentUnit={currentUnit}
          selected={square.selected}
          occupied={square.occupied}
        />
      ))}
      <button onClick={() => setSquares(initialBoard())}>Reset</button>
    </>
  );
};

const App = () => {
  return (
    <div className="container">
      <div className="board-container">
        <CreateBoard />
      </div>
    </div>
  );
};

export default App;

// let squares = [];
// create Rows arr - might not need, Im bad at Maths
/*
  let rows = [];
  let row = [];
  for (let rowIdx = 1; rowIdx <= 64; rowIdx++) {
    row.push(rowIdx);
    if (row.length === 8) {
      rows.push(row);
      row = [];
    }
  }
  */
