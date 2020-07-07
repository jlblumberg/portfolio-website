import React from 'react';
import styles from './Header.module.css';
import { Typography } from '@material-ui/core';

const Header = () => {
  return(
    <div className={styles.container}>
      <img src="https://i.imgur.com/OSV6Wuy.jpg" id="profile-picture" alt="Josh's face" className={styles.profilePic} />
      <Typography variant='h2'>Hi.</Typography>
      <Typography variant='h2' color='textSecondary'>I'm Josh Blumberg.</Typography>
      <Typography variant='h2' color='textSecondary'>I build software for the web.</Typography>
    </div>
  );
}

export default Header;