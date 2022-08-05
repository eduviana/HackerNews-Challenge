import React, { useContext } from "react";
import CardWrapper from "../components/CardWrapper";
import Layout from "../components/Layout/Layout";
import { PostContext } from "../context/PostContext";

const FavesPage = () => {
  const { favoritePosts, isLoading } = useContext(PostContext);

  return (
    <Layout>
      <CardWrapper posts={favoritePosts} isLoading={isLoading} />
    </Layout>
  );
};

export default FavesPage;
