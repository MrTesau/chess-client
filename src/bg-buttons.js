import React from "react";
import gameOfThrones_1 from "./battlegrounds/got/got_North_V_Zombies.js";
import WoWBattleground from "./battlegrounds/wow_hordvally.js";
import LoLBattleground from "./battlegrounds/LoL/lol_champion_royale.js";
import classicBattleground from "./battlegrounds/classic/classic.js";

export const SelectBG = ({
  setCurrentBgImg,
  setSquares,
  setBattleground,
  squares,
  wowBg,
  gotBg,
  lolBg,
  lolBg2,
}) => {
  return (
    <div id="buttons-container">
      <p> Select Your Battleground:</p>
      <div>
        <button
          onClick={() => {
            setCurrentBgImg(wowBg);
            //setBattlegroundUniverse();
            setSquares(setBattleground(WoWBattleground));
            // setSelectedSquare(undefined);
          }}
        >
          World of Warcraft
        </button>
        <button
          onClick={() => {
            setCurrentBgImg(gotBg);
            //setBattlegroundUniverse();
            setSquares(setBattleground(gameOfThrones_1));
            //  setSelectedSquare(undefined);
          }}
        >
          Game Of Thrones
        </button>
        <button
          onClick={() => {
            setCurrentBgImg(() => {
              return Math.random() > 0.5 ? lolBg : lolBg2;
            });
            setSquares(setBattleground(LoLBattleground));
          }}
        >
          League Of legends
        </button>
        <button
          onClick={() => {
            setCurrentBgImg(() => {
              return Math.random() > 0.5 ? lolBg : lolBg2;
            });
            setSquares(setBattleground(classicBattleground));
          }}
        >
          Classic Chess
        </button>
      </div>
    </div>
  );
};
export default SelectBG;
