import { CREATE_USER_ADDRESS, GET_ALL_USER_ADDRESS, DELETE_ADDRESS, UPDATE_ADDRESS, GET_SPECFIC_ADDRESS } from './../types';

let inital = {
    createUserAddress : [] ,
    allUserAddress : [],
    deleteAddress : [] ,
    updateAddress : [] ,
    specificAddress : [],
    loading : true
}

const userAddressReducer = (state = inital , action) => {
    if(action.type === CREATE_USER_ADDRESS) {
        return {...state , createUserAddress : action.payload , loading : false}
    } else if(action.type === GET_ALL_USER_ADDRESS) {
        return {...state , allUserAddress : action.payload , loading : false}
    } else if(action.type === DELETE_ADDRESS) {
        return {...state , deleteAddress : action.payload , loading : false}
    } else if(action.type === UPDATE_ADDRESS) {
        return {...state , updateAddress : action.payload , loading : false}
    } else if(action.type === GET_SPECFIC_ADDRESS) {
        return {...state , specificAddress : action.payload , loading : false}
    } 
    return state;
}

export default userAddressReducer