import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const fillWidth = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

const LoadingContainer = styled.div`
  width: 300px; /* Ajuste conforme necessário */
  height: 20px; /* Ajuste conforme necessário */
  border: 1px solid #ccc;
  border-radius: 3rem;
  position: relative;
`;

const Fill = styled.div`
  height: 100%;
  background-color: #4caf50; /* Cor de preenchimento da barra de loading */
  border-radius: 3rem;
  animation: ${fillWidth} 5s linear forwards;
`;

const PercentageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
`;

const LoadingBar = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 1;
        if (newPercentage <= 100) {
          return newPercentage;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <LoadingContainer>
      <Fill style={{ width: `${percentage}%` }} />
      <PercentageText>{percentage}%</PercentageText>
    </LoadingContainer>
  );
};

export default LoadingBar;
