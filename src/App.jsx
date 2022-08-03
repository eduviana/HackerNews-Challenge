import "normalize.css";
import { Route, Routes } from "react-router-dom";
import { PostProvider } from "./context/PostProvider";
import HomePage from "./pages/HomePage";
import FavesPage from "./pages/FavesPage";

import "./global.css";



function App() {
  return (
    <PostProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="faves" element={<FavesPage />} />
      </Routes>
    </PostProvider>
  );
}

export default App;
