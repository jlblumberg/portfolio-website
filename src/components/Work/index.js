import React from 'react';
import styles from './Work.module.css'
import { Typography, IconButton } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Work = () => {

  const handleClick = () => {
    alert('add in scroll functionality later')
  }

  return(
    <div className={styles.flexContainer}>
      <div className={styles.headerText} id='header'>
        <Typography variant='h5' color='textSecondary'>MY WORK</Typography>
      </div>
      <div>
        <IconButton color='primary' id='down-button' onClick={handleClick}>
          <KeyboardArrowDownIcon fontSize='large' />
        </IconButton>
      </div>
    </div>
  )
}

export default Work;