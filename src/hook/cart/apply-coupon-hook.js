
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyCouponAction } from '../../redux/actions/cartAction';
import notify from './../useNotification';

const ApplyCouponHook = () => {
  const [loading , setLoading] = useState(true)
  const [couponValue , setCouponValue] = useState('')
  const dispatch = useDispatch();
  const applyCouponRes = useSelector(state => state.cartReducer.applyCoupon);

  const onChangeCoupon = (e) => {
    e.persist()
    setCouponValue(e.target.value)
  }

  const handleApplyCoupon = async () => {
    console.log(couponValue)
    setLoading(true)
    await dispatch(applyCouponAction({
        couponName: couponValue
    }))
    setLoading(false)
  }

  useEffect(() => {
    if(!loading) {
        console.log(applyCouponRes)
        if(applyCouponRes.status === "success") {
            notify('تم عمل  كوبون' , 'success')
            setTimeout(() => {
                window.location.reload(false);
            } , 1000)
        } else {
            notify('هذا الكوبون غير صحيح او منتهى الصلاحية' , 'error')
        }
    }

  } , [loading])

  return [handleApplyCoupon , couponValue , onChangeCoupon]

}

export default ApplyCouponHook