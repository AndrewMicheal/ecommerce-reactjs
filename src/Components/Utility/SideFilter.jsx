import React from 'react'
import { Row } from 'react-bootstrap'
import SidebarSearchHook from '../../hook/search/sidebar-search-hook'

const SideFilter = () => {
    const  [allCategories , allBrands , getCategoryItem , getBrandItem , priceFrom , priceTo] = SidebarSearchHook();
  return (
    <React.Fragment>
        <div className="mt-3">
            <Row>
                <div className="d-flex flex-column mt-2">
                    <div className="filter-title">الفئة</div>
                    <div className="d-flex mt-3">
                    <input onChange={getCategoryItem} type="checkbox" value="0" />
                    <div className="filter-sub me-2 ">الكل</div>
                    </div>
                   {allCategories ? allCategories.map((allCategory , index) => {
                    return (
                        <div className="d-flex mt-3" key = {index}>
                            <input onChange={getCategoryItem} type="checkbox" value= {allCategory._id}/>
                            <div className="filter-sub me-2">{allCategory.name}</div>
                        </div>
                    )
                   }) : <h6>لايوجد تصنيفات</h6>}
                </div>
        
                <div className="d-flex flex-column mt-2">
                    <div className="filter-title mt-3">الماركة</div>
                    <div className="d-flex mt-3">
                    <input type="checkbox" value="" />
                    <div onChange={getBrandItem} className="filter-sub me-2 ">الكل</div>
                    </div>
                    {allBrands ? allBrands.map((allBrand , index) => {
                    return (
                        <div className="d-flex mt-3" key = {index}>
                            <input onChange={getBrandItem} type="checkbox" value= {allBrand._id}/>
                            <div className="filter-sub me-2">{allBrand.name}</div>
                        </div>
                    )
                   }) : <h6>لايوجد ماركات</h6>}
                </div>
        
                <div className="filter-title my-3">السعر</div>
                <div className="d-flex">
                    <p className="filter-sub my-2">من:</p>
                    <input 
                    onChange={priceFrom}
                    className="m-2 text-center"
                    type="number"
                    style={{ width: "50px", height: "25px" }}
                    />
                </div>
                <div className="d-flex">
                    <p className="filter-sub my-2">الي:</p>
                    <input onChange={priceTo}
                    className="m-2 text-center"
                    type="number"
                    style={{ width: "50px", height: "25px" }}
                    />
                </div>
            </Row>
      </div>
    </React.Fragment>
  )
}

export default SideFilter