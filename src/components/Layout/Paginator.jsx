import React, { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import styles from "../../styles/Paginator.module.css";

const Paginator = ({ nPages, currentPage, setCurrentPage }) => {
  const { isLoading } = useContext(PostContext);

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {!isLoading && (
        <nav>
          <div className={styles.paginator__container}>
            <button className={styles.button} onClick={prevPage}>
              {"<"}
            </button>

            {pageNumbers.map((pgNumber) => (
              <button
                key={pgNumber}
                className={`${styles.button} ${
                  currentPage === pgNumber ? styles.button__active : ""
                }`}
                onClick={() => setCurrentPage(pgNumber)}
              >
                {pgNumber}
              </button>
            ))}

            <button className={styles.button} onClick={nextPage}>
              {">"}
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Paginator;
