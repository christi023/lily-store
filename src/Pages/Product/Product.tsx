import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProductCard from '../../Components/Products/ProductCard';
import { ProductList } from '../../state/actions/productActions';
import { State } from '../../state/reducers';

const Product = () => {
  const products = useSelector((state: State) => state.allProducts.products);

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <Row className=" gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
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
    </section>
  );
};

export default Product;
