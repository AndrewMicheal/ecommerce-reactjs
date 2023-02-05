import { useInsertData } from './../../hooks/useInsertData';
import { ALL_REVIEW_PRODUCT, CREATE_REVIEW, DELTETE_REVIEW_PRODUCT, UPDATE_REVIEW_PRODUCT } from './../types';
import { useGetDataToken } from './../../hooks/useGetData';
import useDeleteData from './../../hooks/useDeleteData';
import { useUpdateData } from './../../hooks/useUpdateData';

export const createReview = (prodId , body) => {
    return async function (dispatch) {
        let res = await useInsertData(`/api/v1/products/${prodId}/reviews` , body)
        console.log(res);
        dispatch({type : CREATE_REVIEW , payload : res , loading : true})
    }
}
// get all Review on one product
export const getAllReviewProduct = (prodId , pageNumber , limit) => {
    return async function (dispatch) {
        let res = await useGetDataToken(`/api/v1/products/${prodId}/reviews?page=${pageNumber}&limit=${limit}`)
        dispatch({type : ALL_REVIEW_PRODUCT , payload : res , loading : true})
    }
}

export const deleteReviewOnProduct = (id) => {
    return async function (dispatch) {
        let res = await useDeleteData(`/api/v1/reviews/${id}`)
        dispatch({type : DELTETE_REVIEW_PRODUCT , payload : res , loading : true})
    }
}

export const updateReviewOnProduct = (id , body) => {
    return async function (dispatch) {
        let res = await useUpdateData(`/api/v1/reviews/${id}` , body)
        dispatch({type : UPDATE_REVIEW_PRODUCT , payload : res , loading : true})
    }
}