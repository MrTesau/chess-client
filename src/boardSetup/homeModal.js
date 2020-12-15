import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
//import card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
//import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
//import PersonItem from "./orgimmarVisitors.js";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
// Icons
import HelpIcon from "@material-ui/icons/Help";
import Icon from "@mdi/react";
import { mdiArrowLeftBold } from "@mdi/js";
import wood_desk from "./wood.jpg";

export default function SimpleModal(props) {
  const [open, setOpen] = React.useState(false);
  const useStyles = makeStyles(() => ({
    root: {
      background: "#ddd6cd",
    },
    paper: {
      backgroundImage: `url(${wood_desk})`,
      backgroundBlendMode: "multiply",
      backgroundSize: "cover",
      borderRadius: "15px",
      boxShadow: "none",
      padding: "20px",
    },
    divider: {
      backgroundColor: "#7b9095",
      margin: "5px 10px",
    },
  }));
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Grid xs={11} lg={5} className={classes.paper}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography align="center" variant="h5" component="h5">
                Welcome to Fantasy Chess!
              </Typography>
              <Divider variant={"inset"} className={classes.divider} />
              <Typography variant="body2" display="block">
                Allows 2 players to play a logic complete chess game locally.
                Works well as a replacement for a chessboard on a mobile phone
                or tablet. Future functionality to include online multiplayer
                once I finish rigging up the server! Select your fanatasy
                battleground and conquer!
                <br />
                Future Functionality to be added: <br />
                - A server for 2 players to play online.
                <br />- Autoplay function which runs after first player moves
                with rules for the best possible move to checkmate.
                <Divider variant={"middle"} className={classes.divider} />
                <Typography align="center" variant="subtitle1" component="p">
                  Tech Stack
                </Typography>
                React/Javascript for board pieces and movement rules logic. I
                had fun trying to get the pieces to move correctly without
                resorting to external resources and it was interesting finding
                solutions to edge cases.
                <Divider variant={"middle"} className={classes.divider} />
                Styling was done with a combination of materialUi and vanilla
                css. In hindsight materialUi's layout components could have been
                replaced completely with a simple flexbox and grid layout but it
                did provide me with some insight on how to implement their Grid
                containers and Items in other projects.
                <Divider variant={"middle"} className={classes.divider} />
                Audio: I was completely new to handling audio in React so tried
                many solutions. In the end I just used a basic HTML Audio elemnt
                as the only issue was slight lag on intial responses defpending
                on connection speed. I plan on playing with several Audio
                libraries such as sound.js to improve this but didnt want to
                dive too deep into them for now as Html Audio provides
                satisfactory results.
                <Divider variant={"bottom"} className={classes.divider} />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              outlined
              size="small"
              variant="contained"
              color="primary"
              onClick={() => {
                handleClose();
              }}
              style={{
                fontSize: "0.7rem",
              }}
            >
              <Icon
                path={mdiArrowLeftBold}
                title="Orgrimmar"
                size={0.6}
                color={"white"}
              />{" "}
              <span>&nbsp; Lets Play! </span>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );

  return (
    <>
      <div onClick={handleOpen}>
        <Button variant="contained" color="primary" size="small">
          <HelpIcon style={{ fontSize: 20 }} color={"white"} />
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
