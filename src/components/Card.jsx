import React from "react";
import { calculateHours } from "../helpers/calculateHours";
import styles from "../styles/Card.module.css";
import ClockIcon from "./ClockIcon";
import HeartRegularIcon from "./HeartRegularIcon";

const Card = ({ post }) => {
  // rel="noopener noreferrer"
  const { author, story_title, story_url, created_at } = post;

  return (
    <a className={styles.card__container} to={story_url} target="_blank">
      <div className={styles.card}>
        <div className={styles.author__container}>
          <ClockIcon />
          <span className={styles.time}>{`${calculateHours(
            created_at
          )} hours ago by ${author}`}</span>
        </div>
        <p className={styles.paragraph}>{story_title}</p>
      </div>
      <div className={styles.favorite}>
        <HeartRegularIcon />
      </div>
    </a>
  );
};

export default Card;
