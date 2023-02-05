import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserAddressCard from './UserAddressCard';
import ViewAddressesHook from './../../hook/user/view-addresses-hook';

const UserAllAddress = () => {
    const [allAddresses] = ViewAddressesHook();
  return (
    <React.Fragment>
        <div>
            <div className="admin-content-text pb-4">دفتر العنوانين</div>
            {allAddresses.length >= 1 ? allAddresses.map((item , index) => <UserAddressCard address = {item} key = {index}/>) : null}

            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address">اضافه عنوان جديد</button>
                    </Link>
                </Col>
            </Row>
        </div>
    </React.Fragment>
  )
}

export default UserAllAddress