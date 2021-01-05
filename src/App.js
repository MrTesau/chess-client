import { React, useState, useEffect } from "react";
import "./App.css";
import gotBg from "./assets/img/gotBG.jpg";
import CreateBoard from "./boardSetup/CreateBoard.js";
import gameOfThrones_1 from "./battlegrounds/got/got_North_V_Zombies.js";
import { setBattleground, resetSquares } from "./boardSetup/boardFunctions.js";
import AutoPlayButton from "./boardSetup/bg-buttons.js";
import HomeModal from "./boardSetup/menuComponents/menu.js";
import Grid from "@material-ui/core/Grid";
import playFunction from "./boardSetup/autoplayFunctions.js";
import Parchment from "./boardSetup/teamParchment.js";
import { mdiRefresh } from "@mdi/js";
import { Button } from "@material-ui/core";
import io from "socket.io-client";
import Icon from "@mdi/react";
import { connectionOptions, ENDPOINT } from "./boardSetup/api/apiFunctions.js";
const socket = io.connect(ENDPOINT, connectionOptions);

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(gameOfThrones_1);
  const [currentBG, setCurrentBgImg] = useState(gotBg);
  const [selectedSquare, setSelectedSquare] = useState(undefined);
  const [squares, setSquares] = useState(setBattleground(currentTheme));
  const [autoPlay, setAutoPlay] = useState(false);
  const [volume, setVolume] = useState(true);
  const [audioFiles, setAudioFiles] = useState({});
  // Multiplayer dependant state:
  const [multiplayer, setMultiplayer] = useState(false);
  const [round, setRound] = useState(1);
  const [gameAvailable, setGameAvailable] = useState();
  const [allGameRooms, setAllGameRooms] = useState([]);
  const [gameRoom, setGameRoom] = useState("");
  const [playerId, setPlayerId] = useState(Math.floor(Math.random() * 10000));
  const [newPlayer, setNewPlayer] = useState(1);
  const [player, setPlayer] = useState(0);
  const [moveData, setMoveData] = useState("");
  // Load Audio of current Theme
  useEffect(() => {
    let audioLookup = {};
    squares.map((square) => {
      if (square.occupied) {
        let arr = square.occupied.sounds.map((sound) => new Audio(sound));
        square.occupied.uniqueN
          ? (audioLookup[square.occupied.uniqueN] = arr)
          : (audioLookup[square.occupied.name] = arr);
      }
    });
    setAudioFiles(audioLookup);
  }, [currentBG]);
  // Effect for new Connection
  // Adds new connection to trigger gameAvailable emit
  // Sets Lobby to new returned games
  useEffect(() => {
    socket.on("hello", () => {
      // WorkAround: Instant lobby update
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
  // Created Game player = 1
  // FindGame player = 2
  const JoinGameRoom = (game) => {
    socket.emit("join", game, (callbackReturn) => {
      if (callbackReturn.length) {
        // No move (round 0) until player 2 join
        callbackReturn.length < 2 ? setRound(0) : setRound(2);
        setPlayer(callbackReturn.length);
      }
      if (callbackReturn.error) {
        alert(error);
      }
    });
  };
  // Share created game
  // Triggered by New Game Created/ New Connection to server
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
      console.log("running TrackEnemy");
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
  const audioReaction = (squareWithAudio) => {
    audioFiles[
      squareWithAudio.occupied.uniqueN
        ? squareWithAudio.occupied.uniqueN
        : squareWithAudio.occupied.name
    ][
      Math.floor(Math.random() * squareWithAudio.occupied.sounds.length)
    ].play();
  };
  // Update board on Enemy move
  const TrackEnemy = (moveData) => {
    let newSquares = [...squares];
    // Have to make new Audio because React is accessing "stale" state
    // https://github.com/facebook/react/issues/16975
    // This is an inefficient workaround - May not allow volume control
    // Below solution causes issues with accessing squares:
    //possible solution: create a 2nd useffect that runs after connection. This one updates on round.
    //console.log(squares);
    //console.log(squares[moveData.movingPiece]);
    //console.log(squares[moveData.destination]);

    if (squares[moveData.movingPiece].occupied)
      audioReaction(squares[moveData.movingPiece]);

    /*
    let audios = [...squares[moveData.movingPiece].occupied.sounds];
    new Audio(audios[Math.floor(Math.random() * audios.length)]).play();
    */
    newSquares[moveData.destination].occupied = {
      ...squares[moveData.movingPiece].occupied,
    };
    newSquares[moveData.movingPiece].occupied = false;
    setSquares(newSquares);
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

    audioReaction,
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
      </div>
      {/* Team Parchment */}
      <Grid item xl={2} md={3} sm={4} xs={8} className={"parchment-container"}>
        <Parchment selectedSquare={selectedSquare} team={1} round={round} />
      </Grid>
      {/* Board  */}
      <Grid item xs={11} lg={5} className="center-grid-item">
        <div className="board-container">
          <CreateBoard {...BoardProps} />
        </div>
      </Grid>
      {/* Team Parchment */}
      <Grid item xl={2} md={3} sm={4} xs={8} className="parchment-container">
        <Parchment selectedSquare={selectedSquare} team={2} round={round} />
      </Grid>
    </Grid>
  );
};
export default App;
