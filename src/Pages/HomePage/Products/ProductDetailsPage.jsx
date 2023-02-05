import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CartProductContainer from '../../../Components/Product/CartProductContainer';
import ProductDetails from '../../../Components/Product/ProductDetails';
import RateContainer from '../../../Components/Rate/RateContainer';
import ViewProductDetails from '../../../hook/products/view-product-details';
import CategoryHeader from './../../../Components/Category/CategoryHeader';

const ProductDetailsPage = () => {
  let {id} = useParams();
  const [item , images , oneCat , oneBrand , productLike] = ViewProductDetails(id);
  let rateQty;
  let rateAverage;
  if(item) {
    rateQty = item.ratingsQuantity;
    rateAverage = item.ratingsAverage
  }
  return (

    <React.Fragment>
        <div style={{minHeight : "470px"}}>
            <CategoryHeader />
            <Container>
                <ProductDetails id = {id}/>
                <RateContainer rateQty = {rateQty} rateAverage = {rateAverage}/>
                <CartProductContainer products = {productLike} title = "منتجات قد تعجبك" />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default ProductDetailsPage