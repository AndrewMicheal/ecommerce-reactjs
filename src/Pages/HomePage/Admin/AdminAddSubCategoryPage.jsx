import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AdminAddSubCategory from '../../../Components/Admin/AdminAddSubCategory';
import AdminSideBar from './../../../Components/Admin/AdminSideBar';

const AdminAddSubCategoryPage = () => {
  return (
    <React.Fragment>
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                     <AdminAddSubCategory />
                </Col>
            </Row>
        </Container>
    </React.Fragment>
  )
}

export default AdminAddSubCategoryPage