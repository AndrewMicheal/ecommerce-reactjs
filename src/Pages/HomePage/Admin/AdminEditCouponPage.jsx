import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AdminSideBar from './../../../Components/Admin/AdminSideBar';
import AdminEditCoupon from './../../../Components/Admin/AdminEditCoupon';

const AdminEditCouponPage = () => {
  return (
    <React.Fragment>
        <React.Fragment>
          <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminEditCoupon />
                </Col>
            </Row>
        </Container>
    </React.Fragment>
    </React.Fragment>
  )
}

export default AdminEditCouponPage