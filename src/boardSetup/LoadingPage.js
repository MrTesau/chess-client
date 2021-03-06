import wood_desk from "./menu/wood.jpg";
import Button from "@material-ui/core/Button";

const LoadingPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "Center",
        backgroundImage: `url(${wood_desk})`,
        backgroundSize: "cover",
      }}
    >
      <Button
        size="small"
        variant="contained"
        color="primary"
        style={{ textTransform: "none" }}
      >
        ...Loading Fantasy Chess
      </Button>
    </div>
  );
};
export default LoadingPage;
