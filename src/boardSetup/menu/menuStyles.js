import wood_desk from "./wood.jpg";

const styles = (theme) => ({
  root: {
    outline: "none",
  },
  paper: {
    backgroundImage: `url(${wood_desk})`,
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
    border: "1px solid black",
    padding: "1rem",
    paddingTop: "3.5rem",
    paddingBottom: "3.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "19rem",
    outline: "none",
  },
  paperCreate: {
    flexDirection: "row",
  },
  paperFindGame: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "19rem",
  },
  divider: {
    backgroundColor: "#7b9095",
    margin: "5px 10px",
  },
  menuButton: {
    margin: theme.spacing(0.5),
    width: "10rem",
    fontSize: "0.65rem",
  },
  menuButtonFind: {
    margin: theme.spacing(0.5),
    width: "6rem",
    fontSize: "0.65rem",
  },
  button: {
    margin: theme.spacing(0.5),
    fontSize: "0.7rem",
  },
  modalButton: {
    margin: 0,
    marginBottom: theme.spacing(0.7),
    fontSize: "0.7rem",
  },
});
export default styles;
