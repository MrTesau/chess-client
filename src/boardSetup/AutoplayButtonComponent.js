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
  const startAutoplayGame = () => {
    setRound(1);
    setSelectedSquare(undefined);
    setAutoPlay(true);
  };
  const endAutoplayGame = () => {
    setAutoPlay(false);
    setSquares(setBattleground(currentTheme));
  };
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
              <Hidden mdUp>
                <Icon
                  path={mdiPlayCircleOutline}
                  title="autoplay"
                  size={0.9}
                  onClick={startAutoplayGame}
                  color={"white"}
                />{" "}
              </Hidden>
              <Hidden smDown>
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  onClick={startAutoplayGame}
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
                  &nbsp; Play Unbeatable A.I
                </Button>
              </Hidden>
            </>
          ) : (
            <>
              <Hidden mdUp>
                {" "}
                <Icon
                  path={mdiStopCircleOutline}
                  title="volume"
                  size={0.9}
                  color={"white"}
                  onClick={endAutoplayGame}
                />
              </Hidden>
              <Hidden smDown>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={endAutoplayGame}
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
                  &nbsp; Admit Defeat
                </Button>
              </Hidden>
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
            size={0.9}
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
