import React, { useEffect, useState } from "react";
import { noEmptyPosts } from "../helpers/filterNoEmptyPosts";
import { PostContext } from "./PostContext";

export const PostProvider = ({ children }) => {
  const [optionValue, setOptionValue] = useState(
    JSON.parse(localStorage.getItem("filter"))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [favoritePosts, setFavoritePosts] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  
  

  const [hitsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const nPages = Math.ceil(posts.length / recordsPerPage);

  const nPagesFav = Math.ceil(favoritePosts.length / recordsPerPage);

  const optionPicked = (value) => {
    const clearValue = value.trim().toLowerCase();
    setOptionValue(clearValue);
  };

  const handlePostsFavorites = (id) => {
    setIsLoading(true);
    const postSelected = posts.find((post) => post.objectID === id);
    console.log(postSelected)
    const alreadyExist = favoritePosts.some(fav => fav.objectID === postSelected.objectID);
    console.log(alreadyExist)
    if(!alreadyExist) {
      setFavoritePosts([...favoritePosts, postSelected]);
      localStorage.setItem("favorites", JSON.stringify(favoritePosts))
      console.log(favoritePosts)
    }
    setIsLoading(false);
  };

  // useEffect(() => {
  //   localStorage.setItem("favorites", JSON.stringify(favoritePosts));
  // }, [favoritePosts])
  

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(optionValue));
  }, [optionValue]);

  const searchByDate = async (value = "angular") => {
    try {
      const url = `http://hn.algolia.com/api/v1/search_by_date?query=${value}&page=${currentPage}&hitsPerPage=${hitsPerPage}`;
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
        nPagesFav,
        currentPage,
        setCurrentPage,
        handlePostsFavorites,
        favoritePosts
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
