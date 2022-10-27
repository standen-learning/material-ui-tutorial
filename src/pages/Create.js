import React, { useState } from 'react'
import { Typography, Button, Container, TextField } from '@mui/material'
// import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
// import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const styles = {
  field: {
    marginTop: 5,
    marginBottom: 5,
    display: 'block'
  }
}

export default function Create() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === '') {
      setTitleError(true);
    }

    if(details === '') {
      setDetailsError(true);
    }

    if(title && details) {
      console.log(title, details);
    }
  }

  return (
    <Container>
        <Typography
          variant="h6"
          component="h2"
          color="textSecondary"
          gutterBottom
        >
          Create a New Note
        </Typography>

        <form
          noValidate 
          autoComplete="off"
          onSubmit={handleSubmit}
      >
          <TextField 
            onChange={(e) => setTitle(e.target.value)}
            sx={styles.field}
            label="Note Title"
            variant='outlined'
            color="secondary"
            fullWidth
            required
            error={titleError}
          />
          <TextField 
            onChange={(e) => setDetails(e.target.value)}
            sx={styles.field}
            label="Details"
            variant='outlined'
            color="secondary"
            multiline
            rows={4}
            fullWidth
            required
            error={detailsError}
          />

          <Button 
            type="submit"
            color="primary"
            variant="contained"
            endIcon={ <KeyboardArrowRightIcon /> }
          >
            Submit
          </Button>
        </form>

        {/* <ButtonGroup color="secondary" variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup> */}

        {/* <AcUnitOutlinedIcon />
        <AcUnitOutlinedIcon color="secondary" fontSize="large" />
        <AcUnitOutlinedIcon color="secondary" fontSize="small" />
        <AcUnitOutlinedIcon color="action" fontSize="small" />
        <AcUnitOutlinedIcon color="error" fontSize="small" />
        <AcUnitOutlinedIcon color="disabled" fontSize="small" /> */}
    </Container>
  )
}
