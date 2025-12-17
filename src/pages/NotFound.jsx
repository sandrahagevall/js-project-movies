import styled from "styled-components"
import { Link } from "react-router-dom"

const NotFoundWrapper = styled.main`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: white;
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;     
  text-align: center;
  padding: 20px;
`

const ErrorCode = styled.div`
  font-size: 120px;
  font-weight: 900;
  background: linear-gradient(45deg, #ff6b6b, #ee5a6f, #ffd93d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
`

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 16px;
  font-weight: 700;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`

const Message = styled.p`
  font-size: 18px;
  margin-bottom: 32px;
  max-width: 500px;
  line-height: 1.6;
  opacity: 0.9;
`

const BackButton = styled(Link)`
  background: linear-gradient(45deg, #ff6b6b, #ee5a6f);
  color: white;
  padding: 14px 32px;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.5);
  }
`

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <ErrorCode>404</ErrorCode>
      <Title>Oops! Movie Not Found</Title>
      <Message>
        The movie you're looking for doesn't exist or has gone missing from our database.
        Let's get you back to browsing awesome films! 🍿
      </Message>
      <BackButton to="/">Back to Movies</BackButton>
    </NotFoundWrapper>
  )
}

export default NotFound
