import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import LoadingPage from "./LoadingPage";
const App = lazy(() => import("./App"));

ReactDOM.render(
  <Suspense fallback={<LoadingPage />}>
    <App />
  </Suspense>,

  document.getElementById("root")
);
