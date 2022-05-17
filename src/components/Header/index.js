import React from "react";
import styles from "./Header.module.css";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import scrollToElement from "scroll-to-element";

const Header = () => {
  const handleClick = () => {
    scrollToElement(".about-section");
  };

  return (
    <div className={styles.flexContainer}>
      <img
        src="https://i.imgur.com/OSV6Wuy.jpg"
        id="profile-picture"
        alt="Josh's face"
        className={styles.profilePic}
      />
      <div className={styles.headerText}>
        <Typography variant="h2">Hi. </Typography>
        <Typography variant="h2" color="textSecondary">
          I'm Josh Blumberg and I build software.
        </Typography>
      </div>
      <div>
        <IconButton color="primary" id="down-button" onClick={handleClick}>
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
