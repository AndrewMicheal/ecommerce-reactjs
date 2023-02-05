import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import ApplyCouponHook from '../../hook/cart/apply-coupon-hook';
import DeleteCartHook from './../../hook/cart/delete-cart-hook.js';
import notify from './../../hook/useNotification';

const CartCheckOut = ({item , couponName , totalCartAfterPrice , cartItems}) => {
    const [deleteCart] = DeleteCartHook();
    const [handleApplyCoupon , couponValue , onChangeCoupon] = ApplyCouponHook();
    const navigate = useNavigate();
    
    const handleCheckOut = () => {
        if(cartItems.data.products.length >= 1) {
            navigate("/order/paymethoud")
        } else {
            alert("no")
            notify('اضف منتجات الى العربة' , 'error')
        }
    }
  return (
    <React.Fragment>
        <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="d-flex  ">
                    <input
                        value={couponValue}
                        onChange = {onChangeCoupon}
                        className="copon-input d-inline text-center "
                        placeholder="كود الخصم"
                    />
                    <button onClick={handleApplyCoupon} className="copon-btn d-inline ">تطبيق</button>
                </div>
                <div className="product-price d-inline w-100 my-3  border">
                    {
                        totalCartAfterPrice >=1 ? totalCartAfterPrice+ 'جنية': ( item.data === undefined ? null : item.data.totalCartPrice+' جنية')
                    }
                </div>
                <button onClick={deleteCart} className="product-cart-add w-100 px-2 my-1">مسح العربة</button>
                <button onClick={handleCheckOut} className="product-cart-add w-100 px-2"> اتمام الشراء</button>                
            </Col>
            <ToastContainer />
        </Row>
    </React.Fragment>
  )
}


export default CartCheckOut

