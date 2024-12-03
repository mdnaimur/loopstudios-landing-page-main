import { Creations } from "./Creations";
import { FooterPage } from "./FooterPage";
import { HeaderPage } from "./HeaderPage";
import { IntroPage } from "./IntroPage";

export const HomePage = () => {
  return (
    <div>
      <HeaderPage />
      <IntroPage />
      <Creations />
      <FooterPage />
    </div>
  );
};
