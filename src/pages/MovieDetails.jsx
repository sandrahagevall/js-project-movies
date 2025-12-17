import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MovieDetailContent } from "../components/MovieDetailContent"
import { Loader } from "../components/Loader"
import NotFound from "../pages/NotFound"


export const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`


  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true)
        setError(false)

        const response = await fetch(API_URL)

        if (!response.ok) throw new Error("Not found")

        const data = await response.json()
        setMovie(data)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchMovieDetails()
  }, [id])


  if (loading) return <Loader />

  if (error) return <NotFound />


  return (
    <>
      <MovieDetailContent movie={movie} />
    </>
  )
}