
import { useInsertData } from './../../hooks/useInsertData';
import { CREATE_CARD_ORDER, CREATE_CASH_ORDER } from './../types';
import { useGetDataToken } from './../../hooks/useGetData';

export const createCashOrderAction = (id , body) => {
    return async function (dispatch) {
        try {
            let res = await useInsertData(`/api/v1/orders/${id}` , body)
            console.log(res)
            dispatch({type : CREATE_CASH_ORDER , payload : res})
        } catch (error) {
            dispatch({type : CREATE_CASH_ORDER , payload : error})
        }
    }
}

export const createCardOrderAction = (id , body) => {
    return async function (dispatch) {
        try {
            let res = await useGetDataToken(`/api/v1/orders/checkout-session/${id}` , body)
            console.log(res)
            dispatch({type : CREATE_CARD_ORDER , payload : res})
        } catch (error) {
            dispatch({type : CREATE_CARD_ORDER , payload : error})
        }
    }
}
