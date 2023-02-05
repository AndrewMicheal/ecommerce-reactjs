import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminAllOrderItem = ({order}) => {
  return (
    <React.Fragment>
         <Col sm="12">
            <Link
                to={`/admin/orders/${order._id}`}
                className="cart-item-body my-2 px-1 d-flex"
                style={{ textDecoration: "none" }}>
                <div className="w-100 px-2">
                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 cat-text">طلب رقم #{order.id}</div>
                            <div className="d-inline pt-2 cat-text">ازاله</div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-2">
                        <Col sm="12" className=" d-flex flex-row justify-content-start">
                            <div className="d-inline pt-2 cat-title">
                                {order.user.name || ''}
                            </div>
                            <div className="d-inline pt-2 cat-rate me-2">{order.user.email || ''}</div>
                        </Col>
                    </Row>

                  <Row className="d-flex justify-content-between">
                    <Col sm="9" className="">
                    <div className='d-inline'>
                        <div className="cat-text d-inline"> التوصيل : </div>
                        <div className="cat-text d-inline">{order.isDelivered ? 'تم التوصيل' : 'لم يتم التوصيل'}</div>
                    </div>
                    <div className='d-inline'>
                        <div  className="cat-text d-inline"> الدفع : </div>
                        <div className="cat-text d-inline">{order.isPaid ? 'تم الدفع' : 'لم يتم الدفع '}</div>
                    </div>

                    <div className='d-inline'>
                        <div  className="cat-text d-inline">طرق الدفع : </div>
                        <div className="cat-text d-inline">{order.paymentMethodType === 'cash' ? 'كاش' : 'بطاقة ائتمانية'}</div>
                    </div>
                    </Col>
                    <Col sm="3" className="">
                    <div className='d-inline'>
                        <div className="barnd-text d-inline">{order.totalOrderPrice} جنيه</div>
                    </div>
                    </Col>
                  </Row>
                </div>
            </Link>
        </Col>
    </React.Fragment>
  )
}

export default AdminAllOrderItem