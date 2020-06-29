import React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" id='home-button'>
            <HomeRoundedIcon />
          </IconButton>
          <div className={styles.centerPadding}></div>
          <Button>about</Button>
          <Button>experience</Button>
          <Button>work</Button>
          <Button>contact</Button>
          <Button>CV</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;