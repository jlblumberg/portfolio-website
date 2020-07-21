import React from 'react';
import styles from './Experience.module.css';
import { IconButton, Typography, Accordion, AccordionSummary, Avatar, AccordionDetails } from '@material-ui/core';
import { experiences } from '../../experiences';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        {experiences.map((experience, index) => (
          <Accordion id='accordion' key={index}>
            <AccordionSummary styles={{ textAlign: 'center' }} expandIcon={<ExpandMoreIcon />}>
              <Avatar className={styles.avatar} src={experience.avatar} variant="square"></Avatar>
              <Typography variant='h6' color='textPrimary' className={styles.primaryHeader}>{experience.institution}</Typography>
              <Typography variant='subtitle1' color='textSecondary'>{experience.dates}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <ul>
                  <Typography component={'li'}>{experience.description1}</Typography><br />
                  <Typography component={'li'}>{experience.description2}</Typography><br />
                  <Typography component={'li'}>{experience.description3}</Typography>
                </ul>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div className={styles.downButton}>
        <IconButton color='primary' id='down-button' onClick={handleClick}>
          <KeyboardArrowDownIcon fontSize='large' />
        </IconButton>
      </div>
    </div>
  );
}

export default Experience;