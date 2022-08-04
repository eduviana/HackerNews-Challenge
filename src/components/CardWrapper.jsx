import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/PostContext";
import Card from "./Card";
import styles from "../styles/CardWrapper.module.css";

const CardWrapper = () => {
  const { posts, isLoading } = useContext(PostContext);

  const [noEmpty, setNoEmpty] = useState([])


  const noEmptyPosts = posts.filter(post => {

    const { author, story_title, story_url, created_at } = post;
    console.log(typeof(post.story_title))
      if(typeof(author) === 'object' || typeof(story_title) === 'object' || typeof(story_url) === 'object' || typeof(created_at) === 'object') {
        console.log("vinieron mal")
        return;
      } else {
        return post;
      }
  })

  const chargeNoEmpty = () => {
    setNoEmpty(noEmptyPosts)
  }

  useEffect(() => {
    chargeNoEmpty()
  }, [posts])
  

  console.log(noEmpty)

  
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
