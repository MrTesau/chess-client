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
      }}
    >
      {props.round === 0 ? (
        <div style={{ color: "#8B0000" }}>...Waiting on Enemy </div>
      ) : (
        <>
          <Hidden xsDown>
            <div style={{ fontSize: "1.2rem" }}>
              <p>{props.team === 1 ? "Black" : "White"}</p>
            </div>
          </Hidden>
          <div
            className="info-area-text-selected"
            style={{ fontSize: "1.2rem" }}
          >
            <p>Currently Selected:</p>
          </div>
          <div className="info-area-text-piece" style={{ fontSize: "1.5rem" }}>
            {props.round === props.team
              ? props.selectedSquare !== undefined
                ? `${props.selectedSquare.occupied.piece}`
                : "None"
              : "None"}
          </div>
          <Hidden mdDown>
            <div style={{ fontSize: "1.2rem" }}>
              <p>Status:</p>
            </div>
          </Hidden>
          <div
            className="info-area-text-status"
            style={{
              fontSize: "1.2rem",
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
