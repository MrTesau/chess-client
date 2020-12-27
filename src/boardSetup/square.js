import React from "react";

const Square = ({
  // square 1-64
  idx,
  // row 1-8
  row,
  //select an occupied square
  handleSelect,
  // Boolean: current square is selected
  //selected,
  // current square is occupied ? pieceObject : false
  occupied,
  // Pass createBoard.selectedSquare to allow moveUnit() calls
  selectedSquare,
  // pass props moveUnit
  moveUnit,
  //col, // col 1-8
  round,
  //leftUp,
  //rightUp,
  //leftDown,
  //rightDown,
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
        border: selectedSquare
          ? selectedSquare.idx === idx
            ? "2px solid red"
            : "none"
          : "none",
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
export default Square;
