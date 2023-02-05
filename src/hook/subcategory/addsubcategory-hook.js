import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCat } from "../../redux/actions/categoryAction";
import { createSubCategory } from "../../redux/actions/subCategoryAction";
import notify from "../useNotification";

const AddSubCategoryHook = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.allCategory.category)
    const [loading , setLoading] = useState(true)
    const subCategoryNameRef = useRef();
    const subCategoryItemsNameRef = useRef();

    const subCategories = useSelector(state => state.subCate.subCategories)


    let subCategory = {
        name : '' ,
        category : '0' 
    }

    const getSubCategoryName = ({target}) => {
        subCategory[target.name] = target.value;

    }

    useEffect(() => {
        if(!navigator.onLine) {
            notify('هناك مشكلة فى الاتصال بالانترنت' , 'warn')
            return;
        }
      dispatch(getAllCat())
    },[])

    const handleChange = ({target}) => {
        subCategory[target.name] = target.value;
        console.log(subCategoryItemsNameRef.current.name);
    }

    const handleSubmit = async () => {
        // or use react-detect-offline
        if(!navigator.onLine) {
            notify('هناك مشكلة فى الاتصال بالانترنت' , 'warn')
            return;
        }
        if(subCategory.category === '0') {
            notify('من فضلك اختر تصنيف رئيسى' , 'warn')
            return;
        }

        if(subCategory.name === '') {
            notify('من فضلك ادخل  اسم التصنيف' , 'warn')
            return;
        }

        setLoading(true);
        await dispatch(createSubCategory(subCategory))
        setLoading(false);

    }

    useEffect(() => {
      if(!loading){
        subCategoryNameRef.current.value = ''
        subCategoryItemsNameRef.current.value = ''
        subCategory.category = '0'
        if(subCategories.data) {
            notify('تمت الاضافة بنجاح' , 'success')
        } else {
            notify('لم تتم الاضافى' , 'warn')

        }
        setLoading(true);
      }
    }, [loading])
    

    return [categories , subCategories , subCategoryNameRef , subCategoryItemsNameRef , getSubCategoryName , handleChange , handleSubmit]

}

export default AddSubCategoryHook