
import MenuItem from './MenuItem';

const Menu = (props) => {
  const {menuItems, ...rest} = props;
  
  return (
    <div className='menu'>
      {props.menuItems.map((item, index) => {
        return (
          <MenuItem key={index} 
                    item={item}
                    {...rest}
          />
        )
      })}
    </div>
  );
};

export default Menu;
