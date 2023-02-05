import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserEditAddress from '../../../Components/User/UserEditAddress'
import UserSideBar from '../../../Components/User/UserSideBar'

const UserEditAddressPage = () => {
  return (
    <React.Fragment>
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                  <UserEditAddress />
                </Col>
            </Row>
        </Container>
    </React.Fragment>
  )
}

export default UserEditAddressPage