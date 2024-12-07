import "./App.css";

import { Creations } from "./pages/Creations";
import { FooterPage } from "./pages/FooterPage";
import { HomePage } from "./pages/HomePage";
import { IntroPage } from "./pages/IntroPage";

function App() {
  return (
    <>
      <div className="App">
        <div className="min-h-screen relative overflow-hidden">
          <div className="min-h-screen bg-no-repeat bg-cover bg-center relative flex flex-wrap justify-center items-center lg:flex-nowrap lg:flex-col lg:justify-start lg:items-stretch sm:bg-[url('../images/mobile/image-hero.jpg')]  lg:bg-[url('../images/desktop/image-hero.jpg')]">
            <HomePage />
          </div>
          <IntroPage />
          <Creations />
          <FooterPage />
        </div>
      </div>
    </>
  );
}

export default App;
