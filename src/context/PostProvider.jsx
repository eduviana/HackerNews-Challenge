import React, { useEffect, useState } from "react";
import { noEmptyPosts } from "../helpers/filterNoEmptyPosts";
import { PostContext } from "./PostContext";

export const PostProvider = ({ children }) => {
  const [optionValue, setOptionValue] = useState(
    JSON.parse(localStorage.getItem("filter"))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const[recordsPerPage] = useState(10);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = posts.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(posts.length / recordsPerPage);

  const optionPicked = (value) => {
    const clearValue = value.trim().toLowerCase();
    setOptionValue(clearValue);
  };

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(optionValue));
  }, [optionValue]);

  const searchByDate = async (value = "angular") => {
    try {
      const url = `http://hn.algolia.com/api/v1/search_by_date?query=${value}&page=${currentPage}&hitsPerPage=100`;
      const response = await fetch(url);
      const { hits } = await response.json();
      setPosts(noEmptyPosts(hits));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      throw new Error("There was a problem with the data request");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    searchByDate(optionValue);
  }, [optionValue, currentPage]);






  




  return (
    <PostContext.Provider
      value={{
        optionPicked,
        optionValue,
        posts,
        isLoading,
        nPages,
        currentPage,
        setCurrentPage
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
