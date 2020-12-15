const movementRules = {
  // Team 1 Rules:
  team_1_pawn: (currentPosition, targetPosition, squares) => {
    // team collision check
    if (
      currentPosition.row === 2 &&
      targetPosition.row === 4 &&
      targetPosition.occupied === false
    ) {
      return true;
    } else if (
      targetPosition.row === currentPosition.row + 1 &&
      targetPosition.col === currentPosition.col + 1 &&
      targetPosition.occupied &&
      targetPosition.occupied.team !== currentPosition.occupied.team
    ) {
      return true;
    } else if (
      targetPosition.row === currentPosition.row + 1 &&
      targetPosition.col === currentPosition.col - 1 &&
      targetPosition.occupied &&
      targetPosition.occupied.team !== currentPosition.occupied.team
    ) {
      return true;
    } else if (
      targetPosition.row === currentPosition.row + 1 &&
      targetPosition.col === currentPosition.col
    ) {
      return true;
    } else if (targetPosition.occupied) return false;

    return false;
  },
  team_1_rook: (currentPosition, targetPosition, squares) => {
    if (
      targetPosition.row !== currentPosition.row &&
      targetPosition.col !== currentPosition.col
    )
      return false;
    else if (targetPosition.row === currentPosition.row) {
      let movementRow = squares.filter(
        (square) => square.row === currentPosition.row
      );
      movementRow =
        currentPosition.idx < targetPosition.idx
          ? movementRow.filter(
              (square) =>
                square.idx < targetPosition.idx &&
                square.idx > currentPosition.idx &&
                square.occupied !== false
            )
          : movementRow.filter(
              (square) =>
                square.idx > targetPosition.idx &&
                square.idx < currentPosition.idx &&
                square.occupied !== false
            );
      return movementRow.length === 0;
    } else if (targetPosition.col === currentPosition.col) {
      let movementCol = squares.filter(
        (square) => square.col === currentPosition.col
      );

      movementCol =
        currentPosition.idx < targetPosition.idx
          ? movementCol.filter(
              (square) =>
                square.idx < targetPosition.idx &&
                square.idx > currentPosition.idx &&
                square.occupied !== false
            )
          : movementCol.filter(
              (square) =>
                square.idx > targetPosition.idx &&
                square.idx < currentPosition.idx &&
                square.occupied !== false
            );
      return movementCol.length === 0;
    }
  },
  team_1_knight: (currentPosition, targetPosition) => {
    if (
      targetPosition.row === currentPosition.row - 2 &&
      targetPosition.col === currentPosition.col - 1
    )
      return true;
    else if (
      targetPosition.row === currentPosition.row - 2 &&
      targetPosition.col === currentPosition.col + 1
    )
      return true;
    else if (
      targetPosition.row === currentPosition.row + 2 &&
      targetPosition.col === currentPosition.col + 1
    )
      return true;
    else if (
      targetPosition.row === currentPosition.row + 2 &&
      targetPosition.col === currentPosition.col - 1
    )
      return true;
    if (
      targetPosition.row === currentPosition.row - 1 &&
      targetPosition.col === currentPosition.col - 2
    )
      return true;
    else if (
      targetPosition.row === currentPosition.row - 1 &&
      targetPosition.col === currentPosition.col + 2
    )
      return true;
    else if (
      targetPosition.row === currentPosition.row + 1 &&
      targetPosition.col === currentPosition.col + 2
    )
      return true;
    else if (
      targetPosition.row === currentPosition.row + 1 &&
      targetPosition.col === currentPosition.col - 2
    )
      return true;
    else return false;
  },
  team_1_bishop: (currentPosition, targetPosition, squares) => {
    let arr = [
      ...targetPosition.leftUp,
      ...targetPosition.leftDown,
      ...targetPosition.rightUp,
      ...targetPosition.rightDown,
    ];
    // Return if targets Diagonally connected Array of connected idx's does not contain currentLocation.idx
    if (arr.indexOf(currentPosition.idx) < 0) return false;
    // Up board ( curr < target) eg idx 2 to idx 9
    else {
      // finds the left or right direction the current square is going
      let directionArr =
        targetPosition.leftUp.indexOf(currentPosition.idx) >= 0
          ? [...targetPosition.leftUp]
          : targetPosition.rightUp.indexOf(currentPosition.idx) >= 0
          ? [...targetPosition.rightUp]
          : targetPosition.leftDown.indexOf(currentPosition.index) >= 0
          ? [...targetPosition.leftDown]
          : [...targetPosition.rightDown];
      // upsqauresArr contains idx values. idexes are +1 of a zero indexed array (squares first idx = 1) so squares[0] == idx:1
      directionArr = directionArr.filter((i) => i !== "none");
      if (currentPosition.idx < targetPosition.idx) {
        // let the problem ones through ( occupied & in range)
        // must remember the range (occupied square must be in between or it doesnt matter)
        directionArr = directionArr.filter(
          (i) =>
            squares[i - 1].occupied !== false &&
            i < targetPosition.idx &&
            i > currentPosition.idx
        );
        // array should always contain current position. if anything else is present a piece is blocking it
        return directionArr.length === 0;
      } else if (currentPosition.idx > targetPosition.idx) {
        directionArr = directionArr.filter(
          (i) =>
            squares[i - 1].occupied !== false &&
            i > targetPosition.idx &&
            i < currentPosition.idx
        );
        return directionArr.length === 0;
      }
    }
  },
  // could I use Bishop + Rook rules for queen? YES
  team_1_queen: (currentPosition, targetPosition, squares) => {
    // Sneaky method to try and use bishop + rook methods
    let results = [];
    if (
      currentPosition.row === targetPosition.row ||
      currentPosition.col === targetPosition.col
    ) {
      let team_1_rook = movementRules.team_1_rook.bind(movementRules);
      results.push(team_1_rook(currentPosition, targetPosition, squares));
    } else {
      let team_1_bishop = movementRules.team_1_bishop.bind(movementRules);
      results.push(team_1_bishop(currentPosition, targetPosition, squares));
    }
    return results.indexOf(true) > -1;
  },
  team_1_king: (currentPosition, targetPosition) => {
    if (
      targetPosition.row > currentPosition.row + 1 ||
      targetPosition.row < currentPosition.row - 1 ||
      targetPosition.col > currentPosition.col + 1 ||
      targetPosition.col < currentPosition.col - 1
    )
      return false;
    return true;
  },
  // Team 2 Rules:
  team_2_rook: (currentPosition, targetPosition, squares) => {
    if (
      targetPosition.row !== currentPosition.row &&
      targetPosition.col !== currentPosition.col
    )
      return false;
    else if (targetPosition.row === currentPosition.row) {
      let movementRow = [...squares];
      movementRow.filter((square) => square.row === currentPosition.row);
      movementRow =
        currentPosition.idx < targetPosition.idx
          ? movementRow.filter(
              (square) =>
                square.idx < targetPosition.idx &&
                square.idx > currentPosition.idx &&
                square.occupied !== false
            )
          : movementRow.filter(
              (square) =>
                square.idx > targetPosition.idx &&
                square.idx < currentPosition.idx &&
                square.occupied !== false
            );
      return movementRow.length === 0;
    } else if (targetPosition.col === currentPosition.col) {
      let movementCol = squares.filter(
        (square) => square.col === currentPosition.col
      );
      movementCol =
        currentPosition.idx < targetPosition.idx
          ? movementCol.filter(
              (square) =>
                square.idx < targetPosition.idx &&
                square.idx > currentPosition.idx &&
                square.occupied !== false
            )
          : movementCol.filter(
              (square) =>
                square.idx > targetPosition.idx &&
                square.idx < currentPosition.idx &&
                square.occupied !== false
            );
      return movementCol.length === 0;
    }
  },
  team_2_pawn: (currentPosition, targetPosition, squares) => {
    if (currentPosition.row === 7) {
      if (targetPosition.row === 5 && targetPosition.occupied === false)
        return true;
    }
    // team collision check
    //if (squares.filter((square) => square.col === targetPosition.col && square.row === targetPosition.row).length > 0)
    if (
      targetPosition.row === currentPosition.row - 1 &&
      targetPosition.col === currentPosition.col + 1 &&
      targetPosition.occupied &&
      targetPosition.occupied.team !== currentPosition.occupied.team
    )
      return true;
    else if (
      targetPosition.row === currentPosition.row - 1 &&
      targetPosition.col === currentPosition.col - 1 &&
      targetPosition.occupied &&
      targetPosition.occupied.team !== currentPosition.occupied.team
    )
      return true;
    else if (targetPosition.occupied) return false;
    else if (
      targetPosition.row === currentPosition.row - 1 &&
      targetPosition.col === currentPosition.col
    ) {
      return true;
    }
    return false;
  },
  team_2_knight: (currentPosition, targetPosition) => {
    if (
      targetPosition.row === currentPosition.row - 2 &&
      targetPosition.col === currentPosition.col - 1
    )
      return true;
    else if (
      targetPosition.row === currentPosition.row - 2 &&
      targetPosition.col === currentPosition.col + 1
    )
      return true;
    else if (
      targetPosition.row === currentPosition.row + 2 &&
      targetPosition.col === currentPosition.col + 1
    )
      return true;
    else if (
      targetPosition.row === currentPosition.row + 2 &&
      targetPosition.col === currentPosition.col - 1
    )
      return true;
    if (
      targetPosition.row === currentPosition.row - 1 &&
      targetPosition.col === currentPosition.col - 2
    )
      return true;
    else if (
      targetPosition.row === currentPosition.row - 1 &&
      targetPosition.col === currentPosition.col + 2
    )
      return true;
    else if (
      targetPosition.row === currentPosition.row + 1 &&
      targetPosition.col === currentPosition.col + 2
    )
      return true;
    else if (
      targetPosition.row === currentPosition.row + 1 &&
      targetPosition.col === currentPosition.col - 2
    )
      return true;
    else return false;
  },
  team_2_bishop: (currentPosition, targetPosition, squares) => {
    let arr = [
      ...targetPosition.leftUp,
      ...targetPosition.leftDown,
      ...targetPosition.rightUp,
      ...targetPosition.rightDown,
    ];
    if (arr.indexOf(currentPosition.idx) < 0) return false;
    else {
      let directionArr =
        targetPosition.leftUp.indexOf(currentPosition.idx) >= 0
          ? [...targetPosition.leftUp]
          : targetPosition.rightUp.indexOf(currentPosition.idx) >= 0
          ? [...targetPosition.rightUp]
          : targetPosition.leftDown.indexOf(currentPosition.idx) >= 0
          ? [...targetPosition.leftDown]
          : [...targetPosition.rightDown];
      // upsqauresArr contains idx values. idexes are +1 of a zero indexed array (squares first idx = 1) so squares[0] == idx:1
      directionArr = directionArr.filter((i) => i !== "none");

      if (currentPosition.idx < targetPosition.idx) {
        // let the problem ones through ( occupied & in range)
        // must remember the range (occupied square must be in between or it doesnt matter)
        directionArr = directionArr.filter(
          (i) =>
            squares[i - 1].occupied !== false &&
            i < targetPosition.idx &&
            i > currentPosition.idx
        );
        // array should always contain current position. if anything else is present a piece is blocking it
        return directionArr.length === 0;
      } else if (currentPosition.idx > targetPosition.idx) {
        directionArr = directionArr.filter(
          (i) =>
            squares[i - 1].occupied !== false &&
            i > targetPosition.idx &&
            i < currentPosition.idx
        );

        return directionArr.length === 0;
      }
    }
  },
  team_2_queen: (currentPosition, targetPosition, squares) => {
    let results = [];
    if (
      currentPosition.row === targetPosition.row ||
      currentPosition.col === targetPosition.col
    ) {
      let team_2_rook = movementRules.team_2_rook.bind(movementRules);
      results.push(team_2_rook(currentPosition, targetPosition, squares));
    } else {
      let team_2_bishop = movementRules.team_2_bishop.bind(movementRules);
      results.push(team_2_bishop(currentPosition, targetPosition, squares));
    }
    return results.indexOf(true) > -1;
  },
  team_2_king: (currentPosition, targetPosition) => {
    if (
      targetPosition.row > currentPosition.row + 1 ||
      targetPosition.row < currentPosition.row - 1 ||
      targetPosition.col > currentPosition.col + 1 ||
      targetPosition.col < currentPosition.col - 1
    )
      return false;
    return true;
  },
};
export default movementRules;
