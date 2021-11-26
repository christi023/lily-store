import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
      <Card className="h-100">
        <img className="card-img-top" src={image} alt="" />

        <Card.Body className=" p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{title}</h5>$ {price}
          </div>
          <div>{description}</div>
        </Card.Body>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <Link to="/cart" className="btn btn-outline-dark mt-auto">
              Add to cart
            </Link>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ProductCard;
