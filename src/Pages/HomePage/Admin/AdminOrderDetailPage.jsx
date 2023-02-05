import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AdminSideBar from './../../../Components/Admin/AdminSideBar';
import AdminOrderPage from './../../../Components/Admin/AdminOrderPage';

const AdminOrderDetailPage = () => {
  return (
    <React.Fragment>
        <Container style={{minHeight : "670px"}}>
            <Row className = "py-3">
                <Col sm = "3" xs = "2" md = "2">
                    <AdminSideBar />
                </Col>
                <Col sm = "9" xs = "10" md = "10">
                    <AdminOrderPage />
                </Col>
            </Row>
        </Container>
    </React.Fragment>
  )
}

export default AdminOrderDetailPage