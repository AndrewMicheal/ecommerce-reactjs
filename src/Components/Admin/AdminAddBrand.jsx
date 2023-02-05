import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap';
import AddBrandHook from '../../hook/brand/addbrand-hook';

const AdminAddBrand = () => {
    const [img , loading , isPress , handleSubmit , onImageChange , getBrandName , brandNameRef] =  AddBrandHook();

  return (
    <React.Fragment>
         <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضف ماركه جديده</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره الماركه</div>
                    <div>
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
                    </div>
                    <input
                        type="text"
                        ref = {brandNameRef}
                        name='brandName'
                        onKeyUp={getBrandName}
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم الماركه"
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
    </React.Fragment>
  )
}

export default AdminAddBrand