import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";

import { calculateHours } from "../helpers/calculateHours";
import styles from "../styles/Card.module.css";
import ClockIcon from "./ClockIcon";
import HeartRegularIcon from "./HeartRegularIcon";
import HeartSolidIcon from "./HeartSolidIcon";

const Card = ({ post }) => {
  const { author, story_title, story_url, created_at, objectID } = post;

  const { handlePostsFavorites } = useContext(PostContext);

  const [toggleIcon, setToggleIcon] = useState(false);

  return (
    <div className={styles.wrapper}>
      <a className={styles.card__container} href={story_url} target="_blank">
        <div className={styles.card}>
          <div className={styles.author__container}>
            <ClockIcon />
            <span className={styles.time}>{`${calculateHours(
              created_at
            )} hours ago by ${author}`}</span>
          </div>
          <p className={styles.paragraph}>{story_title}</p>
        </div>
      </a>
      <a
        className={styles.favorite}
        // href="#"
        onClick={(e) => {
          handlePostsFavorites(objectID);
          setToggleIcon(!toggleIcon);
        }}
      >
        {toggleIcon ? <HeartSolidIcon /> : <HeartRegularIcon />}
      </a>
    </div>
  );
};

export default Card;
