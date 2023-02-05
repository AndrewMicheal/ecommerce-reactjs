import React from 'react'
import CategoryContainer from '../../../Components/Category/CategoryContainer'
import Pagination from '../../../Components/Utility/Pagination'
import AllCategoryHook from './../../../hook/category/all-category-page-hook';


const AllCategoryPage = () => {
  const [categories , loading , numberOfPage , getPage] = AllCategoryHook();
  
  return (
   <React.Fragment>
    <div style={{minHeight : '670px'}}>
        <CategoryContainer categories = {categories} loading = {loading} />
       {categories.data ? numberOfPage.numberOfPages > 1 ? <Pagination getPage = {getPage} numberOfPage = {numberOfPage.numberOfPages}/> : null : null}
    </div>
   </React.Fragment>
  )
}

export default AllCategoryPage