import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from './../../redux/actions/brandAction';

const HomeBrandHook = () => {
    const dispatch = useDispatch();
    const brands = useSelector(state => state.allBrands.brands)
    const loading = useSelector(state => state.allBrands.loading);
    let brandsItems;

    useEffect(() => {
      dispatch(getAllBrand())
    },[])

    try {
      if(brands) {
        brandsItems = brands;
      } else {
        brandsItems = []
      }
    } catch (error) {
      brandsItems = []
    }

    return [brandsItems , loading]
}

export default HomeBrandHook