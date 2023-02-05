
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { deleteAllCartAction, deleteSpecificCartAction } from './../../redux/actions/cartAction';
import notify from './../useNotification';

const DeleteCartHook = (id) => {
  const dispatch = useDispatch();
  const DeleteAllCartRes = useSelector(state => state.cartReducer.deleteAllCart);
  const [loading , setLoading] = useState(true)
  const [show, setShow] = useState(false);
  const [DeleteSpecificloading, setDeleteSpecificloading] = useState(true);
  const handleClose = () => setShow(false);
  const handleDeleteShow = () => setShow(true);
  const deleteSpecificCartRes = useSelector(state => state.cartReducer.deleteSpecificCard)

  const deleteCart = async () => {
    setLoading(true)
    await dispatch(deleteAllCartAction())
    setLoading(false)
  }

  const deleteSpecificCart = async () => {
    setDeleteSpecificloading(true)
    await dispatch(deleteSpecificCartAction(id))
    setDeleteSpecificloading(false)
  }

  useEffect(() => {
    if(!DeleteSpecificloading) {
      if(deleteSpecificCartRes.status === "success") {
        notify('تم حذف العربة' , 'success')
        setTimeout(() => {
          window.location.reload(false)
        } , 1000)
      } else {
        notify('لم يتم حذف العربة' , 'error')
      }
    }
  } , [DeleteSpecificloading])
  

  useEffect(() => {
    if(!loading) {
        if(DeleteAllCartRes === "") {
            notify('تم مسح العربة' , 'success')
            setTimeout(() => {
                window.location.reload(false)
            } , 1000)
        } else {
            notify('لم يتم حذف العربة' , 'error')
        }
    }
  } , [loading])

  return [deleteCart , show , handleClose , handleDeleteShow , deleteSpecificCart]
}

export default DeleteCartHook