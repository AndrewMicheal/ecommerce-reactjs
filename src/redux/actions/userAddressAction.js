import { useInsertData } from './../../hooks/useInsertData';
import { CREATE_USER_ADDRESS, GET_ALL_USER_ADDRESS, DELETE_ADDRESS, UPDATE_ADDRESS, GET_SPECFIC_ADDRESS } from './../types';
import  { useGetDataToken } from './../../hooks/useGetData';
import useDeleteData from './../../hooks/useDeleteData';
import { useUpdateData } from './../../hooks/useUpdateData';

export const createUserAddress = (body) => {
    return async function (dispatch) {
        let res = await useInsertData(`/api/v1/addresses` , body)
        dispatch({type : CREATE_USER_ADDRESS , payload : res , loading : true})
    }
}

export const getUserAddress = () => {
    return async function (dispatch) {
        let res = await useGetDataToken(`/api/v1/addresses`)
        dispatch({type : GET_ALL_USER_ADDRESS , payload : res , loading : true})
    }
}


export const deleteAddress = (id) => {
    return async function (dispatch) {
        let res = await useDeleteData(`/api/v1/addresses/${id}`)
        dispatch({type : DELETE_ADDRESS , payload : res , loading : true})
    }
}

export const updateAddress = (id , body) => {
    return async function (dispatch) {
        let res = await useUpdateData(`/api/v1/addresses/${id}` , body)
        dispatch({type : UPDATE_ADDRESS , payload : res , loading : true})
    }
}

export const getSpecficAddress = (id) => {
    return async function (dispatch) {
        let res = await useGetDataToken(`/api/v1/addresses/${id}`)
        dispatch({type : GET_SPECFIC_ADDRESS , payload : res , loading : true})
    }
}