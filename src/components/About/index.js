import React from 'react';
import styles from './About.module.css';
import { Typography } from '@material-ui/core';

const About = () => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.headerText} id='header'>
        <Typography variant='h4'>ABOUT</Typography>
      </div>
      <div className={styles.icons} id='icons'>
        icons here
      </div>
      <div className={styles.descriptionText} id='description'>
        <Typography variant='h6'>
          <p>
            I am a full stack software engineer, former digital marketing specialist, and graduate
            of the <strong>Makers Academy</strong> software development bootcamp.
          </p>
          <p>
            I discovered my passion for software when I began learning how to code in order to automate some of the more repetitive tasks in digital marketing.
            I quickly found that I liked coding more than marketing, and so I enrolled in Makers, and committed to career-changing (more on that in my blog post HERE).
          </p>
          <p>
            Now <strong>I'm looking to join a tech team</strong> where I can provide value,
            continue to learn, and build interesting technology.
          </p>
        </Typography>
      </div>
    </div>
  );
}

export default About;