import MoviePopularList from "./MoviePopularList";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./MovieDetail";

function MovieContent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MoviePopularList />} />
        <Route path=":id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default MovieContent;
