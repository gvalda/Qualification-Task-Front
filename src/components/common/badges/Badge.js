import React from 'react';

import classes from './Badge.module.css';

const Badge = (props) => {
  const combinedClasses = `${props.className} ${classes.badge}`;
  return <div className={combinedClasses}>{props.children}</div>;
};

export default Badge;
