import React, { useRef } from 'react';
import Button from '../../components/common/inputs/Button';
import InputField from '../../components/common/inputs/InputField';

import classes from './PostCreation.module.css';

const PostCreation = (props) => {
  const userIdRef = useRef(null);
  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const { onCreate } = props;

  const handlePostCreation = (e) => {
    e.preventDefault();
    const post = {
      userId: userIdRef.current.value,
      title: titleRef.current.value,
      body: bodyRef.current.value,
    };
    onCreate(post);
  };

  return (
    <form className={classes.form} onSubmit={handlePostCreation}>
      <div className={classes.field}>
        <InputField
          label='User Id'
          ref={userIdRef}
          input={{
            id: 'userId',
            name: 'userId',
            type: 'number',
            min: '0',
            step: '1',
          }}
        />
      </div>
      <div className={classes.field}>
        <InputField
          label='Title'
          ref={titleRef}
          input={{
            id: 'title',
            name: 'title',
            type: 'text',
          }}
        />
      </div>
      <div className={classes.field}>
        <InputField
          label='Body'
          ref={bodyRef}
          input={{
            id: 'body',
            name: 'body',
            type: 'text',
          }}
        />
      </div>
      <Button
        button={{
          type: 'submit',
        }}
      >
        Create Post
      </Button>
    </form>
  );
};

export default PostCreation;
