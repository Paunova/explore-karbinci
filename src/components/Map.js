import cx from 'classnames';
import LinkHover from './LinkHover';

const Map = () => {
    return (
      <div className={cx('menu-item', 'map')}>
        <LinkHover name='Map' />
      </div>
    );
};
  
export default Map;