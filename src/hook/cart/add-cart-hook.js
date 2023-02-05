
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction } from './../../redux/actions/cartAction';
import notify from './../useNotification';

const AddCartHook = (id) => {
  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch();
  const AddRes = useSelector(state => state.cartReducer.addToCart);
  const [colorText , setColorText] = useState('')

  const onColorChange = (color) => {
    setColorText(color)
  }

  const addToCart = async () => {
    setLoading(true)
    await dispatch(addToCartAction( {
        productId: id ,
        color: colorText
    }))
    setLoading(false)
   
  }

  useEffect(() => {
    if(!loading) {
        if(AddRes.status === 'success') {
            notify('تمت الاضافة الى العربة' , 'success')
            setTimeout(() => {
              window.location.reload(false);
            } , 1000)
        } else {
            notify('قم بتسجيل الدخول اولا' , 'error')
        }
    }
  } , [loading])

  return [addToCart , onColorChange]
}

export default AddCartHook