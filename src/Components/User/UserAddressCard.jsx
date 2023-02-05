import React from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deleteicon from '../../Images/delete.png'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteAddress } from './../../redux/actions/userAddressAction';
import notify from './../../hook/useNotification';
import { ToastContainer } from 'react-toastify';
import DeleteAddressHook from './../../hook/user/delete-address-hook';

const UserAddressCard = ({address}) => {
    
   const [show , handleClose , handleDeleteShow , handleDelete] = DeleteAddressHook(address);

   console.log(address)

  return (
    <React.Fragment>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>تاكيد الحذف</Modal.Title>
            </Modal.Header>
            <Modal.Body>هل انت متاكد من حذف العنوان</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    اغلاق
                </Button>
                <Button variant="primary" onClick={handleDelete}>
                    حذف
                </Button>
            </Modal.Footer>
        </Modal>
        <div className="user-address-card my-3 px-2">
            <Row className="d-flex justify-content-between  ">
                <Col xs="1">
                    <div className="p-2">{address.alias}</div>
                </Col>
                <Col xs="4" className="d-flex d-flex justify-content-end">
                    <div className="d-flex p-2">
                        <div className="d-flex mx-2" style={{cursor : "pointer"}}>
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <Link to={`/user/edit-address/${address._id}`} style={{ textDecoration: "none" }}>
                                <p className="item-delete-edit"> تعديل</p>
                            </Link>
                        </div>
                        <div className="d-flex " style={{cursor : "pointer"}}>
                            <img
                            onClick={handleDeleteShow}
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
                        {address.details}
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
                        رقم الهاتف: 
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {address.phone}
                    </div>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    </React.Fragment>
  )
}

export default UserAddressCard