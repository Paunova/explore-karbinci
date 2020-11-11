import cx from 'classnames';
import LinkHover from './LinkHover';

const About = () => {
    return (
      <div className={cx('menu-item', 'about')}>
        <LinkHover name='About' />
      </div>
    );
};
  
export default About;