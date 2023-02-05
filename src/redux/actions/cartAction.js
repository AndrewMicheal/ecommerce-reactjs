import { ADD_CART, DELETE_ALL_CART, UPDATE_CART_QTY } from '../types';
import { useInsertData } from './../../hooks/useInsertData';
import { useGetDataToken } from './../../hooks/useGetData';
import { GET_ALL_CART, DELETE_SPECIFIC_CART, APPLY_COUPON } from './../types';
import useDeleteData from './../../hooks/useDeleteData';
import { useUpdateData } from '../../hooks/useUpdateData';

export const addToCartAction = (body) => {
    return async function (dispatch) {
        try {
            let res = await useInsertData(`/api/v1/cart` , body)
            console.log(res)
            dispatch({type : ADD_CART , payload : res})
        } catch (error) {
            dispatch({type : ADD_CART , payload : error})
        }
    }
}

export const getAllUserCartAction = () => {
    return async function (dispatch) {
        try {
            let res = await useGetDataToken(`/api/v1/cart`)
            dispatch({type : GET_ALL_CART , payload : res})
        } catch (error) {
            dispatch({type : GET_ALL_CART , payload : error})
        }
    }
}

export const deleteAllCartAction = () => {
    return async function (dispatch) {
        try {
            let res = await useDeleteData(`/api/v1/cart`)
            dispatch({type : DELETE_ALL_CART , payload : res})
        } catch (error) {
            dispatch({type : DELETE_ALL_CART , payload : error})
        }
    }
}

export const deleteSpecificCartAction = (id) => {
    return async function (dispatch) {
        try {
            let res = await useDeleteData(`/api/v1/cart/${id}`)
            dispatch({type : DELETE_SPECIFIC_CART , payload : res})
        } catch (error) {
            dispatch({type : DELETE_SPECIFIC_CART , payload : error})
        }
    }
}

export const updateCartProductQtyAction = (id , body) => {
    return async function (dispatch) {
        try {
            let res = await useUpdateData(`/api/v1/cart/${id}` , body)
            dispatch({type : UPDATE_CART_QTY , payload : res})
        } catch (error) {
            dispatch({type : UPDATE_CART_QTY , payload : error})
        }
    }
}

export const applyCouponAction = (body) => {
    return async function (dispatch) {
        try {
            let res = await useUpdateData(`/api/v1/cart/applyCoupon` , body)
            console.log(res)
            dispatch({type : APPLY_COUPON , payload : res})
        } catch (error) {
            console.log(error)
            dispatch({type : APPLY_COUPON , payload : error})
        }
    }
}