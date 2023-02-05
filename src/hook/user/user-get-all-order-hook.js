
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrderAction } from './../../redux/actions/orderAction';

const UserGetAllOrderHook = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const [loading , setLoading] = useState(true)
  const [allOrders , setAllOrders] = useState([])
  const [paginate , setPaginate] = useState([])
  const dispatch = useDispatch();

  const getAllOrderRes = useSelector(state => state.orderReducer.getAllOrder)

  let userName = ''
  if(user !== null) {
    userName = user.name;
  }

  const getAllOrder = async () => {
    setLoading(true)
    await dispatch(getAllOrderAction('' , 5))
    setLoading(false)
  }

  useEffect(() => {
    getAllOrder()
  } , [])

  useEffect(() => {
    if(!loading) {
        if(getAllOrderRes.data.length >=1 || getAllOrderRes) {
            setAllOrders(getAllOrderRes)
            setPaginate(getAllOrderRes.paginationResult)
        }
    }
  } , [loading])

  const onPress = async (page) => {
    setLoading(true)
    await dispatch(getAllOrderAction(page , 5))
    setLoading(false)
  }

  return [userName , allOrders , paginate , onPress]
}

export default UserGetAllOrderHook