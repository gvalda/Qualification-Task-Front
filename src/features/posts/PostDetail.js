import React from 'react';
import Badge from '../../components/common/badges/Badge';

import classes from './PostDetail.module.css';

const PostDetail = (props) => {
  const { post } = props;

  return (
    <article className={classes.item}>
      <Badge className={classes.badge}>
        <p>user: {post.userId}</p>
      </Badge>
      <header>
        <h1>{post.title}</h1>
      </header>
      <section>
        <p>{post.body}</p>
      </section>
    </article>
  );
};

export default PostDetail;
