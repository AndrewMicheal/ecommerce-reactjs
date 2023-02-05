import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import rate from '../../Images/rate.png'
import RateItem from './RateItem';
import Pagination from './../Utility/Pagination';
import RatePost from './RatePost';
import ViewAllReviewHook from './../../hook/review/view-all-review-hook';
import { useParams } from 'react-router-dom';

const RateContainer = ({rateQty , rateAverage}) => {
  const {id} = useParams();
  const [allReviewProduct , onPress] = ViewAllReviewHook(id);
  let pageNumber;
  if(rateQty === undefined || rateAverage === undefined) {
    rateQty = 0
    rateAverage = 0;
  }
  if(allReviewProduct.paginationResult) {
    pageNumber = allReviewProduct.paginationResult.numberOfPages
  }
  return (
    <React.Fragment>
        <Container className='rate-container'>
            <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">التقيمات</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{rateAverage}</div>
                    <div className="rate-count d-inline p-1 pt-2">({`${rateQty} تقييم`})</div>
                </Col>
            </Row>
            <RatePost />
            {allReviewProduct.data ? allReviewProduct.data.map((item , index) => {
             return (
              <RateItem key = {index} item = {item} />
             )
            }) : <h4>لا يوجد تقييمات حتى الان</h4>}
            {allReviewProduct.paginationResult  ? allReviewProduct.paginationResult.numberOfPages > 1 ? <Pagination numberOfPage = {pageNumber} getPage = {onPress}/> : null : null}
            
        </Container>
    </React.Fragment>
  )
}

export default RateContainer