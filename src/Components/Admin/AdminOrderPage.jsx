import React from 'react'
import CartItem from './../Cart/CartItem';
import { Row, Col } from 'react-bootstrap';
import UserAllOrderItem from '../User/UserAllOrderItem';
import { useParams } from 'react-router-dom';
import GetOrderDetalisHook from './../../hook/admin/get-order-detalis-hook';
import ChangeOrderHook from './../../hook/admin/change-order-hook';
import { ToastContainer } from 'react-toastify';

const AdminOrderPage = () => {
    
    const {id} = useParams()
    const [orderDetails , cartItems , formatString] = GetOrderDetalisHook(id)
    let items = []
    try {
        items = orderDetails
    } catch (error) {
        items = []
    }
    
    const [changeOrderPay , onChangePaid , onChangeDeliver , changeOrderDeliver] = ChangeOrderHook(id)
  return (
    <React.Fragment>
        <div>
            <div className='admin-content-text'>تم بتاريخ : {formatString(orderDetails.createdAt)}</div>
            <UserAllOrderItem order = {items} />
            
            <Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2">تفاصيل العميل</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}>
                        الاسم:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {orderDetails ? orderDetails.user ? orderDetails.user.name : '' : ''}
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}>
                        رقم الهاتف:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {orderDetails ? orderDetails.user ? orderDetails.user.phone : '' : ''}
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}>
                        الايميل:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {orderDetails ? orderDetails.user ? orderDetails.user.email : '' : ''}
                    </div>
                </Col>
                
                <div className="d-flex mt-2 justify-content-center">
                    <div>
                        <select
                            onChange={onChangePaid}
                            name="languages"
                            id="lang"
                            className="select input-form-area mt-1  text-center px-4 w-50">
                            <option value="0">حالة الدفع</option>
                            <option value="true">تم</option>
                            <option value="false">لم يتم</option>
                        </select>
                        <button onClick={changeOrderPay} className="btn-a px-5 d-inline mx-1 ">حفظ </button>
                    </div>
                    <div>
                        <select
                            name="deliver"
                            id="deliver"
                            onChange={onChangeDeliver}
                            className="select input-form-area mt-1  text-center px-4 w-50">
                            <option value="0">التوصيل</option>
                            <option value="true">تم</option>
                            <option value="false">لم يتم</option>
                        </select>
                        <button onClick={changeOrderDeliver} className="btn-a px-2 d-inline mx-1 ">حفظ </button>
                    </div>
                </div>
            </Row>
            <ToastContainer />
        </div>
    </React.Fragment>
  )
}

export default AdminOrderPage