import React from 'react';
import { Col, Card } from 'react-bootstrap';
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
    <Col md={5}>
      <Card className="">
        <div className="view zoom overlay">
          <h4 className="mb-0">
            <span className="badge badge-primary badge-pill badge-news">Sale</span>
          </h4>

          <div className="mask">
            <Card.Img variant="top" className="img-fluid w-100" src={image} alt="" />
            <div className="mask rgba-black-slight"></div>
          </div>
        </div>

        <Card.Body className="text-center">
          <div className="text-center">
            <Card.Title className="fw-bolder">{title}</Card.Title>$ {price}
          </div>
          <Card.Text className="small text-muted text-uppercase mb-2">{description}</Card.Text>

          <Link to="/cart" className="btn btn-primary btn-sm mr-1 mb-2">
            <i className="fas fa-shopping-cart"></i> Add to cart
          </Link>
          <Link to={`/product/${id}`} className="btn btn-light btn-sm mr-1 mb-2">
            <i className="fas fa-info-circle pr-2"></i>Details
          </Link>
          <Link
            to="/wishlist"
            className="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main"
            data-toggle="tooltip"
            data-placement="top"
            title="Add to wishlist"
          >
            <i className="far fa-heart"></i>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
