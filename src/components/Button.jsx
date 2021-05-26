import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

const Button = ({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
};

Button.protoTypes = {
  onClick: propTypes.func,
};

export default Button;
