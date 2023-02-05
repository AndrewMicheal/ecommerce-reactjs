
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createCoupon, getAllCoupon } from './../../redux/actions/couponAction';
import notify from './../useNotification';

const AddCouponHook = () => {
    const [couponName , setCouponName] = useState('')
    const [couponDate , setCouponDate] = useState('')
    const [couponValue , setCouponValue] = useState('')
    const [loading , setLoading] = useState(true)
    const [allCoupons , setAllCoupons] = useState([])
    const [loadingCoupons , setLoadingCoupons] = useState(true)
    const dispatch = useDispatch()
    const addCouponRes = useSelector(state => state.couponReducer.createCoupon)
    const getCouponRes = useSelector(state => state.couponReducer.allCoupons)

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

    const handleSubmit = async () => {
        if(couponName === '' || couponDate === '' || couponValue <=0) {
            notify('من فضلك ادخل جميع البيانات' , 'warn')
            return
        }
        setLoading(true)
        await dispatch(createCoupon(
            {
                name: couponName,
                expire: couponDate,
                discount: couponValue
            }
        ))
        setLoading(false)

    }

    useEffect(() => {
        if(!loading) {
            if(addCouponRes.data) {
                notify('تم اضافة كوبون' ,'success')
                setCouponDate('')
                setCouponName('')
                setCouponValue('')
                window.location.reload(false);
            }
        }
    } , [loading])

    const getCoupons = async () => {
        setLoadingCoupons(true)
        await dispatch(getAllCoupon())
        setLoadingCoupons(false)

    }

    useEffect(() => {
        if(!loadingCoupons) {
            if(getCouponRes) {
                setAllCoupons(getCouponRes)
            }
        }
    } , [loadingCoupons])


    useEffect(() => {
        getCoupons()
    } , [])

    return [couponName , couponDate , couponValue , onChangeName , onChangeDate , onChangeValue , handleSubmit , allCoupons]
}

export default AddCouponHook