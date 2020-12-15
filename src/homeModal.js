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
import Hidden from "@material-ui/core/Hidden";
// Icons
import { mdiHome } from "@mdi/js";
import { mdiMapMarker } from "@mdi/js";
import Icon from "@mdi/react";
import { mdiArrowLeftBold } from "@mdi/js";
import { mdiStar } from "@mdi/js";
import { mdiAlertCircle } from "@mdi/js";

export default function SimpleModal(props) {
  const [open, setOpen] = React.useState(true);
  const useStyles = makeStyles(() => ({
    root: {
      background: "#ddd6cd",
    },
    paper: {
      backgroundImage: `url(${props.bg})`,
      backgroundBlendMode: "multiply",
      backgroundSize: "cover",
      borderRadius: "15px",
      border: "1px solid #222426",
      boxShadow: "none",
      padding: "20px",
    },
    divider: {
      backgroundColor: "#a8964d",
      margin: "5px 5px",
    },
    text: {
      fontFamily: "Barlow, san-serif",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
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
      <Grid item xs={11} md={6} lg={4} className={classes.paper}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography align="center" variant="h5" component="h5">
                Welcome to Fantasy Chess!
              </Typography>
              <Divider variant={"top"} className={classes.divider} />
              <Typography variant="body1" display="block">
                Allows 2 players to play a logic complete chess game locally.
                Works well as a replacement for a chessboard on a mobile phone
                or tablet. Future functionality to include online multiplayer
                once I get around to rigging up the server! Select your fanatasy
                battleground and conquer!
                <Divider variant={"middle"} className={classes.divider} />
                Future Functionality to be added: <br />
                - A server for 2 players to play online.
                <br />- Autoplay function which runs after first player moves
                with rules for the best possible move to checkmate.
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
                //setDisplayComments(false);
                handleClose();
              }}
              style={{
                fontSize: "0.7rem", // changed for mobile-> remove
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
    <div>
      <div onClick={handleOpen}>
        <Button
          //variant="default"
          variant="contained"
          size="small"
          color="primary"
        >
          <Icon path={mdiHome} title={props.city} size={0.6} color={"white"} />
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
    </div>
  );
}
