
import { useDispatch, useSelector } from 'react-redux';
import { getSpecficAddress } from './../../redux/actions/userAddressAction';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import GetAllUserCartHook from './../cart/get-all-user-cart-hook';
import notify from './../useNotification';
import { createCashOrderAction } from './../../redux/actions/checkoutAction';
import OrderPayCardHook from './order-pay-card-hook';

const OrderPayCashHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [loading , setLoading] = useState(true);
    const [loadingCreate , setLoadingCreate] = useState(true);
    const [addressDetails , setAddressDetails] = useState([])
    const [type , setType] = useState('')
    const getSpecificAddressRes = useSelector(state => state.userAddressReducer.specificAddress);
    const getCreateCashRes = useSelector(state => state.checkoutReducer.createOrder);

    const [ ,  ,  , cartId] = GetAllUserCartHook()

    const [createOrderCard] = OrderPayCardHook(addressDetails)


    const getUserSpecificAddress = async (id) => {
        setLoading(true)
        await dispatch(getSpecficAddress(id));
        setLoading(false);
      }
    const handelChooseAddress = (e) => {
        setAddressDetails([])
        if(e.target.value !== "0") {
            getUserSpecificAddress(e.target.value)
        }
    }

    const handlePay = () => {
        if(type === "CARD") {
            createOrderCard()
        } else if(type === "CASH") {
            createOrderCash()
        } else {
            notify('اختر طريقة دفع' , 'warn')
        }
    }

    const changePayMethoud = (e) => {
        setType(e.target.value)
    }

    useEffect(() => {
        if(!loading) {
            if(getSpecificAddressRes.status === 'success') {
                setAddressDetails(getSpecificAddressRes.data)
            } else {
                setAddressDetails([])
            }
        }
      } , [loading])

      const createOrderCash = async () => {
        if(cartId === '0') {
            notify('من فضلك منتجات الى العربة' , 'warn')
            return;
        }
        if (addressDetails.length <= 0) {
            notify("من فضلك اختر عنوان اولا", "warn")
            return
        }
        setLoadingCreate(true)
        await dispatch(createCashOrderAction(cartId , {
            shippingAddress:{
                details: addressDetails.details,
                phone: addressDetails.phone,
                city: "",
                postalCode: ""
                }
        }))
        setLoadingCreate(false)
      }

      useEffect(() => {
        if(!loadingCreate) {
            console.log(getCreateCashRes)
           if(getCreateCashRes.status === "success") {
            notify('تم انشاء طلبك بنجاح' , 'success')
            setTimeout(() => {
                navigate('/user/allorders')
            } , 1500)
           } else {
            notify('فشل فى اكمال الطلب' , 'error')
           }
        }
      } , [loadingCreate])

    return [handelChooseAddress , addressDetails , handlePay , changePayMethoud]
}

export default OrderPayCashHook