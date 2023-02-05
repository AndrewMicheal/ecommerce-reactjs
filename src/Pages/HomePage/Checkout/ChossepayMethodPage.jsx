import React from 'react'
import { Container } from 'react-bootstrap'
import ChoosePaymentMethod from '../../../Components/Checkout/ChoosePaymentMethod'

const ChossepayMethodPage = () => {
  return (
    <React.Fragment>
      <Container style={{minHeight : "670px"}}>
        <ChoosePaymentMethod />
      </Container>
    </React.Fragment>
  )
}

export default ChossepayMethodPage

