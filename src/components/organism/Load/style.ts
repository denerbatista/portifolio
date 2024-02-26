import styled from "styled-components";
import { zoomInOut } from "../../animations";

export const SSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  gap: 2rem;
  z-index: 99;
`;

export const SMaskAnime = styled.section`
  display: flex;
  justify-content: center;
  img {
    width: 100%;
  }
  animation: ${zoomInOut} 1s infinite;
`;
