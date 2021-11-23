import { Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <Row className=" gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <ProductCard image={''} subtitle="Fancy Product" children={'$20'} />
          </Row>
        </div>
      </section>
    </>
  );
};

export default Products;
