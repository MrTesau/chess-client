import React from "react";
import "./App.css";
// the rules of movement
import rulesLookup from "./movementLookup.js";
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
  selectedSquare, // after selecting a square with a unit adopts that unit
  moveUnit, // function to move unit to a new square
  col, // col 1-8
  round,
}) => {
  const setBg = (row) => {
    if (row % 2 !== 0) {
      return idx % 2 !== 0 ? "rgb(245, 230, 217)" : "#121213";
    } else {
      return idx % 2 !== 0 ? "#121213" : "rgb(245, 230, 217)";
    }
  };

  const selectOrMove = () => {
    if (selectedSquare) {
      moveUnit(idx);
    } else if (occupied) {
      if (occupied.team === round) {
        handleSelect(idx);
      }
    }
  };
  return (
    <div
      onClick={selectOrMove}
      style={{
        minHeight: "12.5%",
        minWidth: "12.5%",
        border: !selected
          ? "none" /*setBg(row) === "rgb(245, 230, 217)"
            ? "1px solid  #121213"
            : "none"*/
          : "2px solid red",
        background: setBg(row),
        color: "red",
        overflow: "hidden",
        fontSize: "11px",
      }}
    >
      {/*
      lD: {leftDown}
      RD:{rightUp}
      idx: {idx}
      <br />
      lu: {leftUp}
      rU:{rightUp}
      */}
      {occupied ? <img src={occupied.img} alt="Chest piece"></img> : ""}
    </div>
  );
};
///

// Mapping over Square Object Array is fine.
// Virtual Dom takes care of performance issues

const CreateBoard = ({
  squares,
  setSquares,
  selectedSquare,
  setSelectedSquare,
  round,
  setRound,
  //setCurrentBgImg,
  // wowBg,
  //gotBg,
}) => {
  //const [selected, setSelected] = React.useState(false);

  //const [selectedSquare, setSelectedSquare] = React.useState(undefined);
  //const [mute, setMute] = React.useState(false);
  // round -> square checks round = team -> round switches after a move

  //after each turn check if a king is in attack range, diagonally row col or horse
  // Also scan own kings safety before allowing a unit to move
  const kingInCheck = () => {
    //... Run all enemy unit attack moves
    // see if king is in range, if yes force king to break/piece to kill attacker
  };

  // removed select check
  const audioReaction = (squareWithAudio) => {
    if (!squareWithAudio /*||mute*/) return;
    //Can we play via select => audio of selected
    let audio = new Audio(
      squareWithAudio.occupied.sounds[
        Math.floor(Math.random() * squareWithAudio.occupied.sounds.length)
      ]
    );
    audio.volume = 0.05;
    //audio.currentTime = 0;
    audio.play();
  };

  // Selecting units
  // removes previous selected = true if a peice has been selected
  // Sets a  new square object to selected = true
  const handleSelect = (idx) => {
    let newSquares = [...squares];
    if (selectedSquare) {
      newSquares[selectedSquare.idx - 1].selected = false;
    }
    setSelectedSquare(squares[idx - 1]);
    newSquares[idx - 1].selected = true;
    setSquares(newSquares);
    // Sounds play on multiple clicks..might break
    audioReaction(newSquares[idx - 1]);
  };

  // Moving Units
  // Only Triggered after selectSquare defined
  const moveUnit = (destinationIdx) => {
    let destinationSquareObj = squares[destinationIdx - 1];
    if (
      squares[destinationIdx - 1].occupied &&
      squares[destinationIdx - 1].occupied.team === selectedSquare.occupied.team
    ) {
      return handleSelect(destinationIdx);
    }
    // implement occupied squares movement rules
    else if (
      rulesLookup[selectedSquare.occupied.name](
        selectedSquare,
        destinationSquareObj,
        squares
      ) === false
    ) {
      return;
    } else {
      let newSquares = [...squares];
      newSquares[destinationIdx - 1].occupied = selectedSquare.occupied;
      newSquares[selectedSquare.idx - 1].occupied = false;
      newSquares[selectedSquare.idx - 1].selected = false;
      // Transfer to new square completed: remove selectedSquare
      setSelectedSquare(undefined);
      // set Squares arr
      setSquares(newSquares);
      setRound((round) => (round === 1 ? 2 : 1));
    }
  };
  return (
    <>
      {squares.map((square, index) => (
        <Square
          round={round}
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
          selectedSquare={selectedSquare}
          selected={square.selected}
          occupied={square.occupied}
        />
      ))}
      {/*   
      <div className="volume">
        <input type="range" />
        <div id="v lm"></div>
      </div>
      */}

      {/*}
      <button onClick={() => setMute(!mute)}>
        {mute === true ? "Turn on Sound" : "Mute Sound"}
      </button>
      */}
    </>
  );
};
//mix n match teams
export default CreateBoard;

// Old code That might be useful:

/* Old code for destSquareObj: Might need to go back
    let destinationSquareObj = squares.filter(
      (square) => square.idx === destinationIdx
    )[0];

    */
//  Trying to move to a square with another unit
/* Old working Code:
     squares.filter(
        (i) =>
          i.idx === destinationIdx &&
          i.occupied !== false &&
          i.occupied.team === selectedSquare.occupied.team
      ).length > 0
      */
/*old working code:
       let newSquares = squares.map((square) => {
        let newSquareObj = { ...square }; // copy each square
        newSquareObj.selected = false; // remove selected from all
        if (newSquareObj.idx === destinationIdx)
          newSquareObj.occupied = selectedSquare.occupied; // Add occupant (Pawn/Rook etc object)
        if (newSquareObj.idx === selectedSquare.idx) {
          newSquareObj.occupied = false; // remove old position
          setSelectedSquare(undefined); // remove current selected
        }
        return newSquareObj;
      });
      */
/* Might not need as we call audioReaction without relying on a state
  React.useEffect(() => {
    audioReaction(selectedSquare);
    return function cleanup() {
      //...? remove
      // This seems to work..Cleanup needed?
      // Look at the React useEffect tutorial
    };
  }, [selectedSquare]);
  */
