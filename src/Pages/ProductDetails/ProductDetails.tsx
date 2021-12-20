import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
// action
import { selectedProducts } from "../../state/action-creators";
import { State } from "../../state/reducers";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductDetails.css";
import Ratings from "../../Components/Ratings/Ratings";

type ParamTypes = {
  productId: string;
};

const ProductDetails = () => {
  // access the selected product
  const product = useSelector((state: State) => state.product);

  let { image, title, price, category, description }: any = product;
  //console.log('rrrr', rating)

  const { productId } = useParams<ParamTypes>();
  const dispatch = useDispatch();

  console.log("hhhhhh", product);

  const fetchProductDetails = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response: any) => {
        const productDetails = response.data;
        dispatch(selectedProducts(productDetails));
      })
      .catch((error) => console.log("Err", error));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <Card>
        <div className="container-fluid">
          <Row className="wrapper">
            <Col md={6} className="preview">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                  <img className="" src={image} alt="" />
                </div>
              </div>
            </Col>

            <Col md={6} className="details">
              <h3 className="product-title">{title}</h3>
              <div className="rating">
                <div className="stars">
             <Ratings />
                
                </div>
              
                <span className="review-no">23 reviews</span>
              </div>

              <p className="product-description">{description} </p>
              <h5 className="price">
                current price: <span>$ {price} </span>
              </h5>
              <h5 className="category">category : {category}</h5>

              <div className="action">
                <Link to="/cart" className="btn btn-1">
                  <i className="fas fa-shopping-cart"> Add To Cart</i>
                </Link>
                <Link to="/" className="btn btn-1">
                  <i className="fas fa-arrow-left"> Back</i>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};


export default ProductDetails;
