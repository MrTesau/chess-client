import React from "react";
// Menu
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// Battlegrounds
import gameOfThrones_1 from "../battlegrounds/got/got_North_V_Zombies.js";
import WoWBattleground from "../battlegrounds/wow_hordvally.js";
import LoLBattleground from "../battlegrounds/LoL/lol_champion_royale.js";
import classicBattleground from "../battlegrounds/classic/classic.js";
// Icon and Icon Button
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

import lotrbg from "../battlegrounds/lotr/lotrbg.jpg";
import lotrtheme from "../battlegrounds/lotr/menvsorcs.js";

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="menu-buttons">
      <Hidden xsDown>
        <Button
          variant="contained"
          size="small"
          color="primary"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={{ fontSize: "0.65rem" }}
        >
          Select Battleground
        </Button>
      </Hidden>
      <Hidden smUp>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon style={{ color: "white" }} />
        </IconButton>
      </Hidden>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            setCurrentBgImg(wowBg);
            setSquares(setBattleground(WoWBattleground));
            handleClose();
          }}
        >
          &nbsp;&nbsp;World of Warcraft&nbsp;
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCurrentBgImg(gotBg);
            setSquares(setBattleground(gameOfThrones_1));
            handleClose();
          }}
        >
          &nbsp;&nbsp;Game of Thrones&nbsp;
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCurrentBgImg(lotrbg);
            setSquares(setBattleground(lotrtheme));
            handleClose();
          }}
        >
          &nbsp;&nbsp;Lord of the Rings&nbsp;
        </MenuItem>

        <MenuItem
          onClick={() => {
            setCurrentBgImg(() => {
              return Math.random() > 0.5 ? lolBg : lolBg2;
            });
            setSquares(setBattleground(LoLBattleground));
            handleClose();
          }}
        >
          &nbsp;&nbsp;League of Legends&nbsp;
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSquares(setBattleground(classicBattleground));
            handleClose();
          }}
        >
          &nbsp;&nbsp;Classic Chess&nbsp;
        </MenuItem>
      </Menu>
    </div>
  );
};
export default SelectBG;
