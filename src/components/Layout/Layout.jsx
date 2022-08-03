import React from "react";
import Header from './Header';
import PageSelector from './PageSelector';
import Paginator from './Paginator';


const Layout = ({ children }) => {
  return (
    <>
      <Header />
     <PageSelector />

      {children}

      <Paginator />
    </>
  );
};

export default Layout;
