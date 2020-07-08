import React from 'react';
import styles from './About.module.css';
import { Typography } from '@material-ui/core';

const About = () => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.headerText}>
        <Typography variant='h5'>ABOUT</Typography>
      </div>
      <div className={styles.icons}>
        icons here
      </div>
      <div className={styles.descriptionText}>
        Description here
      </div>
    </div>
  );
}

export default About;