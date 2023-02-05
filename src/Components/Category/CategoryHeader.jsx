import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const CategoryHeader = () => {
  const navigate = useNavigate()
  return (
    <React.Fragment>
        <div className="cat-header">
            <Container>
                <Row>
                    <Col className="d-flex justify-content-start py-2 flex-wrap">
                        <div onClick={() => navigate('/products')} className="cat-text-header ">الكل</div>
                        <div className="cat-text-header">تخفيضات</div>
                        <div className="cat-text-header">تخفيضات</div>
                        <div className="cat-text-header"> تخفيضات</div>
                        <div className="cat-text-header">تخفيضات</div>
                        <div className="cat-text-header">تخفيضات</div>
                        <div className="cat-text-header">تخفيضات</div>
                        <div className="cat-text-header">تخفيضات</div>
                        <div className="cat-text-header">تخفيضات</div>
                        <div className="cat-text-header">تخفيضات</div>
                    </Col>
                </Row>
      </Container>
    </div>
    </React.Fragment>
  )
}

export default CategoryHeader