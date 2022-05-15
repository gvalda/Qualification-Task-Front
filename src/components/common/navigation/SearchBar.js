import React from 'react';
import InputField from '../inputs/InputField';

import classes from './SearchBar.module.css';

const SearchBar = (props) => {
  const { value: searchQuery, onChange: onSearchQueryChange } = props;
  const combinedClasses = `${props.className} ${classes.form}`;
  return (
    <form className={combinedClasses}>
      <InputField
        input={{
          id: 'search-bar',
          placeholder: 'Search posts!',
          value: searchQuery,
          onChange: (e) => onSearchQueryChange(e.target.value),
        }}
      />
    </form>
  );
};

export default SearchBar;
