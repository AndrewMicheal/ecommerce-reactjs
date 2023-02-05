import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTitle from './../Utility/SubTitle';
import CategoryCard from './CategoryCard';

const CategoryContainer = ({categories , loading}) => {
  const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]

  return (
    <React.Fragment>
           <Container>
            <SubTitle title = "التصنيفات" pathText={"/allCategory"}/>
            <Row className='my-2 d-flex justify-content-between'>
                {!loading ?
              categories.data ? (
                categories.data.map((cat , index) => {
                  return (
                      <CategoryCard background = {colors[Math.floor(Math.random() * 5) + 1]} img = {cat.image} title = {cat.name} key = {cat._id}/>
                  )
                })
              ): <h4>لا يوجد تصنيفات</h4> : <h4>Loading....</h4>}
            </Row>
           
        </Container>
    </React.Fragment>
  )
}

export default CategoryContainer