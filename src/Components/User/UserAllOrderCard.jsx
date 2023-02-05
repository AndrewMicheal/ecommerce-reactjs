import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserAllOrderCard = ({item}) => {
    console.log(item)
  return (
    <React.Fragment>
        <div>
            <Row className="d-flex mb-2">
                <Link to = {`/products/${item.product._id}`} style={{textDecoration : "none"}}>
                <Col xs="3" md="2" className="d-flex justify-content-start">
                    <img width="93px" height="120px" src={`http://127.0.0.1:8000/products/${item.product.imageCover}`} alt="" />
                </Col>
                </Link>
                <Col xs="8" md="6">
                    <div className="d-inline pt-2 cat-title">
                        {item.product.title}
                    </div>
                    <div className="d-inline pt-2 cat-rate me-2">{item.product.ratingsAverage}</div>
                    <div className="rate-count d-inline p-1 pt-2">({`${item.product.ratingsQuantity}`} تقييم)</div>
                    <div className="mt-3">
                        <div className="cat-text  d-inline">الكميه</div>
                        <input
                            value={item.count}
                            onChange = {() =>  console.log("sdgsd")}
                            className="mx-2 "
                            type="number"
                            style={{ width: "40px", height: "25px" }}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    </React.Fragment>
  )
}

export default UserAllOrderCard