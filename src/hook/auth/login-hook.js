import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../../redux/actions/authAction";
import { useSelector } from 'react-redux';
import notify from './../useNotification';

const LoginHook = () => {
    const [password , setPassword] = useState("") 
    const [email , setEmail] = useState("")
    const [loading , setLoading] = useState(true)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onSubmit = async () => {
       setLoading(true)
        await dispatch(loginUser({
            email: email,
            password:password
       }))
       setLoading(false)

    }

    const res = useSelector(state => state.authReducer.loginUser)


    useEffect(() => {
       if(!loading) {
            if(res) {
                if(res.token) {
                    localStorage.setItem("token" , res.token)
                    localStorage.setItem("user" , JSON.stringify(res.data))
                    notify('تم تسجيل الدخول بنجاح' , 'success')
                    setTimeout(() => {
                        window.location.href = '/'
                    } , 1000)
                } else {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                }
            }
       } else {
            if(res.response) {
                if(res.response.status === 500) {
                    notify(`${res.response.data.message}` , 'error')
                }
            }
       }
       setLoading(true)
    },[loading])

    return [email , password , loading , onChangeEmail , onChangePassword , onSubmit]
}

export default LoginHook