import React from 'react'
import UnopDropdown from "unop-react-dropdown";
import sort from '../../Images/sort.png'

const SearchCountResult = ({title , onClick}) => {
    const handler=()=> {

    }
    const sortProduct = (key) =>  {
        localStorage.setItem("sortType" , key);
        onClick()
    }
  return (
    <React.Fragment>
        <div className="d-flex justify-content-between pt-3 px-2">
            <p className="sub-tile">{title}</p>
            <div className="search-count-text d-flex ">
                <UnopDropdown onAppear={handler} onDisappearStart={handler}
                    trigger={
                       <>
                         <p className="mx-1">
                            <img
                                width="20px"
                                height="20px"
                                className="ms-1"
                                src={sort}
                                alt=""
                            />
                            ترتيب حسب
                        </p>
                       </>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
                    <div className="card-filter">
                        <p onClick={() => sortProduct("")} className="border-bottom card-filter-item">بدون ترتيب</p>
                        <p onClick={() => sortProduct("الاكثر مبيعا")} className="border-bottom card-filter-item">الاكثر مبيعا</p>
                        <p onClick={() => sortProduct("الاعلي تقييما")} className="border-bottom card-filter-item">الاعلي تقييما</p>
                        <p onClick={() => sortProduct("السعر من الاقل للاعلي")} className="border-bottom card-filter-item">
                            السعر من الاقل للاعلي
                        </p>
                        <p onClick={() =>sortProduct("السعر من الاعلي للاقل")} className=" card-filter-item">السعر من الاعلي للاقل</p>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    </React.Fragment>
  )
}

export default SearchCountResult