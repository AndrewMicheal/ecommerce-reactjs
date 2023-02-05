import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'

const AdminAllProducts = ({products}) => {
 
  return (
    <React.Fragment>
        <div className='admin-content-text'>اداره جميع المنتجات</div>
        <Row className='justify-content-start'>
          {products ? products.map((product , index) => {
            return (
              <AdminAllProductsCard item = {product} key = {index} />
            )
          }) : <h4>لا يوجد منتاجات حتى الان</h4>}
            
        </Row>
    </React.Fragment>
  )
}

export default AdminAllProducts