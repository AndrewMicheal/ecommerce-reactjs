import React from 'react'
import DiscountSection from '../../Components/Home/DiscountSection';
import Slider from '../../Components/Home/Slider'
import HomeCategory from './../../Components/Home/HomeCategory';
import CartProductContainer from './../../Components/Product/CartProductContainer';
import BrandFeautre from './../../Components/Brand/BrandFeautre';
import ViewHomeProductsHook from './../../hook/products/view-home-products-hook';

const HomePage = () => {
  const [items] = ViewHomeProductsHook();
  return (
    <React.Fragment>
        <div className='font' style={{minHeight : "670px"}}>
            <Slider />
            <HomeCategory />
            <CartProductContainer products = {items} title = "الاكثر مبيعا" btnTitle = "المزيد" pathText={"/products"}/>
            <DiscountSection />
            <CartProductContainer products = {items} title = "احدث الازياء" btnTitle = "المزيد" pathText={"/products"}/>
            <BrandFeautre title = "اشهر الماركات" btnTitle = "المزيد"/>
        </div>
    </React.Fragment>
  )
}

export default HomePage