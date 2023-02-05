
import { useState, useEffect } from 'react';
import ViewSearchProductsHook from './../products/search-product-hook';

const NavbarSearchHook = () => {
    const [items , pagination , onPress , getProduct] = ViewSearchProductsHook()
   const [searchWord , setSearchWord] = useState('');

    const getSearchInput = ({target}) => {
        localStorage.setItem("searchWord" , searchWord)
        setSearchWord(target.value);
    }

    useEffect(() => {
        setTimeout(() => {
            getProduct()
        } , 1000)
    } , [searchWord])
  
  return [searchWord ,getSearchInput]
}

export default NavbarSearchHook