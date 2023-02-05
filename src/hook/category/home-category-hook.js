import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCat } from "../../redux/actions/categoryAction";

const HomeCategoryHook = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading);
  
    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
    
    useEffect(() => {
      dispatch(getAllCat())
    },[])

    let categoryItems;
    try {
      if(categories) {
        categoryItems = categories;
      } else {
        categoryItems = []
      }
    } catch (error) {
      categoryItems = []
    }

    return [categoryItems , loading , colors]
}

export default HomeCategoryHook