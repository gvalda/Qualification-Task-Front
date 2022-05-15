import React, { Fragment, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetPostsQuery } from '../../../app/services/posts';
import { POSTS_PER_PAGE } from '../../../config';
import PostList from '../../../features/posts/PostList';
import PostSortingSelect from '../../../features/posts/PostSortingSelect';
import LoadingSpinner from '../../common/animations/LoadingSpinner';
import SearchBar from '../../common/navigation/SearchBar';

import classes from './PostListPage.module.css';

const PostListPage = () => {
  const [searchQueryParams, setSearchQueryParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [searchBarQuery, setSearchBarQuery] = useState('');
  const [sortBy, setSortBy] = useState('');

  const { data: posts, isLoading, isFetching } = useGetPostsQuery();

  useEffect(() => {
    const pageQuery = parseInt(searchQueryParams.get('page'));
    if (pageQuery) {
      setPage(pageQuery);
    }
  }, [searchQueryParams, setSearchQueryParams, setPage]);

  const handleSearchBarQueryChange = (value) => {
    setSearchBarQuery(value);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  if (isLoading || isFetching) return <LoadingSpinner />;

  const filteredPosts =
    posts?.filter((post) => {
      return (
        post.title?.toLowerCase().includes(searchBarQuery.toLowerCase()) ||
        post.body?.toLowerCase().includes(searchBarQuery.toLowerCase())
      );
    }) || [];

  const sortedPosts = sortBy
    ? filteredPosts.sort((a, b) => {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      })
    : filteredPosts;

  const paginatedPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (page - 1),
    POSTS_PER_PAGE * page
  );

  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  return (
    <Fragment>
      <header className={classes.header}>
        <SearchBar
          value={searchBarQuery}
          onChange={handleSearchBarQueryChange}
          className={classes['search-bar']}
        />
        <PostSortingSelect
          onChange={handleSortChange}
          className={classes['sorting-select']}
        />
      </header>
      <PostList
        posts={paginatedPosts}
        currentPage={page}
        totalPages={totalPages}
        showPagination
      />
    </Fragment>
  );
};

export default PostListPage;
