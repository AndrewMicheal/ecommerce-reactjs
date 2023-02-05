
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartProductQtyAction } from './../../redux/actions/cartAction';
import notify from './../useNotification';

const UpdateCartQtyHook = (id , qty) => {
    const [loading , setLoading] = useState(true)
    const [updateCartQty , setUpdateCartQty] = useState(qty)
    const dispatch = useDispatch();
    const updateQtyRes = useSelector(state => state.cartReducer.updateCartQty)

   

    const handleCount = (e) => {
        setUpdateCartQty(e.target.value);
    }

    const handleUpdateQty = async () => {
        setLoading(true)
        await dispatch(updateCartProductQtyAction(id , {
            count: updateCartQty
        }))
        setLoading(false)
    }

    useEffect(() => {
        if(!loading) {
            if(updateQtyRes.status === 'success') {
                notify('تم تحديث الكمية' , 'success')
                setTimeout(() => {
                    window.location.reload(false);
                } , 1000)
            } else {
                notify('لم يتم تحديث الكمية' , 'error')
            }
        }
    } , [loading])

    return [updateCartQty , handleCount , handleUpdateQty]
}

export default UpdateCartQtyHook