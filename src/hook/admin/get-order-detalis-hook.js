
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetailsAction } from '../../redux/actions/orderAction';

const GetOrderDetalisHook = (id) => {
    const [loading , setLoading] = useState(true)
    const [orderDetails , setorderDetails] = useState([])
    const [cartItems , setCartItems] = useState([])
    const dispatch = useDispatch();
    const orderDetailsRes = useSelector(state => state.orderReducer.getSpecificOrder)

    const getOrderDetail = async () => {
        setLoading(true)
        await dispatch(getOrderDetailsAction(id))
        setLoading(false)
    }

    useEffect(() => {
        getOrderDetail()
    } , [])

    function formatString(dateString) {
        const option = {year : "numeric" , month : "numeric" , day : "numeric"}
        return new Date(dateString).toLocaleDateString(undefined , option)
     }


    useEffect(() => {
        if(!loading) {
            if(orderDetailsRes.data) {
                setorderDetails(orderDetailsRes.data)
            }
            if(orderDetailsRes.data.cartItems) {
                setCartItems(orderDetailsRes.data.cartItems)
            }
        }
    } , [loading])

    return [orderDetails , cartItems , formatString]
}

export default GetOrderDetalisHook