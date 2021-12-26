import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchProducts} from '../../state/action-creators/index';
import Product from '../../Pages/Product/Product';

const Products = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <Product />
      </div>
    </>
  );
};

export default Products;
