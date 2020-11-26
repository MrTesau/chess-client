const pieces = {
// Horde Objects
  humRook : {
  team: 2,
  name: "rook",
  img: "",
  sounds: [],
  rules: (currentPosition, targetPosition) => {
    //..try and implement rules of movement here
  },
},
 humPawn : {
  team: 2,
  name: "pawn",
  img: "",
  sounds: [],
  rules: (currentPosition, targetPosition, squares) => {
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
},
 humKnight = {
  team: 2,
  name: "knight",
  img: "",
  sounds: [],
  rules: (currentPosition, targetPosition) => {
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
},
 humBishop = {
  team: 2,
  name: "bishop",
  img: "",
  sounds: [

  ],
  rules: (currentPosition, targetPosition) => {
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
},
humQueen : {
  team: 2,
  name: "queen",
  img: "",
  sounds: [],
  rules: (currentPosition, targetPosition) => {
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
},
 humKing : {
  team: 2,
  name: "king",
  img: "",
  sounds: [],
  rules: (currentPosition, targetPosition) => {
    if (
      targetPosition.row > currentPosition.row + 1 ||
      targetPosition.row < currentPosition.row - 1 ||
      targetPosition.col > currentPosition.col + 1 ||
      targetPosition.col < currentPosition.col - 1
    )
      return false;
    return true;
  },
},

// zombie Objects
 zombieRook : {
  team: 2,
  name: "rook",
  img: "",
  sounds: [],
  rules: (currentPosition, targetPosition) => {
    //..try and implement rules of movement here
  },
},
 zombiePawn : {
  team: 2,
  name: "pawn",
  img: "",
  sounds: [],
  rules: (currentPosition, targetPosition, squares) => {
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
},
 zombieKnight = {
  team: 2,
  name: "knight",
  img: "",
  sounds: [],
  rules: (currentPosition, targetPosition) => {
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
},
 zombieBishop = {
  team: 2,
  name: "bishop",
  img: "",
  sounds: [

  ],
  rules: (currentPosition, targetPosition) => {
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
},
zombieQueen : {
  team: 2,
  name: "queen",
  img: "",
  sounds: [],
  rules: (currentPosition, targetPosition) => {
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
},
 NightKing : {
  team: 2,
  name: "king",
  img: "",
  sounds: [],
  rules: (currentPosition, targetPosition) => {
    if (
      targetPosition.row > currentPosition.row + 1 ||
      targetPosition.row < currentPosition.row - 1 ||
      targetPosition.col > currentPosition.col + 1 ||
      targetPosition.col < currentPosition.col - 1
    )
      return false;
    return true;
  },

  }
}

export default pieces;