import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import wood_desk from "./boardSetup/menuComponents/wood.jpg";
import { Button } from "@material-ui/core";
const App = lazy(() => import("./App"));

ReactDOM.render(
  <Suspense
    fallback={
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
        <Button size="small" variant="contained" color="primary">
          ...Loading Fantasy Chess
        </Button>
      </div>
    }
  >
    <App />
  </Suspense>,

  document.getElementById("root")
);
