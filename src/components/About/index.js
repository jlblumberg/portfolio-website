import React from 'react';
import styles from './About.module.css';
import { Typography, Icon } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import scrollToElement from 'scroll-to-element';

const About = () => {

  const handleClick = () => {
    scrollToElement('.experience-section');
  }

  return (
    <div className={styles.flexContainer}>
      <div className={styles.headerText} id='header'>
        <Typography variant='h5' color='textSecondary'>ABOUT</Typography>
      </div>
      <div className={styles.icons} id='icons'>
        <IconButton href="https://github.com/jlblumberg/CV" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <Icon className="fab fa-github" fontSize="large" color="primary" />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/josh-blumberg/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <Icon className="fab fa-linkedin-in" fontSize="large" color="primary" />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/josh-blumberg/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <Icon className="fab fa-medium-m" fontSize="large" color="primary" />
        </IconButton>
      </div>
      <div className={styles.descriptionText} id='description'>
        <Typography variant='h6'>
          <p>
            I am a <strong>full-stack software engineer</strong>, former digital marketing specialist, and graduate
            of the <strong>Makers Academy</strong> software development bootcamp.
          </p>
          <p>
            I discovered my passion for software when I began learning how to code in order to automate some of the more repetitive tasks in digital marketing.
            I quickly found that I liked coding more than marketing, and so I enrolled in Makers and committed to career-changing (more on that in my blog post about it&nbsp;
            <a href="https://blog.makersacademy.com/bad-days-learning-to-code-and-gaining-control-422936255bb7" target="_blank" rel="noopener noreferrer">here</a>).
          </p>
          <p>
            Now, <strong>I'm looking to join a tech team</strong> where I can provide value,
            continue to learn, and build software which solves real world problems.
          </p>
        </Typography>
      </div>
      <div className={styles.downButton}>
        <IconButton color='primary' id='down-button' onClick={handleClick}>
          <KeyboardArrowDownIcon fontSize='large' />
        </IconButton>
      </div>
    </div>
  );
}

export default About;