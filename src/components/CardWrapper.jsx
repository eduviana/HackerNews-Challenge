import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import Card from "./Card";
import styles from "../styles/CardWrapper.module.css";

const CardWrapper = () => {
  const { posts, isLoading } = useContext(PostContext);

  console.log(posts);

  return (
    <div className="container">
      <div className={styles.cards__container}>
        {isLoading
          ? "Loading..."
          : posts.map((post) => <Card key={post.objectID} post={post} />)}
      </div>
    </div>
  );
};

export default CardWrapper;
