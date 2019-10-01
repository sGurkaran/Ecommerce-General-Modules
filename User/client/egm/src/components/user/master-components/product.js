import React, { Component } from 'react';
import '../../dist/styles/product.css'
import { Card } from 'react-bootstrap'
import CustomNav from './Navbar'
import $ from 'jquery'
class Product extends Component {
    constructor(props) {
        super(props)
        this.componentDidMount = () => {
            if (this.props.location.state.stock) {
                $('.ProductMainStockStatus').addClass('badge-success')
            } else {
                $('.ProductMainStockStatus').addClass('badge-danger')
            }
            $(window).trigger('load');
            $(window).on('resize load', function () {
                var win = $(this); //this = window
                if (win.width() <= 767.98) {
                    // Removing Col-6 classes and Adding Col-12...
                    $('.ProductMainImage').removeClass('col-6')
                    $('.ProductMainDetail').removeClass('col-6')

                    $('.ProductMainImage').addClass('col-12')
                    $('.ProductMainDetail').addClass('col-12')
                }
                if (win.width() >= 767.98) {
                    $('.ProductMainImage').addClass('col-6')
                    $('.ProductMainDetail').addClass('col-6')

                    $('.ProductMainImage').removeClass('col-12')
                    $('.ProductMainDetail').removeClass('col-12')
                }
                if (win.width() <= 1016) {
                    $('.desktop-mode').removeClass('col-6')
                    $('.desktop-mode').addClass('col-8')
                } else {
                    $('.desktop-mode').addClass('col-6')
                    $('.desktop-mode').removeClass('col-8')
                }
            });
        }
    }
    render() {
        return (
            <div>
                <CustomNav />
                <div className="row align-items-start ProductRoot">
                    <div className="col-6 d-flex flex-column align-items-center ProductMainImage"><img src={this.props.location.state.ProductImage} alt="Product" width="350px" /></div>
                    <div className="col-6 ProductMainDetail">
                        <div className="row">
                            <div className="col">
                                <h1 className="ProductMainName">{this.props.location.state.ProductName}</h1>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col ProductMainBrief">
                                {this.props.location.state.ProductBrief}
                            </div>
                        </div>
                        <div className="row ProductMainPrice">
                            <div className="col">
                                Rs. {this.props.location.state.ProductPrice}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span className="badge ProductMainStockStatus">{this.props.location.state.stock ? "In Stock" : "Out Of Stock"}</span>
                            </div>
                        </div>
                        <div className="row align-items-start tablet-mode-row">
                            <div className="col tablet-mode d-flex flex-column align-items-center">
                                {/* <div className="col-12"> */}
                                <button className="ProductMainOptionBuy option-img"><img
                                    src={require('../../assets/icons/icons8-rupee-24.png')}
                                    alt="Product"
                                />Buy Now</button>
                                {/* </div> */}
                                {/* <div className="col-12"> */}
                                <button className="ProductMainOptionAddToCart option-img"><img
                                    src={require('../../assets/icons/icons8-buy-24.png')}
                                    alt="Product"
                                />Add to Cart</button>
                                {/* </div> */}
                                {/* <div className="col-12"> */}
                                <button className="ProductMainOptionWishList option-img"><img
                                    src={require('../../assets/icons/icons8-love-24.png')}
                                    alt="Product"
                                />Add To Wishlist</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Card border="success" className="ProductMainFeature">
                                    <Card.Header>Features</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Primary Features</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk
                                            of the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card border="success" className="ProductMainFeature">
                                    <Card.Header>Features</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Key Features</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk
                                            of the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card border="success" className="ProductMainFeature">
                                    <Card.Header>Features</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Key Features</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk
                                            of the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card border="success" className="ProductMainFeature">
                                    <Card.Header>Features</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Key Features</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk
                                            of the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row desktop-mode-row">
                    <div className="col-6 desktop-mode d-flex justify-content-center">
                        <button className="ProductMainOptionAddToCart option-img"><img
                            src={require('../../assets/icons/icons8-buy-24.png')}
                            alt="Product"
                        />Add to Cart</button>
                        <button className="ProductMainOptionWishList option-img"><img
                            src={require('../../assets/icons/icons8-love-24.png')}
                            alt="Product"
                        />Add To Wishlist</button>
                        <button className="ProductMainOptionBuy option-img"><img
                            src={require('../../assets/icons/icons8-rupee-24.png')}
                            alt="Product"
                        />Buy Now</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product