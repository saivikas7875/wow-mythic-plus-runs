import React from "react";
import "./styles.css";
import { Menu, Header } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <Menu color="teal" inverted className="nav-bar" borderless size="large">
      <Header as="h1">M+ runs this week</Header>
    </Menu>
  );
};
