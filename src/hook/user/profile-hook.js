
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { updateLoogedUser } from '../../redux/actions/authAction';
import notify from './../useNotification';

const ProfileHook = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const getUpdateUserRes = useSelector(state => state.authReducer.updateUser);

    const handleClose = () => setShow(false);
    const handleEditShow = () => setShow(true);
    const dispatch = useDispatch();
    let user = []
    if(localStorage.getItem("user") !== null) {
        user = JSON.parse(localStorage.getItem("user"))
    } else {
        user = []
    }
    const [name, setName] = useState(user.name);
    const [phone, setPhone] = useState(user.phone);
    const [email, setEmail] = useState(user.email);

    const handleEdit = async () => {
        let body
        if (user.email === email) {
            body = {
                name,
                phone
            }
        } else {
            body = {
                name,
                email,
                phone
            }
        }
        setLoading(true)
        await dispatch(updateLoogedUser(body))
        handleClose()
        setLoading(false)
    }

    const onHandleName = (e) => {
        e.persist();
        setName(e.target.value)
    }

    const onHandleEmail = (e) => {
        e.persist();
        setEmail(e.target.value)
    }

    const onHandlePhone = (e) => {
        e.persist();
        setPhone(e.target.value)
    }

    useEffect(() => {
        if(!loading) {
            if(getUpdateUserRes.status === 'success') {
                notify('تم التعديل بنجاح' , 'success')
                localStorage.setItem("user" , JSON.stringify(getUpdateUserRes.data.user))
                setTimeout(() => {
                    window.location.reload(false)
                } , 1000)
            }
        }
    } , [loading])

    return [user , show , handleClose , handleEdit , handleEditShow , name , onHandleName , email , onHandleEmail , phone , onHandlePhone]
}

export default ProfileHook