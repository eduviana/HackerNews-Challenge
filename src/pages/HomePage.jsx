import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import Layout from "../components/Layout/Layout";
import CardWrapper from "../components/CardWrapper";

const HomePage = () => {
  const { posts, isLoading } = useContext(PostContext);

  console.log(posts);

  return (
    <Layout>
      <Dropdown />
      <CardWrapper />
    </Layout>
  );
};

export default HomePage;
