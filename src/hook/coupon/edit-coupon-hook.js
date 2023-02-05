import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createCoupon, getAllCoupon, getSpecficCoupon, updateCoupon } from './../../redux/actions/couponAction';
import notify from './../useNotification';
import { useNavigate } from 'react-router-dom';

const EditCouponHook = (id) => {
    const [couponName , setCouponName] = useState('')
    const navigate = useNavigate()
    const [couponDate , setCouponDate] = useState('')
    const [couponValue , setCouponValue] = useState('')
    const [loading , setLoading] = useState(true)
    const [loadingCoupons , setLoadingCoupons] = useState(true)
    const dispatch = useDispatch()
    const getCouponRes = useSelector(state => state.couponReducer.getCoupon)
    const editCouponRes = useSelector(state => state.couponReducer.editCoupon)
    
    const onChangeName = (event) => {
        event.persist()
        setCouponName(event.target.value)
    }

    const onChangeDate = (event) => {
        event.persist()
        setCouponDate(event.target.value)
    }

    const onChangeValue = (event) => {
        event.persist()
        setCouponValue(event.target.value)
    }

    const handleSubmit =  async () => {
        setLoading(true)
        await dispatch(updateCoupon(id , {
            name: couponName,
            expire: couponDate,
            discount: couponValue
         }))
        setLoading(false)
    }

    useEffect(() => {
       if(!loading) {
        if(editCouponRes.data) {
            notify('تم التعديل بنجاح','success')
            setTimeout(() => {
                navigate('/admin/addcoupon')
            } , 1000)
        }
       }
    } , [loading])

    const getCoupon = async () => {
        setLoadingCoupons(true)
        await dispatch(getSpecficCoupon(id))
        setLoadingCoupons(false)

    }

    useEffect(() => {
        getCoupon(id)
    } , [])

    function formatString(dateString) {
        const option = {year : "numeric" , month : "numeric" , day : "numeric"}
        return new Date(dateString).toLocaleDateString(undefined , option)
     }

    useEffect(() => {
        if(!loadingCoupons) {
            if(getCouponRes.data) {
                let {name , expire , discount} = getCouponRes.data
                setCouponName(name)
                setCouponValue(discount)
                setCouponDate(formatString(expire))
            }
        }
    } , [loadingCoupons])


    return [couponName , couponDate , couponValue , onChangeName , onChangeDate , onChangeValue , handleSubmit]
}

export default EditCouponHook