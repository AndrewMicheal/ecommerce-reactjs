import React, { useState } from 'react'
import { Col, Card, Row, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import prod1 from '../../Images/prod1.png'
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/actions/ProductsAction';
import DeleteProductAdmin from './../../hook/admin/delete-product-admin';

const AdminAllProductsCard = ({item}) => {

  const [show , handleClose , handleShow , handleDelete] = DeleteProductAdmin(item._id)

  return (
    <React.Fragment>
      <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>تاكيد الحذف</Modal.Title>
            </Modal.Header>
            <Modal.Body>هل انت متاكد من حذف المنتج</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    اغلاق
                </Button>
                <Button variant="primary" onClick={handleDelete}>
                    حذف
                </Button>
            </Modal.Footer>
        </Modal>
          <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div onClick={handleShow} className="d-inline item-delete-edit">ازاله</div>
                        <Link to = {`/admin/editproduct/${item._id}`} style={{textDecoration : "none"}}>
                            <div className="d-inline item-delete-edit">تعديل</div>
                        </Link>
                    </Col>
                </Row>
                <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title">
                                {item.title}
                            </div>
                        </Card.Title>
                        <div className="d-flex justify-content-between">
                            <p className="card-rate">{item.ratingsQuantity}</p>
                            <div className="d-flex">
                                <p className="card-currency mx-1">جنيه</p>
                                <p className="card-price">{item.price}</p>
                            </div>
                        </div>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    </React.Fragment>
  )
}

export default AdminAllProductsCard