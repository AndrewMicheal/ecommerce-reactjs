
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getProducts } from '../../redux/actions/ProductsAction';

const ViewHomeProductsHook = () => {
    let dispatch = useDispatch();
    let allProducts = useSelector(state => state.allProducts.allProducts);
    useEffect(() => {
     dispatch(getProducts())
    },[])

    let items;
try {
    if(allProducts.data) 
        items = allProducts.data.slice(0 , 4)
    else
        items = [];
}
catch(error) {
    items = []
}
    return [items]
}

export default ViewHomeProductsHook