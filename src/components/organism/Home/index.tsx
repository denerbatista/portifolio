import {
  SSection,
  STopSection,
  SSpan,
  SH2,
  SSpanDescription,
  SIconContainer,
  SIcon,
  SImage,
  SLinkContainer,
  SLinkDownload,
  SLinkWhatsapp,
  SEmoticon,
} from "./style";

function Home() {
  return (
    <>
      <SSection>
        <STopSection>
          <SSpan>
            <SEmoticon>✌🏻</SEmoticon>
            Saudações
          </SSpan>
          <SH2>Dener Gomes Batista</SH2>
          <SSpanDescription>Fulstack developer</SSpanDescription>
          <SIconContainer>
            <SIcon src="src\assets\linkedin.svg" alt="ícone linkedin" />
            <SIcon src="src\assets\github.svg" alt="ícone github" />
            <SIcon
              width="45rem"
              src="src\assets\e-mail.png"
              alt="ícone e-mail"
            />
          </SIconContainer>
        </STopSection>

        <SImage src="src\assets\avatar-and-Icons.svg" alt="avatar de Dener" />

        <SLinkContainer>
          <SLinkDownload>
            <SIcon
              src="src\assets\download.png"
              alt="download curriculo icon"
            />
            <p>Baixar CV</p>
          </SLinkDownload>
          <SLinkWhatsapp>
            <SIcon src="src\assets\whatsapp.png" alt="ícone whatsapp" />
            Vamos conversar
          </SLinkWhatsapp>
        </SLinkContainer>
      </SSection>
    </>
  );
}

export default Home;
