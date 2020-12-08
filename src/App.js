import React from "react";
import "./App.css";
// backgrounds
import wowBg from "./assets/img/wowBG.jpg";
import gotBg from "./assets/img/gotBG.jpg";
import lolBg from "./assets/img/rift2.jpeg";
import lolBg2 from "./assets/img/rift.jpg";
// ChessBoard
import CreateBoard from "./CreateBoard.js";
// Battleground themes
import gameOfThrones_1 from "./battlegrounds/got/got_North_V_Zombies.js";
import WoWBattleground from "./battlegrounds/wow_hordvally.js";
import LoLBattleground from "./battlegrounds/LoL/lol_champion_royale.js";
// Responsive tools
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
// Bg Assets
import parch from "./assets/img/parch1.png";
import SelectBg from "./bg-buttons.js";
//volume
import { mdiVolumeOff } from "@mdi/js";
import { mdiVolumeHigh } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@material-ui/core";

const row = (i) => {
  return i < 9
    ? 1
    : i < 17
    ? 2
    : i < 25
    ? 3
    : i < 33
    ? 4
    : i < 41
    ? 5
    : i < 49
    ? 6
    : i < 57
    ? 7
    : 8;
};
const col = (i) => {
  return i < 9
    ? i
    : i < 17
    ? i - 8
    : i < 25
    ? i - 16
    : i < 33
    ? i - 24
    : i < 41
    ? i - 32
    : i < 49
    ? i - 40
    : i < 57
    ? i - 48
    : i - 56;
};

// IMPROVEMENT:
// These functions could be implemented directly on movement rules of a piece
// and not stored directly in square objects only to filter through later

// test function that replaces all 4:
// edgeRow, edgeCol, directionVertical, directionHorizontal
const findDiagonals = (i, edgeRow, edgeCol, directUpDown, directLeftRight) => {
  let arr = [];
  if (row(i) === edgeRow) return ["none"];
  if (col(i) === edgeCol) return ["none"];
  // updown = +
  // leftright = amount
  if (directUpDown === "down") {
    // problem
    for (
      let square = i + directLeftRight;
      square <= 64;
      square += directLeftRight
    ) {
      if (row(square) === edgeRow) {
        arr.push(square);
        return arr;
      } else if (col(square) === edgeCol) {
        arr.push(square);
        return arr;
      } else {
        arr.push(square);
      }
    }
    return arr;
  } else {
    for (
      let square = i - directLeftRight;
      square >= 1;
      square -= directLeftRight
    ) {
      if (row(square) === edgeRow) {
        arr.push(square);
        return arr;
      } else if (col(square) === edgeCol) {
        arr.push(square);
        return arr;
      } else {
        arr.push(square);
      }
    }
    return arr;
  }
};
// This can be replaced with calls to the above function
const findDiagonalsLeftDown = (i) => {
  let arr = [];
  if (row(i) === 8) return ["none"];
  if (col(i) === 1) return ["none"];
  for (let squareLeft = i + 7; squareLeft < 64; squareLeft += 7) {
    if (row(squareLeft) === 8) {
      arr.push(squareLeft);
      return arr;
    } else if (col(squareLeft) === 1) {
      arr.push(squareLeft);
      return arr;
    } else {
      arr.push(squareLeft);
    }
  }
  return arr;
};
// This can be replaced with calls to the above function
const findDiagonalsRightDown = (i) => {
  let arr = [];
  if (row(i) === 8) return ["none"];
  if (col(i) === 8) return ["none"];
  for (let square = i + 9; square <= 64; square += 9) {
    if (row(square) === 8) {
      arr.push(square);
      return arr;
    } else if (col(square) === 8) {
      arr.push(square);
      return arr;
    } else {
      arr.push(square);
    }
  }
  return arr;
};

// Square Objects
// This can be implemented with class for theme and classes for piece objects
// implement into teams to allow splitting eg  LoL vs Horde
const setBattleground = (Battleground) => {
  const {
    team_1_pawn,
    team_1_rook,
    team_1_rook2,
    team_1_bishop,
    team_1_knight,
    team_1_queen,
    team_1_king,
    team_2_pawn,
    team_2_rook,
    team_2_bishop,
    team_2_knight,
    team_2_queen,
    team_2_king,
    team_1_bishop2,
    team_1_knight2,
    team_2_knight2,
    team_2_bishop2,
    team_2_rook2,
  } = Battleground;
  let arr = [];
  for (let i = 1; i <= 64; i++) {
    arr.push({
      idx: i,
      row: row(i),
      col: col(i),
      // Universal direction finder test
      // findDiagonals (i, edgeRow, edgeCol, directUpDown, directLeftRight)
      leftUp: findDiagonals(i, 1, 1, "up", 9),
      // An array of all the squares connected diagonally left down
      leftDown: findDiagonalsLeftDown(i),
      // An array of all the squares connected diagonally right Up
      rightUp: findDiagonals(i, 1, 8, "up", 7),
      // An array of all the squares connected diagonally right down
      rightDown: findDiagonalsRightDown(i),
      isSquareSelected: false,
      // Maybe create a seperate function that sets occupied rules
      occupied:
        row(i) === 2
          ? team_1_pawn
          : row(i) === 7
          ? team_2_pawn
          : i === 1
          ? team_1_rook
          : // For boards with 2 characters for 1 piece
          i === 8
          ? team_1_rook2
            ? team_1_rook2
            : team_1_rook
          : i === 2
          ? team_1_knight
          : i === 7
          ? team_1_knight2
            ? team_1_knight2
            : team_1_knight
          : i === 3
          ? team_1_bishop
          : i === 6
          ? team_1_bishop2
            ? team_1_bishop2
            : team_1_bishop
          : i === 4
          ? team_1_king
          : i === 5
          ? team_1_queen
          : i === 64
          ? team_2_rook
          : i === 57
          ? team_2_rook2
            ? team_2_rook2
            : team_2_rook
          : i === 63
          ? team_2_knight
          : i === 58
          ? team_2_knight2
            ? team_2_knight2
            : team_2_knight
          : i === 62
          ? team_2_bishop
          : i === 59
          ? team_2_bishop2
            ? team_2_bishop2
            : team_2_bishop
          : i === 60
          ? team_2_king
          : i === 61
          ? team_2_queen
          : false,
    });
  }
  // arr of Objects with each square info
  return arr;
};

