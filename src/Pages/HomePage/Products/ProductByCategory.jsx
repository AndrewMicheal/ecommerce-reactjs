import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CartProductContainer from './../../../Components/Product/CartProductContainer';
import Pagination from './../../../Components/Utility/Pagination';
import ViewSearchProductsHook from './../../../hook/products/search-product-hook';
import { useParams } from 'react-router-dom';

const ProductByCategory = () => {
    const [items , pagination , onPress , getProduct] = ViewSearchProductsHook();
   let {id} = useParams()
  return (
    <React.Fragment>
    <div style={{minHeight : "680px"}}>
       <Container>
        <Row className='d-flex flex-row'>
          <Col sm = "12" xs = "10" md = "11" className='d-flex'>
            <CartProductContainer products={items} title = "" btnTitle=""/>
          </Col>
        </Row>
        {pagination > 1 ? <Pagination numberOfPage = {pagination} getPage = {onPress}/> : null}
       </Container>
    </div>
</React.Fragment>
  )
}

export default ProductByCategory