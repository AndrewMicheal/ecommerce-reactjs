import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import ProductText from './ProductText'

class ProductDetails extends Component {
   render() {
    let {id} = this.props
    return (
    <React.Fragment>
        <div style={{minHeight : "470px"}}>
            <Row className='py-3'>
                <Col lg = "4">
                    <ProductGallery id = {id}/>
                </Col>
                <Col lg = "8">
                    <ProductText id = {id}/>
                </Col>
            </Row>
        </div>
    </React.Fragment>
    )
   }
}


export default ProductDetails