
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getAllUserCartAction } from '../../redux/actions/cartAction';

const GetAllUserCartHook = () => {
 const dispatch = useDispatch();
 const getAllCartRes = useSelector(state => state.cartReducer.getAllCartData);
 const [couponName , setCouponName] = useState('')
 const [totalCartAfterPrice , setTotalCartAfterPrice] = useState(0)
 const [getAllUserCart , setGetAllUserCart] = useState([])
 const [loading , setLoading] = useState(true);
 const [cartId , setCardId] = useState('');

 const getAllCart = async () => {
    setLoading(true)
    await dispatch(getAllUserCartAction())
    setLoading(false)
 }
 useEffect(() => {
    getAllCart()
 } , [])

 useEffect(() => {
    if(!loading) {
        if(getAllCartRes.status === 'success') {
         console.log(getAllCartRes)
         setGetAllUserCart(getAllCartRes)
         setCardId(getAllCartRes.data._id)
         if(getAllCartRes.data.coupon) {
            setCouponName(getAllCartRes.data.coupon)
         } else {
            setCouponName('')
         }

         if(getAllCartRes.data.totalAfterDiscount) {
            setTotalCartAfterPrice(getAllCartRes.data.totalAfterDiscount)
         } else {
            setCouponName('')
         }


        } else {
         setCardId('')
         setGetAllUserCart([])
         setCouponName('')
         setTotalCartAfterPrice('')
        }
    }
 } , [loading])

 return [getAllUserCart , couponName , totalCartAfterPrice , cartId]
}

export default GetAllUserCartHook