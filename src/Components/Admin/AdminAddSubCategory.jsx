import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import AddSubCategoryHook from './../../hook/subcategory/addsubcategory-hook';


const AdminAddSubCategory = () => {
    const [categories , subCategories , subCategoryNameRef , subCategoryItemsNameRef , getSubCategoryName , handleChange , handleSubmit] = AddSubCategoryHook();
    console.log(subCategories)
  return (
    <React.Fragment>
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
                <Col sm="8">
                    <input
                        onKeyUp= {getSubCategoryName}
                        name = 'name'
                        type="text"
                        ref = {subCategoryNameRef}
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف الفرعي"
                    />
                    <select ref = {subCategoryItemsNameRef} name="category" id="cat" className="select mt-3 px-2 " onChange={handleChange}>
                        <option name = 'reset' value="0">اختار تصنيف فرعى</option>
                        {categories.data ? (categories.data.map((cat , index) => {
                            return (
                                <option key = {index} value={cat._id}>{cat.name}</option>
                            )
                        }) ) : null}
                        <option value="val2">التصنيف الثاني</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    </React.Fragment>
  )
}

export default AdminAddSubCategory