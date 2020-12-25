import React from "react";
import "./App.css";
// Backgrounds
import wowBg from "./assets/img/wowBG.jpg";
import gotBg from "./assets/img/gotBG.jpg";
import lolBg from "./assets/img/rift2.jpeg";
import lolBg2 from "./assets/img/rift.jpg";
// ChessBoard Imports
import CreateBoard from "./boardSetup/CreateBoard.js";
import gameOfThrones_1 from "./battlegrounds/got/got_North_V_Zombies.js";
import setBattleground from "./boardSetup/boardFunctions.js";
import parch from "./assets/img/parch1.png";
import SelectBg from "./boardSetup/bg-buttons.js";
// Volume
import { mdiVolumeOff } from "@mdi/js";
import { mdiVolumeHigh } from "@mdi/js";
import Icon from "@mdi/react";
import HomeModal from "./boardSetup/homeModal.js";
import { mdiPlayCircleOutline } from "@mdi/js";
import { mdiStopCircleOutline } from "@mdi/js";
import Button from "@material-ui/core/Button";
// Responsive
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const App = () => {
  const [currentBG, setCurrentBgImg] = React.useState(gotBg);
  const [selectedSquare, setSelectedSquare] = React.useState(undefined);
  const [round, setRound] = React.useState(1);
  const [squares, setSquares] = React.useState(
    setBattleground(gameOfThrones_1)
  );
  const [autoPlay, setAutoPlay] = React.useState(false);
  const [volume, setVolume] = React.useState(true);
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{
        backgroundImage: `url(${currentBG})`,
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
      }}
      spacing={0}
      className="battleground-container"
    >
      {/* Select bg Button menu */}
      <div className="fixed-div">
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
        <Hidden xsDown>
          <br />
          <HomeModal />
        </Hidden>
      </div>
      <div className="volume-fixed">
        {volume ? (
          <Icon
            path={mdiVolumeHigh}
            title="volume"
            size={0.8}
            color={"white"}
            onClick={() => setVolume(!volume)}
          />
        ) : (
          <Icon
            path={mdiVolumeOff}
            title="volume"
            size={0.7}
            color={"white"}
            onClick={() => setVolume(!volume)}
          />
        )}
      </div>
      <div className="autoplay-fixed">
        {!autoPlay ? (
          <Icon
            path={mdiPlayCircleOutline}
            title="autoplay"
            size={0.8}
            color={"white"}
            onClick={() => setAutoPlay(true)}
          />
        ) : (
          <Icon
            path={mdiStopCircleOutline}
            title="volume"
            size={0.8}
            color={"white"}
            onClick={() => setAutoPlay(false)}
          />
        )}
      </div>
      {/* Team Parchment */}
      <Grid item xl={2} md={3} sm={4} xs={8} className={"parchment-container"}>
        <div
          className="info-area"
          style={{
            backgroundImage: `url(${parch})`,
            backgroundBlendMode: "multiply",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Hidden smDown>
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
      <Grid item xs={11} lg={5} className="center-grid-item">
        <div className="board-container">
          <CreateBoard
            squares={squares}
            setSquares={setSquares}
            selectedSquare={selectedSquare}
            setSelectedSquare={setSelectedSquare}
            round={round}
            setRound={setRound}
            volume={volume}
            currentBG={currentBG}
            autoPlay={autoPlay}
          />
        </div>
      </Grid>
      {/* Team Parchment */}
      <Grid item xl={2} md={3} sm={4} xs={8} className="parchment-container">
        <div
          className="info-area"
          style={{
            backgroundImage: `url(${parch})`,
            backgroundBlendMode: "multiply",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            //border: "2px solid black",
          }}
        >
          <Hidden smDown>
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
