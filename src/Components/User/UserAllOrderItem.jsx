import React from 'react'
import { Col, Row } from 'react-bootstrap';
import UserAllOrderCard from './UserAllOrderCard';

const UserAllOrderItem = ({order}) => {
  console.log(order)
  return (
    <React.Fragment>
        <div className="user-order mt-2">
            <Row>
                <div className="py-2 order-title">طلب رقم # {order.id}</div>
            </Row>
            {order.length === 0 || order === undefined ? null : order.cartItems.length >= 1 ? order.cartItems.map((item , index) => {
                return (
                    <UserAllOrderCard key = {index} item = {item} />
                )
            }): null}
           
            <Row className="d-flex justify-content-between">
                <Col xs="6" className="">
                    <div>
                        <div className="d-inline"> التوصيل : </div>
                        <div className="d-inline mx-2 stat">{order.isDelivered ? 'تم التوصيل' : 'لم يتم التوصيل'}</div>
                    </div>
                    <div>
                        <div className="d-inline"> الدفع : </div>
                        <div className="d-inline mx-2 stat">{order.isPaid ? 'تم الدفع' : 'لم يتم الدفع'}</div>
                    </div>

                    <div>
                        <div className="d-inline">طرق الدفع : </div>
                        <div className="d-inline mx-2 stat">{order.paymentMethodType === 'cash' ? 'كاش' : 'بطاقة ائتمانية'}</div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">{order.totalOrderPrice} جنيه</div>
                    </div>
                </Col>
            </Row>
        </div>
    </React.Fragment>
  )
}

export default UserAllOrderItem