/* eslint-disable @next/next/no-img-element */
import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import MenuButton from "../../components/MenuButton";
import { cortanaIcon, menuIcon, taskbarApps } from "../../utils/apps";
import Menu from "../Menu";

const MenuBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={(theme) => ({
        width: "100vw",
        height: 50,
        backgroundColor: `${theme.palette.background.grey}D9`,
        backdropFilter: "blur(2px)",
      })}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={0.5}
        sx={{ height: "100%", pl: 1.8 }}
      >
        <MenuButton onClick={handleClick}>
          <img src={menuIcon} alt="Start" style={{ height: 23 }} />
        </MenuButton>

        <MenuButton>
          <img src={cortanaIcon} alt="Cortana" style={{ height: 23 }} />
        </MenuButton>

        {taskbarApps.map((app, i) => (
          <MenuButton key={i}>
            <img src={app.icon} alt={app.name} style={{ height: 26 }} />
          </MenuButton>
        ))}
      </Stack>

      <Menu open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </Box>
  );
};

export default MenuBar;
