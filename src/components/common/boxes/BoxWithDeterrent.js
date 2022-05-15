import React from 'react';

import classes from './BoxWithDeterrent.module.css';

const BoxWidthDeterrent = (props) => {
  const combinedClasses = `${props.classes} ${classes.deterrent}`;
  return <div className={combinedClasses}>{props.children}</div>;
};

export default BoxWidthDeterrent;
