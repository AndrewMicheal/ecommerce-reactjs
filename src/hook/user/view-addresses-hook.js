
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUserAddress } from '../../redux/actions/userAddressAction';

const ViewAddressesHook = () => {
  const dispatch = useDispatch();
  const getAllAddressRes = useSelector(state => state.userAddressReducer.allUserAddress)
  const [loading , setLoading] = useState(true);
  const [allAddresses , setAllAddresses] = useState([]);

  const getAddresses = async() => {
    setLoading(true)
    await dispatch(getUserAddress())
    setLoading(false);
  }

  useEffect(() => {
    getAddresses();
  } , [])

  useEffect(() => {
   if(!loading) {
    if(getAllAddressRes.status === "success") {
        setAllAddresses(getAllAddressRes.data)
    }
   }
  } , [loading])

  return [allAddresses]
}

export default ViewAddressesHook