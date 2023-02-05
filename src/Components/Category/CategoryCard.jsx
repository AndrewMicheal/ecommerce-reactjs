import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CategoryCard = ({background , img , title , id}) => {
  return (
    <React.Fragment>
         <Col xs="6" sm="6" md="4" lg="2" className="my-4 d-flex justify-content-around ">
            <div className="allCard mb-3 ">
              <Link to = {`/product/category/${id}`} style = {{textDecoration : "none"}}>
                <div className="categoty-card " style={{ backgroundColor: `${background}` }}>
                  

                   
                </div>{" "}
                <img alt={title} src={img} className="categoty-card-img" />
                <p className="categoty-card-text my-2">{title}</p>
                </Link>
            </div>
        </Col>
    </React.Fragment>
  )
}

export default CategoryCard