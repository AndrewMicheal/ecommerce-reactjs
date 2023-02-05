import { CREATE_CARD_ORDER, CREATE_CASH_ORDER } from './../types';

let initalState = {
    createOrder : [] ,
    createCardOrder : [] ,
    loading : true
}

export function checkoutReducer(state = initalState , action) {
   if(action.type === CREATE_CASH_ORDER) {
        return {...state , createOrder : action.payload , loading : false}
   } else if(action.type === CREATE_CARD_ORDER) {
    return {...state , createCardOrder : action.payload , loading : false}
   }
    return state;
}