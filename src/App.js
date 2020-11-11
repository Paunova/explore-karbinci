import {useState} from 'react';

import './styles/App.scss';

import Menu from './components/Menu';
import About from './components/About';
import Map from './components/Map';
import Posts from './components/Posts';

const menuItems = [
  {
    name: 'Map',
    link: 'map',
    component: <Map />
  },
  {
    name: 'Posts',
    link: 'posts',
    component: <Posts />
  },
  {
    name: 'About',
    link: 'about',
    component: <About />
  }
];

const App = () => {
  const [activeLink, setActiveLink] = useState('map');

  const onClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link);
  };

  const renderActiveItem = () => {
    const activeItem = menuItems.find(item => item.link === activeLink);
    return activeItem && activeItem.component;
  }

  return (
    <div className='app'>
      <Menu onClick={onClick} 
            menuItems={menuItems} 
            activeLink={activeLink} 
      />
      <div className='preview-item'>
        {renderActiveItem()}
      </div>
    </div>
  );
};

export default App;
