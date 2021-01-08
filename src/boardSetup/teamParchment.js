import Hidden from "@material-ui/core/Hidden";

const teamParchment = (props) => {
  const { parch } = props;
  return (
    <div
      className="info-area"
      style={{
        backgroundImage: `url(${parch})`,
        backgroundBlendMode: "multiply",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        //border: "2px solid black",
      }}
    >
      {props.round === 0 ? (
        <div style={{ color: "#8B0000" }}>...Waiting on Enemy </div>
      ) : (
        <>
          <Hidden smDown>
            <div style={{ fontSize: "x-large" }}>
              <p>{props.team === 1 ? "Black" : "White"}</p>
            </div>
          </Hidden>
          <div className="info-area-text" style={{ fontSize: "large" }}>
            <p>Currently Selected:</p>
          </div>
          <div className="info-area-text" style={{ fontSize: "large" }}>
            {props.round === props.team
              ? props.selectedSquare !== undefined
                ? `${props.selectedSquare.occupied.piece}`
                : "None"
              : "None"}
          </div>
          <Hidden smDown>
            <div style={{ fontSize: "large" }}>
              <p>Status:</p>
            </div>
          </Hidden>
          <div
            className="info-area-text"
            style={{
              fontSize: "x-large",
              color: props.round === props.team ? "#013220" : "#8B0000",
            }}
          >
            {props.round === props.team
              ? "Your Move!" // Choose Wisely"
              : "...Waiting for Enemy"}
          </div>
        </>
      )}
    </div>
  );
};

export default teamParchment;
