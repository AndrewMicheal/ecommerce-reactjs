import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserAddAddress from '../../../Components/User/UserAddAddress'
import UserSideBar from '../../../Components/User/UserSideBar'

const UserAddAddressPage = () => {
  return (
    <React.Fragment>
          <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                  <UserAddAddress />
                </Col>
            </Row>
        </Container>
    </React.Fragment>
  )
}

export default UserAddAddressPage