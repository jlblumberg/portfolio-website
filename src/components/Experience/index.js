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
          <Accordion id='accordian' key={index}>
            <AccordionSummary styles={{textAlign: 'center'}} expandIcon={<ExpandMoreIcon />}>
              <Avatar className={styles.avatar} src={experience.avatar} variant="square"></Avatar>
              <Typography variant='h6' color='textPrimary' className={styles.primaryHeader}>{experience.institution}</Typography>
              <Typography variant='h6' color='textSecondary'>{experience.dates}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='h6' component={'span'}>
                <ul>
                  <li>{experience.description1}</li>
                  <li>{experience.description2}</li>
                  <li>{experience.description3}</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
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