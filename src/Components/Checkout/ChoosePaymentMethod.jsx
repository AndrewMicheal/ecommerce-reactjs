import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import ViewAddressesHook from '../../hook/user/view-addresses-hook'
import OrderPayCashHook from './../../hook/checkout/order-pay-cash-hook';

const ChoosePaymentMethod = () => {
    const [allAddresses] = ViewAddressesHook();
    const [handelChooseAddress , addressDetails , handlePay , changePayMethoud] = OrderPayCashHook();

  return (
    <React.Fragment>
        <div>
            <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
            <div className="user-address-card my-4 px-3">
                <Row className="d-flex justify-content-between ">
                    <Col xs="12" className="my-2">
                        <input
                            onChange={changePayMethoud}
                            name="group"
                            id="group1"
                            type="radio"
                            value="CARD"
                            className="mt-2"
                        />
                        <label className="mx-2" for="group1">
                            الدفع عن طريق البطاقه الائتمانية
                        </label>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col xs="12" className="d-flex">
                        <input
                            onChange={changePayMethoud}
                            name="group"
                            id="group1"
                            type="radio"
                            value="CASH"
                            className="mt-2"
                        />
                        <label className="mx-2" for="group1">
                            الدفع عند الاستلام
                        </label>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col xs="4" className="d-flex">
                        <select name="address" id="address" className="select mt-1 px-2 " onChange={handelChooseAddress} >
                            <option value="0">اختر عنوان للشحن</option>
                            {
                                allAddresses.length >= 1 ? allAddresses.map((allAddress , index) => {
                                    return (
                                        <option key={index} value = {allAddress._id}>{allAddress.alias}</option>
                                    )
                                }) : <option>لا يوجد عنوانين مسجلة</option>
                            }
                        </select>
                    </Col>
                </Row>
            </div>

            <Row>
                <Col xs="12" className="d-flex justify-content-end">
                    <div className="product-price d-inline   border">34000 جنية</div>
                    <div onClick={handlePay} className="product-cart-add px-3 pt-2 d-inline me-2"> اتمام الشراء</div>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    </React.Fragment>
  )
}

export default ChoosePaymentMethod