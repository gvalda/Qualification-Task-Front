import React from 'react';

import classes from './InputField.module.css';

const InputField = React.forwardRef((props, ref) => {
  return (
    <div className={`${classes.input} ${props.hasError ? classes.error : ''}`}>
      {props.label && <label htmlFor={props.input.id}>{props.label}</label>}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default InputField;
