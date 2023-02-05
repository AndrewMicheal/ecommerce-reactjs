
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecficAddress, updateAddress } from '../../redux/actions/userAddressAction';
import notify from './../useNotification';
import { useNavigate } from 'react-router-dom';

const EditAddressHook = (id) => {
  const dispatch = useDispatch();
  const updateAddressRes = useSelector(state => state.userAddressReducer.updateAddress);
  const getSpecificAddressRes = useSelector(state => state.userAddressReducer.specificAddress);
  const [updateLoading , setUpdateLoading] = useState(true);
  const [loading , setLoading] = useState(true);
  const navigate = useNavigate();

  const [alias , setAlias] = useState('')
  const [details , setDetails] = useState('')
  const [phone , setPhone] = useState('')

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
  
  const getUserSpecificAddress = async () => {
    setLoading(true)
    await dispatch(getSpecficAddress(id));
    setLoading(false);
  }

  const handleSubmit = async () => {
    setUpdateLoading(true)
    await dispatch(updateAddress(id , {
        alias: alias ,
        details : details ,
        phone : phone
    }))
    setUpdateLoading(false);
  }

  useEffect(() => {
    getUserSpecificAddress()
  } , [])

  useEffect(() => {
    if(!loading) {
        if(getSpecificAddressRes.status === 'success') {
            setAlias(getSpecificAddressRes.data.alias);
            setDetails(getSpecificAddressRes.data.details)
            setPhone(getSpecificAddressRes.data.phone)
        }
    }
  } , [loading])

  useEffect(() => {
    if(!updateLoading) {
        if(updateAddressRes.status === 'success') {
            notify('تم تحديث العنوان بنجاح' , 'success')
            setTimeout(() => {
                navigate('/user/addresses')
            } , 1000)
        }
    }
  } , [updateLoading])

  return [alias , details , phone , onChangeAlias , onChangeDetails, onChangePhone , handleSubmit]
}

export default EditAddressHook