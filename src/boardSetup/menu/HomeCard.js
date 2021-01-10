// Icons
import { makeStyles } from "@material-ui/core/styles";
import {
  mdiArrowLeftBold,
  mdiInformationOutline,
  mdiCloudSearchOutline,
  mdiVolumeOff,
  mdiVolumeHigh,
} from "@mdi/js";
import Icon from "@mdi/react";
import menuStyles from "./menuStyles.js";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(menuStyles);
const HomeCard = (props) => {
  const {
    setHomeOpen,
    setAboutOpen,
    setThemes,
    setVolume,
    volume,
    handleClose,
    setCreateGame,
    setFindGame,
    setRound,
    setMultiplayer,
    setOpen,
  } = props;
  const classes = useStyles();
  return (
    <>
      <Button
        className={classes.menuButton}
        size="small"
        variant="contained"
        color="primary"
        id="about"
        onClick={() => {
          setHomeOpen(false);
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
          setHomeOpen(false);
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
          setVolume(volume);
        }}
      >
        <Icon
          path={volume ? mdiVolumeHigh : mdiVolumeOff}
          title="Volume"
          size={0.6}
          color={"white"}
        />{" "}
        <span>&nbsp;&nbsp;{volume ? "Volume On" : "Volume Off"}</span>
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
          setHomeOpen(false);
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
          setHomeOpen(false);
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
          setRound(1);
          setMultiplayer(false);
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
    </>
  );
};

export default HomeCard;
