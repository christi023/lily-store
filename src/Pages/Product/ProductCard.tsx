import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';
// props
type ProductCardProps = {
  image: string; // from api
  children: React.ReactNode;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
};

const ProductCard = ({ id, title, price, image, description, category }: ProductCardProps) => {
  return (
    <Col lg={3} md={4} sm={6} className="pb-1">
      <div>
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <Card.Img variant="top" className="img-fluid w-100" src={image} alt="" />
            <div className="product-action">
              <Link to="/cart" className="btn btn-outline-dark btn-square" title="Add to cart">
                <i className="fas fa-shopping-cart"></i>
              </Link>
              <Link
                to="/wishlist"
                className="btn btn-outline-dark btn-square"
                title="Add to wishlist"
              >
                <i className="far fa-heart"></i>
              </Link>
              <Link
                to={`/product/${id}`}
                className="btn btn-outline-dark btn-square"
                title="Details"
              >
                <i className="fas fa-info-circle"></i>
              </Link>
            </div>
          </div>
          <Card.Body className="text-center py-4">
            <Card.Title className=" text-decoration-none text-truncate">{title}</Card.Title>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$ {price}</h5>
            </div>
          </Card.Body>
        </div>
      </div>
    </Col>
  );
};
export default ProductCard;
