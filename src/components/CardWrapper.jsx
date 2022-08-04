import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/PostContext";
import Card from "./Card";
import styles from "../styles/CardWrapper.module.css";
import { noEmptyPosts } from "../helpers/filterNoEmptyPosts";

const CardWrapper = () => {
  
  const { posts, isLoading } = useContext(PostContext);
  const [noEmpty, setNoEmpty] = useState([]);

  useEffect(() => {
    setNoEmpty(noEmptyPosts(posts));
  }, [posts]);

  console.log(noEmpty);

  return (
    <div className="container">
      <div className={styles.cards__container}>
        {isLoading
          ? "Loading..."
          : noEmpty.map((post) => <Card key={post.objectID} post={post} />)}
      </div>
    </div>
  );
};

export default CardWrapper;
