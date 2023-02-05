import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import RegisterHook from './../../../hook/auth/register-hook';

const RegisterPage = () => {
  const [name , email , password , passwordConfirm , phone , loading , onChangeName , onChangeEmail , onChangePassword , onChangeConfirmPassword , onChangePhone , onSubmit] = RegisterHook()
  return (
    <React.Fragment>
        <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">تسجيل حساب جديد</label>
            <input value={name} onChange = {onChangeName} placeholder = "اسم المستخدم..." type="text" className="user-input mt-3 text-center mx-auto"/>
            <input  value={email} onChange = {onChangeEmail} placeholder = "الايميل..." type="text" className="user-input my-3 text-center mx-auto"/>
            <input  value={phone} onChange = {onChangePhone} placeholder = "الهاتف..." type="text" className="user-input  text-center mx-auto"/>

            <input  value={password} onChange = {onChangePassword} placeholder = "كلمه السر..." type="password" className="user-input text-center mt-3 mx-auto"/>
            <input value={passwordConfirm} onChange = {onChangeConfirmPassword} placeholder = " تاكيد كلمه السر..." type="password" className="user-input text-center mt-3 mx-auto"/>
            <button onClick={onSubmit} className="btn-login mx-auto mt-4">تسجيل الحساب</button>
            <label className="mx-auto my-4">
              لديك حساب بالفعل؟{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  اضغط هنا
                </span>
              </Link>
            </label>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </React.Fragment>
  )
}

export default RegisterPage