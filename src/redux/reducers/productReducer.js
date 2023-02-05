import { CREATE_PRODUCT, GET_ALL_PRODUCTS, GET_PRODUCT, GET_PRODUCT_LIKE, DELETE_PRODUCT, GET_PRODUCT_PAGE, UPDATE_PRODUCT, GET_ALL_PRODUCTS_CAT } from './../types';

const inital = {
    products : [] ,
    allProducts: [] ,
    productDetails : [],
    productLike : [] ,
    deleteProducts : [],
    updateProduct : [],
    allProductsCateogry : [] ,
    loading : true
}
export function productReducer(state = inital , action) {
    if(action.type === CREATE_PRODUCT) {
        return {...state , products: action.payload , loading: false}
    } 
    else if(action.type === GET_ALL_PRODUCTS) {
        return {allProducts: action.payload , loading : false}
    }
    else if(action.type === GET_PRODUCT) {
        return {productDetails: action.payload , loading : false}
    }
    else if(action.type === GET_PRODUCT_LIKE) {
        return {...state , productLike: action.payload , loading : false}
    }
    else if(action.type === DELETE_PRODUCT) {
        return {...state , deleteProducts: action.payload , loading : false}
    }
    else if(action.type === GET_PRODUCT_PAGE) {
        return {...state , allProducts: action.payload , loading : false}
    }
    else if(action.type === UPDATE_PRODUCT) {
        return {...state , updateProduct: action.payload , loading : false}
    } else if(action.type === GET_ALL_PRODUCTS_CAT) {
        return {...state , allProductsCateogry: action.payload , loading : false}
    }
    return state;
}