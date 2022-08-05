import { useContext } from "react";
import { PostContext } from "../context/PostContext";

import Dropdown from "../components/Dropdown";
import Layout from "../components/Layout/Layout";
import CardWrapper from "../components/CardWrapper";

const HomePage = () => {
  const { posts, isLoading } = useContext(PostContext);

  return (
    <Layout>
      <Dropdown />
      <CardWrapper posts={posts} isLoading={isLoading} />
    </Layout>
  );
};

export default HomePage;
