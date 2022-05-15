import React from 'react';
import { useCreatePostMutation } from '../../../app/services/posts';
import PostCreation from '../../../features/posts/PostCreation';
import LoadingSpinner from '../../common/animations/LoadingSpinner';
import Box from '../../common/boxes/Box';
import Card from '../../common/boxes/cards/Card';

import classes from './PostCreationPage.module.css';

const PostCreationPage = () => {
  const [createPost, { isLoading: isCreating, isSuccess, isError }] =
    useCreatePostMutation();

  if (isCreating) return <LoadingSpinner />;

  if (isSuccess)
    return (
      <Box className={classes.container}>
        <h4>Post created</h4>
        <p>The post has been created successfully.</p>
      </Box>
    );

  if (isError)
    return (
      <Box className={classes.container}>
        <h4>Error</h4>
        <p>An error has occurred.</p>
      </Box>
    );

  return (
    <Card className={classes['form-container']}>
      <PostCreation onCreate={createPost} />
    </Card>
  );
};

export default PostCreationPage;
