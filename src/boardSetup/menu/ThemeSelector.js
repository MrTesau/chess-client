import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiCloudSearchOutline } from "@mdi/js";
import gameOfThrones_1 from "../../battlegrounds/got/got_North_V_Zombies.js";
import WoWBattleground from "../../battlegrounds/wow/wow_hordvally.js";
import LoLBattleground from "../../battlegrounds/LoL/lol_champion_royale.js";
import lotrtheme from "../../battlegrounds/lotr/menvsorcs.js";
// Background Images
import lotrbg from "../../battlegrounds/lotr/lotrbg.jpg";
import wowBg from "../../battlegrounds/wow/img/wowBG.jpg";
import gotBg from "../../battlegrounds/wow/img/gotBG.jpg";
import lolBg from "../../battlegrounds/wow/img/rift2.jpeg";
import lolBg2 from "../../battlegrounds/wow/img/rift.jpg";
import menuStyles from "./menuStyles.js";
const useStyles = makeStyles(menuStyles);

export default function ThemeModal(props) {
  const classes = useStyles();
  // If you try to fix this in the future
  // Good. Fucken. Luck.
  // Just make sure all UniqueN's are named normalName, normalName2
  const changePieces = (squares, theme) => {
    let newSquares = [...squares];
    let uniqueKeys = [];
    for (let i = 0; i < newSquares.length; i++) {
      if (newSquares[i].occupied) {
        let key = newSquares[i].occupied.name;
        if (theme[key].uniqueN) {
          let uniqueKey = theme[key].uniqueN + "";
          if (uniqueKeys.indexOf(uniqueKey) > -1) {
            let uniqueKey2 = uniqueKeys[uniqueKeys.indexOf(uniqueKey)] + "2";
            newSquares[i].occupied = theme[uniqueKey2]
              ? theme[uniqueKey2]
              : theme[uniqueKey];
          } else {
            uniqueKeys.push(theme[key].uniqueN + "");
            newSquares[i].occupied = theme[uniqueKey];
          }
        } else {
          newSquares[i].occupied = theme[key];
        }
      }
    }
    props.setSquares(newSquares);
  };
  return (
    <>
      <Button
        className={classes.menuButton}
        size="small"
        variant="contained"
        color="primary"
        onClick={() => {
          props.setCurrentBgImg(gotBg);
          props.setCurrentTheme(gameOfThrones_1);
          changePieces(props.squares, gameOfThrones_1);
        }}
      >
        Game of Thrones
      </Button>
      <Button
        className={classes.menuButton}
        size="small"
        variant="contained"
        color="primary"
        onClick={() => {
          props.setCurrentBgImg(wowBg);
          props.setCurrentTheme(WoWBattleground);
          changePieces(props.squares, WoWBattleground);
        }}
      >
        World of Warcraft
      </Button>
      <Button
        className={classes.menuButton}
        size="small"
        variant="contained"
        color="primary"
        onClick={() => {
          props.setCurrentBgImg(Math.random() > 0.5 ? lolBg : lolBg2);
          changePieces(props.squares, LoLBattleground);
          props.setCurrentTheme(LoLBattleground);
        }}
      >
        League of Legends
      </Button>
      <Button
        className={classes.menuButton}
        size="small"
        variant="contained"
        color="primary"
        onClick={() => {
          props.setCurrentBgImg(lotrbg);
          props.setCurrentTheme(lotrtheme);
          changePieces(props.squares, lotrtheme);
        }}
      >
        Lord of the Rings
      </Button>

      <Button
        className={classes.menuButton}
        size="small"
        variant="contained"
        color="primary"
        onClick={() => {
          props.setFindGame(true);
          props.setThemes(false);
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
          props.setHomeOpen(true);
          props.setThemes(false);
          props.setOpen(false);
        }}
      >
        Back
      </Button>
    </>
  );
}
