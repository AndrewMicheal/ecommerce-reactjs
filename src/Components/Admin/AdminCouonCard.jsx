import React from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deleteicon from '../../Images/delete.png'
import CouponCardHook from './../../hook/coupon/coupon-card-hook';

const AdminCouonCard = ({coupon}) => {
    const [formatString , handleDeleteShow , handleDelete , handleClose , show , dateString] = CouponCardHook(coupon)
  return (
    <React.Fragment>
    <div className="user-address-card mt-5 px-2">
    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>تاكيد الحذف</Modal.Title>
            </Modal.Header>
            <Modal.Body>هل انت متاكد من حذف الكوبون</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    اغلاق
                </Button>
                <Button variant="primary" onClick={handleDelete}>
                    حذف
                </Button>
            </Modal.Footer>
        </Modal>

        <Row className="d-flex justify-content-between  ">
            <Col xs = "6">
                <div style={{display : "block"}} className="p-2">اسم الكوبون : {coupon.name} </div>
            </Col>
            <Col xs="4" className="d-flex d-flex justify-content-end">
                <div className="d-flex p-2">
                    <Link to = {`/admin/editcoupon/${coupon._id}`} style={{textDecoration : "none"}}>
                        <div className="d-flex mx-2" style = {{cursor : "pointer"}}>
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> تعديل</p>
                        </div>
                    </Link>
                    <div className="d-flex " onClick={handleDeleteShow} style = {{cursor : "pointer"}}>
                        <img
                            alt=""
                            className="ms-1 mt-2"
                            src={deleteicon}
                            height="17px"
                            width="15px"
                        />
                        <p className="item-delete-edit"> ازاله</p>
                    </div>
                </div>
            </Col>
        </Row>

        <Row>
            <Col xs="12">
                <div
                    style={{
                        color: "#555550",
                        fontFamily: "Almarai",
                        fontSize: "14px",
                    }}>
                        تاريخ الانتهاء : {formatString(dateString)}
                </div>
            </Col>
        </Row>

        <Row className="mt-3">
            <Col xs="12" className="d-flex">
                <div
                    style={{
                        color: "#555550",
                        fontFamily: "Almarai",
                        fontSize: "16px",
                    }}>
                    نسبة الخصم :
                </div>

                <div
                    style={{
                        color: "#979797",
                        fontFamily: "Almarai",
                        fontSize: "16px",
                    }}
                    className="mx-2">
                    {coupon.discount}
                </div>
            </Col>
        </Row>
    </div>
</React.Fragment>
  )
}

export default AdminCouonCard