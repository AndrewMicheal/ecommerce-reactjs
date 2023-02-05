import { CREATE_SUB_CATEGORY, GET_SUB_CATEGORY } from "../types"
import {useInsertData} from '../../hooks/useInsertData.jsx'
import useGetData from './../../hooks/useGetData';

export const createSubCategory = (data) => {
    return async function (dispatch) {
        let res = await useInsertData(`/api/v1/subcategories` , data)
        console.log(res)
        dispatch({type : CREATE_SUB_CATEGORY , payload : res , loading : true})
    }
}

// get sub category depend in cat id
export const getOneCat = (id) => {
    return async function (dispatch) {
        try {
            let res = await useGetData(`/api/v1/categories/${id}/subcategories`)
            dispatch({type : GET_SUB_CATEGORY , payload : res , loading : true})
        } catch (error) {
            console.log(error)
        }
       
    }
}