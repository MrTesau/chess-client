import { React, useState, lazy, Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
// Icons
import {
  mdiArrowLeftBold,
  mdiInformationOutline,
  mdiCloudSearchOutline,
  mdiVolumeOff,
  mdiVolumeHigh,
} from "@mdi/js";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import About from "./about.js";
import CreateGame from "./createGame.js";
import Icon from "@mdi/react";
import FindGames from "./findGame.js";
import menuStyles from "./menuStyles.js";
//import Themes from "./themes.js";
const Themes = lazy(() => import("./themes"));
const useStyles = makeStyles(menuStyles);

export default function SimpleModal(props) {
  const [open, setOpen] = useState(false);
  const [AboutOpen, setAboutOpen] = useState(false);
  const [themes, setThemes] = useState(false);
  const [createGame, setCreateGame] = useState(false);
  const [findGame, setFindGame] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    props.setMultiplayer(false);
    props.setAutoPlay(true);
    setOpen(false);
  };
  const body = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        outline: "none",
      }}
    >
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ outline: "none", boxShadow: "none" }}
        className={classes.root}
      >
        <Grid item xs={11} sm={8} md={5} lg={3} style={{ outline: "none" }}>
          {AboutOpen ? (
            <About setAboutOpen={setAboutOpen} />
          ) : themes ? (
            <Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    style={{ textTransform: "none", fontSize: "0.7rem" }}
                  >
                    ...Loading Fantasy Themes. Depending on your Connection This
                    May Take a moment!
                  </Button>
                </div>
              }
            >
              <Themes
                setThemes={setThemes}
                setFindGame={setFindGame}
                setOpen={setOpen}
                squares={props.squares}
                setSquares={props.setSquares}
                setCurrentBgImg={props.setCurrentBgImg}
                setAutoPlay={props.setAutoPlay}
                setCurrentTheme={props.setCurrentTheme}
              />
            </Suspense>
          ) : createGame ? (
            <CreateGame
              playerId={props.playerId}
              setMultiplayer={props.setMultiplayer}
              setGameAvailable={props.setGameAvailable}
              JoinGameRoom={props.JoinGameRoom}
              setGameRoom={props.setGameRoom}
              setPlayer={props.setPlayer}
              setCreateGame={setCreateGame}
              setOpen={setOpen}
            />
          ) : findGame ? (
            <FindGames
              JoinGameRoom={props.JoinGameRoom}
              allGameRooms={props.allGameRooms}
              setAllGameRooms={props.setAllGameRooms}
              refreshGames={props.refreshGames}
              setFindGame={setFindGame}
              setOpen={setOpen}
              setGameId={props.setGameId}
              setMultiplayer={props.setMultiplayer}
              setGameRoom={props.setGameRoom}
              setPlayer={props.setPlayer}
            />
          ) : (
            <>
              <Card className={classes.paper}>
                <Button
                  className={classes.menuButton}
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setAboutOpen(true);
                  }}
                >
                  <Icon
                    path={mdiInformationOutline}
                    title="Orgrimmar"
                    size={0.6}
                    color={"white"}
                  />{" "}
                  <span>&nbsp;About</span>
                </Button>
                <Button
                  className={classes.menuButton}
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setThemes(true);
                  }}
                >
                  Select Battleground
                </Button>
                <Button
                  className={classes.menuButton}
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    props.setVolume(!props.volume);
                  }}
                >
                  <Icon
                    path={props.volume ? mdiVolumeHigh : mdiVolumeOff}
                    title="Volume"
                    size={0.6}
                    color={"white"}
                  />{" "}
                  <span>
                    &nbsp;&nbsp;{props.volume ? "Volume On" : "Volume Off"}
                  </span>
                </Button>
                <Button
                  className={classes.menuButton}
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Play My Unbeatable AI
                </Button>
                <Button
                  className={classes.menuButton}
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setCreateGame(true);
                  }}
                >
                  Battle a Friend
                </Button>
                <Button
                  className={classes.menuButton}
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setFindGame(true);
                  }}
                >
                  <Icon
                    path={mdiCloudSearchOutline}
                    title="Orgrimmar"
                    size={0.6}
                    color={"white"}
                  />{" "}
                  <span>&nbsp;&nbsp;Find Games</span>
                </Button>
                <Button
                  className={classes.menuButton}
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    props.setRound(1);
                    props.setMultiplayer(false);
                    setOpen(false);
                  }}
                >
                  <Icon
                    path={mdiArrowLeftBold}
                    title="Orgrimmar"
                    size={0.6}
                    color={"white"}
                  />{" "}
                  <span>&nbsp; Have a Look </span>
                </Button>
              </Card>
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
  return (
    <>
      <div onClick={handleOpen}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={`${classes.modalButton} modal-btn-padding`}
        >
          <HomeIcon style={{ fontSize: 17 }} />
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
}
