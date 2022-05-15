import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import BoxWidthDeterrent from '../../common/boxes/BoxWithDeterrent';
import MainHeader from '../../common/layouts/headers/MainHeader';

const Application = () => {
  return (
    <Fragment>
      <MainHeader />
      <BoxWidthDeterrent>
        <Outlet />
      </BoxWidthDeterrent>
    </Fragment>
  );
};

export default Application;
