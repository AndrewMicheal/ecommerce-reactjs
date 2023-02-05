import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BrandCard from './BrandCard'
import brand1 from "../../Images/brand1.png";
import AllBrandHook from '../../hook/brand/all-brand-page-hook';


const BrandContainer = ({loading , brands}) => {

  return (
    <React.Fragment>
        <Container>
            <div className='admin-content-text mt-2'>كل الماركات</div>
            <Row className='my-2 d-flex justify-content-between'>
            {!loading || brands ?
              brands.data ? (
                brands.data.slice(0,5).map((brand , index) => {
                  return (
                    <BrandCard img = {brand.image} title = {brand.name} key = {brand._id}/>
                  )
                })
              ): <h4>لا يوجد ماركات</h4> : <h4>Loading....</h4>}
            </Row>
        </Container>
    </React.Fragment>
  )
}

export default BrandContainer