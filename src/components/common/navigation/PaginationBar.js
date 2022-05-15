import React from 'react';
import { Link } from 'react-router-dom';
import GoBackIcon from '../icons/GoBackIcon';
import GoForwardIcon from '../icons/GoForwardIcon';

import classes from './PaginationBar.module.css';

const PaginationBar = (props) => {
  const { totalPages, currentPage } = props;

  return (
    <div className={classes.pagination}>
      {currentPage !== 1 && (
        <Link to={`?page=${currentPage - 1}`} className={classes.arrow}>
          <GoBackIcon />
        </Link>
      )}
      {Array.from(Array(5), (x, i) => i + currentPage - Math.floor(5 / 2))
        .filter((page) => page > 0 && page <= totalPages)
        .map((page) => (
          <Link
            key={page}
            to={`?page=${page}`}
            className={currentPage === page ? classes.active : null}
          >
            {page}
          </Link>
        ))}
      {currentPage < totalPages && totalPages > 0 && (
        <Link to={`?page=${currentPage + 1}`} className={classes.arrow}>
          <GoForwardIcon />
        </Link>
      )}
    </div>
  );
};

export default PaginationBar;
