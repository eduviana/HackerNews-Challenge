import React from 'react'
import { PostContext } from "./PostContext";

export const PostProvider = ({children}) => {
  return (
    <PostContext.Provider value={{ hola: "Mundo" }}>
        {children}
    </PostContext.Provider>
  )
}
