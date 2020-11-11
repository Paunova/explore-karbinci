import cx from 'classnames';
import LinkHover from './LinkHover';

const Posts = () => {
    return (
      <div className={cx('menu-item', 'posts')}>
        <LinkHover name='Posts' />
      </div>
    );
};
  
export default Posts;