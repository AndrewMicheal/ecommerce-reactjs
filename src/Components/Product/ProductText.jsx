import React , {Component} from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import ViewProductDetails from './../../hook/products/view-product-details';
import AddCartHook from './../../hook/cart/add-cart-hook';
import { ToastContainer,toast } from 'react-toastify';
import { connect } from 'react-redux';
import { getOneProduct, getProductLike } from './../../redux/actions/ProductsAction';
import {getOneCat} from './../../redux/actions/categoryAction'
import {addToCartAction } from './../../redux/actions/cartAction';
import {getOneBrand} from './../../redux/actions/brandAction'

class ProductText extends Component {
   
    state = {
        item : [] , 
        color : [] ,
        oneCat : []
        
    }
    getItems = async () => {
        await this.props.getOneProduct(this.props.id)
        console.log(this.props.itemData.data)
        this.setState({item : this.props.itemData.data})
        if(this.props.itemData.data) {
          await this.props.getOneCat(this.props.itemData.data.category)
          await this.props.getOneBrand(this.props.itemData.data.brand)
          console.log(this.props.onBrand.data)
          this.setState({oneCat : this.props.oneCat})
        }
    }
     onColorChange = (color) => {
        this.setState({color})
      }
    componentDidMount() {
        this.getItems();
    }

     addToCart = async () => {
        
         await this.props.addToCartAction( {
            productId: this.props.id ,
            color: this.state.color
        })

       if(this.props.AddRes.status === "success") {
        toast.success('تمت الاضافة الى العربة')
        setTimeout(() => {
            window.location.reload(false)
        } , 1000)
       }
       
      }
      
    render() {
        return (
            <React.Fragment>
                 <div>
            <Row className="mt-2">
                {this.props.oneCat.data ? <div className="cat-text">{this.props.oneCat.data.name} :</div>: null }
            </Row>
            <Row>
                <Col md="8">
                    <div className="cat-title d-inline">
                        {this.state.item.length !== 0 ? (
                           <div>
                             {this.state.item.title}
                            <div className="cat-rate d-inline mx-3">{this.state.item.ratingsQuantity}</div>
                           </div>

                        ): null}
                         
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="8" className="mt-4">
                    <div className="cat-text d-inline">الماركة :</div>
                    {this.props.onBrand.data ? <div className="barnd-text d-inline mx-1">{this.props.onBrand.data.name} </div>: null}
                </Col>
            </Row>
            <Row>
                <Col md="8" className="mt-1 d-flex">
                {this.state.item.length !== 0 ? (
                        this.state.item.availableColors ? this.state.item.availableColors.map((productColor , index) => {
                            return (
                                <div onClick={() => this.onColorChange(productColor)} key = {index} className="color ms-2 border" style={{ backgroundColor:`${productColor}` }}>
                            </div>
                            )
                        }) : null

                        ): null}
                        {this.state.item.length !== 0 ? <div className="cat-text d-inline">الكمية المتاحة : {this.state.item.quantity} </div> : null}
                </Col>
            </Row>

            <Row className="mt-4">
                <div className="cat-text">المواصفات :</div>
            </Row>
            <Row className="mt-2">
                <Col md="10">
                    <div className="product-description d-inline">
                       {this.state.item.length !== 0 ? this.state.item.description : null}
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md="12">
                    {this.state.item.length !== 0 ?
                    <div>
                        <div className="product-price d-inline px-3 py-3 border">{this.state.item.price} جنية</div>
                        <div onClick={this.addToCart} className="product-cart-add px-3 py-3 d-inline mx-3">اضف للعربة</div>
                    </div>
                     : null}
                </Col>
            </Row>
            <ToastContainer />
    </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        itemData : state.allProducts.productDetails ,
        AddRes : state.cartReducer.addToCart ,
        oneCat : state.allCategory.getOneCategory ,
        onBrand : state.allBrands.oneBrand
    }
  }

export default connect(mapStateToProps , {getOneProduct , getOneCat , addToCartAction , getOneBrand})(ProductText)