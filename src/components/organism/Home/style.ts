import styled from "styled-components";
import { slideLeft, wobble, maskSlide, slideRight } from "../../animations";

export const SSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  gap: 8rem;
  height: 100vh;
`;

export const STopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: ${slideLeft} 1s ease;
`;

export const SSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 3rem;
  background-color: #f8fafb3f;
  color: #090e16;
  font-weight: 900;
  width: 7rem;
  text-align: center;
  padding: 0 1rem 0 1rem;
`;

export const SEmoticon = styled.p`
  animation: ${wobble} 2s ease-in-out infinite;
`;

export const SH2 = styled.h2``;

export const SSpanDescription = styled.span``;

export const SIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SIcon = styled.img`
  width: 2rem;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;

export const SImage = styled.img`
  width: 25rem;
  animation: ${maskSlide} 2s ease-in-out forwards;
`;

export const SLinkContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: ${slideRight} 1s ease;
`;

export const SLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0 1.5rem 0 0;
  gap: 0.5rem;
`;

export const SLinkDownload = styled(SLink)`
  border-radius: 3rem;
  padding: 0 1.5rem 0 0;
  font-weight: 900;
  cursor: pointer;
`;

export const SLinkWhatsapp = styled(SLink)`
  border-radius: 3rem;
  padding: 0.6rem;
  background-color: #f8fafb3f;
  color: #090e16;
  font-weight: 900;
  cursor: pointer;
`;
