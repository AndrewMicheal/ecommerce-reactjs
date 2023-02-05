import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand, getAllBrandPage } from "../../redux/actions/brandAction";


const AllBrandHook = () => {
  const dispatch = useDispatch();
  const brands = useSelector(state => state.allBrands.brands)
  const loading = useSelector(state => state.allBrands.loading);
  const numberOfPage = brands.paginationResult;

  const getPage = (pageNumber) => {
    dispatch(getAllBrandPage(3 , pageNumber));
  }


  useEffect(() => {
    dispatch(getAllBrand(3))
  },[])

  return [brands , loading , numberOfPage , getPage]
}

export default AllBrandHook