import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import {
  mdiPlayCircleOutline,
  mdiStopCircleOutline,
  mdiRefresh,
} from "@mdi/js";
import Icon from "@mdi/react";

export const SelectBG = (props) => {
  const {
    setRound,
    setAutoPlay,
    setSelectedSquare,
    setSquares,
    autoPlay,
    currentTheme,
    setBattleground,
    multiplayer,
  } = props;
  const reset = () => {
    setRound(2);
    setSelectedSquare(undefined);
    setSquares(setBattleground(currentTheme));
    if (multiplayer)
      alert(
        "When resetting a multiplayer match please refresh page and create a new game."
      );
  };
  return (
    <>
      <div className="autoplay-fixed">
        {!multiplayer ? (
          !autoPlay ? (
            <>
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
                  fontSize: "0.62rem",
                }}
                className={`modal-btn-padding`}
              >
                <Icon
                  path={mdiPlayCircleOutline}
                  title="autoplay"
                  size={0.7}
                  color={"white"}
                />{" "}
                <Hidden mdDown>&nbsp; Play Unbeatable AI</Hidden>
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  setAutoPlay(false);
                  setSquares(setBattleground(currentTheme));
                }}
                style={{
                  fontSize: "0.62rem",
                }}
                className={`modal-btn-padding`}
              >
                <Icon
                  path={mdiStopCircleOutline}
                  title="volume"
                  size={0.7}
                  color={"white"}
                />{" "}
                <Hidden mdDown> &nbsp; Admit Defeat</Hidden>
              </Button>
            </>
          )
        ) : (
          ""
        )}
      </div>
      {/* Reset Game Button */}
      <div className="reset-button-right">
        <Hidden lgUp>
          <Icon
            path={mdiRefresh}
            title="autoplay"
            size={0.8}
            color={"white"}
            onClick={reset}
          />
        </Hidden>
        <Hidden mdDown>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={reset}
            className="reset-button"
          >
            <Icon
              path={mdiRefresh}
              title="autoplay"
              size={0.7}
              color={"white"}
            />{" "}
            &nbsp;Reset Game
          </Button>
        </Hidden>
      </div>
    </>
  );
};
export default SelectBG;
