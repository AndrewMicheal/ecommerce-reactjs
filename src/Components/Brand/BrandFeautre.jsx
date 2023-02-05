import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTitle from './../Utility/SubTitle';
import BrandCard from './BrandCard';
import HomeBrandHook from '../../hook/brand/home-brand-hook';

const BrandFeautre = ({title , btnTitle}) => {
  const [brandsItems , loading] = HomeBrandHook();
  
  return (
    <React.Fragment>
        <Container>
            <SubTitle title = {title} btntitle = {btnTitle} pathText = {"/allBrand"}/>
            <Row className='my-2 d-flex justify-content-between'>
                {!loading || brandsItems ?
              brandsItems.data ? (
                brandsItems.data.slice(0,5).map((brand , index) => {
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

export default BrandFeautre