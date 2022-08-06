import React, { useContext } from "react";
import { ClipLoader } from "react-spinners";
import Card from "./Card";
import styles from "../styles/CardWrapper.module.css";

const CardWrapper = ({ posts, isLoading }) => {
  return (
    <div className="container">
      {isLoading ? (
        <div className="center">
          <ClipLoader />
        </div>
      ) : (
        <div className={styles.cards__container}>
          {posts.map((post) => (
            <Card key={post.objectID} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardWrapper;
