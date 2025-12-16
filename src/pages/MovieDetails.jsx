import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MovieDetailContent } from "../components/MovieDetailContent"


export const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`


  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const data = await response.json()

      setMovie(data)
    }

    fetchMovieDetails()
  }, [id])


  if (!movie) {
    return <p>Loading...</p>
  }

  return (
    <>
      <MovieDetailContent movie={movie} />
    </>
  )
}