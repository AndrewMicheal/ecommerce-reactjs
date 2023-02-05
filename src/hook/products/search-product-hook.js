
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getAllProductPage, getAllProductSearch, getProducts } from '../../redux/actions/ProductsAction';

const ViewSearchProductsHook = () => {
    let dispatch = useDispatch();
    let limit = 6
    let allProductsItems = useSelector(state => state.allProducts.allProducts);

    const getProduct = async () => {
        let word = "" ,queryCat = "" , queryBrand = "";
        let from = "";
        let to = "";
        if(localStorage.getItem("searchWord") != null) {
          word = localStorage.getItem("searchWord");
        }
        if(localStorage.getItem("queryCate") != null) {
            queryCat = localStorage.getItem("queryCate");
        }
        if(localStorage.getItem("queryBrand") != null) {
            queryBrand = localStorage.getItem("queryBrand");
        }
        if(localStorage.getItem("priceFrom") != null) {
            from = localStorage.getItem("priceFrom");
        }
        if(localStorage.getItem("priceTo") != null) {
            to = localStorage.getItem("priceTo");
        }
        sortData()
        
        await dispatch(getAllProductSearch(`sort=${sort}&limit=20&keyword=${word}&${queryCat}&${queryBrand}`))
    }

    useEffect(() => {
        getProduct('')
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
        let word = "" , queryCat , queryBrand;
        if(localStorage.getItem("searchWord") != null) {
          word = localStorage.getItem("searchWord");
        }
        if(localStorage.getItem("queryCate") != null) {
            queryCat = localStorage.getItem("queryCate");
        }
        if(localStorage.getItem("queryBrand") != null) {
            queryBrand = localStorage.getItem("queryBrand");
        }
        sortData();
        dispatch(getAllProductSearch(`sort=${sort}&limit=${limit}&page=${pageCount}&keyword=${word}&${queryCat}&${queryBrand}`))  
    }
    let searchWord = "";
    let sort;
     const sortData = () => {
        if(localStorage.getItem("sortType") != null) {
          searchWord = localStorage.getItem("sortType");
        } else {
            searchWord = ""
        }

        if(searchWord === "السعر من الاقل للاعلي") {
            sort = "+price";
        } else if(searchWord === "السعر من الاعلي للاقل") {
            sort = "-price";
        } else if(searchWord === "") {
            sort = ""
        } else if(searchWord === "الاكثر مبيعا") {
            sort = "-sold"
        } else if(searchWord === "الاعلي تقييما") {
            sort = "-quantity"
        }
     }

    return [items , pagination , onPress , getProduct]
}

export default ViewSearchProductsHook