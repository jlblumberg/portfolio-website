import React from 'react';
import styles from './Header.module.css';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Header = () => {

  const handleClick = () => {
    alert('add in scroll functionality later')
  }

  return (
    <div className={styles.container}>
      <img src='https://i.imgur.com/OSV6Wuy.jpg' id='profile-picture' alt='Joshs face' className={styles.profilePic} />
      <div className={styles.headerText}>
        <Typography variant='h2'>Hi.</Typography>
        <Typography variant='h2' color='textSecondary'>I'm Josh Blumberg.</Typography>
        <Typography variant='h2' color='textSecondary'>I build software for the web.</Typography>
      </div>
      <IconButton color='primary' id='down-button' onClick={handleClick}>
        <ArrowDownwardIcon fontSize='large' />
      </IconButton>
    </div>
  );
}

export default Header;