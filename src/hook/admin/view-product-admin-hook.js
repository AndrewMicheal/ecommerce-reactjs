
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProductPage, getProducts } from '../../redux/actions/ProductsAction';

const ViewProductAdminHook = () => {
    let dispatch = useDispatch();
    let allProductsItems = useSelector(state => state.allProducts.allProducts);
    useEffect(() => {
     dispatch(getProducts(10))
    },[])

    let items
    try {
    if(allProductsItems.data) 
        items = allProductsItems.data
    else
        items = [];
    }
    catch(e) {
        items = []
    }

    let pagination = []
    try {
    if(allProductsItems) 
        pagination = allProductsItems.paginationResult.numberOfPages
    else
        pagination = [];
    }
    catch(e) {
        pagination = []
    }

    const onPress = (pageCount) => {
        dispatch(getAllProductPage(10 , pageCount))
      }

    return [items , pagination , onPress]
}

export default ViewProductAdminHook