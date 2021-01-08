import Button from "@material-ui/core/Button";
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
    autoPlay,
    currentTheme,
    setBattleground,
  } = props;
  return (
    <>
      {!autoPlay ? (
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
              fontSize: "0.68rem",
              textTransform: "none",
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
              fontSize: "0.68rem",
              textTransform: "none",
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
      )}
    </>
  );
};
export default SelectBG;
