import React from "react";
import { calculateHours } from "../helpers/calculateHours";
import styles from "../styles/Card.module.css";
import ClockIcon from "./ClockIcon";
import HeartRegularIcon from "./HeartRegularIcon";

const Card = ({ post }) => {
  const { author, story_title, created_at } = post;

  return (
    <div className={styles.card__container}>
      <div className={styles.card}>
        <div className={styles.author__container}>
          <ClockIcon />
          <span className={styles.time}>{`${calculateHours(created_at)} hours ago by ${author}`}</span>
        </div>
        <p className={styles.paragraph}>{story_title}</p>
      </div>
      <div className={styles.favorite}>
       <HeartRegularIcon />
      </div>
    </div>
  );
};

export default Card;
