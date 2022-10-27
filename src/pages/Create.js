import React from 'react'
import { Typography, Button, Container} from '@mui/material'

export default function Create() {
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

        <Button 
          type="submit"
          color="secondary"
          variant="contained"
          onClick={() => console.log("You clicked me.")}
        >
          Submit
        </Button>

        {/* <ButtonGroup color="secondary" variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup> */}
    </Container>
  )
}
