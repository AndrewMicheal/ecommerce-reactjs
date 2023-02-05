import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllOrderItem from './AdminAllOrderItem';
import UserGetAllOrderHook from './../../hook/user/user-get-all-order-hook';
import Pagination from './../Utility/Pagination';

const AdminAllOrders = () => {
  const [userName , allOrders , paginate , onPress] = UserGetAllOrderHook()
  return (
    <React.Fragment>
        <div className='admin-content-text'>ادارة جميع الطلبات </div>
        <Row className='justify-content-start'>
        {allOrders.results >= 1 ? allOrders.data.map((order , index) => {
            return (
              <AdminAllOrderItem paginate = {paginate} order = {order} key = {index}/>
            )
          }) : <h4>لا يوجد طلبات</h4>}
           <Pagination  getPage = {onPress} numberOfPage = {paginate.numberOfPages ? paginate.numberOfPages : null} />
        </Row>
    </React.Fragment>
  )
}

export default AdminAllOrders