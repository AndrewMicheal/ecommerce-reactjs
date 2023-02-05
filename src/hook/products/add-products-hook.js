
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand } from '../../redux/actions/brandAction';
import { getOneCat } from '../../redux/actions/subCategoryAction';
import { getAllCat } from './../../redux/actions/categoryAction';
import notify from './../useNotification';
import { createProduct } from './../../redux/actions/ProductsAction';

const AddProductsHook = () => {
    const [images, setImages] = useState([]);
    const [produName, setProduName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [priceBefore, setPriceBefore] = useState('السعر قبل الخصم');
    const [priceAfter, setPriceAfter] = useState('السعر بعد الخصم');
    const [qty, setQty] = useState('الكمية المتاحة');
    const [catId, setCatId] = useState('');
    const [brandId, setBrandId] = useState('');
    const [selectedSubId, setSelectedSubId] = useState([]);
    const dispatch = useDispatch();
    const categories = useSelector(state => state.allCategory.category);
    const brands = useSelector(state => state.allBrands.brands)
    const subCategoryItem = useSelector(state => state.subCate.subCategories);
    const [showColor , setShowColor ] = useState(false)
    const [colors , setColors] = useState([]);
    const [option , setOption] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        dispatch(getAllCat())
        dispatch(getAllBrand())
        
    }, [])
    
    const onSelectCategory = async (event) => {
        if(event.target.value !== 0) {
            await dispatch(getOneCat(event.target.value))
        }
        setCatId(event.target.value);
    }

    function dataURLtoFile(dataurl, filename) {
 
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, {type:mime});
    }

    const handleSubmit =  async() => {
        if(catId === 0 || brandId === 0 || produName === '' || productDescription === '' || qty === '' || priceBefore <= 0 || images.length <= 0) {
            notify('من فضلك ادخل جميع الحقول' , 'warn')
            return;
        }
        // convert base 64 to file
        const imgCover = dataURLtoFile(images[0] , Math.random() + ".jpg")
        // convert array of base 64 to file
        //                              length of images you choose : اخترت 3 صور : length of array 0 , 2.map()
        let itemImages = Array.from(Array(Object.keys(images).length).keys()).map((item , index) => {
            return dataURLtoFile(images[index] , Math.random() + ".jpg")
        })
        const formData = new FormData();
        formData.append("title" , produName)
        formData.append("description" , productDescription)
        formData.append("quantity" , qty)
        formData.append("price" , priceBefore)
        formData.append("imageCover" , imgCover)
        formData.append("category" , catId)
        formData.append("brand" , brandId)
        itemImages.map(item => formData.append("images" , item))

        colors.map(color => formData.append("availableColors" , color))
        selectedSubId.map(item => formData.append("subcategory" , item._id))
        setLoading(true)
        await dispatch(createProduct(formData))
        setLoading(false)

    }

    

    useEffect(() => {
       if(catId !== 0) {
        if(subCategoryItem.data) {
            setOption(subCategoryItem.data)
        }
       }
    }, [catId])

    useEffect(() => {
        if(!loading) {
            setImages([])
            setProduName('');
            setProductDescription('');
            setPriceBefore('السعر قبل الخصم');
            setQty('الكمية المتاحة');
            setCatId('');
            setBrandId('');
            setSelectedSubId('');
            setPriceAfter('السعر بعد الخصم');
           setTimeout(() => {
            setLoading(true);
           } , 1000)
        }
     }, [loading])

    const onSelect = (selectedList) => {
        setSelectedSubId(selectedList);
    }
    const onRemove = (selectedList) => {
        setSelectedSubId(selectedList);

    }


    const handleChangeComplete = (color) => {
        setShowColor(!showColor);
        setColors([...colors , color.hex])
    }

    const onSelectBrand = (event) => {
        setBrandId(event.target.value)
    }



    const removeColor = (index) => {
        let colorItems = [...colors];
        colorItems.splice(index , 1);
        setColors(colorItems);
    }
    return [
        images ,setImages , produName , setProduName , productDescription ,setProductDescription,
        priceBefore , setPriceBefore , priceAfter ,setPriceAfter , qty , setQty , option , colors , onSelect , onRemove,
        handleChangeComplete , onSelectBrand , removeColor , onSelectCategory  , categories , brands , subCategoryItem,
        showColor , setShowColor , handleSubmit
    ]

}

export default AddProductsHook