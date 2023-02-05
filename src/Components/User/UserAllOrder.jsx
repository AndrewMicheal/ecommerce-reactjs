import React from 'react'
import { Row } from 'react-bootstrap';
import UserAllOrderItem from './UserAllOrderItem';
import UserGetAllOrderHook from './../../hook/user/user-get-all-order-hook';
import Pagination from './../Utility/Pagination';

const UserAllOrder = () => {
  const [userName , allOrders , paginate , onPress] = UserGetAllOrderHook()
console.log(paginate)
  return (
    <React.Fragment>
         <div>
        <div className="admin-content-text pb-4">اهلا : {userName}</div>
        <Row className='justify-content-between'>
          {allOrders.results >= 1 ? allOrders.data.map((order , index) => {
            return (
              <UserAllOrderItem paginate = {paginate} order = {order} key = {index}/>
            )
          }) : <h4>لا يوجد طلبات</h4>}
          <Pagination getPage = {onPress} numberOfPage = {paginate.numberOfPages ? paginate.numberOfPages : 0} />
        </Row>
        </div>
    </React.Fragment>
  )
}

export default UserAllOrder