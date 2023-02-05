import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import NavbarLogin from './Components/Utility/NavbarLogin';
import Footer from './Components/Utility/Footer';
import LoginPage from './Pages/HomePage/Auth/LoginPage';
import RegisterPage from './Pages/HomePage/Auth/RegisterPage';
import AllCategoryPage from './Pages/HomePage/Category/AllCategoryPage';
import AllBrandPaeg from './Pages/HomePage/Brand/AllBrandPage';
import ShopProductsPage from './Pages/HomePage/Products/ShopProductsPage';
import ProductDetailsPage from './Pages/HomePage/Products/ProductDetailsPage';
import CartPage from './Pages/HomePage/Cart/CartPage';
import ChossepayMethodPage from './Pages/HomePage/Checkout/ChossepayMethodPage';
import AdminAllProductPage from './Pages/HomePage/Admin/AdminAllProductPage';
import AdminAllOrderspage from './Pages/HomePage/Admin/AdminAllOrderspage';
import AdminOrderDetailPage from "./Pages/HomePage/Admin/AdminOrderDetailPage";
import AdminAddBrandPage from './Pages/HomePage/Admin/AdminAddBrandPage';
import AdminAddCategoryPage from './Pages/HomePage/Admin/AdminAddCategoryPage';
import AdminAddSubCategoryPage from './Pages/HomePage/Admin/AdminAddSubCategoryPage';
import AdminAddProductPage from './Pages/HomePage/Admin/AdminAddProductPage';
import UserAllOrdersPage from './Pages/HomePage/User/UserAllOrdersPage';
import UserFavoriteProductsPage from './Pages/HomePage/User/UserFavoriteProductsPage';
import UserAllAddressesPage from './Pages/HomePage/User/UserAllAddressesPage';
import UserAddAddressPage from './Pages/HomePage/User/UserAddAddressPage';
import UserEditAddressPage from "./Pages/HomePage/User/UserEditAddressPage";
import UserProfilePage from "./Pages/HomePage/User/UserProfilePage";
import AdminUpdateProductPage from './Pages/HomePage/Admin/AdminUpdateProductPage';
import AdminAddCouponPage from './Pages/HomePage/Admin/AdminAddCouponPage';
import AdminEditCouponPage from './Pages/HomePage/Admin/AdminEditCouponPage';
import ProtectedRouteHook from './hook/auth/protected-route-hook';
import ProtectedRoute from './Components/Utility/protectedRoute';
import ProductByCategory from './Pages/HomePage/Products/ProductByCategory';

function App() {

  const [isUser , isAdmin , userData] = ProtectedRouteHook()
  
  return (
    <>
    <NavbarLogin />
    <Routes>
      <Route path = "/" element={<HomePage />}/>
      <Route path = "/login" element={<LoginPage />}/>
      <Route path = "/register" element={<RegisterPage />}/>
      <Route path = "/allCategory" element={<AllCategoryPage />}/>
      <Route path = "/allBrand" element={<AllBrandPaeg />}/>
      <Route path = "/products" element={<ShopProductsPage />}/>
      <Route path = "/products/:id" element={<ProductDetailsPage />}/>
      <Route path = "/cart" element={<CartPage />}/>
      

    

      <Route element={<ProtectedRoute auth={isAdmin}/>}>
        <Route path = "/admin/allproducts" element={<AdminAllProductPage />}/>
        <Route path = "/admin/allorders" element={<AdminAllOrderspage /> }/>
        <Route path = "/admin/orders/:id" element={<AdminOrderDetailPage />}/>
        <Route path = "/admin/addbrand" element={<AdminAddBrandPage />}/>
        <Route path = "/admin/addcategory" element={<AdminAddCategoryPage />}/>
        <Route path = "/admin/addsubcategory" element={<AdminAddSubCategoryPage />}/>
        <Route path = "/admin/addproduct" element={<AdminAddProductPage />}/>
        <Route path = "/admin/addcoupon" element={<AdminAddCouponPage />}/>
        <Route path = "/admin/editcoupon/:id" element={<AdminEditCouponPage />}/>
        <Route path = "/admin/editproduct/:id" element={<AdminUpdateProductPage />} />  
      </Route>

      <Route element={<ProtectedRoute auth={isUser}/>}>
        <Route path = "/user/allorders" element={<UserAllOrdersPage />}/>
        <Route path = "/order/paymethoud" element={<ChossepayMethodPage /> }/>
        <Route path = "/user/favoriteproducts" element={<UserFavoriteProductsPage/>}/>
        <Route path = "/user/addresses" element={<UserAllAddressesPage/>}/>
        <Route path = "/user/add-address" element={<UserAddAddressPage/>}/>
        <Route path = "/user/edit-address/:id" element={<UserEditAddressPage/>}/>
        <Route path="/user/profile" element={<UserProfilePage />} />
      </Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
