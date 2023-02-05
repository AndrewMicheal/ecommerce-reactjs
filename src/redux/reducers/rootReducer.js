import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { brandReducer } from './brandReducer';
import { subCategoryReducer } from "./subCategoryReducer";
import { productReducer } from './productReducer';
import authReducer from './authReducer';
import { reviewReducer } from './reviewReducer';
import { wishlistReducer } from './wishlistReducer';
import couponReducer from './couponReducer';
import userAddressReducer from './userAddressReducer';
import { cartReducer } from './cartReducer';
import { checkoutReducer } from './checkoutReducer';
import orderReducer from './orderReducer';

export const rootReducer = combineReducers({
    allCategory: categoryReducer ,
    allBrands: brandReducer,
    subCate : subCategoryReducer ,
    allProducts : productReducer,
    authReducer: authReducer,
    reviewReducer : reviewReducer ,
    wishlistReducer : wishlistReducer,
    couponReducer : couponReducer ,
    userAddressReducer : userAddressReducer , 
    cartReducer : cartReducer,
    checkoutReducer : checkoutReducer ,
    orderReducer : orderReducer
})

