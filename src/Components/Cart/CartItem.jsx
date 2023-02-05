import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import mobile from '../../Images/mobile.png'
import deleteicon from '../../Images/delete.png'
import DeleteCartHook from './../../hook/cart/delete-cart-hook';
import { ToastContainer } from 'react-toastify';
import UpdateCartQtyHook from './../../hook/cart/update-cart-qty-hook';


const CartItem = ({product}) => {

  const [deleteCart , show , handleClose , handleDeleteShow , deleteSpecificCart] = DeleteCartHook(product._id)
  const [updateCartQty , handleCount , handleUpdateQty] = UpdateCartQtyHook(product._id , product.count)
  console.log(product)
  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>تاكيد الحذف</Modal.Title>
            </Modal.Header>
            <Modal.Body>هل انت متاكد من حذف العربة</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    اغلاق
                </Button>
                <Button variant="primary" onClick={deleteSpecificCart}>
                    حذف
                </Button>
            </Modal.Footer>
        </Modal>
        <Col xs="12" className="cart-item-body my-2 d-flex px-2">
        <img width="160px" height="197px" src={`http://127.0.0.1:8000/products/${product.product.imageCover}`} alt="" />
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">{product.product.category.name}</div>
              <div onClick={handleDeleteShow} className="d-flex pt-2 " style={{ cursor: "pointer" }}>
                <img src={deleteicon} alt="" width="20px" height="24px" />
                <div className="cat-text d-inline me-2">ازاله</div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title">
                {product.product.title}              
              </div>
              <div className="d-inline pt-2 cat-rate me-2">{product.product.ratingsAverage}</div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="cat-text d-inline">الماركة :</div>
              <div className="barnd-text d-inline mx-1">{product.product.brand.name} </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1 d-flex">
             {product.color === '' ? null : <div
                className="color ms-2 border"
                style={{ backgroundColor: `${product.color}`}}></div>}
            </Col>
          </Row>
  
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 d-flex">
                <div className="cat-text  d-inline">الكميه</div>
                <input
                  value={updateCartQty}
                  onChange = {handleCount}
                  className="mx-2 "
                  type="number"
                  style={{ width: "40px", height: "25px" }}
                />
                <Button onClick={handleUpdateQty} className='btn btn-dark'>
                  تطبيق
                </Button>
              </div>
              <div className="d-inline pt-2 barnd-text">{product.price} جنية</div>
            </Col>
          </Row>
        </div>
      </Col>
      <ToastContainer />
    </React.Fragment>
  )
}

export default CartItem