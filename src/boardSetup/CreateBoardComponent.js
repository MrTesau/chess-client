import React, { useEffect } from "react";
import rulesLookup from "./boardFunctions/movementLookup.js";
import Square from "./SquareComponent.js";

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
    MoveChessPiece,
    AudioReaction,
  } = props;
  // Autoplay useEffect
  useEffect(() => {
    if (!autoPlay || round === 2) return;
    setTimeout(() => {
      let newSquaresSettings = playFunction(squares);
      setRound(2);
      if (!newSquaresSettings.length) return;
      AudioReaction(newSquaresSettings[0]);
      MoveChessPiece(newSquaresSettings[0], newSquaresSettings[1]);
    }, 1000);
  }, [round, autoPlay]);

  // Select a Square
  const handleSelect = (idx) => {
    if ((multiplayer && round === 0) || (multiplayer && player !== round))
      return;
    let newSquares = [...squares];
    if (selectedSquare) {
      newSquares[selectedSquare.idx - 1].selected = false;
    }
    setSelectedSquare(squares[idx - 1]);
    newSquares[idx - 1].selected = true;
    setSquares(newSquares);
    AudioReaction(idx - 1);
  };
  // Moving Units - After square is selected
  const moveUnit = (destinationIdx) => {
    if (
      squares[destinationIdx - 1].occupied.team === selectedSquare.occupied.team
    ) {
      return handleSelect(destinationIdx);
    } else if (
      rulesLookup[selectedSquare.occupied.name](
        selectedSquare,
        squares[destinationIdx - 1],
        squares
      )
    ) {
      if (multiplayer) {
        SendMove({
          round: round,
          movingPiece: selectedSquare.idx - 1,
          destination: destinationIdx - 1,
        });
      }
      MoveChessPiece(selectedSquare.idx - 1, destinationIdx - 1);
      setSelectedSquare(undefined);
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

// useEffect Calls
// Dont need cleanup as the effect only updates current value
// not causing an auto asynchronous function call eg an interval timer
// Nothing to "unregister"
/*
Old Cleanup Functions (obsolete)
 Future Features to implement:
After each turn check if a king is in attack range, diagonally row col or horse
Also scan own kings safety before allowing a unit to move

const kingInCheck = () => {
    //... Run all enemy unit attack moves
    // see if king is in range, if yes force king to break/piece to kill attacker
  };

*/
