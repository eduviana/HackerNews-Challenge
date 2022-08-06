import React, { useContext } from "react";

import Header from "./Header";
import PageSelector from "./PageSelector";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <PageSelector />

      {children}
    </>
  );
};

export default Layout;
