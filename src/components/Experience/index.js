import React from 'react';
import styles from './Experience.module.css';
import { Typography, IconButton } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Experience = () => {

  const handleClick = () => {
    alert('add in scroll functionality later')
  }

  return (
    <div className={styles.flexContainer}>
      <div className={styles.headerText} id='header'>
        <Typography variant='h5' color='textSecondary'>EXPERIENCE</Typography>
      </div>
      <div className={styles.descriptionText} id='description'>
        <Typography variant='h6'>
          <p>
            experience descriptions
          </p>
        </Typography>
      </div>
      <div>
        <IconButton color='primary' id='down-button' onClick={handleClick}>
          <KeyboardArrowDownIcon fontSize='large' />
        </IconButton>
      </div>
    </div>
  );
}

export default Experience;