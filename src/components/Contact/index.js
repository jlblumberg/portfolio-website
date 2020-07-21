import React from 'react';
import styles from './Contact.module.css'
import { IconButton, Typography, TextField, Button } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Contact = () => {

  const handleClick = () => {
    alert('add in scroll functionality later')
  }

  return (
    <div className={styles.flexContainer}>
      <div id='header'>
        <Typography style={{ marginTop: '5.5em', marginBottom: '3.5em' }} variant='h5'>
          Why not say <strong>hi</strong> 👋
        </Typography>
      </div>
      <div className={styles.form} id='form'>
        <form action="https://getsimpleform.com/messages?form_api_token=fee2c6c94fa2bb6ca482405d707eba90" method='POST'>
          <TextField fullWidth style={{ marginBottom: '1.25em' }} variant='outlined' name='email' label='Your email address' />
          <TextField fullWidth style={{ marginBottom: '1.25em' }} variant='outlined' name='subject' label='Message summary' />
          <TextField fullWidth style={{ marginBottom: '2em' }} variant='outlined' multiline rows={4} name='body' label='Message body' />
          <div style={{ textAlign: 'center' }}>
            <Button
              color='primary'
              variant='contained'
              type='submit'
              onClick={(e) => { alert("Thanks! I'll get back to you as soon as I can.") }}
            >
              send
            </Button>
          </div>
        </form>
      </div>
      <div>
        <IconButton
          color='primary'
          id='back-to-top-button'
          style={{ marginTop: '2.5em' }}
          onClick={handleClick}
        >
          <KeyboardArrowUpIcon fontSize='large' />
        </IconButton>
      </div>
    </div>
  )
}

export default Contact