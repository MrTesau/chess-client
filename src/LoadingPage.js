import wood_desk from "./boardSetup/menuComponents/wood.jpg";
import { Button } from "@material-ui/core";

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
