
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from './../useNotification';
import { createReview } from './../../redux/actions/reviewAction';

const AddRateHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rateText , setRateText] = useState('');
  const [rateValue , setRateValue] = useState(0);
  const [loading , setLoading] = useState(true);
  const res = useSelector(state => state.reviewReducer.createReview)

  const onChangeRateText = (e) => {
    setRateText(e.target.value)
  }

  const onChangeRateValue = (val) => {
    setRateValue(val)
  }

  const onSubmit = async () => {
    if(localStorage.getItem("user") === null) {
      notify('قم بالتسجيل اولا' , 'error')
      return;
    }
    if(rateText === "") {
        notify('من فضلك اكت تعليق' , 'error')
        return;
    }
    setLoading(true)
    await dispatch(createReview(id, {
        review : rateText ,
        rating : rateValue
    }));
    setLoading(false)
  }

  useEffect(() => {
    if(!loading) {
        if(res) {
        } 
    }
  },[loading])

  let user;
  if(localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  } else {
    user = ""
  }

  return [onChangeRateText , onChangeRateValue , rateText , rateValue , user , onSubmit]

}

export default AddRateHook