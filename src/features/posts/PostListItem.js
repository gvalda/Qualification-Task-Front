import React from 'react';
import { Link } from 'react-router-dom';

import classes from './PostListItem.module.css';

const PostListItem = (props) => {
  const { id, title, body } = props;

  const shortenedTitle =
    title.length > 25 ? title.substring(0, 25) + '...' : title;
  const shortenedBody =
    body?.length > 50 ? body.substring(0, 50) + '...' : body;

  return (
    <li className={classes.item}>
      <Link to={`/posts/${id}`}>
        <h4>{shortenedTitle}</h4>
        <p>{shortenedBody}</p>
      </Link>
    </li>
  );
};

export default PostListItem;
