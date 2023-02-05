import { ADD_CART, DELETE_ALL_CART, GET_ALL_CART, DELETE_SPECIFIC_CART, UPDATE_CART_QTY, APPLY_COUPON } from './../types';
let initalState = {
    addToCart : [] ,
    getAllCartData : [] ,
    deleteAllCart : [] ,
    deleteSpecificCard : [] ,
    updateCartQty : [] ,
    applyCoupon : [] ,
    loading : true
}

export function cartReducer(state = initalState , action) {
    if(action.type === ADD_CART) {
        return {...state , addToCart: action.payload , loading: false}
    } else if(action.type === GET_ALL_CART) {
        return {...state , getAllCartData: action.payload , loading: false}
    } else if(action.type === DELETE_ALL_CART) {
        return {...state , deleteAllCart: action.payload , loading: false}
    } else if(action.type === DELETE_SPECIFIC_CART) {
        return {...state , deleteSpecificCard: action.payload , loading: false}
    } else if(action.type === UPDATE_CART_QTY) {
        return {...state , updateCartQty: action.payload , loading: false}
    } else if(action.type === APPLY_COUPON) {
        return {...state , applyCoupon: action.payload , loading: false}
    }
    return state;
}