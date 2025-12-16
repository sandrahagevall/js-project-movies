import { Link } from "react-router-dom"
import styled from "styled-components"

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`

const BackLink = styled(Link)`
  position: absolute;
  left: 3.5rem;
  top: 1rem;
  z-index: 4;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  filter: drop-shadow(2px 3px 4px rgba(0, 0, 0, 0.5));

  &:hover{
    text-decoration: underline;
  }

  @media (min-width: 768px){
    top: 2rem;
    align-items: left;
  }
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.6) 40%,
    rgba(0, 0, 0, 0.3) 100%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 2;
`

const Background = styled.div`
  position: absolute;
  inset: 0;
  background-image: ${({ $image }) =>
    $image ? `url(${$image})` : "none"};
  background-size: cover;
  background-color: black;
  min-height: 100vh;
  display: flex;
  background-size: cover;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  z-index: 1;
`

const DetailsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 3.1rem;
  min-height: 100dvh;
  z-index: 2;

  @media(min-width: 768px){
    flex-direction: row;
    justify-content: flex-start;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  z-index: 3;

  @media (min-width: 768px){
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 1rem;
  }
`

const Poster = styled.img`
  width: 200px;
  height: auto;
  border: 5px solid white;

  @media (min-width: 768px){
    width: 350px;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  align-items: left;

  @media (min-width: 768px) {
    
  }
`

const Title = styled.h1`
  font-size: 1.75rem;
`

const Overview = styled.p`
  font-size: 1rem;
`

const Info = styled.div`
  font-size: 1rem;
`


export const MovieDetailContent = ({ movie }) => {
  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null

  return (
    <>
      <PageWrapper>
        <BackLink to="/" aria-label="Back to movies">
          <img
            src="/backarrow.svg"
            alt="Back"
            width={24}
            height={24}
          />
          Movies
        </BackLink>
        <Background $image={backdropUrl} />
        <Overlay />
        <DetailsContainer>
          <ContentWrapper>
            <Poster src={posterUrl} alt={`Poster for ${movie.title}`} />
            <TextContent>
              <Title>{movie.title}</Title>
              <Overview>{movie.overview}</Overview>
              <Info>
                <p><strong>Rating:</strong> {movie.vote_average.toFixed(1)} / 10 ⭐</p>
              </Info>
            </TextContent>
          </ContentWrapper>
        </DetailsContainer>
      </PageWrapper>
    </>
  )
}

