import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// action
import { selectedProducts } from '../../state/action-creators';
import { State } from '../../state/reducers';

type ParamTypes = {
  productId: string;
};

const ProductDetails = () => {
  // access the selected product
  const product = useSelector((state: State) => state.product);

  const { productId } = useParams<ParamTypes>();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetails = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response: any) => {
        const productDetails = response.data;
        dispatch(selectedProducts(productDetails));
      })
      .catch((error) => console.log('Err', error));
  };

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Product details</h1>
    </div>
  );
};

export default ProductDetails;
