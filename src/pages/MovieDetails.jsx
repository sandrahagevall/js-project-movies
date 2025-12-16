import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MovieDetailContent } from "../components/MovieDetailContent"
import { Loader } from "../components/Loader"


export const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`


  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(API_URL)
        if (!response.ok) throw new Error(`HTTP ${response.status}`)

        const data = await response.json()
        setMovie(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMovieDetails()
  }, [id])


  if (loading) {
    return <Loader />
  }

  if (error) {
    return (
      <div style={{ color: "white", padding: "2rem" }}>
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    )
  }

  if (!movie) {
    return <p>Movie not found</p>
  }

  return (
    <>
      <MovieDetailContent movie={movie} />
    </>
  )
}