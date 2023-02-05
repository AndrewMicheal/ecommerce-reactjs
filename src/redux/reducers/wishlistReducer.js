
import { ADD_WISHLIST, DELETE_WISHLIST, GET_WISHLIST } from './../types';
let intialState = {
    addWhishlist:[],
    deleteWishList : [] ,
    getWishList : [] ,
    loading:true
}

export function wishlistReducer(state = intialState , action) {
    if(action.type === ADD_WISHLIST) {
        return {...state , addWhishlist: action.payload , loading:false}
    } else if(action.type === DELETE_WISHLIST) {
        return {...state , deleteWishList: action.payload , loading:false}
    } else if(action.type === GET_WISHLIST) {
        return {...state , getWishList: action.payload , loading:false}
    }
    return state;
}