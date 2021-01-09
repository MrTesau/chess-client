import { React } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiArrowLeftBold, mdiRefresh } from "@mdi/js";
import menuStyles from "./menuStyles.js";
const useStyles = makeStyles(menuStyles);

export default function FindGamesCard(props) {
  const classes = useStyles();
  return (
    <div className={`${classes.paperFindGame}`}>
      <Button
        className={classes.menuButton}
        size="small"
        variant="contained"
        color="secondary"
        style={{ fontSize: "0.8rem", width: "18rem" }}
      >
        Available Games
      </Button>
      <br />
      {props.allGameRooms !== null && props.allGameRooms.length ? (
        props.allGameRooms.map((game, idx) => {
          return (
            <Button
              key={idx}
              className={classes.menuButton}
              size="small"
              variant="contained"
              color="primary"
              onClick={() => {
                props.JoinGameRoom(game);
                props.setMultiplayer(true);
                props.setGameRoom(game.gameName);
                props.setFindGame(false);
                props.setPlayer(2);
                props.setOpen(false);
                props.setHomeOpen(true);
              }}
            >
              {game.gameName}
            </Button>
          );
        })
      ) : (
        <Button
          className={classes.menuButton}
          size="small"
          variant="contained"
          color="primary"
          style={{
            width: "14rem",
            fontSize: "0.7rem",
            textTransform: "none",
          }}
        >
          ...Oops! No Games Found.
        </Button>
      )}
      )
      <br />
      <span>
        <Button
          className={classes.menuButtonFind}
          size="small"
          variant="contained"
          color="primary"
          onClick={() => {
            props.setFindGame(false);
            props.setHomeOpen(true);
          }}
        >
          <Icon
            path={mdiArrowLeftBold}
            title="refresh"
            size={0.6}
            color={"white"}
          />{" "}
          <span>&nbsp;Back</span>
        </Button>
        <Button
          className={classes.menuButtonFind}
          size="small"
          variant="contained"
          color="primary"
          onClick={() => {
            // Might autoUpdate as createGame() shares games
            // props.refreshGames();
          }}
        >
          <Icon path={mdiRefresh} title="refresh" size={0.6} color={"white"} />{" "}
          <span>&nbsp;Refresh</span>
        </Button>
      </span>
    </div>
  );
}
