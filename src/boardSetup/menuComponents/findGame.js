import { React /*useState*/ } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Icon from "@mdi/react";
import { mdiArrowLeftBold, mdiRefresh } from "@mdi/js";
import menuStyles from "./menuStyles.js";
const useStyles = makeStyles(menuStyles);

export default function FindGamesCard(props) {
  //const [games, setGames] = useState([]);
  const classes = useStyles();
  const getGamesHandler = () => {
    // Everytime someone connects to App they get a gameId
    // When you create a game it emits to all connected ID's
    // These are displayed here
    // Clicking this connects a "Chat" to the gameId, remove that game from display
  };
  return (
    <>
      <Card className={`${classes.paperFindGame}`}>
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
            ...No Games Found. Refresh to find New Games
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
              //might autoUpdate as createGame sharesGames
              // props.refreshGames();
            }}
          >
            <Icon
              path={mdiRefresh}
              title="refresh"
              size={0.6}
              color={"white"}
            />{" "}
            <span>&nbsp;Refresh</span>
          </Button>
        </span>
      </Card>
    </>
  );
}
