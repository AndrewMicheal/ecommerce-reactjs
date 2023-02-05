
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCoupon } from './../../redux/actions/couponAction';
import notify from './../useNotification';

const CouponCardHook = (coupon) => {
    let dateString = coupon.expire;
    const [show, setShow] = useState(false);
    const [loading , setLoading] = useState(true)
    let dispatch = useDispatch();
    const deleteRes = useSelector(state => state.couponReducer.deleteCoupon)

    const handleClose = () => setShow(false);
    const handleDeleteShow = () => setShow(true);

    const handleDelete = async () => {
        setLoading(true)
        await dispatch(deleteCoupon(coupon._id))
        setLoading(false)
    }

    useEffect(() => {
        if(!loading) {
            if(deleteRes === "") {
                notify('تم حذف الكوبون بنجاح' , 'success')
                window.location.reload(false)
            }
        }
    } , [loading])

    

 function formatString(dateString) {
    const option = {year : "numeric" , month : "numeric" , day : "numeric"}
    return new Date(dateString).toLocaleDateString(undefined , option)
 }

 return [formatString , handleDeleteShow , handleDelete , handleClose , show , dateString]

}

export default CouponCardHook