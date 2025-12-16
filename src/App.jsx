import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Movies } from "./pages/Movies"
import { MovieDetails } from "./pages/MovieDetails"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
