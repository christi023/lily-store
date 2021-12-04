import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { ProductList } from '../../state/actions/productActions';
import { State } from '../../state/reducers';
import './Product.css';

const Product = () => {
  const products = useSelector((state: State) => state.allProducts.products);

  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">Products</h2>
      <Row className="px-xl-5">
        {products &&
          products.map((product: ProductList) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={''}
              category={product.category}
              children={undefined}
            />
          ))}
      </Row>
    </div>
  );
};

export default Product;
