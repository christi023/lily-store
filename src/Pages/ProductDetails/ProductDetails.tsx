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
    <section style={{ backgroundColor: '#eee' }}>
      <div className="card">
        <div className="card__title">
          <div className="icon">
            <i className="fa fa-arrow-left"></i>
          </div>
          <h3>New products</h3>
        </div>
        <div className="card__body">
          <div className="half">
            <div className="featured_text">
              <h1>{category}</h1>
              <p className="sub">{title}</p>
              <p className="price">{price}</p>
            </div>
            <div className="image">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="half">
            <div className="description">
              <p>{description}</p>
            </div>
            <span className="stock">
              <i className="fa fa-pen"></i> In stock
            </span>
            <div className="reviews">
              <ul className="stars">
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star-o"></i>
                </li>
              </ul>
              <span>(64 reviews)</span>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className="action">
            <button type="button">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
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
