import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AdminSideBar from './../../../Components/Admin/AdminSideBar';
import AdminAddCoupon from './../../../Components/Admin/AdminAddCoupon';

const AdminAddCouponPage = () => {
  return (
    <React.Fragment>
          <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAddCoupon />
                </Col>
            </Row>
        </Container>
    </React.Fragment>
  )
}

export default AdminAddCouponPage