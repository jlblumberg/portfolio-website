import React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import styles from './Navbar.module.css';
import scrollToElement from 'scroll-to-element';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            id="home-button"
            onClick={() => scrollToElement('.header-section')}
          >
            <HomeRoundedIcon />
          </IconButton>
          <div className={styles.centerPadding}></div>
          <Button color="inherit" onClick={() => scrollToElement('.about-section')}>about</Button>
          <Button color="inherit" onClick={() => scrollToElement('.experience-section')}>experience</Button>
          <Button color="inherit" onClick={() => scrollToElement('.projects-section')}>projects</Button>
          <Button color="inherit" onClick={() => scrollToElement('.contact-section')}>contact</Button>
          <Button
            variant="outlined"
            color="inherit"
            style={{marginLeft: "5px"}}
            href="https://drive.google.com/file/d/10JzC6cbOU-7MVljs-Vjb0n5P94x3iz9m/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            >CV / Resume</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;