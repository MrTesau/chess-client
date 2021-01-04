import React, { useEffect, useState } from "react";
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
    playFunction,
    SendMove,
    player,
    multiplayer,
    MoveData,

    audioReaction,
  } = props;

  // useEffect Calls

  // Dont need cleanup as the effect only updates current value
  // not causing an auto asynchronous function call eg an interval timer
  // Nothing to "unregister"
  useEffect(() => {
    if (!autoPlay || round === 2) return;
    setTimeout(() => {
      let newSquaresSettings = playFunction(squares);
      setRound(2);
      if (!newSquaresSettings.length) return;
      setSquares(newSquaresSettings[1]);
      audioReaction(newSquaresSettings[0]);
    }, 1000);
  }, [round, autoPlay]);
  // Select Square
  const handleSelect = (idx) => {
    if (multiplayer && round === 0) return; // cant move until 2nd player enters
    if (multiplayer && player !== round) return; // player2 joins round = 2, moves, round = 1
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
      //Need to condtionally wrap this (multiplayer only)
      if (multiplayer) {
        SendMove({
          round: round,
          movingPiece: selectedSquare.idx - 1,
          destination: destinationIdx - 1,
        });
      }
      let newSquares = [...squares];
      newSquares[destinationIdx - 1].occupied = selectedSquare.occupied;
      newSquares[selectedSquare.idx - 1].occupied = false;
      newSquares[selectedSquare.idx - 1].selected = false;
      setSelectedSquare(undefined);
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
          leftUp={square.leftUp}
          rightUp={square.rightUp}
          leftDown={square.leftDown}
          rightDown={square.rightDown}
          row={square.row}
          col={square.col}
          idx={square.idx}
          handleSelect={handleSelect}
          moveUnit={moveUnit}
          selectedSquare={selectedSquare}
          occupied={square.occupied}
        />
      ))}
    </>
  );
};
export default CreateBoard;
/*

Old Cleanup Functions (obsolete)


    return () => {
      console.log("The COMPNONENT IS DISMOUNTING");
    };
      // Dont think cleanup is needed
 
    return () => {
      setAudioFiles(null);
    };
 
Future Features to implement:
After each turn check if a king is in attack range, diagonally row col or horse
Also scan own kings safety before allowing a unit to move

const kingInCheck = () => {
    //... Run all enemy unit attack moves
    // see if king is in range, if yes force king to break/piece to kill attacker
  };


   // Get player Number from Server in initial create cycle
  React.useEffect(() => {
    if (round === PlayerNumber) return; // so, we call just once
    let move = getGameUpdate; // call function every 2 seconds to check updated round?
    move(PlayerNumber);
    // Set gameUpdate to state and update board
    return () => {
      move = null;
    };
  }, [round]);

    // Test play Enemy audio
  /*
  React.useEffect(() => {
    if (!multiplayer || enemyMove) return;
    let player = audioReaction;
    player(squares[enemyMove].occupied); //might need to call with destination idx depending on state update
    return () => {
      console.log("The COMPNONENT IS DISMOUNTING");
      player = null;
    };
  }, [enemyMove]);
*/
