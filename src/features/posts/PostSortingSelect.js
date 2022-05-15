import React from 'react';
import DropBox from '../../components/common/inputs/DropBox';

const PostSortingSelect = (props) => {
  const options = [
    {
      label: 'Title',
      value: 'title',
    },
    {
      label: 'Body',
      value: 'body',
    },
    {
      label: 'User Id',
      value: 'userId',
    },
  ];

  const handleDropDownChange = (event) => {
    const value = event.target.value;
    if (options.some((el) => el.value === value)) props.onChange(value);
  };

  return (
    <DropBox
      dropDown={{
        id: 'sort-by',
        name: 'sort-by',
        onChange: handleDropDownChange,
      }}
      placeholder='Sort by'
      options={options}
      className={props.className}
    />
  );
};

export default PostSortingSelect;
