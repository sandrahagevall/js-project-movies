import { Link } from "react-router-dom"
import styled from "styled-components"


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


export const MovieCard = ({ movie }) => {
  return (
    <MovieCardLink
      to={`/movie/${movie.id}`}
      aria-label={`View details for ${movie.title}`}
    >
      <MovieImage
        src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
        alt={`Poster for ${movie.title}`}
        loading="lazy"
      />
      <MovieOverlay>
        <h2>{movie.title}</h2>
        <p>Released {movie.release_date}</p>
      </MovieOverlay>
    </MovieCardLink>
  )
}