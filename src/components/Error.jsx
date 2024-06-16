import React from 'react'
import { Alert, Container } from 'react-bootstrap'

const Error = ({error}) => {
  return (
    <Container>
        <Alert variant='danger'>{error}</Alert>
    </Container>
  )
}

export default Error