import React from "react";
import styles from "../styles/Card.module.css";

const Card = () => {
  return (
    <div className="container">
      <div className={styles.card__container}>
        <div className={styles.card}>
          <div className={styles.author__container}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="#606060"
                d="M8 1.333c3.676 0 6.667 2.991 6.667 6.667 0 3.676-2.991 6.667-6.667 6.667-3.676 0-6.667-2.991-6.667-6.667 0-3.676 2.991-6.667 6.667-6.667zM8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm.667 8V4H7.333v5.333H12V8H8.667z"
              />
            </svg>
            <span className={styles.time}>3 hours ago by author</span>
          </div>
          <p className={styles.paragraph}>
            Yes, React is taking over front-end development. The question is
            why.
          </p>
        </div>
        <div className={styles.favorite}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="22"
            viewBox="0 0 24 22"
          >
            <path
              fill="#DD0031"
              d="M12 8.229C12.234 7.109 13.547 2 17.382 2 19.602 2 22 3.551 22 7.003c0 3.907-3.627 8.47-10 12.629C5.627 15.473 2 10.91 2 7.003c0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zM0 7.003C0 11.071 3.06 16.484 12 22c8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737C9.662-1.996 0-1.004 0 7.003z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
