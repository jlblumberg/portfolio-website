import React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" edge="start" id='home-button'>
            <HomeRoundedIcon />
          </IconButton>
          <div className={styles.centerPadding}></div>
          <Button color="inherit">about</Button>
          <Button color="inherit">experience</Button>
          <Button color="inherit">projects</Button>
          <Button color="inherit">contact</Button>
          <Button variant="outlined" color="inherit">CV / Resume</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;