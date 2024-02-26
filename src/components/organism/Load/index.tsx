import LoadingBar from "../../atoms/LoadingBar";
import { SMaskAnime, SSection } from "./style";

function Load() {
  return (
    <>
      <SSection>
        <SMaskAnime>
          <img src="src/assets/anime.svg" alt="" />
        </SMaskAnime>
        <LoadingBar />
      </SSection>
    </>
  );
}

export default Load;
