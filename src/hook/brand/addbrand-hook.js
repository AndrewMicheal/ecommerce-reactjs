import avatar from '../../Images/avatar.png'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { createBrand } from '../../redux/actions/brandAction';

const AddBrandHook = () => {
    const [img , setImg] = useState(avatar);
    const [selectedFile , setSelectedFile] = useState(null);
    const [loading , setLoading] = useState(true);
    const [isPress , setIsPress] = useState(false);
    let brandNameRef = useRef();
    const res = useSelector(state => state.allBrands.brands);
    console.log(res)

    useEffect(() => {
        // clear input and image
     if(!loading) {
        setImg(avatar);
        // clear input using ref
        setSelectedFile(null);
        setLoading(true);
        brandNameRef.current.value = "";
        setTimeout(() => {
            setIsPress(false)
        } , 1000)

     }
    }, [loading])

    

    let dispatch = useDispatch();

    const brand = {
        brandName : ''
    }

    const getBrandName = ({target}) => {
        brand[target.name] = target.value
    }
    
    const handleSubmit = async () => {
        if(brand.brandName === "" && selectedFile === null) {
            console.log('من فضلك اكمل البيانتا')
        } else {
            const formData = new FormData();
            formData.append("name" , brand.brandName)
            formData.append("image" , selectedFile)
            setLoading(true);
            setIsPress(true)
            await dispatch(createBrand(formData)) // because this process take time depend on image size
            setLoading(false);

        }
    }
    
    
    const onImageChange = (event) => {
        if(event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]));
            setSelectedFile(event.target.files[0])
        }
    }

    return [img , loading , isPress , handleSubmit , onImageChange , getBrandName , brandNameRef]
}

export default AddBrandHook