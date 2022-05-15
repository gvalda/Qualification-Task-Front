import React from 'react';
import NavigationBar from '../../navigation/NavigationBar';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <NavigationBar />
    </header>
  );
};

export default MainHeader;
