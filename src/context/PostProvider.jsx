import React, { useEffect, useState } from "react";
import { PostContext } from "./PostContext";

export const PostProvider = ({ children }) => {
  const [optionValue, setOptionValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const optionPicked = async (value) => {
    setOptionValue(value.toLowerCase().trim());
  };

  useEffect(() => {
    setIsLoading(true);
    const searchByDate = async (value = "angular") => {
      try {
        const url = `http://hn.algolia.com/api/v1/search_by_date?query=${value}&page=0`;
        const response = await fetch(url);
        const { hits } = await response.json();
        // const noEmptyHits = hits.map((hit) => {
        //   if (
        //     hit.author === null ||
        //     hit.story_title === null ||
        //     hit.created_at === null
        //   ) {
        //     return;
        //   } else {
        //     return hit;
        //   }
        // });
        setPosts(hits);
      } catch (error) {
        console.log(error);
      }
    };
    searchByDate(optionValue);
    setIsLoading(false);
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
