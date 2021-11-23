import React from 'react';
import { Col, Card } from 'react-bootstrap';

// props
type ProductCardProps = {
  image: string; // from api
  subtitle: string;
  children: React.ReactNode;
};

const ProductCard = ({ image, subtitle, children }: ProductCardProps) => {
  return (
    <Col md={5}>
      <Card className="h-100">
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt=""
        />

        <Card.Body className=" p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{subtitle}</h5>
            {children}
          </div>
        </Card.Body>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button className="btn btn-outline-dark mt-auto">Add to cart</button>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ProductCard;
