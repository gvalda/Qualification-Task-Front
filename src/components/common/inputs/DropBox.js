import React from 'react';

import classes from './DropBox.module.css';

const DropBox = React.forwardRef((props, ref) => {
  const combinedClasses = `${classes['drop-box']} ${props.className}`;
  return (
    <div className={combinedClasses}>
      {props.label && <label htmlFor={props.dropDown.id}>{props.label}</label>}
      <select ref={ref} {...props.dropDown} defaultValue=''>
        {props.placeholder && (
          <option value='' hidden>
            {props.placeholder}
          </option>
        )}
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

export default DropBox;
