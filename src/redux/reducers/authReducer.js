import { CREATE_NEW_USER, GET_CURRENT_USER, UPDATE_CURRENT_USER } from "../types";
import { LOGIN_USER, UPDATE__USER_PASSWORD } from './../types';

let inital = {
    createUser : [] ,
    loginUser : [],
    currentUser : [] ,
    updateUser : [] ,
    updateUserPassword : [] ,
    loading : true
}

const authReducer = (state = inital , action) => {

    if(action.type === CREATE_NEW_USER) {
        return {...state , createUser : action.payload , loading : false}
    } else if(action.type === LOGIN_USER) {
        return {...state , loginUser : action.payload , loading : false}
    } else if(action.type === GET_CURRENT_USER) {
        return {...state , currentUser : action.payload , loading : false}
    } else if(action.type === UPDATE_CURRENT_USER) {
        return {...state , updateUser : action.payload , loading : false}
    } else if(action.type === UPDATE__USER_PASSWORD) {
        return {...state , updateUserPassword : action.payload , loading : false}
    }
    return state;
}

export default authReducer