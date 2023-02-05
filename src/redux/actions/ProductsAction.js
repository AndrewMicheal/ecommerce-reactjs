import { useInsertDataWithImage } from "../../hooks/useInsertData"
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_CAT, GET_PRODUCT, GET_PRODUCT_LIKE, GET_PRODUCT_PAGE, UPDATE_PRODUCT } from './../types';
import useGetData from './../../hooks/useGetData';
import useDeleteData from './../../hooks/useDeleteData';
import { useUpdatetDataWithImage } from './../../hooks/useUpdateData';

export const createProduct = (formData) => {
    return async function (dispatch) {
        let res = await useInsertDataWithImage(`/api/v1/products` , formData)
    
        dispatch({type : CREATE_PRODUCT , payload : res , loading : true})
    }
}

export const getProducts = (limit) => {
    return async function (dispatch) {
        let res = await useGetData(`/api/v1/products?limit=${limit}`)
        dispatch({type : GET_ALL_PRODUCTS , payload : res , loading : true})
    }
}


export const getAllProductPage = (limit,page) => {
    return async function (dispatch) {
        let res = await useGetData(`/api/v1/products?limit=${limit}&page=${page}`)
        dispatch({type : GET_PRODUCT_PAGE , payload : res})
    }
}

export const getOneProduct = (id) => {
    return async function (dispatch) {
        let res = await useGetData(`/api/v1/products/${id}`)
        dispatch({type : GET_PRODUCT , payload : res , loading : true})
    }
}

export const getProductLike = (id) => {
    return async function (dispatch) {
        let res = await useGetData(`/api/v1/products?category=${id}`)
        dispatch({type : GET_PRODUCT_LIKE , payload : res , loading : true})
    }
}

export const deleteProduct = (id) => {
    return async function(dispatch) {
        let res = await useDeleteData(`/api/v1/products/${id}`);
        dispatch({type : DELETE_PRODUCT , payload : res , loading : true})
    }
}

export const editProduct = (id , data) => {
    return async function(dispatch) {
        let res = await useUpdatetDataWithImage(`/api/v1/products/${id}` , data);
        dispatch({type : UPDATE_PRODUCT , payload : res , loading : true})
    }
}

export const getAllProductSearch = (queryString) => {
    return async function (dispatch) {
        let res = await useGetData(`/api/v1/products?${queryString}`)
        dispatch({type : GET_ALL_PRODUCTS , payload : res , loading : true})
    }
}

export const getAllProductByCategory = (page , limit , category) => {
    return async function (dispatch) {
       try {
        let res = await useGetData(`/api/v1/products?limit=${limit}&category=${category}&page=${page}`)
        console.log(res)
        dispatch({type : GET_ALL_PRODUCTS_CAT , payload : res , loading : true})
       } catch (error) {
            dispatch({type : GET_ALL_PRODUCTS_CAT , payload : error , loading : true})
        
       }
    }
}