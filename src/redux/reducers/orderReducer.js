import { CHANGE_ORDER, GET_ALL_ORDER } from "../types";
import { GET_ORDER_DETAIL, CHANGE_ORDER_DELIVER } from './../types';

let inital = {
    getAllOrder : [] ,
    getSpecificOrder : [] ,
    changeOrder : [] ,
    changeOrderDeliver : [] ,
    loading : true
}

const orderReducer = (state = inital , action) => {

    if(action.type === GET_ALL_ORDER) {
        return {...state , getAllOrder : action.payload , loading : false}
    } else  if(action.type === GET_ORDER_DETAIL) {
        return {...state , getSpecificOrder : action.payload , loading : false}
    } else  if(action.type === CHANGE_ORDER) {
        return {...state , changeOrder : action.payload , loading : false}
    } else  if(action.type === CHANGE_ORDER_DELIVER) {
        return {...state , changeOrderDeliver : action.payload , loading : false}
    }
    return state;
}

export default orderReducer