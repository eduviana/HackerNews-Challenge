import React, { useEffect, useState } from "react";
import { noEmptyPosts } from "../helpers/filterNoEmptyPosts";
import { PostContext } from "./PostContext";

export const PostProvider = ({ children }) => {
  const [optionValue, setOptionValue] = useState(
    JSON.parse(localStorage.getItem("filter"))
  );
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [favoritePosts, setFavoritePosts] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const [hitsPerPage] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const hitsToShowPerPage = posts.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(posts.length / recordsPerPage);

  const favHitsToShowPerPage = favoritePosts.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPagesFav = Math.ceil(favoritePosts.length / recordsPerPage);

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(optionValue));
  }, [optionValue]);

  useEffect(() => {
    searchByDate(optionValue);
  }, [optionValue]);

  const searchByDate = async (value = "Angular") => {
    try {
      const url = `https://hn.algolia.com/api/v1/search_by_date?query=${value}&page=${currentPage}&hitsPerPage=${hitsPerPage}`;
      const response = await fetch(url);
      const { hits } = await response.json();
      setPosts(noEmptyPosts(hits));
      setIsLoading(false);
    } catch (error) {
      throw new Error("There was a problem with the data request");
    }
  };

  const optionPicked = (value) => {
    const clearValue = value.trim().toLowerCase();
    setOptionValue(clearValue);
  };

  const handlePostsFavorites = (id) => {
    const postSelected = posts.find((post) => post.objectID === id);
    const alreadyExist = favoritePosts.some(
      (fav) => fav.objectID === postSelected.objectID
    );
    if (!alreadyExist) {
      setFavoritePosts([...favoritePosts, postSelected]);
      localStorage.setItem("favorites", JSON.stringify(favoritePosts));
    }
    setIsLoading(false);
  };

  return (
    <PostContext.Provider
      value={{
        optionPicked,
        optionValue,
        hitsToShowPerPage,
        favHitsToShowPerPage,
        isLoading,
        nPages,
        nPagesFav,
        currentPage,
        setCurrentPage,
        handlePostsFavorites,
        favoritePosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
