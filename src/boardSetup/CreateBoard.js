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
const CreateBoard = (props) => {
  const {
    squares,
    setSquares,
    selectedSquare,
    setSelectedSquare,
    round,
    setRound,
    volume,
    currentBG,
    autoPlay,
  } = props;
  const [audioFiles, setAudioFiles] = React.useState({});
  React.useEffect(() => {
    let audioLookup = {};
    squares.map((square) => {
      if (square.occupied) {
        let arr = square.occupied.sounds.map((sound) => new Audio(sound));
        square.occupied.uniqueN
          ? (audioLookup[square.occupied.uniqueN] = arr)
          : (audioLookup[square.occupied.name] = arr);
      }
    });
    setAudioFiles(audioLookup);
    // Again unsure if cleanup is needed
    return () => {
      setAudioFiles(null);
    };
  }, [currentBG]);
  const audioReaction = (squareWithAudio) => {
    audioFiles[
      squareWithAudio.occupied.uniqueN
        ? squareWithAudio.occupied.uniqueN
        : squareWithAudio.occupied.name
    ][
      Math.floor(Math.random() * squareWithAudio.occupied.sounds.length)
    ].play();
  };
  // check moving square
  const checkSquare = (team2) => {
    let movingPiece = team2[Math.floor(Math.random() * team2.length)];
    for (let i = 0; i < 64; i++) {
      if (
        rulesLookup[movingPiece.occupied.name](
          movingPiece,
          squares[i],
          squares
        ) === true &&
        squares[i].occupied.team !== 2
      ) {
        audioFiles[movingPiece.occupied.name][
          Math.floor(Math.random() * movingPiece.occupied.sounds.length)
        ].play();
        return { destinationSquare: squares[i], movingPiece };
      }
    }
    return checkSquare(team2);
  };
  const autoMoveUnit = () => {
    let team2 = squares.filter((square) => square.occupied.team === 2);
    let moveRandom = checkSquare(team2);
    let { destinationSquare, movingPiece } = moveRandom;
    let newSquares = [...squares];
    newSquares.map((square) => {
      if (square.idx === destinationSquare.idx) {
        square.occupied = movingPiece.occupied;
      } else if (square.idx === movingPiece.idx) {
        square.occupied = false;
      }
    });
    // set squares, set round
    setSquares(newSquares);
    setRound(1);
  };
  // AutoMove
  // check round
  // if 2 assign move to autoMove
  // run move on timer
  // remove move
  // im unsure if this is the correct way to cleanup, or if this is even needed.. Must Check.
  React.useEffect(() => {
    console.log("Adding");
    if (round === 1 || !autoPlay) return;
    let move = autoMoveUnit;
    setTimeout(move, 1000);
    return () => {
      console.log("unmounting...");
      move = null;
    };
  }, [round]);

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
      //moveFunction();
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
