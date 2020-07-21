import React from 'react';
import styles from './Projects.module.css'
import { Typography, IconButton, Card, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { projects } from '../../projects.js'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Masonry from 'react-masonry-css';

const Projects = () => {

  const handleClick = () => {
    alert('add in scroll functionality later')
  }

  const columnBreakpoints = {
    default: 3,
    1100: 3,
    1000: 2,
    600: 1
  };

  const projectCards = projects.map((project, index) => (
    <Card key={index} id="project">
      <CardContent>
        <CardMedia
          className={styles.image}
          component="img"
          alt={project.alt}
          image={project.image}
        />
        <Typography gutterBottom variant="h5">
          {project.title}
        </Typography>
        <Typography gutterBottom color="textSecondary">
          {project.techstack.join(" / ")}
        </Typography>
        <Typography component="p">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions className={styles.cardActions}>
        {project.websitelink === null ? null : (
          <Button
            href={project.websitelink}
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            variant="contained"
          >
            App
          </Button>
        )}
        <Button
          href={project.githublink}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          variant="contained"
        >
          Code
        </Button>
      </CardActions>
    </Card>
  ))

  return (
    <div className={styles.flexContainer}>
      <div className={styles.headerText} id='header'>
        <Typography variant='h5' color='textSecondary'>PROJECTS</Typography>
      </div>
      <Masonry
        breakpointCols={columnBreakpoints}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridColumns}
      >
        {projectCards}
      </Masonry>
      <div className={styles.downButton}>
        <IconButton
          color='primary'
          id='down-button'
          onClick={handleClick}>
          <KeyboardArrowDownIcon fontSize='large' />
        </IconButton>
      </div>
    </div>
  )
}

export default Projects;