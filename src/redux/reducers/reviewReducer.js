import { ALL_REVIEW_PRODUCT, CREATE_REVIEW, DELTETE_REVIEW_PRODUCT, UPDATE_REVIEW_PRODUCT } from './../types';

let inital = {
    createReview : [] ,
    reviewProduct : [] ,
    deleteReview : [] ,
    updateReview : [] ,
    loading : true
}

export const reviewReducer = (state = inital , action) => {
    if(action.type === CREATE_REVIEW) {
        return {...state , createReview: action.payload , loading: false}
    } else if(action.type === ALL_REVIEW_PRODUCT) {
        return {...state , reviewProduct: action.payload , loading: false}
    } else if(action.type === DELTETE_REVIEW_PRODUCT) {
        return {...state , deleteReview: action.payload , loading: false}
    } else if(action.type === UPDATE_REVIEW_PRODUCT) {
        return {...state , updateReview: action.payload , loading: false}
    }
    return state;
}

