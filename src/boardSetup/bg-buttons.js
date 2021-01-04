import React from "react";
import Button from "@material-ui/core/Button";
import gameOfThrones_1 from "../battlegrounds/got/got_North_V_Zombies.js";
//import { resetSquares } from "./boardFunctions.js";
import gotBg from "../assets/img/gotBG.jpg";
import Hidden from "@material-ui/core/Hidden";
import { mdiPlayCircleOutline } from "@mdi/js";
import { mdiStopCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";

export const SelectBG = (props) => {
  const {
    setRound,
    setAutoPlay,
    setSelectedSquare,
    setSquares,
    //setCurrentBgImg,
    autoPlay,
    squares,
    resetSquares,
    currentTheme,
    setBattleground,
  } = props;
  return (
    <>
      {!autoPlay ? (
        <>
          <Hidden lgUp>
            <Icon
              path={mdiPlayCircleOutline}
              title="autoplay"
              size={0.86}
              color={"white"}
              onClick={() => {
                setRound(1);
                setAutoPlay(true);
                setSelectedSquare(undefined);
              }}
            />
          </Hidden>
          <Hidden mdDown>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              onClick={() => {
                setRound(1);
                setSelectedSquare(undefined);
                setAutoPlay(true);
              }}
              style={{
                fontSize: "0.7rem",
                margin: "0.3rem",
                marginLeft: "0rem",
              }}
            >
              <Icon
                path={mdiPlayCircleOutline}
                title="autoplay"
                size={0.87}
                color={"white"}
              />{" "}
              &nbsp; Play Advanced AI
            </Button>
          </Hidden>
        </>
      ) : (
        <>
          <Hidden lgUp>
            <Icon
              path={mdiStopCircleOutline}
              title="volume"
              size={0.8}
              color={"white"}
              onClick={() => {
                setAutoPlay(false);
                setSquares(setBattleground(currentTheme));
              }}
            />
          </Hidden>
          <Hidden mdDown>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setAutoPlay(false);
                setSquares(setBattleground(currentTheme));
              }}
              style={{
                fontSize: "0.7rem",
                margin: "0.3rem",
                marginLeft: "0rem",
              }}
            >
              <Icon
                path={mdiStopCircleOutline}
                title="volume"
                size={0.87}
                color={"white"}
              />{" "}
              &nbsp; Admit Defeat
            </Button>
          </Hidden>
        </>
      )}
    </>
  );
};
export default SelectBG;
