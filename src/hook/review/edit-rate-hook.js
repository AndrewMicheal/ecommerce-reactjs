import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { deleteReviewOnProduct, updateReviewOnProduct } from './../../redux/actions/reviewAction';
import notify from './../useNotification';

const EditRateHook = (review) => {
    const dispatch = useDispatch();
    const [loading , setLoading] = useState(true)
    const [newRateText , setNewRateText] = useState(review.review)
    const [newRateValue, setNewRateValue] = useState(review.rating);

    const res = useSelector(state => state.reviewReducer.updateReview)
   
    const [showEdit, setShowEdit] = useState(false);

    const handleClose = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const handleEditReviewShow =  () => {
        handleShowEdit()
    }

    const handleEditReview = async () => {
        setLoading(true)
        await dispatch(updateReviewOnProduct(review._id , {
            review: newRateText,
            rating: newRateValue
        }))
        setLoading(false)
        handleClose()
    }

    useEffect(() => {
        console.log(loading)
        if(res.data) {
            notify('تم التعديل بنجاح' , 'success');
            setTimeout(() => {
                window.location.reload(false);
            } , 1000)
        }
    } , [loading])

   
    const handleCloseEdit = () => {
        handleClose()
    }

    const onChangeRateText = (e) => {
        setNewRateText(e.target.value)
    }

    const OnChangeRateValue = (val) => {
        setNewRateValue(val)
    }

    return [handleEditReview , handleCloseEdit  , showEdit , handleEditReviewShow , onChangeRateText , newRateText, OnChangeRateValue, newRateValue]
}

export default EditRateHook