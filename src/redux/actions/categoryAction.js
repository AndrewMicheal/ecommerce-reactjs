import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { CREATECATEGORY, GETALLCATEGORIES, GET_CATEGORY } from "../types";
// import BaseUrl from './../../Api/BaseUrl';

export const getAllCat = (limit) => {
    return async function (dispatch) {
        let res = await useGetData(`/api/v1/categories?limit=${limit}`)
        dispatch({type : GETALLCATEGORIES , payload : res})
    }
}

export const getAllCatPage = (limit,page) => {
    return async function (dispatch) {
        let res = await useGetData(`/api/v1/categories?limit=${limit}&page=${page}`)
        dispatch({type : GETALLCATEGORIES , payload : res})
    }
}

export const getOneCat = (id) => {
    return async function (dispatch) {
        let res = await useGetData(`/api/v1/categories/${id}`)
        dispatch({type : GET_CATEGORY , payload : res})
    }
}

export const createCategory = (formData) => {
    return async function (dispatch) {
        let {data} = await useInsertDataWithImage(`/api/v1/categories` , formData)
        dispatch({type : CREATECATEGORY , payload : data.data , loading : true})
    }
}