import { useState, useEffect } from 'react';
import notify from './../useNotification';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const RegisterHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const res = useSelector(state => state.authReducer.createUser);
    const [name , setName] = useState("") 
    const [email , setEmail] = useState("") 
    const [password , setPassword] = useState("") 
    const [passwordConfirm , setPasswordConfirm] = useState("") 
    const [phone , setPhone] = useState("") 
    const [loading , setloading] = useState(true);

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeConfirmPassword = (e) => {
        setPasswordConfirm(e.target.value)
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const validationValues = () => {
        if(name === "") {
            notify('من فضلك ادخل اسم المستخدم' , 'error')
            return;
        }
        if(phone.length <= 10) {
            notify('من فضلك ادخل رقم الهاتف صحيح' , 'error')
            return;
        }
        if(password != passwordConfirm) {
            notify('من فضلك تاكد كلمة السر' , 'error')
            return;
        }
    }

    const onSubmit =async  () => {
        validationValues();
        setloading(true)
        await dispatch(createNewUser(
            {
                name: name,
                email:email,
                password:password,
                passwordConfirm:passwordConfirm,
                phone:phone
            }
        ))
        setloading(false)

    }

    useEffect(() => {
        if(!loading) {
          localStorage.setItem("token" , res.token)
          navigate('/login')
        }
    } , [loading])

    return [name , email , password , passwordConfirm , phone , loading , onChangeName , onChangeEmail , onChangePassword , onChangeConfirmPassword , onChangePhone , onSubmit]
}

export default RegisterHook