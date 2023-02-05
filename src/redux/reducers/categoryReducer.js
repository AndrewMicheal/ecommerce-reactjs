import { CREATECATEGORY, GETALLCATEGORIES, GET_CATEGORY} from "../types"

const inital = {
    category : [] ,
    getOneCategory : [] ,
    loading : true
}
export function categoryReducer (state = inital , action) {
    switch(action.type) {
        case GETALLCATEGORIES :
            return {...state , category: action.payload , loading: false}
        case CREATECATEGORY:
            return {category: action.payload , loading:false}
        case GET_CATEGORY:
            return {getOneCategory: action.payload , loading:false}
        default:
            return state
    }
}

