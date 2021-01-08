import { React, useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import { setBattleground, resetSquares } from "./boardSetup/boardFunctions.js";
import Grid from "@material-ui/core/Grid";
import playFunction from "./boardSetup/autoplayFunctions.js";
import { mdiRefresh } from "@mdi/js";
import { Button } from "@material-ui/core";
import io from "socket.io-client";
import Icon from "@mdi/react";
import { connectionOptions, ENDPOINT } from "./boardSetup/api/apiFunctions.js";
import gameOfThrones_1 from "./battlegrounds/got/got_North_V_Zombies.js";
import gotBg from "./assets/img/gotBG.jpg";
import parch from "./assets/img/parch1.png";
import Parchment from "./boardSetup/teamParchment.js";
const AutoPlayButton = lazy(() => import("./boardSetup/bg-buttons"));
const CreateBoard = lazy(() => import("./boardSetup/CreateBoard"));
const HomeModal = lazy(() => import("./boardSetup/menuComponents/menu"));
const socket = io.connect(ENDPOINT, connectionOptions);

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(gameOfThrones_1);
  const [currentBG, setCurrentBgImg] = useState(gotBg);
  const [selectedSquare, setSelectedSquare] = useState(undefined);
  const [squares, setSquares] = useState(setBattleground(currentTheme));
  const [autoPlay, setAutoPlay] = useState(false);
  const [volume, setVolume] = useState(true);
  // Multiplayer dependant state:
  const [multiplayer, setMultiplayer] = useState(false);
  const [round, setRound] = useState(1);
  const [gameAvailable, setGameAvailable] = useState();
  const [allGameRooms, setAllGameRooms] = useState([]);
  const [gameRoom, setGameRoom] = useState("");
  const [newPlayer, setNewPlayer] = useState(1);
  const [player, setPlayer] = useState(0);
  const [moveData, setMoveData] = useState("");
  const playerId = useState(Math.floor(Math.random() * 10000))[0];
  // Play audio
  const AudioReaction = (squareIdx) => {
    if (volume && squares[squareIdx].occupied) {
      squares[squareIdx].occupied.sounds[
        Math.floor(Math.random() * squares[squareIdx].occupied.sounds.length)
      ].play();
    }
  };
  // Move a piece
  const MoveChessPiece = (movingIdx, destinationIdx) => {
    // By value vs By reference assignment might cause issues
    let newSquares = [...squares];
    newSquares[destinationIdx].occupied = squares[movingIdx].occupied;
    newSquares[movingIdx].occupied = false;
    setSquares(newSquares);
  };
  // Effect for new Connection, Emit and set game Lobby
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
  const BoardProps = {
    squares,
    setSquares,
    selectedSquare,
    setSelectedSquare,
    round,
    setRound,
    volume,
    currentBG,
    autoPlay,
    playFunction: autoPlay
      ? playFunction.autoMoveUnit
      : // : multiplayer
        // ? TrackEnemy
        "",
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
      <div className="fixed-div">
        <Suspense
          fallback={
            <div>
              ...Loading MultiPlayer and Themes. Depending on your Connection
              This May Take a moment!
            </div>
          }
        >
          <HomeModal {...MenuProps} />
          {!multiplayer ? (
            <AutoPlayButton
              autoPlay={autoPlay}
              setRound={setRound}
              setAutoPlay={setAutoPlay}
              setSelectedSquare={setSelectedSquare}
              squares={squares}
              setSquares={setSquares}
              resetSquares={resetSquares}
              setBattleground={setBattleground}
              currentTheme={currentTheme}
            />
          ) : (
            <Button
              variant="contained"
              color="primary"
              size="medium"
              onClick={() => {
                setRound(2);
                setSelectedSquare(undefined);
                setSquares(setBattleground(currentTheme));
                alert(
                  "If You are resetting a multiplayer match please refresh page and create new game"
                );
              }}
              style={{
                fontSize: "0.7rem",
                margin: "0.3rem",
                marginLeft: "0rem",
              }}
            >
              <Icon
                path={mdiRefresh}
                title="autoplay"
                size={0.87}
                color={"white"}
              />{" "}
              &nbsp; Reset Game
            </Button>
          )}
        </Suspense>
      </div>
      {/* Player 1 Parchment */}
      <Grid item xl={2} md={3} sm={4} xs={8} className={"parchment-container"}>
        <Parchment
          selectedSquare={selectedSquare}
          team={1}
          round={round}
          parch={parch}
        />
      </Grid>

      {/* Board  */}
      <Grid item xs={11} lg={5} className="center-grid-item">
        <div className="board-container">
          <CreateBoard {...BoardProps} />
        </div>
      </Grid>

      {/* Player 2 Parchment */}
      <Grid item xl={2} md={3} sm={4} xs={8} className="parchment-container">
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
