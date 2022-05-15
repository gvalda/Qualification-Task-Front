import React from 'react';
import Box from '../../common/boxes/Box';

import classes from './PostNotFoundPage.module.css';

const PostNotFoundPage = () => {
  return (
    <Box className={classes.container}>
      <h4>Post not found</h4>
      <p>The post you are looking for does not exist.</p>
    </Box>
  );
};

export default PostNotFoundPage;
