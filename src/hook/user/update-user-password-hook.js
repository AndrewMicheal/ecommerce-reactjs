import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import notify from './../useNotification';
import { updateUserPassword } from './../../redux/actions/authAction';

const UpdateUserPasswordHook = () => {
  const [currentPassword , setCurrentPassword] = useState('')
  const [password , setPassword] = useState('')
  const [passwordConfirm , setPasswordConfirm] = useState('')
  const [loading , setLoading] = useState('');
  const dispatch = useDispatch();
  const updatePasswordRes = useSelector(state => state.authReducer.updateUserPassword)

  const handelCurrentPassword = (e) => {
    e.persist();
    setCurrentPassword(e.target.value)
  }

  const handelPassword = (e) => {
    e.persist();
    setPassword(e.target.value)
  }

  const handelPasswordConfirm = (e) => {
    e.persist();
    setPasswordConfirm(e.target.value)
  }

  const handleUpdatePassword = async () => {
    if(password === '' || passwordConfirm === '' || currentPassword === '') {
        notify('من فضلك ادخل جميع البيانات' , 'error')
        return
    }
    if(password !== passwordConfirm) {
        notify('تاكيد كلمة المرور لا تطابق كلمة المرور' , 'error')
        return
    }
    setLoading(true)
    await dispatch(updateUserPassword({
        currentPassword: currentPassword,
        password: password,
        passwordConfirm:passwordConfirm
    }))
    setLoading(false)
  }

  useEffect(() => {
    if(!loading) {
        if(updatePasswordRes.data) {
            notify('تم التعديل كلمة المرور' , 'success')
        } else if(updatePasswordRes.response) {
            notify('لم يتم التعديل كلمة المرور' , 'error')
        }
    }
  } , [loading])

  return [password , handelPassword , passwordConfirm , handelPasswordConfirm , currentPassword , handelCurrentPassword , handleUpdatePassword]
}

export default UpdateUserPasswordHook