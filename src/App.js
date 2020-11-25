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
  rules: (currentPosition, targetPosition) => {
    //..try and implement rules of movement here
  },
};
const Rook = {
  name: "rook",
  img: rook,
  rules: (currentPosition, targetPosition) => {
    //..try and implement rules of movement here
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
  select, // after selecting a square with a unit adopts that unit
  moveUnit, // function to move unit to a new square
  col, // col 1-8
}) => {
  const occupantRules = occupied.rules;

  const setBg = (row) => {
    if (row % 2 !== 0) {
      return idx % 2 !== 0 ? "white" : "black";
    } else {
      return idx % 2 !== 0 ? "black" : "white";
    }
  };

  const selectOrMove = () => {
    if (select) {
      moveUnit(idx, occupantRules);
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
  const [select, setSelect] = React.useState();

  // Play sound
  const audioReaction = () => {
    let audio = new Audio(
      Pawn.sounds[Math.round(Math.random() * Pawn.sounds.length)]
    );
    audio.play();
  };

  // Selecting units
  const handleSelect = (idx) => {
    setSelect(squares.filter((i) => i.idx === idx)[0]);
    // Create new Squares array
    // All seleccted are false except the square which triggered handleSelect
    let newSquares = squares.map((square) => {
      let obj = { ...square };
      obj.selected = obj.idx === idx;
      return obj;
    });
    setSquares(newSquares);
    audioReaction();
  };

  // Moving Units
  // Triggered after a square has already been selected for movement
  const moveUnit = (destinationIdx, occupantRules) => {
    let destinationSquare = squares.filter((i) => i.idx === destinationIdx)[0];
    // Tried to move to a square with another unit
    // set Select on the new Square and stop movement attempt
    if (
      squares.filter((i) => i.idx === destinationIdx && i.occupied !== false)
        .length > 0
    ) {
      return handleSelect(destinationIdx);
    }
    // rule to only allow units to move 1 square away
    else if (
      destinationSquare.row !== select.row + 1 ||
      destinationSquare.col !== select.col
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
          select={select}
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
