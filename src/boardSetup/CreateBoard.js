import React from "react";
import "../App.css";
import rulesLookup from "./movementLookup.js";
import Square from "./square.js";

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
  // useEffect Calls
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

  // Cond 1: Find squares occupied with enemies
  const FindEnemies = (movingPiece) => {
    for (let i = 0; i < squares.length; i++) {
      if (
        rulesLookup[movingPiece.occupied.name](
          movingPiece,
          squares[i],
          squares
        ) === true &&
        squares[i].occupied.team === 2
      ) {
        return squares[i];
      }
    }
  };
  // Cond 2: find any squares you can move to
  const FindMovement = (movingPiece) => {
    for (let i = 0; i < squares.length; i++) {
      if (
        rulesLookup[movingPiece.occupied.name](
          movingPiece,
          squares[i],
          squares
        ) === true &&
        squares[i].occupied.team !== 1
      ) {
        return squares[i];
      }
    }
  };
  const checkSquare = (team1, finder) => {
    let movingPiece = team1[Math.floor(Math.random() * team1.length)];
    let testSquares = finder(movingPiece);
    if (testSquares) {
      audioReaction(movingPiece);
      return {
        destinationSquare: {
          ...testSquares,
        },
        movingPiece,
      };
    }
    team1.splice(team1.indexOf(movingPiece), 1);
    return team1.length === 1
      ? finder.name === "FindEnemies"
        ? checkSquare(
            squares.filter((sq) => sq.occupied.team === 1),
            FindMovement
          )
        : {
            destinationSquare: { ...team1[0] },
            movingPiece,
          }
      : checkSquare(team1, finder);
  };
  // Auto Move Handler
  const autoMoveUnit = () => {
    let team1 = squares.filter((square) => square.occupied.team === 1);
    // Wrap in conditional to make sure team1 still has pieces left
    if (team1.length) {
      let moveRandom = checkSquare(team1, FindEnemies);
      let { destinationSquare, movingPiece } = moveRandom;
      let newSquares = [...squares];
      let pieceObject = { ...movingPiece.occupied };
      newSquares.map((square) => {
        if (square.idx === destinationSquare.idx) {
          square.occupied = pieceObject;
        } else if (square.idx === movingPiece.idx) {
          // This was causing issues
          // (By value vs By reference assignment)
          square.occupied = false;
        }
      });
      setSquares(newSquares);
      setRound(2);
    }
  };
  // AutoMove
  // if  Round == 2 assign move to autoMove
  // run move on timer
  // remove move
  // Unsure if this is the correct cleanup, or if cleanup needed.. Must Check.
  React.useEffect(() => {
    if (round === 2 || !autoPlay) return;
    let move = autoMoveUnit;
    setTimeout(move, 1000);
    return () => {
      move = null;
    };
  }, [round, autoPlay]);

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
          // selected={square.selected}
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
  */
