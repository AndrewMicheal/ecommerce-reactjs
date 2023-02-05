import React from 'react'
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import EditCouponHook from './../../hook/coupon/edit-coupon-hook';
import { useRef } from 'react';

const AdminEditCoupon = () => {
    const dateRef = useRef();
    const {id} = useParams();
    const [couponName , couponDate , couponValue , onChangeName , onChangeDate , onChangeValue , handleSubmit] = EditCouponHook(id);
  return (
    <React.Fragment>
        <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">تعديل كوبون </div>
                <Col sm="8">
                <input
                        value={couponName}
                        onChange = {onChangeName}
                        type="text"
                        name='brandName'
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم الكوبون"
                    />
                    <input
                        ref = {dateRef}
                        type="text"
                        onFocus={() => dateRef.current.type = "date"}
                        onBlur = {() => dateRef.current.type = "text"}
                        name='brandName'
                        className="input-form d-block mt-3 px-3"
                        placeholder="تاريخ الانتهاء"
                        onChange={onChangeDate}
                        value = {couponDate}
                    />
                    <input
                        value={couponValue}
                        onChange = {onChangeValue}
                        type="number"
                        name='brandName'
                        className="input-form d-block mt-3 px-3"
                        placeholder="نسبة خصم الكوبون"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">تعديل الكوبون</button>
                </Col>
            </Row>
            <ToastContainer />
    </React.Fragment>
  )
}

export default AdminEditCoupon