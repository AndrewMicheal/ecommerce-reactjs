import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { deleteReviewOnProduct } from './../../redux/actions/reviewAction';


const DeleteRateHook = (review) => {
    const dispatch = useDispatch();
    const [loading , setLoading] = useState(true)
    const res = useSelector(state => state.reviewReducer.deleteReview)
   
    let isUser = false 

    let user;
    if(localStorage.getItem("user") !== null) {
        user = JSON.parse(localStorage.getItem("user"))
    } else {
        user = ""
    }

    if(review.user._id === user._id) {
        isUser = true
    }

    const [showDelete, setShowDelete] = useState(false);

    const handleClose = () => setShowDelete(false);
    const handleShow = () => setShowDelete(true);

    const handleDelete = async () => {
        setLoading(true)
        handleShow()
        await dispatch(deleteReviewOnProduct(review._id));
        setLoading(false)
        if(!showDelete) {
            setTimeout(() => {
                window.location.reload(false)
            } , 1000)
        }

    }
    const handleEdit = () => {

    }

    return [isUser , handleClose , handleDelete , handleEdit , showDelete]
}

export default DeleteRateHook