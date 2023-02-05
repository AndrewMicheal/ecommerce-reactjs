
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getAllReviewProduct } from '../../redux/actions/reviewAction';

const ViewAllReviewHook = (id) => {
  const dispatch = useDispatch();
  const res = useSelector(state => state.reviewReducer.reviewProduct)
  const [loading , setLoading] = useState(true);
  let allReviewProduct = [];

  useEffect(() => {
    setLoading(true)
    dispatch(getAllReviewProduct(id , 1 , 1))
    setLoading(false);
  } , [])


  try {
    allReviewProduct = res;
  } catch (error) {
    allReviewProduct = [];
  }

  // on press pagination
  const onPress = async (page) => {
    await dispatch(getAllReviewProduct(id , page , 1))
  }

  return [allReviewProduct , onPress]
}

export default ViewAllReviewHook