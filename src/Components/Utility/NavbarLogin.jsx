import React from 'react'
import { Container, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../../Images/logo.png';
import login from '../../Images/login.png';
import cart from '../../Images/cart.png';
import { useNavigate } from 'react-router-dom';
import NavbarSearchHook from '../../hook/search/navbar-search-hook';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLoogedUser } from './../../redux/actions/authAction';
import GetAllUserCartHook from './../../hook/cart/get-all-user-cart-hook';

const NavbarLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchWord ,getSearchInput] = NavbarSearchHook()
    const [user , setUser] = useState('')
    const [getAllUserCart] = GetAllUserCartHook()


    const logOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser('')
        window.location.reload(false);
    }
    useEffect(() => {
        if(localStorage.getItem("user") !== null) {
            setUser(JSON.parse(localStorage.getItem("user")));
        }
    } , [])
    const goToControlProduct = () => {
        navigate('/admin/allproducts')
    }

    const goToUserPage = () => {
        navigate('/user/profile')
    }


  return (
    <React.Fragment>
         <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand onClick={() => navigate('/')}>
                    <img src={logo} className='logo' alt = "logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        value={searchWord}
                        name = "searchWord"
                        onChange={getSearchInput}
                        type="search"
                        placeholder="ابحث..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">
                        {user !== ''? (
                            <>
                                <NavDropdown title={`${user.name}`} id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        {user.role === 'admin' ? <div onClick={goToControlProduct}>لوحة التحكم</div>: <div onClick={goToUserPage}> الصفحة الشخصية</div>}
                                       
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logOut}>تسجيل الخروج</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link  onClick={() => navigate("/cart")}
                            className="nav-text d-flex mt-3 justify-content-center"
                            style={{ color: "white" }}>
                            <img src={cart} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>العربه</p>
                        </Nav.Link>
                            </>
                        ) : ( <>
                        <Nav.Link onClick={() => navigate("/login")}
                            className="nav-text d-flex mt-3 justify-content-center">
                            <img src={login} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>دخول</p>
                        </Nav.Link>
                        <Nav.Link  onClick={() => navigate("/cart")}
                            className="nav-text  d-flex mt-3 justify-content-center"
                            style={{ color: "white" }}>
                            <img src={cart} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>العربه</p>
                        </Nav.Link>

                        </>)}
                        <div className='position-relative myPositon'>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {user === '' || getAllUserCart.numOfCartItems === undefined ? 0 : getAllUserCart.numOfCartItems}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </React.Fragment>
  )
}

export default NavbarLogin