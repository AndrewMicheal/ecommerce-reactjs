import React from 'react'
import { Col, Row } from 'react-bootstrap'
import EditAddressHook from './../../hook/user/edit-address-hook';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const UserEditAddress = () => {
    const {id} = useParams();
    const [alias , details , phone , onChangeAlias , onChangeDetails, onChangePhone , handleSubmit] = EditAddressHook(id)
  return (
    <React.Fragment>
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-2">تعديل العنوان </div>
                <Col sm="8">
                    <input
                        value={alias}
                        onChange = {onChangeAlias}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="تسمية العنوان مثلا(المنزل - العمل)"
                    />
                    <textarea
                        value={details}
                        onChange = {onChangeDetails}
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        
                        placeholder="العنوان بالتفصيل"
                    />
                    <input
                        type="text"
                        value={phone}
                        onChange = {onChangePhone}
                        className="input-form d-block mt-3 px-3"
                        placeholder="رقم الهاتف"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ تعديل العنوان</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    </React.Fragment>
  )
}

export default UserEditAddress