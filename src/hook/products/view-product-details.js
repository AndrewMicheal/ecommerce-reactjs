
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, getProductLike } from './../../redux/actions/ProductsAction';
import mobile from '../../Images/mobile.png'
import { getOneCat } from './../../redux/actions/categoryAction';
import { getOneBrand } from '../../redux/actions/brandAction';

const ViewProductDetails = (id) => {
    let dispatch = useDispatch();
    let productDetails = useSelector(state => state.allProducts.productDetails);
    const [item , setItems] = useState([])
    const [loading , setLoading] = useState(true)
    let oneCategory = useSelector(state => state.allCategory.getOneCategory);
    let oneBrandItem = useSelector(state => state.allBrands.oneBrand);
    let productLikeItem = useSelector(state => state.allProducts.productLike)


    const getItems = async() => {
      setLoading(true)
      await  dispatch(getOneProduct(id));
      setLoading(false)
    }

    useEffect(() => {
      getItems()
    }, [])

    useEffect(() => {
      if(!loading) {
        setItems(productDetails.data)
      }
    }, [loading])

 
    

    let oneCat = [];
    try {
        if(oneCategory.data) {
          oneCat = oneCategory.data;
        } else {
          oneCat = []
        }
    }
    catch(e) {
      oneCat = []
    }

    let oneBrand = [];
    try {
        if(oneBrandItem.data) {
          oneBrand = oneBrandItem.data;
        } else {
          oneBrand = []
        }
    }
    catch(e) {
      oneBrand = []
    }

    let productLike = [];
    try {
        if(productLikeItem.data) {
          productLike = productLikeItem.data.slice(0 , 4);
        } else {
          productLike = []
        }
    }
    catch(e) {
      productLike = []
    }

    useEffect(() => {
      if(item.category) {
        dispatch(getOneCat(item.category))
        dispatch(getOneBrand(item.brand))
        dispatch(getProductLike(item.category))
      }
  }, [item])

    let images = []

    if(item.images) {
        images = item.images.map((image) => {
          return {
            original: image
          }
        })
      } else {
        images = [{ original: `${mobile}`}]
      }


    return [item , images , oneCat , oneBrand , productLike]
}

export default ViewProductDetails