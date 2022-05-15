import React from 'react';

import classes from './Box.module.css';

const Box = (props) => {
  const combinedClasses = `${classes.box} ${props.className}`;
  return <div className={combinedClasses}>{props.children}</div>;
};

export default Box;
