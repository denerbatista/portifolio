import styled from "styled-components";

export const SHeader = styled.header`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  color: white;
  margin: 1rem;
`;

export const SContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px; /* Ajuste conforme necessário */
  background-color: #7a4ae21e; /* Cor de fundo desejada */
  width: 80%;
  border-radius: 3rem;

  img{
    width: 25px;
  }
`;

export const SNavigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 20px; /* Espaçamento entre os itens da lista */
    cursor: pointer;
    &:hover{
      color: pink;
    }
  }
`;
