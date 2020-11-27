import React from "react";
import "./App.css";
// backgrounds
import wowBg from "./assets/img/wowBG.jpg";
import gotBg from "./assets/img/gotBG.jpg";
import CreateBoard from "./CreateBoard.js";

const App = () => {
  const [currentBG, setCurrentBG] = React.useState(gotBg);
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${currentBG})`,
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
      }}
    >
      <div className="board-container">
        <CreateBoard setCurrentBG={setCurrentBG} wowBg={wowBg} gotBg={gotBg} />
      </div>
    </div>
  );
};

export default App;
