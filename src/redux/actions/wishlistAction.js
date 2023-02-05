
import { useInsertData } from './../../hooks/useInsertData';
import { ADD_WISHLIST, DELETE_WISHLIST, GET_WISHLIST } from './../types';
import useDeleteData from './../../hooks/useDeleteData';
import { useGetDataToken } from './../../hooks/useGetData';

export const createWishlist = (body) => {
    return async function (dispatch) {
        try {
            let res = await useInsertData(`/api/v1/wishlist` , body)
            dispatch({type : ADD_WISHLIST , payload : res , loading : true})
        } catch (error) {
            console.log(error)
        }
       
    }
}

export const deleteWishlist = (id) => {
    return async function (dispatch) {
        try {
            let res = await useDeleteData(`/api/v1/wishlist/${id}`)
            console.log(res)
            dispatch({type : DELETE_WISHLIST , payload : res , loading : true})
        } catch (error) {
            console.log(error)
        }
       
    }
}

export const getWishlist = () => {
    return async function (dispatch) {
        try {
            let res = await useGetDataToken(`/api/v1/wishlist`)
            console.log(res)
            dispatch({type : GET_WISHLIST , payload : res , loading : true})
        } catch (error) {
            dispatch({type : GET_WISHLIST , payload : error , loading : true})
        }
       
    }
}