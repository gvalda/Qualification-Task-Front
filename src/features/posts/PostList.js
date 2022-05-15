import React, { Fragment } from 'react';
import PostListItem from './PostListItem';

import classes from './PostList.module.css';
import PaginationBar from '../../components/common/navigation/PaginationBar';

const PostList = (props) => {
  const { posts, currentPage, totalPages, showPagination } = props;

  if (!posts || posts.length === 0) return <div>No posts</div>;

  return (
    <Fragment>
      <ul className={classes.list}>
        {posts.map((post) => (
          <PostListItem
            key={post.id}
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </ul>
      {showPagination && (
        <PaginationBar totalPages={totalPages} currentPage={currentPage} />
      )}
    </Fragment>
  );
};

export default PostList;
