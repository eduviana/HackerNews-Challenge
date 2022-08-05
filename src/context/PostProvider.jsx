import React, { useEffect, useState } from "react";
import { noEmptyPosts } from "../helpers/filterNoEmptyPosts";
import { PostContext } from "./PostContext";

export const PostProvider = ({ children }) => {
  const [optionValue, setOptionValue] = useState(JSON.parse(localStorage.getItem("filter")));
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const optionPicked = (value) => {
    const clearValue = value.trim().toLowerCase();
    setOptionValue(clearValue);
  };

  
  

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(optionValue));
  }, [optionValue])
  

  useEffect(() => {
    setIsLoading(true);
    const searchByDate = async (value = "angular") => {
      try {
        const url = `http://hn.algolia.com/api/v1/search_by_date?query=${value}&hitsPerPage=20`;
        const response = await fetch(url);
        const { hits } = await response.json();
        setPosts(noEmptyPosts(hits));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        throw new Error("There was a problem with the data request");
      }
    };
    searchByDate(optionValue);
  }, [optionValue]);

  return (
    <PostContext.Provider
      value={{
        optionPicked,
        optionValue,
        posts,
        isLoading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
