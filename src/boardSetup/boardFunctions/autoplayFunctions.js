import rulesLookup from "./movementLookup.js";

const AutoplayHelpers = {
  // Auto Move Handler Start
  autoMoveUnit: (squares) => {
    let team1 = squares.filter((square) => square.occupied.team === 1);
    // Wrap in conditional to make sure team1 still has pieces left
    if (team1.length) {
      let moveRandom = AutoplayHelpers.checkSquare(
        team1,
        AutoplayHelpers.FindEnemy,
        squares
      );
      let { destinationSquare, movingPiece } = moveRandom;
      return [movingPiece.idx - 1, destinationSquare.idx - 1];
    }
  },
  // Checks For Enemies first then Any Squares
  checkSquare: (team1, finder, squares) => {
    let movingPiece = team1[Math.floor(Math.random() * team1.length)];
    let testSquares = finder.move(movingPiece, squares);
    if (testSquares) {
      return {
        destinationSquare: {
          ...testSquares,
        },
        movingPiece,
      };
    }
    team1.splice(team1.indexOf(movingPiece), 1);
    return team1.length === 1
      ? finder.name === "findEnemy" // cant access function.name in production, converted to object
        ? AutoplayHelpers.checkSquare(
            squares.filter((sq) => sq.occupied.team === 1),
            AutoplayHelpers.FindSquare,
            squares
          )
        : {
            destinationSquare: { ...team1[0] },
            movingPiece,
          }
      : AutoplayHelpers.checkSquare(team1, finder, squares);
  },
  // Finds an Enemy to Attack
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
  // Finds Any Square to Move
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
