import { CREATE_SUB_CATEGORY, GET_SUB_CATEGORY } from './../types';


let initalState = {
    subCategories : [] ,
    loading : true
}

export function subCategoryReducer(state = initalState , action) {
    if(action.type === CREATE_SUB_CATEGORY) {
        return {...state , subCategories: action.payload , loading: false}
    } else if(action.type === GET_SUB_CATEGORY) {
        return {subCategories:action.payload , loading: false}
    }
    return state;
}