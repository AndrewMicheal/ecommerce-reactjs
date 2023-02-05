import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import rate from '../../Images/rate.png'
import deleteicon from '../../Images/delete.png'
import editicon from '../../Images/edit.png'
import { useState } from 'react';
import DeleteRateHook from './../../hook/review/delete-rate-hook';
import EditRateHook from './../../hook/review/edit-rate-hook';
import ReactStars from 'react-rating-stars-component';

const RateItem = ({item}) => {
    const [isUser , handleClose , handleDelete , handleEdit , showDelete] = DeleteRateHook(item);
    const [handleEditReview , handleCloseEdit  , showEdit , handleEditReviewShow , onChangeRateText , newRateText, OnChangeRateValue, newRateValue] = EditRateHook(item)
   
    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: newRateValue,
        a11y: true,
        isHalf: true,
        emptyIcon:<i className="fa fa-star-o"></i>,
        halfIcon: <i className="fa fa-star-half-o"></i>,
        fullIcon: <i className="fa fa-star"></i>,
        onChange: newValue => {
            OnChangeRateValue(newValue);
        }
    };
  return (
    <React.Fragment>
         <div className='marginTop d-block'>
         <Modal show={showDelete} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>تاكيد الحذف</Modal.Title>
            </Modal.Header>
            <Modal.Body>هل انت متاكد من حذف التقييم</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    اغلاق
                </Button>
                <Button variant="primary" onClick={handleDelete}>
                    حذف
                </Button>
            </Modal.Footer>
        </Modal>

        <Modal show={showEdit} onHide={handleCloseEdit}>
            <Modal.Header closeButton>
                <Modal.Title>تاكيد تعديل</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <ReactStars {...setting} />
                    <input
                        onChange={onChangeRateText}
                        value={newRateText}
                        type="text"
                        className='font w-100'
                        style={{ border: 'none' }}
                    />
                </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEdit}>
                    اغلاق
                </Button>
                <Button variant="primary" onClick={handleEditReview}>
                    تعديل
                </Button>
            </Modal.Footer>
        </Modal>

       
        

            <Row className="mt-3">
                <Col className="d-flex align-items-center me-5">
                    <div className="rate-name  d-inline ms-2">{item.user.name}</div>
                    <div className='d-flex align-items-center'>
                        <div className="cat-rate  d-inline  p-1 pt-2">{item.rating}</div>
                        <img className="" src={rate} alt="" height="16px" width="16px" />
                    </div> 
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-flex me-4 pb-2">
                    <div className="rate-description  d-inline ms-2">
                        {item.review}
                    </div>
                   {isUser ?  
                   <div className='d-flex justify-content-end d-block w-100'> 
                        <img onClick={handleDelete} src={deleteicon} width = "20px" height= "20px" style={{cursor : "pointer"}} alt="delete" />
                        <img onClick={handleEditReviewShow} src={editicon} width = "20px" height= "20px" style={{cursor : "pointer"}} alt="delete" />
                    </div> : null}
                </Col>
            </Row>
        </div>

        
        
    </React.Fragment>
  )
}

export default RateItem