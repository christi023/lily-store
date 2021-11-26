import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../../state/action-creators/index';
import Product from '../../Pages/Product/Product';

const Products = () => {
  const dispatch = useDispatch();
  /*const products1 = useSelector((state: State) => state.allProducts);
  console.log(products1);*/

  const fetchProducts = async () => {
    await axios
      .get('https://fakestoreapi.com/products')
      .then((response: any) => {
        const products = response.data;
        console.log(products);
        dispatch(setProducts(products));
      })
      .catch((err) => console.log('Err', err));
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>All Products Here</h1>
      <div>
        <Product />
      </div>
    </>
  );
};

export default Products;
