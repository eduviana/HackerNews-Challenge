import { useContext } from "react";
import { PostContext } from "../context/PostContext";

import Dropdown from "../components/Dropdown";
import Layout from "../components/Layout/Layout";
import CardWrapper from "../components/CardWrapper";
import Paginator from '../components/Layout/Paginator';

const HomePage = () => {
  const { posts, isLoading, nPages, currentPage, setCurrentPage } = useContext(PostContext);


  return (
    <Layout>
      <Dropdown />
      <CardWrapper posts={posts} isLoading={isLoading} />
      <Paginator
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Layout>
  );
};

export default HomePage;
