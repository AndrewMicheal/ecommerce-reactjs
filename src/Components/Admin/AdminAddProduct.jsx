import React, { useState ,useEffect  } from 'react'
import { Row, Col } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../Images/avatar.png'
import add from '../../Images/add.png'
import MultiImageInput from 'react-multiple-image-input';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCat } from './../../redux/actions/categoryAction';
import { getAllBrand } from './../../redux/actions/brandAction';
import { CompactPicker } from 'react-color'
import { getOneCat } from '../../redux/actions/subCategoryAction';
import { createProduct } from './../../redux/actions/ProductsAction';
import notify from './../../hook/useNotification';
import AddProductsHook from './../../hook/products/add-products-hook';


const AdminAddProduct = () => {
    const [
        images ,setImages , produName , setProduName , productDescription ,setProductDescription,
        priceBefore , setPriceBefore , priceAfter ,setPriceAfter , qty , setQty , option , colors , onSelect , onRemove,
        handleChangeComplete , onSelectBrand , removeColor , onSelectCategory  , categories , brands , subCategoryItem,
        showColor , setShowColor , handleSubmit
    ] = AddProductsHook();
  return (
    <React.Fragment>
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2"> صور للمنتج</div>
                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                       allowCrop = {false}
                        theme={"light"}
                        max = {4}
                    />
                    <input
                        value={produName}
                        onChange = {(e) => setProduName(e.target.value)}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                        value={productDescription}
                        onChange = {(e) => setProductDescription(e.target.value)}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر قبل الخصم"
                        value = {priceBefore}
                        onChange = {(e) => setPriceBefore(e.target.value)}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر بعد الخصم"
                        value = {priceAfter}
                        onChange = {(e) => setPriceAfter(e.target.value)}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="الكمية المتاحة"
                        value = {qty}
                        onChange = {(e) => setQty(e.target.value)}
                    />
                    <select
                        name="cat"
                        onChange={onSelectCategory}
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">التصنيف الرئيسي</option>
                        {categories.data ? categories.data.map((cat , index) => {
                            return (
                                <option value={cat._id} key = {index}>{cat.name}</option>
                            )
                        }) : null}
                    </select>
                    {subCategoryItem.data ? subCategoryItem.data.length > 0 ? <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={option}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    /> : 
                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={[]}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />: null}
                    
                    <select name="brand" id="brand" className="select input-form-area mt-3 px-2 " onChange={onSelectBrand}>
                        <option value="0">اختر ماركة </option>
                        {brands.data ? brands.data.map((brand , index) => {
                            return (
                                <option value={brand._id} key = {index}>{brand.name}</option>
                            )
                        }) : null}
                    </select>
                    <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                    <div className="mt-1 d-flex">
                        {colors ? colors.map((color , index) => {
                            return (
                                <div
                                    key = {index}
                                    onClick = {() => removeColor(index)}
                                    className="color ms-2 border  mt-1"
                                    style={{ backgroundColor: `${color} `}}>
                                </div>
                                
                            )
                        }) : null}
                        <img onClick={() => setShowColor(!showColor)} src={add} alt="" width="30px" height="35px" className="" style={{cursor: "pointer"}}/>
                        {showColor ? <CompactPicker onChangeComplete={handleChangeComplete}/> : null}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    </React.Fragment>
  )
}

export default AdminAddProduct