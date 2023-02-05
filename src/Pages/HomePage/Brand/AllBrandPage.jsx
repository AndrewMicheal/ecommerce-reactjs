import React from 'react'
import Pagination from './../../../Components/Utility/Pagination';
import BrandContainer from './../../../Components/Brand/BrandContainer';
import AllBrandHook from '../../../hook/brand/all-brand-page-hook';

const AllBrandPage = () => {
  const [brands , loading , numberOfPage , getPage] = AllBrandHook();

  return (
    <React.Fragment>
    <div style={{minHeight : '670px'}}>
        <BrandContainer brands = {brands} loading = {loading}/>
        {brands.data ? numberOfPage.numberOfPages > 1 ? <Pagination getPage = {getPage} numberOfPage = {numberOfPage.numberOfPages}/> : null : null}

    </div>
    </React.Fragment>
  )
}

export default AllBrandPage