
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getWishlist } from '../../redux/actions/wishlistAction';
import { useEffect } from 'react';

const CardContainerHook = () => {
    const dispatch = useDispatch();
    const res = useSelector(state => state.wishlistReducer.getWishList)
    const [loading , setLoading] = useState(true)
    const [favProduct , setFavProduct] = useState([])
  
    const getAllWishlist = async () => {
      setLoading(true)
      await dispatch(getWishlist())
      setLoading(false)
    }
    useEffect(() => {
      getAllWishlist();
    } , [])
  
    useEffect(() => {
      if(!loading) {
        if(res.data) {
          setFavProduct(res.data.map((item) => item.id))
        }
      }
    } , [loading])

    return [favProduct]
}

export default CardContainerHook