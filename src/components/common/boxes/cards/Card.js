import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  const combinedClasses = `${props.className} ${classes.card}`;
  return <div className={combinedClasses}>{props.children}</div>;
};

export default Card;
