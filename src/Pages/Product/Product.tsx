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
    <div className="container px-4 px-lg-5 mt-5" style={{ position: 'relative' }}>
      <Row className="row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
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
