import React from 'react'
import { Row, Col, Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import AddCategoryHook from './../../hook/category/addcategory-hook';



const AdminAddCategory = () => {
    const [img  , loading , isPress , handleSubmit , onImageChange , getCategoryName , catgoryNameRef] =  AddCategoryHook();
  return (
    <React.Fragment>
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره التصنيف</div>
                        <label htmlFor = "upload-photo">
                            <img src={img} alt="" height="100px" width="120px" style={{cursor:'pointer'}} />
                        </label>
                        <input
                            type="file"
                            name='photo'
                            onChange={onImageChange}
                            className="input-form d-block mt-3 px-3"
                            placeholder="اسم التصنيف"
                            id='upload-photo'
                        />
                    <input
                        type="text"
                        ref = {catgoryNameRef}
                        name='categoryName'
                        onKeyUp={getCategoryName}
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            {isPress ? loading ? <Spinner animation='border' variant='primary' /> : <h4>تم الانتهاء</h4> : null}
        </div>
        <ToastContainer />

    </React.Fragment>
  )
}

export default AdminAddCategory