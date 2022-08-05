import React, { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import styles from "../../styles/Paginator.module.css";

const Paginator = ({ nPages, currentPage, setCurrentPage }) => {
  const { isLoading, posts } = useContext(PostContext);

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

{
  /* <button className={styles.button} onClick={() => setCurrentPage(1)}>
1
</button>
<button
className={styles.button__active}
onClick={() => setCurrentPage(2)}
>
2
</button>
<button className={styles.button} onClick={() => setCurrentPage(3)}>
3
</button>
<button className={styles.button} onClick={() => setCurrentPage(4)}>
4
</button>
<button className={styles.button} onClick={() => setCurrentPage(5)}>
5
</button>
<button className={styles.button} onClick={() => setCurrentPage(6)}>
6
</button>
<button className={styles.button} onClick={() => setCurrentPage(7)}>
7
</button>
<button className={styles.button} onClick={() => setCurrentPage(8)}>
8
</button>
<button className={styles.button} onClick={() => setCurrentPage(9)}>
9
</button> */
}
