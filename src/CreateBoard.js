import React from "react";
import "./App.css";
// Battleground themes
import gameOfThrones_1 from "./battlegrounds/got/got_North_V_Zombies.js";
import WoWBattleground from "./battlegrounds/wow_hordvally.js";
// the rules of movement
import rulesLookup from "./movementLookup.js";

// Bishop rules::
// up or down? target > current
// that leaves 2 arrays
// find array current position is located in
// find squares between target and current that are occupied,
// dont need to go right up to target as friendly will switch select and enemy will be eaten
// if squares between are occupied return false

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

// Square Objects
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
      isSquareSelected: false,
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
  const setBg = (row) => {
    if (row % 2 !== 0) {
      return idx % 2 !== 0 ? "rgb(245, 230, 217)" : "#121213";
    } else {
      return idx % 2 !== 0 ? "#121213" : "rgb(245, 230, 217)";
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
        border: !selected ? "1px solid black" : "2px solid red",
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

// just clean the code/variable names up a bit, the Mapping over Square Object Array is fine.
// Virtual Dom takes care of performance issues
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
        Math.floor(Math.random() * selectSquare.occupied.sounds.length)
      ]
    );
    audio.currentTime = 0;
    audio.play();
  };

  // This seems to work..Cleanup needed?
  React.useEffect(() => {
    //console.log("effect Added");
    if (select) audioReaction(select);
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
    let destinationSquareObj = squares.filter(
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
      rulesLookup[select.occupied.name](select, destinationSquareObj) === false
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
          setSelect(undefined);
        }}
      >
        World of Warcraft
      </button>
      <button
        onClick={() => {
          setCurrentBG(gotBg);
          setSquares(setBattleground(gameOfThrones_1));
          setSelect(undefined);
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
