import { React, useState, useEffect, lazy, Suspense } from "react";
import {
  connectionOptions,
  ENDPOINT,
} from "./boardSetup/api/socketSettings.js";
import {
  setBattleground,
  resetSquares,
} from "./boardSetup/boardFunctions/boardFunctions.js";
import gameOfThrones_1 from "./battlegrounds/got/got_North_V_Zombies.js";
import gotBg from "./battlegrounds/wow/img/gotBG.jpg";
import parch from "./battlegrounds/wow/img/parch1.png";
import Parchment from "./boardSetup/TeamParchment.js";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import playFunction from "./boardSetup/boardFunctions/autoplayFunctions.js";
import Button from "@material-ui/core/Button";
import io from "socket.io-client";
const AutoPlayButton = lazy(() =>
  import("./boardSetup/AutoplayButtonComponent")
);
const CreateBoard = lazy(() => import("./boardSetup/CreateBoardComponent"));
const HomeModal = lazy(() => import("./boardSetup/menu/MenuComponent"));
const socket = io.connect(ENDPOINT, connectionOptions);

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(gameOfThrones_1);
  const [currentBG, setCurrentBgImg] = useState(gotBg);
  const [selectedSquare, setSelectedSquare] = useState(undefined);
  const [squares, setSquares] = useState(setBattleground(currentTheme));
  const [autoPlay, setAutoPlay] = useState(false);
  const [volume, setVolume] = useState(true);
  const [round, setRound] = useState(1);
  // Multiplayer dependant state:
  const [multiplayer, setMultiplayer] = useState(false);
  const [gameAvailable, setGameAvailable] = useState();
  const [allGameRooms, setAllGameRooms] = useState([]);
  const [gameRoom, setGameRoom] = useState("");
  const playerId = useState(Math.floor(Math.random() * 10000))[0];
  const [newPlayer, setNewPlayer] = useState(1);
  const [player, setPlayer] = useState(0);
  const [moveData, setMoveData] = useState("");

  const AudioReaction = (squareIdx) => {
    if (volume && squares[squareIdx].occupied) {
      squares[squareIdx].occupied.sounds[
        Math.floor(Math.random() * squares[squareIdx].occupied.sounds.length)
      ].play();
    }
  };
  const MoveChessPiece = (movingIdx, destinationIdx) => {
    let newSquares = [...squares];
    newSquares[destinationIdx].occupied = squares[movingIdx].occupied;
    newSquares[movingIdx].occupied = false;
    setSquares(newSquares);
  };
  // On new Connection: Emit and set game Lobby
  useEffect(() => {
    socket.on("hello", () => {
      setNewPlayer(newPlayer + 1);
    });
    socket.on("returnedGames", (game) => {
      setAllGameRooms((allGameRooms) => {
        allGameRooms = allGameRooms.filter((g) => g.playerId !== game.playerId);
        return [...allGameRooms, game];
      });
    });
  }, []);
  // Join game
  const JoinGameRoom = (game) => {
    socket.emit("join", game, (callbackReturn) => {
      if (callbackReturn.length) {
        // No move (round 0) until player 2 joins
        callbackReturn.length < 2 ? setRound(0) : setRound(2);
        setPlayer(callbackReturn.length);
      }
      if (callbackReturn.error) {
        alert(error);
      }
    });
  };
  // Share created game
  useEffect(() => {
    if (!gameAvailable) {
      return;
    } else {
      socket.emit("gamesAvailable", gameAvailable, (error) => {
        if (error) {
          console.log(error);
        }
      });
    }
  }, [gameAvailable, newPlayer]);
  // Move sequence
  useEffect(() => {
    socket.on("recieveMove", (moveData) => {
      setMoveData(moveData);
    });
  }, []);
  useEffect(() => {
    if (moveData) {
      let newRound = moveData.round === 1 ? 2 : 1;
      setRound(newRound);
      TrackEnemy(moveData);
    }
  }, [moveData]);
  const SendMove = (moveData) => {
    moveData.gameName = gameRoom;
    socket.emit("sendMove", moveData, (error) => {
      if (error) {
        alert(error);
      }
    });
  };
  // Update board on Enemy move
  const TrackEnemy = (moveData) => {
    if (volume && squares[moveData.movingPiece].occupied)
      AudioReaction(moveData.movingPiece);
    MoveChessPiece(moveData.movingPiece, moveData.destination);
  };
  // Component Prop Objects:
  const BoardProps = {
    squares,
    setSquares,
    selectedSquare,
    setSelectedSquare,
    round,
    setRound,
    autoPlay,
    playFunction: playFunction.autoMoveUnit,
    SendMove,
    multiplayer,
    player,
    AudioReaction,
    MoveChessPiece,
  };
  const MenuProps = {
    JoinGameRoom,
    allGameRooms,
    setAllGameRooms,
    setGameAvailable,
    playerId,
    setMultiplayer,
    setCurrentTheme,
    volume,
    setVolume,
    squares,
    setSquares,
    setCurrentBgImg,
    setAutoPlay,
    setGameRoom,
    setPlayer,
    setRound,
  };
  const AutoplayProps = {
    autoPlay,
    setRound,
    setAutoPlay,
    setSelectedSquare,
    squares,
    setSquares,
    resetSquares,
    setBattleground,
    currentTheme,
    multiplayer,
  };
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{
        backgroundImage: `url(${currentBG})`,
      }}
      spacing={0}
      className="battleground-container"
    >
      <Suspense>
        <HomeModal {...MenuProps} />
        <AutoPlayButton {...AutoplayProps} />
      </Suspense>
      {/* Player 1 Parchment */}
      <Grid item xl={2} md={3} xs={6} sm={4} className="parchment-container">
        <Parchment
          selectedSquare={selectedSquare}
          team={1}
          round={round}
          parch={parch}
        />
      </Grid>
      {/* Board  */}
      <Suspense
        fallback={
          <div className="parchment-container">
            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{ textTransform: "none", fontSize: "0.7rem" }}
            >
              ...Loading Battleground
            </Button>
          </div>
        }
      >
        <Grid item xs={11} md={5} lg={5} xl={6} className="center-grid-item">
          <div className="board-container">
            <CreateBoard {...BoardProps} />
          </div>
        </Grid>
      </Suspense>
      {/* Player 2 Parchment */}
      <Grid item xl={2} md={3} xs={7} sm={4} className="parchment-container">
        <Parchment
          selectedSquare={selectedSquare}
          team={2}
          round={round}
          parch={parch}
        />
      </Grid>
    </Grid>
  );
};
export default App;
