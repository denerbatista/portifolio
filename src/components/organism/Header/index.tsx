import { SContainer, SHeader, SNavigation } from "./style";

function Header() {
  return (
    <>
      <SHeader>
        <SContainer>
          <img src="src\assets\Logo.svg" alt="" />
          <SNavigation>
            <ul>
              <li>Home</li>
              <li>Sobre mim</li>
              <li>Portifólio</li>
              <li>Skills</li>
              <li>Carreira</li>
              <li>Recomendações</li>
              <li>Contato</li>
            </ul>
          </SNavigation>
        </SContainer>
      </SHeader>
    </>
  );
}

export default Header;
