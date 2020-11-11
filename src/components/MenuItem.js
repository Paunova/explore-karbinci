import cx from 'classnames';
import LinkHover from './LinkHover';

const MenuItem = ({item, onClick, activeLink}) => {
    const {name, link} = item;

    return (
      <div className={cx('menu-item', {'menu-item--active': link === activeLink})}>
        <LinkHover name={name} link={link} onClick={onClick} />
      </div>
    );
};
  
export default MenuItem;