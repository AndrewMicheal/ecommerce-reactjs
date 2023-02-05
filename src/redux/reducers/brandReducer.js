import { CREATEBRANDS, GETALLBRANDS, GET_BRAND } from "../types";


let intialState = {
    brands:[],
    oneBrand : [] ,
    loading:true
}

export function brandReducer(state = intialState , action) {
    if(action.type === GETALLBRANDS) {
        return {...state , brands: action.payload , loading:false}
    } else if(action.type === CREATEBRANDS) {
        return {brands:action.payload , loading:false}
    } else if(action.type === GET_BRAND) {
        return {oneBrand:action.payload , loading:false}
    }
    return state;
}