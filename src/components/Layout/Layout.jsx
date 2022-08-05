import React, { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import Header from "./Header";
import PageSelector from "./PageSelector";
import Paginator from "./Paginator";

const Layout = ({ children }) => {
  const { nPages, currentPage, setCurrentPage } = useContext(PostContext);

  return (
    <>
      <Header />
      <PageSelector />

      {children}

      <Paginator
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Layout;
