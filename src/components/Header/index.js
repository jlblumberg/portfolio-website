import React from 'react';
import styles from './Header.module.css';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Header = () => {

  const handleClick = () => {
    alert('add in scroll functionality later')
  }

  return (
    <div className={styles.flexContainer}>
      <img src='https://i.imgur.com/OSV6Wuy.jpg' id='profile-picture' alt='Joshs face' className={styles.profilePic} />
      <div className={styles.headerText}>
        <Typography variant='h2'>Hi.</Typography>
        <Typography variant='h2' color='textSecondary'>I'm Josh Blumberg, <br /> and I build software for the web.</Typography>
      </div>
      <div className={styles.downButton}>
        <IconButton color='primary' id='down-button' onClick={handleClick}>
          <KeyboardArrowDownIcon fontSize='large' />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;