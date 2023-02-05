import React from 'react'
import { Row } from 'react-bootstrap';
import CartProductContainer from '../Product/CartProductContainer';
import ProductCard from '../Product/ProductCard';
import Pagination from '../Utility/Pagination';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getWishlist } from './../../redux/actions/wishlistAction';

const UserFavoriteProduct = () => {
  const dispatch = useDispatch();
  const res = useSelector(state => state.wishlistReducer.getWishList)
  const [loading , setLoading] = useState(true)
  const [items , setItems] = useState([])
  const getAllWishList = async () => {
    setLoading(true)
    await dispatch(getWishlist())
    setLoading(false)
  }
  useEffect(() => {
    getAllWishList();
  } , [])
  
  useEffect(() => {
    if(!loading) {
      if(res) {
        setItems((res.data))
      }
    }
  },[loading])
  return (
    <React.Fragment>
        <div>
            <div className="admin-content-text pb-4">قائمة المفضلة</div>
            <Row className='justify-content-start'>
                <CartProductContainer products = {items}/>
            </Row>
            <Pagination />
        </div>
    </React.Fragment>
  )
}

export default UserFavoriteProduct