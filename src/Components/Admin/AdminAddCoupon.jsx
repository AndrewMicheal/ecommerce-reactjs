import React , { useRef } from 'react'
import { Row, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import AddCouponHook from './../../hook/coupon/add-coupon-hook';
import AdminCouonCard from './AdminCouonCard';


const AdminAddCoupon = () => {
    const dateRef = useRef();
    const [couponName , couponDate , couponValue , onChangeName , onChangeDate , onChangeValue , handleSubmit , allCoupons] = AddCouponHook();
  return (
   <React.Fragment>
         <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضف كوبون جديده</div>
                <Col sm="8">
                    <input
                        value={couponName}
                        onChange = {onChangeName}
                        type="text"
                        name='brandName'
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم الكوبون"
                    />
                    <input
                        ref={dateRef}
                        type="text"
                        name='brandName'
                        className="input-form d-block mt-3 px-3"
                        placeholder="تاريخ الانتهاء"
                        onChange={onChangeDate}
                        value = {couponDate}
                        onFocus={() => dateRef.current.type = "date"}
                        onBlur = {() => dateRef.current.type = "text"}
                    />
                    <input
                        value={couponValue}
                        onChange = {onChangeValue}
                        type="number"
                        name='brandName'
                        className="input-form d-block mt-3 px-3"
                        placeholder="نسبة خصم الكوبون"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ الكوبون</button>
                </Col>
            </Row>
           <Row>
            <Col sm = "8">
                {allCoupons.data ? allCoupons.data.length >=1 ? allCoupons.data.map((coupon , index) =>  <AdminCouonCard coupon = {coupon} key = {index} />) : <h4>لا يوجد كوبونات</h4> : null}
            </Col>
           </Row>
            <ToastContainer />
   </React.Fragment>
  )
}

export default AdminAddCoupon