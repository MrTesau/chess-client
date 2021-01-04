import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import menuStyles from "./menuStyles.js";
import TextField from "@material-ui/core/TextField";

// Call connection from App props
// Set GameId from returned value -> use a ref to gameId ? 36.04
// list GameID in findGames Arr
// connect to io/wait for another player to join game

export default function SimpleModal(props) {
  const [gameName, setGameName] = useState({});
  const useStyles = makeStyles(menuStyles);
  const classes = useStyles();

  const handleSubmit = () => {
    let game = { gameName: gameName.gameName, playerId: props.playerId };
    props.setGameAvailable(game);
    props.JoinGameRoom(game);
    props.setMultiplayer(true);
    props.setOpen(false);
    props.setGameRoom(game.gameName);
    props.setPlayer(1);
  };

  const handleChange = (e) => {
    setGameName({ [e.target.name]: e.target.value });
  };
  return (
    <>
      <Card className={`${classes.paper} ${classes.paperCreate}`}>
        <CardContent
          style={{
            background: "rgba(253,245,230,0.8)",
            border: "1px solid black",
          }}
        >
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Enter Game Name"
              variant="outlined"
              name="gameName"
              onChange={(e) => handleChange(e)}
            />
          </form>
          <span>
            <Button
              className={classes.menuButtonFind}
              size="small"
              variant="contained"
              color="primary"
              onClick={() => {
                handleSubmit();
              }}
            >
              Create Game
            </Button>
            <Button
              className={classes.menuButtonFind}
              size="small"
              variant="contained"
              color="primary"
              onClick={() => {
                props.setCreateGame(false);
              }}
            >
              Back
            </Button>
          </span>
        </CardContent>
      </Card>
    </>
  );
}
