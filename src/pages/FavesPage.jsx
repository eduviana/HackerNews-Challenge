import React, { useContext } from "react";
import CardWrapper from "../components/CardWrapper";
import Layout from "../components/Layout/Layout";
import Paginator from "../components/Layout/Paginator";
import { PostContext } from "../context/PostContext";

const FavesPage = () => {
  const { favHitsToShowPerPage, isLoading, nPagesFav, currentPage, setCurrentPage } = useContext(PostContext);


  return (
    <Layout>
      <CardWrapper posts={favHitsToShowPerPage} isLoading={isLoading} />
      <Paginator
        nPages={nPagesFav}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Layout>
  );
};

export default FavesPage;
