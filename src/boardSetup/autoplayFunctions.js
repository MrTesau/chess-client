import rulesLookup from "./movementLookup.js";

const AutoplayHelpers = {
  FindEnemy: {
    name: "findEnemy",
    move: (movingPiece, squares) => {
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
    },
  },
  FindSquare: {
    move: (movingPiece, squares) => {
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
    },
  },
};
export default AutoplayHelpers;
