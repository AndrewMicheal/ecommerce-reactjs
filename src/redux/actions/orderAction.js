
import { useUpdateData } from '../../hooks/useUpdateData';
import { CHANGE_ORDER, GET_ALL_ORDER } from '../types';
import { useGetDataToken } from './../../hooks/useGetData';
import { GET_ORDER_DETAIL, CHANGE_ORDER_DELIVER } from './../types';

export const getAllOrderAction = (page , limit) => {
    return async function (dispatch) {
        try {
            let res = await useGetDataToken(`/api/v1/orders?limit=${limit}&page=${page}`)
            dispatch({type : GET_ALL_ORDER , payload : res , loading : true})
        } catch (error) {
            dispatch({type : GET_ALL_ORDER , payload : error , loading : true})
        }
    }
}

export const getOrderDetailsAction = (id) => {
    return async function (dispatch) {
        try {
            let res = await useGetDataToken(`/api/v1/orders/${id}`)
            dispatch({type : GET_ORDER_DETAIL , payload : res , loading : true})
        } catch (error) {
            dispatch({type : GET_ORDER_DETAIL , payload : error , loading : true})
        }
    }
}

export const changeOrderPayAction = (id) => {
    return async function (dispatch) {
        try {
            let res = await useUpdateData(`/api/v1/orders/${id}/pay`)
            dispatch({type : CHANGE_ORDER , payload : res , loading : true})
        } catch (error) {
            dispatch({type : CHANGE_ORDER , payload : error , loading : true})
        }
    }
}


export const changeOrderDeliverAction = (id) => {
    return async function (dispatch) {
        try {
            let res = await useUpdateData(`/api/v1/orders/${id}/deliver`)
            dispatch({type : CHANGE_ORDER_DELIVER , payload : res , loading : true})
        } catch (error) {
            dispatch({type : CHANGE_ORDER_DELIVER , payload : error , loading : true})
        }
    }
}