// Components
import Banner from '../Banner/Banner';
import Carrousel from '../Carrousel/Carrousel';
import Discount from '../Discount/Discount';
import Products from '../Products/Products';

const Home = () => {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <Carrousel slide1={'hero1'} slide2={'hero2'} slide3={'hero3'}>
          <Banner title="Great Deals" subtitle="40% discounts starting now" />
        </Carrousel>
      </div>
      <div>
        <Products />
      </div>
      <Discount />
    </>
  );
};

export default Home;
