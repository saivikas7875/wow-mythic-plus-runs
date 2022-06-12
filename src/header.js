import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./styles.scss";

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar
        classes={{
          root: "nav-bar"
        }}
      >
        <Typography variant="h4">M+ Runs This Week</Typography>
      </Toolbar>
    </AppBar>
  );
};
