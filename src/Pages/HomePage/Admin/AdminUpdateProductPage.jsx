import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminEditProduct from '../../../Components/Admin/AdminEditProduct'
import AdminSideBar from '../../../Components/Admin/AdminSideBar'

const AdminUpdateProductPage = () => {
  return (
    <React.Fragment>
         <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                     <AdminEditProduct />
                </Col>
            </Row>
        </Container>
    </React.Fragment>
  )
}

export default AdminUpdateProductPage