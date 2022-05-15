import React from 'react';

import classes from './Button.module.css';

const Button = React.forwardRef((props, ref) => {
  const combinedClasses = `${props.className} ${classes.button}`;
  return (
    <button ref={ref} {...props.button} className={combinedClasses}>
      {props.children}
    </button>
  );
});
export default Button;
