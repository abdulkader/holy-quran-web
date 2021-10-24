import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Backdrop from '@/components/Backdrop';
import { useLockBodyScroll } from '@/shared/hooks/useLockBodyScroll';

const Sidebar = ({ title, children, onClose, position, containerClass }) => {
  let positionClassName = 'left-0 animate__slideInLeft';
  if (position === 'right') {
    positionClassName = 'right-0 animate__slideInRight';
  }
  useLockBodyScroll();
  return (
    <div className="fixed w-full h-full z-50 left-0 top-0 backdrop-filter backdrop-blur-sm duration-150 transition-all">
      <div className="fixed w-full h-full z-100 animate__animated animate__faster animate__fadeIn left-0 top-0">
        <div
          className={cx(
            'absolute z-300 top-0 bg-white shadow-2xl h-full animate__animated animate__faster',
            positionClassName,
            containerClass
          )}
        >
          <div className="bg-secondary-500 nav-bg flex items-center align-middle py-1 px-4 font-bold text-lg text-left text-white">
            {title}
          </div>
          <div className={cx('block relative min-h-full overflow-auto')}>
            {children}
          </div>
        </div>
        <Backdrop onClose={onClose} />
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  containerClass: 'w-80',
  position: 'left',
};

Sidebar.propTypes = {
  containerClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.oneOf(['left', 'right']),
  title: PropTypes.string.isRequired,
};

export default Sidebar;
