const movementRules = {
  // Team 1 Rules:
  team_1_pawn: (currentPosition, targetPosition, squares) => {
    // team collision check
    //if (squares.filter((square) => square.col === targetPosition.col && square.row === targetPosition.row).length > 0)
    if (
      targetPosition.row === currentPosition.row + 1 &&
      targetPosition.col === currentPosition.col + 1 &&
      targetPosition.occupied &&
      targetPosition.occupied.team !== currentPosition.occupied.team
    )
      return true;
    else if (
      targetPosition.row === currentPosition.row + 1 &&
      targetPosition.col === currentPosition.col - 1 &&
      targetPosition.occupied &&
      targetPosition.occupied.team !== currentPosition.occupied.team
    )
      return true;
    else if (targetPosition.occupied) return false;
    else if (
      targetPosition.row === currentPosition.row + 1 &&
      targetPosition.col === currentPosition.col
    ) {
      return true;
    }
    return false;
  },
  team_1_rook: (currentPosition, targetPosition) => {
    if (
      targetPosition.row === currentPosition.row ||
      targetPosition.col === currentPosition.col
    ) {
      return true;
    }
    return false;
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
  team_1_bishop: (currentPosition, targetPosition) => {
    // up or down? target > current
    // that leaves 2 arrays
    // find array current position is located in
    // find squares between target and current that are occupied,
    // dont need to go right up to target as friendly will switch select and enemy will be eaten
    // if squares between are occupied return false
    let arr = [
      ...targetPosition.leftUp,
      ...targetPosition.leftDown,
      ...targetPosition.rightUp,
      ...targetPosition.rightDown,
    ];
    if (arr.indexOf(currentPosition.idx) > -1) return true;
    return false;
  },
  team_1_queen: (currentPosition, targetPosition) => {
    if (currentPosition.row === targetPosition.row) return true;
    else if (currentPosition.col === targetPosition.col) return true;
    else {
      let arr = [
        ...targetPosition.leftUp,
        ...targetPosition.leftDown,
        ...targetPosition.rightUp,
        ...targetPosition.rightDown,
      ];
      if (arr.indexOf(currentPosition.idx) > -1) return true;
      return false;
    }
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
  team_2_rook: (currentPosition, targetPosition) => {
    if (
      targetPosition.row === currentPosition.row ||
      targetPosition.col === currentPosition.col
    ) {
      return true;
    }
    return false;
  },
  team_2_pawn: (currentPosition, targetPosition, squares) => {
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
  team_2_bishop: (currentPosition, targetPosition) => {
    //..try and implement rules of movement here
    let arr = [
      ...targetPosition.leftUp,
      ...targetPosition.leftDown,
      ...targetPosition.rightUp,
      ...targetPosition.rightDown,
    ];
    if (arr.indexOf(currentPosition.idx) > -1) return true;
    return false;
  },
  team_2_queen: (currentPosition, targetPosition) => {
    if (currentPosition.row === targetPosition.row) return true;
    else if (currentPosition.col === targetPosition.col) return true;
    else {
      let arr = [
        ...targetPosition.leftUp,
        ...targetPosition.leftDown,
        ...targetPosition.rightUp,
        ...targetPosition.rightDown,
      ];
      if (arr.indexOf(currentPosition.idx) > -1) return true;
      return false;
    }
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
