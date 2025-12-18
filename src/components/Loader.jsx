import styled, { keyframes } from "styled-components"


const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const LoaderWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
`

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top-color: white;
  animation: ${spin} 0.9s linear infinite;
`


export const Loader = () => {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  )
}