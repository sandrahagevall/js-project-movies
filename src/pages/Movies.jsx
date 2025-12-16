import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Loader } from "../components/Loader"
import styled from "styled-components"

const apiKey = import.meta.env.VITE_TMDB_API_KEY

const PopularPage = styled.main`
  display: flex;
  flex-wrap: wrap;
`

const MovieOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  padding: 16px;
  display: none;

  h2 {
    margin: 0;
    font-size: 30px;
  }

  p {
    margin: 0;
    padding-top: 25px;
    font-size: 16px;
  }
`

const MovieCardLink = styled(Link)`
  width: 100%;
  position: relative;
  text-decoration: none;
  color: white;
  cursor: pointer;

  @media (min-width: 370px) {
    width: 50%;
  }

  @media (min-width: 570px) {
    width: 33.33%;
  }

  @media (min-width: 820px) {
    width: 25%;
  }

  &:hover ${MovieOverlay} {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`

const MovieImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
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
          throw new Error(`HTTP ${response.status}`)
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
      {movies.map((movie) => (
        <MovieCardLink
          key={movie.id}
          to={`/movie/${movie.id}`}
          aria-label={`View details for ${movie.title}`}
        >
          <MovieImage
            src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
            alt={`Poster for ${movie.title}`}
            width="342"
            height="513"
            loading="lazy"
          />

          <MovieOverlay>
            <h2>{movie.title}</h2>
            <p>Released {movie.release_date}</p>
          </MovieOverlay>
        </MovieCardLink>

      ))}
    </PopularPage>
  )
}


