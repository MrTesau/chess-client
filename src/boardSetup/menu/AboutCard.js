import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// Icons
import Icon from "@mdi/react";
import { mdiArrowLeftBold } from "@mdi/js";
import menuStyles from "./menuStyles.js";

export default function SimpleModal(props) {
  const useStyles = makeStyles(menuStyles);
  const classes = useStyles();
  return (
    <>
      <CardContent
        style={{
          background: "rgba(253,245,230,0.8)",
          border: "1px solid black",
          fontFamily: "sans-serif",
          fontSize: "0.8rem",
        }}
      >
        <Typography align="center" variant="body1" component="h5">
          Welcome to Fantasy Chess!
        </Typography>
        <Divider variant={"inset"} className={classes.divider} />
        Allows 2 players to play a logic complete chess game. Functionality
        includes online multiplayer lobby and ability to battle my highly
        advanced AI algorithm. Select your fanatasy battleground and conquer!
        <Divider variant={"middle"} className={classes.divider} />
        <Typography align="center" variant="body1" component="h5">
          Tech Stack
        </Typography>
        Front End: React, Javascript, CSS, MaterialUI
        <br />
        Back End: Node.js, Express, MongoDb/Mongoose running on Lambda
        Serverless functions.
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => {
            props.setAboutOpen(false);
            props.setHomeOpen(true);
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
          <span>&nbsp;Back</span>
        </Button>
      </CardActions>
    </>
  );
}
