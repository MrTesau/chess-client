import React from "react";
import "./App.css";

// the rules of movement
import rulesLookup from "./movementLookup.js";

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
            ? "1px solid black"
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
//////

// just clean the code/variable names up a bit, the Mapping over Square Object Array is fine.
// Virtual Dom takes care of performance issues

const CreateBoard = ({
  squares,
  setSquares,
  //setCurrentBgImg,
  // wowBg,
  //gotBg,
}) => {
  //const [selected, setSelected] = React.useState(false);

  const [selectedSquare, setSelectedSquare] = React.useState(undefined);
  //const [mute, setMute] = React.useState(false);
  const [round, setRound] = React.useState(1); // round -> square checks round = team -> round switches after a move

  //after each turn check if a king is in attack range, diagonally row col or horse
  // Also scan own kings safety before allowing a unit to move

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
  // Selecting units
  // removes previous selected = true if a peice has been selected
  // Sets a  new square object to selected = true

  const handleSelect = (idx) => {
    /*
    if (selectedSquare) {
      let newSquares = [...squares];
      newSquares[selectedSquare.idx - 1].selected = false; // find and remove prevous selected
      setSquares(newSquares); // reset squares
    }
    */
    let newSquares = [...squares];
    if (selectedSquare) {
      newSquares[selectedSquare.idx - 1].selected = false;
    }
    setSelectedSquare(squares[idx - 1]);
    newSquares[idx - 1].selected = true;
    setSquares(newSquares);
    audioReaction(newSquares[idx - 1]); // Sounds play on multiple clicks..might break
  };

  // Moving Units
  // Only Triggered after select
  const moveUnit = (destinationIdx) => {
    // try:
    let destinationSquareObj = squares[destinationIdx - 1];
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
    if (
      squares[destinationIdx - 1].occupied &&
      squares[destinationIdx - 1].occupied.team === selectedSquare.occupied.team
    ) {
      return handleSelect(destinationIdx);
    }

    // implement occupied squares rules
    else if (
      rulesLookup[selectedSquare.occupied.name](
        selectedSquare,
        destinationSquareObj,
        squares
      ) === false
    ) {
      return;
    } else {
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

      let newSquares = [...squares];
      newSquares[destinationIdx - 1].occupied = selectedSquare.occupied;
      newSquares[selectedSquare.idx - 1].occupied = false;
      newSquares[selectedSquare.idx - 1].selected = false;
      setSelectedSquare(undefined); // Transder to new square completed: remove selectedSquare
      setSquares(newSquares); // set Squares arr
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
