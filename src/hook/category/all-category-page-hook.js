import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCat, getAllCatPage } from "../../redux/actions/categoryAction";

const AllCategoryHook = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.allCategory.category)
  const loading = useSelector(state => state.allCategory.loading);
  const numberOfPage = categories.paginationResult;

  const getPage = (pageNumber) => {
    dispatch(getAllCatPage(3 , pageNumber));
  }


  useEffect(() => {
    dispatch(getAllCat(3))
  },[])

  return [categories , loading , numberOfPage , getPage]
}

export default AllCategoryHook