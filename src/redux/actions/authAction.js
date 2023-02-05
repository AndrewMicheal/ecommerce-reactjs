import { CREATE_NEW_USER, GET_CURRENT_USER, UPDATE_CURRENT_USER } from "../types"
import { useInsertData } from './../../hooks/useInsertData';
import { LOGIN_USER, UPDATE__USER_PASSWORD } from './../types';
import useGetData from './../../hooks/useGetData';
import { useUpdateData } from "../../hooks/useUpdateData";

export const createNewUser = (data) => {
    return async function (dispatch) {
      try {
        let res = await useInsertData(`/api/v1/auth/signup` , data)
        dispatch({type : CREATE_NEW_USER , payload : res , loading : true})
      } catch (error) {
        dispatch({type : CREATE_NEW_USER , payload : error , loading : true})
      }
    }
}

export const loginUser = (data) => {
    return async function (dispatch) {
        try {
            let res = await useInsertData(`/api/v1/auth/login` , data)
            dispatch({type : LOGIN_USER , payload : res , loading : true})
        } catch (error) {
            dispatch({type : LOGIN_USER , payload : error , loading : true})
        }
    }
}

export const getLoogedUser = (data) => {
    return async function (dispatch) {
       try {
        let res = await useGetData(`/api/v1/users/getMe` , data)
        dispatch({type : GET_CURRENT_USER , payload : res , loading : true})
       } catch (error) {
            dispatch({type : GET_CURRENT_USER , payload : error , loading : true})
       }
    }
}

export const updateLoogedUser = (data) => {
    return async function (dispatch) {
       try {
        let res = await useUpdateData(`/api/v1/users/updateMe` , data)
        dispatch({type : UPDATE_CURRENT_USER , payload : res , loading : true})
       } catch (error) {
        dispatch({type : UPDATE_CURRENT_USER , payload : error , loading : true})
        
       }
    }
}

export const updateUserPassword = (data) => {
    return async function (dispatch) {
        try {
            let res = await useUpdateData(`/api/v1/users/changeMyPassword` , data)
            dispatch({type : UPDATE__USER_PASSWORD , payload : res , loading : true})
        } catch (error) {
            dispatch({type : UPDATE__USER_PASSWORD , payload : error , loading : true})
        }
    }
}