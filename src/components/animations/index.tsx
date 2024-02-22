import { keyframes } from "styled-components";

export const wobble = keyframes`
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg) scale(1.1);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg) scale(1.2);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg) scale(1.3);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg) scale(1.2);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg) scale(1.1);
  }

  to {
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

export const slideRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const slideLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const maskSlide = keyframes`
  0% {
    clip-path: polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%);
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
`;
