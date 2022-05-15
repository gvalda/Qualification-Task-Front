import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <NavLink to='/posts'>Posts</NavLink>
        </li>
        <li>
          <NavLink to='/posts/new'>New Post</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
