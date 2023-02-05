import { CREATE_COUPON, DELETE_COUPON, UPDATE_COUPON } from "../types";
import { GET_ALL_COUPON, GET_SPECFIC_COUPON } from './../types';

let inital = {
    createCoupon : [] ,
    allCoupons : [] ,
    deleteCoupon : [] ,
    getCoupon : [] ,
    editCoupon : [] ,
    loading : true
}

const couponReducer = (state = inital , action) => {

    if(action.type === CREATE_COUPON) {
        return {...state , createCoupon : action.payload , loading : false}
    } else if(action.type === GET_ALL_COUPON) {
        return {...state , allCoupons : action.payload , loading : false}
    } else if(action.type === DELETE_COUPON) {
        return {...state , deleteCoupon : action.payload , loading : false}
    } else if(action.type === GET_SPECFIC_COUPON) {
        return {...state , getCoupon : action.payload , loading : false}
    } else if(action.type === UPDATE_COUPON) {
        return {...state , editCoupon : action.payload , loading : false}
    } 
    return state;
}

export default couponReducer