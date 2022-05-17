import React from "react";
import styles from "./Contact.module.css";
import { IconButton, Typography, Button } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import scrollToElement from "scroll-to-element";

const Contact = () => {
  const handleClick = () => {
    scrollToElement(".header-section");
  };

  return (
    <div className={styles.flexContainer}>
      <div id="header" className={styles.headerText}>
        <Typography
          style={{ marginTop: "5.5rem", marginBottom: "3rem" }}
          variant="h5"
        >
          Why not say <strong>hi</strong> 👋
        </Typography>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="mailto: jlblumberg@gmail.com">
          <Button color="primary" variant="contained">
            Send email
          </Button>
        </a>
      </div>
      <div className={styles.upButton}>
        <IconButton
          color="primary"
          id="back-to-top-button"
          onClick={handleClick}
        >
          <KeyboardArrowUpIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default Contact;
