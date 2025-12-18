import { useEffect, useState } from "react"
import { Loader } from "../components/Loader"
import { MovieCard } from "../components/MovieCard"
import styled from "styled-components"


const apiKey = import.meta.env.VITE_TMDB_API_KEY

const PopularPage = styled.main`
  display: flex;
  flex-wrap: wrap;
`

export const Movies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`)
        }
        return response.json()
      })
      .then(data => {
        setMovies(data.results)
      })
      .catch(err => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return <Loader />

  if (error) {
    return <p style={{ color: "white" }}>{error}</p>
  }


  return (
    <PopularPage>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </PopularPage>
  )
}


