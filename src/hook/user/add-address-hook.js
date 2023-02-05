
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import notify from './../useNotification';
import { createUserAddress } from './../../redux/actions/userAddressAction';
import { useNavigate } from 'react-router-dom';

const AddAddressHook = () => {
  const dispatch = useDispatch();
  const [alias , setAlias] = useState('')
  const [details , setDetails] = useState('')
  const [phone , setPhone] = useState('')
  const [postalCode , setPostalCode] = useState('')
  const [loading , setLoading] = useState(true)
  const getAllAddressRes = useSelector(state => state.userAddressReducer.createUserAddress)
  const navigate = useNavigate();

  const onChangeAlias = (e) => {
    e.persist()
    setAlias(e.target.value)
  }

  const onChangeDetails = (e) => {
    e.persist()
    setDetails(e.target.value)
  }

  const onChangePhone = (e) => {
    e.persist()
    setPhone(e.target.value)
  }

  const onChangePostalCode = (e) => {
    e.persist()
    setPostalCode(e.target.value)
  }

  const handleSubmit = async () => {
    if(alias === '' || details === '' || phone === '') {
        notify('من فضلط ادخل جميع البيانات' , 'error')
        return
    }
    await dispatch(createUserAddress({
        alias: alias,
        details: details,
        phone: phone,
        city: "",
        postalCode: ""
    }))

    setLoading(true)
    setLoading(false)
  
  }

  useEffect(() => {
    if(!loading) {
       if(getAllAddressRes.status === 'success') {
        notify('تمت اضافة العنوان بنجاح' , 'success')
        setTimeout(() => {
            navigate('/user/addresses')
        } , 1000)

       }
    }
  } , [loading])

  return [onChangeAlias , alias , onChangeDetails , details , onChangePhone , phone , onChangePostalCode , postalCode , handleSubmit]

}



export default AddAddressHook