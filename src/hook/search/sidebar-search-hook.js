import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/actions/brandAction";
import { getAllCat } from "../../redux/actions/categoryAction";
import ViewSearchProductsHook from './../products/search-product-hook';

const SidebarSearchHook = () => {
    const [items , pagination , onPress , getProduct] = ViewSearchProductsHook();
    const dispatch = useDispatch();
    const categories = useSelector(state => state.allCategory.category)
    const brands = useSelector(state => state.allBrands.brands)
    const [catChecked , setCatChecked] = useState([])
    const [brandChecked , setBrandChecked] = useState([])
    const [from , setPriceFrom] = useState(0)
    const [to , setPriceTo] = useState(0)
    useEffect(() => {
        dispatch(getAllCat())
        dispatch(getAllBrand())
      },[])

      const getCategoryItem = (e) => {
        let categoryValue = e.target.value;
        if(categoryValue === "0") {
            setCatChecked([])
        } else {
            if(e.target.checked) {
                setCatChecked([...catChecked , categoryValue])
            } else if(!e.target.checked) {
                const newArr = catChecked.filter(e => e!== categoryValue);
                setCatChecked(newArr);
            }
        }
      }

      const getBrandItem = (e) => {
        let brandValue = e.target.value;
        if(brandValue === "0") {
            setBrandChecked([])
        } else {
            if(e.target.checked) {
                setBrandChecked([...brandChecked , brandValue])
            } else if(!e.target.checked) {
                const newArr = brandChecked.filter(e => e!== brandValue);
                setBrandChecked(newArr);
            }
        }
      }

      let allCategories = [];
      let allBrands = [];
      let queryCate;
      let queryBrand;
      

      useEffect(() => {
        queryCate = catChecked.map(val => "category[in][]="+val).join("&");
        localStorage.setItem("queryCate" , queryCate)
        setTimeout(() => {
            getProduct()
          } , 1000)
      } , [catChecked])

      useEffect(() => {
        queryBrand = brandChecked.map(val => "brand[in][]="+val).join("&");
        localStorage.setItem("queryBrand" , queryBrand)
        setTimeout(() => {
            getProduct()
          } , 1000)
      } , [brandChecked])
      
      try {
        if(categories) {
            allCategories = categories.data
        }
        if(brands) {
            allBrands = brands.data;

        }
      } catch (error) {
        allCategories = [];
        allBrands = []  
      }
      const priceFrom = (e) => {
        localStorage.setItem("priceFrom" , e.target.value)
        setPriceFrom(e.target.value)
      }
      const priceTo = (e) => {
        localStorage.setItem("priceTo" , e.target.value)
        setPriceTo(e.target.value)

      }
      useEffect(() => {
        setTimeout(() => {
            getProduct()
          } , 1000)
      },[from , to])
      return [allCategories , allBrands , getCategoryItem , getBrandItem , priceFrom , priceTo]
}

export default SidebarSearchHook