import avatar from '../../Images/avatar.png'
import { createCategory } from './../../redux/actions/categoryAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import notify from '../useNotification';

const AddCategoryHook = () => {
    const [img , setImg] = useState(avatar);
    const [selectedFile , setSelectedFile] = useState(null);
    const [loading , setLoading] = useState(true);
    const [isPress , setIsPress] = useState(false);
    let catgoryNameRef = useRef();
    const res = useSelector(state => state.allCategory.category);
    console.log(res)

    useEffect(() => {
        // clear input and image
     if(!loading) {
        setImg(avatar);
        // clear input using ref
        setSelectedFile(null);
        setLoading(true);
        catgoryNameRef.current.value = "";
        setTimeout(() => {
            setIsPress(false)
        } , 1000)

     }
    }, [loading])

    

    let dispatch = useDispatch();

    const category = {
        categoryName : ''
    }

    const getCategoryName = ({target}) => {
        category[target.name] = target.value
    }
    
    const handleSubmit = async () => {
        if(category.categoryName === "" && selectedFile === null) {
            notify('من فضلك اكمل البيانتا' , 'warn')
        } else {
            const formData = new FormData();
            formData.append("name" , category.categoryName)
            formData.append("image" , selectedFile)
            setLoading(true);
            setIsPress(true)
            await dispatch(createCategory(formData)) // because this process take time depend on image size
            setLoading(false);

        }
    }
    
    
    const onImageChange = (event) => {
        if(event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]));
            setSelectedFile(event.target.files[0])
        }
    }

    return [img , loading , isPress , handleSubmit , onImageChange , getCategoryName , catgoryNameRef]
}

export default AddCategoryHook