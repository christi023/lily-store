import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// action
import { selectedProducts } from '../../state/action-creators';
import { State } from '../../state/reducers';
import { Card, Col, Row } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import './ProductDetails.css';

type ParamTypes = {
  productId: string;
};

// props
type ProductDetailsProps = {
  image: string; // from api

  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
};
const ProductDetails = ({ title, price, image, description, category }: ProductDetailsProps) => {
  // access the selected product
  const product = useSelector((state: State) => state.product);

  const { productId } = useParams<ParamTypes>();
  const dispatch = useDispatch();
  console.log(product);

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
    </div>
  );
};

export default ProductDetails;