const App = () => {
  const [currentBG, setCurrentBgImg] = React.useState(() => {
    return Math.random() > 0.5 ? lolBg : lolBg2;
  });
  const [selectedSquare, setSelectedSquare] = React.useState(undefined);
  const [round, setRound] = React.useState(1);
  const [squares, setSquares] = React.useState(
    setBattleground(LoLBattleground)
  ); // [{row, idx, selected}]
  const [volume, setVolume] = React.useState(true);
  return (
    <Grid
      container
      xs={12}
      justify="center"
      alignItems="center"
      style={{
        backgroundImage: `url(${currentBG})`,
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        width: "100vw",
        // auto height to fit content
        // min-height to ensure content covers 1 screen atleast
        // Otherwise content/border is squeezed into minimum req space eg 70% of screen
        height: "auto",
        minHeight: "100vh",
        padding: "0px",
      }}
      className="grid-test"
      spacing={0}
    >
      <div style={{ position: "fixed", top: 5, left: 10 }}>
        <SelectBg
          currentBG={currentBG}
          setCurrentBgImg={setCurrentBgImg}
          squares={squares}
          setSquares={setSquares}
          setBattleground={setBattleground}
          lolBg={lolBg}
          lolBg2={lolBg2}
          wowBg={wowBg}
          gotBg={gotBg}
        />
      </div>
      <div style={{ position: "fixed", top: 7, right: 20 }}>
        {volume ? (
          <Icon
            path={mdiVolumeHigh}
            title="volume"
            size={0.9}
            color={"white"}
            onClick={() => setVolume(!volume)}
          />
        ) : (
          <Icon
            path={mdiVolumeOff}
            title="volume"
            size={0.9}
            color={"white"}
            onClick={() => setVolume(!volume)}
          />
        )}
      </div>
      <Grid
        container
        justify="center"
        alignItems="center"
        alignContent="space-around"
        md={3}
        sm={6}
        xs={8}
        style={{
          backgroundImage: `url(${parch})`,
          backgroundBlendMode: "multiply",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "18vw",
          // border: "2px solid black",
        }}
        className={"bg-container"}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            opacity: "0.85",
          }}
          className="info-area"
        >
          <Hidden xsDown>
            <div style={{ fontSize: "x-large" }}>
              <p>
                {currentBG === wowBg
                  ? "The Horde"
                  : currentBG === gotBg
                  ? "The North"
                  : " Blue Team Champions"}
              </p>
            </div>
          </Hidden>

          <div className="info-area-text" style={{ fontSize: "large" }}>
            <p>Currently Selected:</p>
          </div>

          <div className="info-area-text" style={{ fontSize: "large" }}>
            {round === 1
              ? selectedSquare
                ? `${selectedSquare.occupied.piece}`
                : "None"
              : "None"}
          </div>
          <Hidden smDown>
            <div style={{ fontSize: "large" }}>
              <p>Status:</p>
            </div>
          </Hidden>
          <div
            className="info-area-text"
            style={{
              fontSize: "x-large",
              color: round === 1 ? "#013220" : "#8B0000",
            }}
          >
            {round === 1
              ? "Your Move!" // Choose Wisely"
              : "...Waiting for Enemy"}
          </div>
        </div>
      </Grid>
      <Grid
        container
        xs={11}
        sm={10}
        md={8}
        lg={5}
        justify="center"
        //style={{ border: "2px solid black" }}
      >
        <div className="board-container">
          <CreateBoard
            squares={squares}
            setSquares={setSquares}
            selectedSquare={selectedSquare}
            setSelectedSquare={setSelectedSquare}
            round={round}
            setRound={setRound}
            volume={volume}
          />
        </div>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        md={3}
        sm={6}
        xs={8}
        style={{
          backgroundImage: `url(${parch})`,
          backgroundBlendMode: "multiply",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "18vw",
        }}
        className="bg-container"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            opacity: "0.85",
          }}
          className="info-area"
        >
          <Hidden xsDown>
            <div style={{ fontSize: "x-large" }}>
              <p>
                {currentBG === wowBg
                  ? "The Alliance"
                  : currentBG === gotBg
                  ? "The White Walkers"
                  : " Red Team Champions"}
              </p>
            </div>
          </Hidden>

          <div className="info-area-text" style={{ fontSize: "large" }}>
            <p>Currently Selected:</p>
          </div>

          <div className="info-area-text" style={{ fontSize: "large" }}>
            {round === 2
              ? selectedSquare
                ? `${selectedSquare.occupied.piece}`
                : "None"
              : "None"}
          </div>
          <Hidden smDown>
            <div style={{ fontSize: "large" }}>
              <p>Status:</p>
            </div>
          </Hidden>
          <div
            className="info-area-text"
            style={{
              fontSize: "x-large",
              color: round === 2 ? "#013220" : "#8B0000",
            }}
          >
            {round === 2
              ? "Your Move!" //"Your Move! Choose Wisely.."
              : "...Waiting for Enemy"}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default App;
