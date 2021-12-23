import { Box } from "@mui/material";
import React from "react";
import Background from "../public/background.jpg";
import MenuBar from "../src/containers/MenuBar";
import Apps from "../src/containers/Apps";

const Home = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${Background})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <Box sx={{ height: "100%" }}>
        <Apps />
      </Box>

      <Box sx={{ bottom: "0px", position: "fixed" }}>
        <MenuBar />
      </Box>
    </Box>
  );
};

export default Home;
