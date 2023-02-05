import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CartItem from './../../../Components/Cart/CartItem';
import CartCheckOut from './../../../Components/Cart/CartCheckOut';
import GetAllUserCartHook from './../../../hook/cart/get-all-user-cart-hook';

const CartPage = () => {
    const [getAllUserCart, couponName , totalCartAfterPrice] = GetAllUserCartHook();
    const cartItems = []
  return (
    <React.Fragment>
        <Container style={{minHeight : "670px"}}>
            <Row>
                <div className="cart-title">عربة التسوق</div>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col xs = "12" md = "9">
                   {getAllUserCart.data !== undefined ? getAllUserCart.data.products.length >=1 ? getAllUserCart.data.products.map((item , index) => {
                    return (
                        <CartItem product = {item} key = {index}/>
                    )
                   })  : <h4 className='mt-5'>Loading...</h4>  : <h4 className='mt-5'> لايوجد منتجات فى العربة</h4>}
                </Col>
                <Col xs = "6" md = "3">
                    <CartCheckOut cartItems = {getAllUserCart} couponName = {couponName} totalCartAfterPrice = {totalCartAfterPrice} item = {getAllUserCart}/>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
  )
}

export default CartPage