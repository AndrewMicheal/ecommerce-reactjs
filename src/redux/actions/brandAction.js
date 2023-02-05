import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { CREATEBRANDS, GETALLBRANDS } from "../types";
// import BaseUrl from './../../Api/BaseUrl';
import { GET_BRAND } from './../types';

export const getAllBrand = (limit) => {
    return async function (dispatch) {
       try {
        let res = await useGetData(`/api/v1/brands?limit=${limit}`)
        dispatch({type : GETALLBRANDS , payload : res})
       } catch (error) {
            dispatch({type : GETALLBRANDS , payload : error})
       }
    }
}

export const getAllBrandPage = (limit,page) => {
    return async function (dispatch) {
        try {
            let res = await useGetData(`/api/v1/brands?limit=${limit}&page=${page}`)
            dispatch({type : GETALLBRANDS , payload : res})
        } catch (error) {
            dispatch({type : GETALLBRANDS , payload : error})
        }
    }
}

export const createBrand = (formData) => {
    return async function (dispatch) {
        try {
            let {data} = await useInsertDataWithImage(`/api/v1/brands` , formData)
            dispatch({type : CREATEBRANDS , payload : data.data , loading : true})
        } catch (error) {
            dispatch({type : CREATEBRANDS , payload : error , loading : true})
        }
    }
}

export const getOneBrand = (id) => {
    return async function (dispatch) {
        try {
            let res = await useGetData(`/api/v1/brands/${id}`)
            dispatch({type : GET_BRAND , payload : res})
        } catch (error) {
            dispatch({type : GET_BRAND , payload : error})
        }
    }
}