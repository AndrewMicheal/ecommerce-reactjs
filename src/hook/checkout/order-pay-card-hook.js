
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GetAllUserCartHook from './../cart/get-all-user-cart-hook';
import notify from './../useNotification';
import { createCardOrderAction } from '../../redux/actions/checkoutAction';

const OrderPayCardHook = (addressDetails) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [loading , setLoading] = useState(true);
    const getCreateCardRes = useSelector(state => state.checkoutReducer.createCardOrder);

    const [ ,  ,  , cartId] = GetAllUserCartHook()

    const createOrderCard = async () => {
        if(cartId === '0') {
            notify('من فضلك منتجات الى العربة' , 'warn')
            return;
        }
        if (addressDetails.length <= 0) {
            notify("من فضلك اختر عنوان اولا", "warn")
            return
        }
        setLoading(true)
        await dispatch(createCardOrderAction(cartId , {
            shippingAddress:{
                details: addressDetails.details,
                phone: addressDetails.phone,
                city: "",
                postalCode: ""
                }
        }))
        setLoading(false)
      }

      useEffect(() => {
        if(!loading) {
           if(getCreateCardRes.status === "success") {
            //notify('تم انشاء طلبك بنجاح' , 'success')
            console.log(getCreateCardRes.session.url)

            if(getCreateCardRes.session.url) {
                window.open(getCreateCardRes.session.url)
            }
           }else {
            notify('فشل فى اكمال الطلب' , 'error')
           }
        }
      } , [loading])

      return [createOrderCard]


}

export default OrderPayCardHook