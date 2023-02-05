import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../../Components/Category/CategoryHeader'
import SearchCountResult from '../../../Components/Utility/SearchCountResult'
import SideFilter from '../../../Components/Utility/SideFilter'
import CartProductContainer from './../../../Components/Product/CartProductContainer';
import Pagination from './../../../Components/Utility/Pagination';
import ViewSearchProductsHook from './../../../hook/products/search-product-hook';

const ShopProductsPage = () => {
  const [items , pagination , onPress , getProduct] = ViewSearchProductsHook();
  return (
    <React.Fragment>
        <div style={{minHeight : "680px"}}>
           <CategoryHeader />
           <Container>
            <SearchCountResult onClick = {getProduct} title={`هناك ${items.length} نتائج بحث`}/>
            <Row className='d-flex flex-row'>
              <Col sm = "2" xs = "2" md = "1" className='d-flex'>
                <SideFilter />
              </Col>
              <Col sm = "10" xs = "10" md = "11" className='d-flex'>
                <CartProductContainer products={items} title = "" btnTitle=""/>
              </Col>
            </Row>
            {pagination > 1 ? <Pagination numberOfPage = {pagination} getPage = {onPress}/> : null}
           </Container>
        </div>
    </React.Fragment>
  )
}

export default ShopProductsPage