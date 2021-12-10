import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// action
import { selectedProducts } from '../../state/action-creators';
import { State } from '../../state/reducers';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductDetails.css';

type ParamTypes = {
  productId: string;
};

const ProductDetails = () => {
  // access the selected product
  const product = useSelector((state: State) => state.product);

  let { image, title, price, category, description }: any = product;

  const { productId } = useParams<ParamTypes>();
  const dispatch = useDispatch();

  console.log('hhhhhh', product);

  const fetchProductDetails = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response: any) => {
        const productDetails = response.data;
        dispatch(selectedProducts(productDetails));
      })
      .catch((error) => console.log('Err', error));
  };

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <Col lg={8} className="border p-3 main-section md-white">
        <Row className="m-0">
          <Col lg={4} className="left-side-product-box pb-3">
            <img className="fluid" src={image} alt="" />
          </Col>
          <Col md={6} lg={8}>
            <div className="right-side-pro-detail border p-3 m-0">
              <Row>
                <Col lg={12}>
                  <p className="m-0 p-0 mt-4">{title}</p>
                </Col>
                <Col lg={12}>
                  <p className="m-0 p-0 price-pro">{price}</p>
                </Col>
                <Col lg={12} className=" pt-2">
                  <h3>Product Detail</h3>
                  <span>{description}</span>
                </Col>
                <Col lg={12}>
                  <p className="tag-section">
                    <strong>Tag : </strong>
                    <Link to="/">{category}</Link>
                  </p>
                </Col>
                <Col lg={12} className="mt-3">
                  <Row>
                    <Col lg={6} className="pb-4">
                      <Link to="/cart" className="btn btn-1 ">
                        <i className="fas fa-shopping-cart"> Add To Cart</i>
                      </Link>
                      <Link to="/" className="btn btn-1 ">
                        <i className="fas fa-arrow-left"> Back</i>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

/* 
    <div className="">
      <Row className="dd-flex justify-content-center">
        <Col md={8}>
          <Card className="card">
            <Row>
              <Col md={6}>
                <div className="d-flex flex-row align-items-center">
                  <i className="fa fa-apple fs-1"></i>
                  <span className="fw-bold ms-1 fs-5">{title}</span>
                </div>
                <h1 className="fs-1 ms-1 mt-3">{category}</h1>
                <div className="ms-1">
                  <span>{description}</span>
                </div>
                <div className="mt-5 radio-buttons">
                  <label className="radio">
                    <input type="radio" name="code" value="grey" checked /> <span></span>
                  </label>
                  <label className="radio">
                    <input type="radio" name="code" value="pink" /> <span></span>
                  </label>
                  <label className="radio">
                    <input type="radio" name="code" value="black" /> <span></span>
                  </label>
                </div>
                <div>
                  <button className="button">
                    <span>Order Now</span> <i className="ms-2 fa fa-long-arrow-right"></i>
                  </button>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
</div>*/

export default ProductDetails;
