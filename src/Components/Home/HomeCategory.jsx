import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from '../Category/CategoryCard'
import SubTitle from '../Utility/SubTitle';
import HomeCategoryHook from './../../hook/category/home-category-hook';


const HomeCategory = () => {

const [categoryItems , loading , colors] = HomeCategoryHook();  
  
  return (
    <React.Fragment>
        <Container>
            <SubTitle title = "التصنيفات" btntitle = "المزيد" pathText={"/allCategory"}/>
            <Row className='my-2 d-flex justify-content-between'>
              {!loading || categoryItems ?
              categoryItems.data ? (
                categoryItems.data.slice(0,5).map((cat , index) => {
                  return (
                      <CategoryCard background = {colors[index]} img = {cat.image} title = {cat.name} key = {cat._id} id = {cat._id}/>
                  )
                })
              ): <h4>لا يوجد تصنيفات</h4> : <h4>Loading....</h4>}
            </Row>
           
        </Container>
    </React.Fragment>
  )
}

export default HomeCategory