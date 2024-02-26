import { useState, useEffect } from "react";
import Load from "../../organism/Load";
import Header from "../../organism/Header";
import Home from "../../organism/Home";

function LandPage() {
  const [switchAnime, setSwitchAnime] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setSwitchAnime(false);
    }, 5000);
  }, []);

  return (
    <>
      {switchAnime && <Load />}
      {!switchAnime && (
        <>
          <Header />
          <Home />
        </>
      )}
    </>
  );
}

export default LandPage;
