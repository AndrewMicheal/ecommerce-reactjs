
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAddress } from '../../redux/actions/userAddressAction';
import { useEffect } from 'react';
import notify from '../useNotification';
import { useSelector } from 'react-redux';

const DeleteAddressHook = (address) => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleDeleteShow = () => setShow(true);
    const deleteAddressRes = useSelector(state => state.userAddressReducer.deleteAddress)

    const handleDelete = async () => {
        setLoading(true)
        await dispatch(deleteAddress(address._id))
        setLoading(false)
        handleClose();
    }

    useEffect(() => {
        if(!loading) {
            if(deleteAddressRes.status === "success") {
                notify('تم حذف العنوان بنجاح' , 'success')
                setTimeout(() => {
                    window.location.reload(false);
                } , 1000)
            }
        }
    } , [loading])

    return [show , handleClose , handleDeleteShow , handleDelete]
}

export default DeleteAddressHook