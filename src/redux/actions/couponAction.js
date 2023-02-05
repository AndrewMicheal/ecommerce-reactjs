import { CREATE_COUPON, DELETE_COUPON, UPDATE_COUPON } from '../types';
import { useInsertData } from './../../hooks/useInsertData';
import { useGetDataToken } from './../../hooks/useGetData';
import { GET_ALL_COUPON, GET_SPECFIC_COUPON } from './../types';
import useDeleteData from './../../hooks/useDeleteData';
import { useUpdateData } from '../../hooks/useUpdateData';

export const createCoupon = (body) => {
    return async function (dispatch) {
        let res = await useInsertData(`/api/v1/coupons` , body)
        dispatch({type : CREATE_COUPON , payload : res , loading : true})
    }
}

export const getAllCoupon = () => {
    return async function (dispatch) {
        let res = await useGetDataToken(`/api/v1/coupons`)
        dispatch({type : GET_ALL_COUPON , payload : res , loading : true})
    }
}

export const deleteCoupon = (id) => {
    return async function (dispatch) {
        let res = await useDeleteData(`/api/v1/coupons/${id}`)
        dispatch({type : DELETE_COUPON , payload : res , loading : true})
    }
}

export const getSpecficCoupon = (id) => {
    return async function (dispatch) {
        let res = await useGetDataToken(`/api/v1/coupons/${id}`)
        dispatch({type : GET_SPECFIC_COUPON , payload : res , loading : true})
    }
}

export const updateCoupon = (id , body) => {
    return async function (dispatch) {
        let res = await useUpdateData(`/api/v1/coupons/${id}` , body)
        dispatch({type : UPDATE_COUPON , payload : res , loading : true})
    }
}