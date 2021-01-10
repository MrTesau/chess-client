import { React, useState, lazy, Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import About from "./AboutCard.js";
import CreateGame from "./CreateGameCard.js";
import FindGames from "./FindGameCard.js";
import HomeCard from "./HomeCard.js";
import menuStyles from "./menuStyles.js";
const Themes = lazy(() => import("./ThemeSelector"));
const useStyles = makeStyles(menuStyles);

export default function SimpleModal(props) {
  const [open, setOpen] = useState(true);
  const [HomeOpen, setHomeOpen] = useState(true); // default button view
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
      }}
    >
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ boxShadow: "none" }}
        className={classes.root}
      >
        <Grid item xs={11} sm={8} md={5} lg={4}>
          <Card className={classes.paper}>
            {HomeOpen ? (
              <HomeCard
                setHomeOpen={setHomeOpen}
                setAboutOpen={setAboutOpen}
                setThemes={setThemes}
                setVolume={props.setVolume}
                volume={props.volume}
                handleClose={handleClose}
                setCreateGame={setCreateGame}
                setFindGame={setFindGame}
                setRound={props.setRound}
                setMultiplayer={props.setMultiplayer}
                setOpen={setOpen}
              />
            ) : AboutOpen ? (
              <About setAboutOpen={setAboutOpen} setHomeOpen={setHomeOpen} />
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
                      ...Loading Fantasy Themes. Depending on your Connection
                      This May Take a moment!
                    </Button>
                  </div>
                }
              >
                <Themes
                  setHomeOpen={setHomeOpen}
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
                setHomeOpen={setHomeOpen}
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
                setHomeOpen={setHomeOpen}
              />
            ) : (
              ""
            )}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
  return (
    <>
      <div onClick={handleOpen} className="fixed-div">
        <Hidden mdUp>
          <HomeIcon
            onClick={handleOpen}
            style={{ fontSize: 25, color: "#fff" }}
          />
        </Hidden>
        <Hidden smDown>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={`${classes.modalButton} modal-btn-padding`}
          >
            <HomeIcon style={{ fontSize: 16 }} />
          </Button>
        </Hidden>
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
