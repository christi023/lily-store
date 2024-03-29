import React from 'react';
import {  useSelector } from "react-redux";
import { State } from "../../state/reducers";

// props
type RatingProps = {
  color: string ,
  className?: string,
}

const Ratings = ({color} : RatingProps) => {
 const product = useSelector((state: State) => state.product);
console.log('ppp',product)

const { rating}: any = product;
console.log('rating', rating)

  return <div className="rating">
    <div className='stars'>
      <span>
        <i style={{color}} className={rating.rate >= 1 ? 'fas fa-star' : rating.rate >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star' }></i></span>
         <span>
        <i
          style={{ color }}
          className={
           rating.rate >= 2 ? 'fas fa-star' : rating.rate >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            rating.rate >= 3 ? 'fas fa-star' : rating.rate >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
           rating.rate >= 4 ? 'fas fa-star' : rating.rate >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
           rating.rate >= 5 ? 'fas fa-star' : rating.rate >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'
          }
        ></i>
      </span>
    </div>
  </div>;
};

Ratings.defaultProps = {
  color: '#ff9f1a',
};

export default Ratings;
