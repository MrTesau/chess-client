import React from "react";
import "./parchement.css";

const Parchment = () => {
  return (
    <div>
      <div id="parchment"></div>
      <div id="contain">
        <p className="inkTitle">Game Of Thrones</p>
        <p id="labarum">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Chi_Rho.svg/1200px-Chi_Rho.svg.png" />
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus.{" "}
        </p>
        <p className="cachet">
          <img src="https://i.postimg.cc/4NBYNqCR/22.png"></img>
        </p>
        <div id="signature">
          Imperator Caesar Flavius Constantinus
          <br />
          Pius Felix Invictus Augustus
        </div>
      </div>

      <svg>
        <filter id="wavy2">
          <feturbulence
            x="0"
            y="0"
            baseFrequency="0.02"
            numOctaves="5"
            seed="1"
          ></feturbulence>
          <feDisplacementMap in="SourceGraphic" scale="5" />
        </filter>
      </svg>
    </div>
  );
};
export default Parchment;
