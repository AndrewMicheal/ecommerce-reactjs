import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import LoginHook from './../../../hook/auth/login-hook';

const LoginPage = () => {
    const [email , password , loading , onChangeEmail , onChangePassword , onSubmit] = LoginHook()
  return (
    <React.Fragment>
        <Container style={{ minHeight: "680px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login">تسجيل الدخول</label>
                        <input value = {email} onChange = {onChangeEmail} placeholder="الايميل..." type="text" className="user-input my-3 text-center mx-auto"/>
                        <input value = {password} onChange = {onChangePassword} placeholder="كلمه السر..." type="password" className="user-input text-center mx-auto"/>
                        <button onClick={onSubmit} className="btn-login mx-auto mt-4">تسجيل الدخول</button>
                        <label className="mx-auto my-4">
                            ليس لديك حساب ؟{" "}
                            <Link to="/register" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                    اضغط هنا
                                </span>
                            </Link>
                        </label>
                    </Col>
                    <label className="mx-auto my-4">
                    <Link to="/admin/allproducts" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" , fontFamily: 'Cairo' , width : "100px" , display : "inline-block"}} className="text-danger">
                             دخول الادمن
                        </span>
                    </Link>

                    <Link to="/user/allorders" style={{textDecoration:'none' , display : "inline-block" , padding: "10px" , fontFamily: 'Cairo' }}>
                        <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                            الدخول مستخدم
                        </span>
                    </Link>
                </label>
                </Row>
                <ToastContainer />
            </Container>
    </React.Fragment>
  )
}

export default LoginPage