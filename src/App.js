import { Routes, Route } from "react-router-dom";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar/Navbar";
import SearchFeed from "./Components/SearchFeed";
import VideoDetail from "./Components/VideoDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:searchInput" element={<SearchFeed />} />
      </Routes>
    </>
  );
}

export default App;
