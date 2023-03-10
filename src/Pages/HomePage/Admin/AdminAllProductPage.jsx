import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from './../../../Components/Admin/AdminSideBar';
import AdminAllProducts from './../../../Components/Admin/AdminAllProducts';
import Pagination from '../../../Components/Utility/Pagination';
import ViewProductAdminHook from './../../../hook/admin/view-product-admin-hook';

const AdminAllProductPage = () => {
  const [items , pagination , onPress] = ViewProductAdminHook();
 
  return (
    <React.Fragment>
        <Container style={{minHeight : "670px"}}>
            <Row className = "py-3">
                <Col sm = "3" xs = "2" md = "2">
                    <AdminSideBar />
                </Col>
                <Col sm = "9" xs = "10" md = "10">
                    <AdminAllProducts products = {items} />
                    {pagination > 1 ? <Pagination numberOfPage = {pagination} getPage = {onPress}/> : null}
                    
                </Col>
            </Row>
        </Container>
    </React.Fragment>
  )
}

export default AdminAllProductPage