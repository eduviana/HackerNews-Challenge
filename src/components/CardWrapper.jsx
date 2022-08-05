import React, { useContext, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { PostContext } from "../context/PostContext";
import Card from "./Card";
import styles from "../styles/CardWrapper.module.css";
import { noEmptyPosts } from "../helpers/filterNoEmptyPosts";

const CardWrapper = () => {
  const { posts, isLoading } = useContext(PostContext);

  console.log(posts)
 
  return (
    <div className="container">
      {
        isLoading 
        ? <div className="center"><ClipLoader /></div>
        :  <div className={styles.cards__container}>
        {posts.map((post) => (
          <Card key={post.objectID} post={post} />
        ))}
      </div>
      }
     
    </div>
  );
};

export default CardWrapper;
