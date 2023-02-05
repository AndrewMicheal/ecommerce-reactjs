import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTitle from '../Utility/SubTitle';
import ProductCard from './ProductCard';
import CardContainerHook from './../../hook/products/card-container-hook';

const CartProductContainer = ({title , btnTitle , pathText , products}) => {
 
  const [favProduct] = CardContainerHook();

  return (
    <React.Fragment>
        <Container>
            <SubTitle title = {title} btntitle = {btnTitle} pathText = {pathText}/>
            <Row className='my-2 d-flex justify-content-between'>
              {products ? products.map((product , index) => {
                return (
                  <ProductCard favProduct = {favProduct} key = {index} product = {product} />
                )
              }): null}
            </Row>
           
        </Container>
    </React.Fragment>
  )
}

export default CartProductContainer