
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { changeOrderDeliverAction, changeOrderPayAction } from './../../redux/actions/orderAction';
import notify from './../useNotification';

const ChangeOrderHook = (id) => {
 const disptach = useDispatch();
 const changeOrderRes = useSelector(state => state.orderReducer.changeOrder)
 const [loading , setLoading] = useState(true)
 const [loadingDeliver , setLoadingDeliver] = useState(true)
 const [pay , setPay] = useState('')
 const [deliver , setDeliver] = useState('')
 const changeOrderDeliverRes = useSelector(state => state.orderReducer.changeOrderDeliver)


 const changeOrderPay = async () => {
  if(pay === 'true') {
    setLoading(true)
    await disptach(changeOrderPayAction(id))
    setLoading(false)
  }
 }

 const changeOrderDeliver = async () => {
    if(deliver === 'true') {
      setLoadingDeliver(true)
      await disptach(changeOrderDeliverAction(id))
      setLoadingDeliver(false)
    }
   }

 const onChangePaid = (e) => {
    setPay(e.target.value)
}

const onChangeDeliver = (e) => {
    setDeliver(e.target.value)
}

 useEffect(() => {

    if(!loading) {
        if(changeOrderRes.status === "Success") {
            notify('تم تغير الحالة بنجاح' , 'success')
        } else {
            notify('هناك مشكلة فى عملية التغيير', 'error')

        }
    }
 } , [loading])

 useEffect(() => {
    console.log(changeOrderDeliverRes)

    if(!loadingDeliver) {
        if(changeOrderDeliverRes.status === "Success") {
            notify('تم تغير الحالة بنجاح' , 'success')
        } else {
            notify('هناك مشكلة فى عملية التغيير', 'error')

        }
    }
 } , [loadingDeliver])

 return [changeOrderPay , onChangePaid , onChangeDeliver , changeOrderDeliver]
}

export default ChangeOrderHook