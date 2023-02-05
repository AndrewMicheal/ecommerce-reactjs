
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import notify from './../useNotification';
import { createWishlist, deleteWishlist } from './../../redux/actions/wishlistAction';
import { useEffect } from 'react';
import favoff from '../../Images/fav-off.png'
import favon from '../../Images/fav-on.png'

const ProductCardHook = (product , favProduct) => {
    const [favImg , setFavImg] = useState(favoff)
    const dispatch = useDispatch();
    const res = useSelector(state => state.wishlistReducer.addWhishlist)
    const deleteRes = useSelector(state => state.wishlistReducer.deleteWishList)
    let fav = favProduct.some(item => item === product._id);
    const [isFav , setIsFav] = useState(fav)

    const isUserLogIn = () => {
        
    }

    const addToWishList = async () => {
        if(localStorage.getItem("user") === null) {
            notify('قم بتسجيل الدخول' ,'error')
            return;
        } else {
            await dispatch(createWishlist({
                productId: product._id            
            }))
            if(res.status === "success") {
                notify('تمت اضافة المنتج الى المفضلة بنجاح' , 'success')
            }
            setIsFav(true)
            setFavImg(favon)
        }
       
    }

    const removeWishList = async() => {
        await dispatch(deleteWishlist(product._id))
        if(deleteRes.status === "success") {
            notify('تمت حذف المنتج من المفضلة بنجاح' , 'success')
        }
        setIsFav(false)
        setFavImg(favoff)
    }

    const handleFav = () => {
        if(favProduct.some(item => item === product._id) || isFav === true) {
            removeWishList();
        } else {
            addToWishList()
        }
    }

    useEffect(() => {
        setIsFav(favProduct.some(item => item === product._id))
    }, [favProduct])

    useEffect(() => {
        if (isFav) {
            setFavImg(favon)
        }
        else {
            setFavImg(favoff)
        }

    }, [isFav])

    return [removeWishList , addToWishList , handleFav , favImg]

}

export default ProductCardHook