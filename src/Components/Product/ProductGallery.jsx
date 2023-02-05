import React, { Component } from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import { useParams } from 'react-router-dom';
import ViewProductDetails from '../../hook/products/view-product-details';
import { connect } from 'react-redux';
import { getOneProduct, getProductLike } from './../../redux/actions/ProductsAction';
import mobile from '../../Images/mobile.png'

  // let {id} = useParams();
  // const [item , images] = ViewProductDetails(id);

 
    // <React.Fragment>
    //     <div className="product-gallary-card d-flex justfiy-content-center  align-items-center pt-2">
    //         <ImageGallery items={images}
    //             showFullscreenButton={false}
    //             isRTL={true}
    //             showPlayButton={false}
    //             showThumbnails={false}
    //             renderRightNav = {RightButton}
    //             renderLeftNav = {LeftButton}
    //             />
    //     </div>
    // </React.Fragment>
// }





class ProductGallery extends Component {

  state = {
    item : [] , 
  }
  componentDidMount() {
    this.getItems()
  }

   getItems = async () => {
    await this.props.getOneProduct(this.props.id)
    this.setState({item : this.props.itemData})
  }
  
  render() {
    let {id} = this.props.id
    let images = []
    //const [item , images] = ViewProductDetails(id);
    if(this.state.item.length !== 0) {
       images = this.state.item.data.images.map((image) => {
        return {
          original: image
        }
      })
    } else {
       images = [{ original: `${mobile}`}]
    }
    return (
      <React.Fragment>
          <div className="product-gallary-card d-flex justfiy-content-center  align-items-center pt-2">
          {this.state.item.length !== 0 ? (
          
              <ImageGallery items={images}
                  showFullscreenButton={false}
                  isRTL={true}
                  showPlayButton={false}
                  showThumbnails={false}
                  renderRightNav = {RightButton}
                  renderLeftNav = {LeftButton}
                  />
        
          ) : null}
            
           </div> 
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    itemData : state.allProducts.productDetails
  }
}

export default connect(mapStateToProps , {getOneProduct})(ProductGallery)
