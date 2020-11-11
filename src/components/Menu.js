import About from './About';
import Map from './Map';
import Posts from './Posts';

const Menu = () => {
  return (
    <div className='menu'>
        <Posts />
        <Map />
        <About />
    </div>
  );
};

export default Menu;
