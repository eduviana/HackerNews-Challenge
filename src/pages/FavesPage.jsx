import React, { useContext } from "react";
import CardWrapper from "../components/CardWrapper";
import Layout from "../components/Layout/Layout";
import Paginator from "../components/Layout/Paginator";
import { PostContext } from "../context/PostContext";

const FavesPage = () => {
  const { favoritePosts, isLoading, nPagesFav, currentPage, setCurrentPage } = useContext(PostContext);


  return (
    <Layout>
      <CardWrapper posts={favoritePosts} isLoading={isLoading} />
      <Paginator
        nPages={nPagesFav}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Layout>
  );
};

export default FavesPage;
