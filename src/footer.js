import React from "react";
import { Typography, Container, LinearProgress, Link } from "@material-ui/core";
import "./styles.css";

export const Footer = () => {
  const preventDefault = (event) => event.preventDefault();

  return (
    <Container className="footer">
      <div className="footer-content">
        <Typography>
          Application data is from
          <Link
            className="link"
            href="https://raider.io/"
            onClick={preventDefault}
          >
            raider.io
          </Link>
        </Typography>
      </div>
    </Container>
  );
};
