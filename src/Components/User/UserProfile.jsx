import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import deleteicon from '../../Images/delete.png'
import ProfileHook from './../../hook/user/profile-hook';
import UpdateUserPasswordHook from './../../hook/user/update-user-password-hook';

const UserProfile = () => {
    const [user , show , handleClose , handleEdit , handleEditShow , name , onHandleName , email , onHandleEmail , phone , onHandlePhone] = ProfileHook();
    const [password , handelPassword , passwordConfirm , handelPasswordConfirm , currentPassword , handelCurrentPassword , handleUpdatePassword] = UpdateUserPasswordHook();
  return (
    <React.Fragment>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>تاكيد التعديل</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                 <input
                    value={name}
                    onChange = {onHandleName}
                    type="text"
                    className="input-form d-block mt-1 px-3"
                    placeholder="اسم المستخدم"
                 />
                  <input
                    value={email}
                    onChange = {onHandleEmail}
                    type="email"
                    className="input-form d-block mt-1 px-3"
                    placeholder="الايميل"
                 />
                 <input
                    value={phone}
                    onChange = {onHandlePhone}
                    type="phone"
                    className="input-form d-block mt-1 px-3"
                    placeholder="الهاتف"
                 />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    اغلاق
                </Button>
                <Button variant="primary" onClick={handleEdit}>
                    حفظ التعديل
                </Button>
            </Modal.Footer>
        </Modal>
        <div>
            <div className="admin-content-text">الصفحه الشخصية</div>
            <div className="user-address-card my-3 px-2">
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex">
                        <div className="p-2">الاسم:</div>
                        <div className="p-1 item-delete-edit">{user.name}</div>
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <div className="d-flex mx-2" onClick={handleEditShow}>
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> تعديل</p>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">رقم الهاتف:</div>
                        <div className="p-1 item-delete-edit">{user.phone}</div>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">الايميل:</div>
                        <div className="p-1 item-delete-edit">{user.email}</div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs="10" sm="8" md="6" className="">
                        <div className="admin-content-text">تغير كملة المرور</div>
                        <input
                            value={currentPassword}
                            onChange = {handelCurrentPassword}
                            type="password"
                            className="input-form d-block mt-1 px-3"
                            placeholder="ادخل كلمة المرور القديمة"
                        />
                        <input
                            value={password}
                            onChange = {handelPassword}
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="ادخل كلمة المرور الجديده"
                        />
                         <input
                            value={passwordConfirm}
                            onChange = {handelPasswordConfirm}
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="تاكيد كلمة المرور الجديده"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
                        <button onClick={handleUpdatePassword} className="btn-save d-inline mt-2 ">حفظ كلمة السر</button>
                    </Col>
                </Row>
            </div>
            <ToastContainer />
        </div>
    </React.Fragment>
  )
}

export default UserProfile