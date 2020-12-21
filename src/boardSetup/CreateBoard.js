import React from "react";
import "../App.css";
import rulesLookup from "./movementLookup.js";

const Square = ({
  // square 1-64
  idx,
  // row 1-8
  row,
  //leftUp,
  //rightUp,
  //leftDown,
  //rightDown,
  //select an occupied square
  handleSelect,
  // Boolean: current square is selected
  selected,
  // current square is occupied ? pieceObject : false
  occupied,
  // Pass createBoard.selectedSquare to allow moveUnit() calls
  selectedSquare,
  // pass props moveUnit
  moveUnit,
  //col, // col 1-8
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
      id="chess-square"
      onClick={selectOrMove}
      style={{
        border: !selected ? "none" : "2px solid red",
        background: setBg(row),
        overflow: "hidden",
      }}
    >
      {/* 
      For testing Positional Rules:

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
const CreateBoard = ({
  squares,
  setSquares,
  selectedSquare,
  setSelectedSquare,
  round,
  setRound,
  volume,
  currentBG,
  // wowBg,
  //gotBg,
}) => {
  const [audioFiles, setAudioFiles] = React.useState({});
  React.useEffect(() => {
    let audioLookup = {};
    squares.map((square) => {
      if (square.occupied) {
        let arr = square.occupied.sounds.map((sound) => new Audio(sound));
        audioLookup[square.occupied.name] = arr;
      }
    });
    setAudioFiles(audioLookup);
  }, [currentBG]);
  const audioReaction = (squareWithAudio) => {
    if (!squareWithAudio) return;
    /*
    let audio = new Audio(
      squareWithAudio.occupied.sounds[
        Math.floor(Math.random() * squareWithAudio.occupied.sounds.length)
      ]
    );
    */

    audioFiles[squareWithAudio.occupied.name][
      Math.floor(Math.random() * squareWithAudio.occupied.sounds.length)
    ].play();

    //console.log(audioFiles);
    //console.log(squareWithAudio);
  };
  // Select Square
  const handleSelect = (idx) => {
    let newSquares = [...squares];
    if (selectedSquare) {
      newSquares[selectedSquare.idx - 1].selected = false;
    }
    setSelectedSquare(squares[idx - 1]);
    newSquares[idx - 1].selected = true;
    setSquares(newSquares);
    if (volume) {
      audioReaction(newSquares[idx - 1]);
    }
  };
  // Moving Units - After square is selected
  const moveUnit = (destinationIdx) => {
    let destinationSquareObj = squares[destinationIdx - 1];
    if (
      squares[destinationIdx - 1].occupied &&
      squares[destinationIdx - 1].occupied.team === selectedSquare.occupied.team
    ) {
      return handleSelect(destinationIdx);
    } else if (
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
          selectedSquare={selectedSquare}
          selected={square.selected}
          occupied={square.occupied}
        />
      ))}
    </>
  );
};
export default CreateBoard;
/*
Future Features to implement:

After each turn check if a king is in attack range, diagonally row col or horse
Also scan own kings safety before allowing a unit to move

const kingInCheck = () => {
    //... Run all enemy unit attack moves
    // see if king is in range, if yes force king to break/piece to kill attacker
  };
  
Basic autoMove functionality:

  const autoMove = () => {
    console.log("called");
    console.log(round);
    if (() => round === 1) return;
    let team2 = squares.filter((square) => square.occupied.team === 2);
    console.log(team2);
    // select a piece
    let movingPiece = team2[Math.floor(Math.random() * team2.length)];
    // find if it can move anywhere
    if (canMove(movingPiece) === false) {
      if (team2.length === 0) return;
      team2 = team2.filter((square) => square.idx !== movingPiece.idx);
      movingPiece = team2[Math.floor(Math.random() * team2.length)];
      canMove(movingPiece);
    } else {
      let destination = canMove(movingPiece);
      handleSelected(movingPiece.idx);
      moveUnit(destination);
    }
  };
  const canMove = (movingPiece) => {
    for (let i = 0; i < 64; i++) {
      if (
        rulesLookup[movingPiece.occupied.name](movingPiece, squares[i], squares)
      ) {
        return i + 1;
      }
    }
    return false;
  };

  */
