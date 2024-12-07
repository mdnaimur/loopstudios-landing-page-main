import theCuriosityDesktop from "../assets/images/desktop/image-curiosity.jpg";
import deepEarthDesktop from "../assets/images/desktop/image-deep-earth.jpg";
import makeFishyDesktop from "../assets/images/desktop/image-fisheye.jpg";
import fromUPDestop from "../assets/images/desktop/image-from-above.jpg";
import theGridDesktop from "../assets/images/desktop/image-grid.jpg";
import nightArcadeDesktop from "../assets/images/desktop/image-night-arcade.jpg";
import pocketDekstop from "../assets/images/desktop/image-pocket-borealis.jpg";
import sctDesktop from "../assets/images/desktop/image-soccer-team.jpg";
import theCuriosityMobile from "../assets/images/mobile/image-curiosity.jpg";
import deepEarthMobile from "../assets/images/mobile/image-deep-earth.jpg";
import makeFishyMobile from "../assets/images/mobile/image-fisheye.jpg";
import fromUPMobile from "../assets/images/mobile/image-from-above.jpg";
import theGridMobile from "../assets/images/mobile/image-grid.jpg";
import nightArcadeMobile from "../assets/images/mobile/image-night-arcade.jpg";
import pocketMobile from "../assets/images/mobile/image-pocket-borealis.jpg";
import sctMobile from "../assets/images/mobile/image-soccer-team.jpg";

export const Creation = () => {
  return (
    <>
      <div className="creations">
        <picture className="creation_img">
          <source srcSet={deepEarthDesktop} media="(min-width: 480px)" />
          <img src={deepEarthMobile} alt="" />
        </picture>

        <div className="creation_title">
          <span className="creation_title_text">Deep earth</span>
        </div>
      </div>

      <div className="creations">
        <picture className="creation_img">
          <source srcSet={nightArcadeDesktop} media="(min-width: 480px)" />
          <img src={nightArcadeMobile} alt="" />
        </picture>

        <div className="creation_title">
          <span className="creation_title_text"> Night arcade</span>
        </div>
      </div>
      <div className="creations">
        <picture className="creation_img">
          <source srcSet={sctDesktop} media="(min-width: 480px)" />
          <img src={sctMobile} alt="" />
        </picture>

        <div className="creation_title">
          <span className="creation_title_text"> Soccer team VR </span>
        </div>
      </div>

      <div className="creations">
        <picture className="creation_img">
          <source srcSet={theGridDesktop} media="(min-width: 480px)" />
          <img src={theGridMobile} alt="" />
        </picture>

        <div className="creation_title">
          <span className="creation_title_text">The grid </span>
        </div>
      </div>

      <div className="creations">
        <picture className="creation_img">
          <source srcSet={fromUPDestop} media="(min-width: 480px)" />
          <img src={fromUPMobile} alt="" />
        </picture>

        <div className="creation_title">
          <span className="creation_title_text">From up above VR </span>
        </div>
      </div>

      <div className="creations">
        <picture className="creation_img">
          <source srcSet={pocketDekstop} media="(min-width: 480px)" />
          <img src={pocketMobile} alt="" />
        </picture>

        <div className="creation_title">
          <span className="creation_title_text">Pocket borealis </span>
        </div>
      </div>

      <div className="creations">
        <picture className="creation_img">
          <source srcSet={theCuriosityDesktop} media="(min-width: 480px)" />
          <img src={theCuriosityMobile} alt="" />
        </picture>

        <div className="creation_title">
          <span className="creation_title_text">The curiosity</span>
        </div>
      </div>

      <div className="creations">
        <picture className="creation_img">
          <source srcSet={makeFishyDesktop} media="(min-width: 480px)" />
          <img src={makeFishyMobile} alt="" />
        </picture>

        <div className="creation_title">
          <span className="creation_title_text"> Make it fisheye</span>
        </div>
      </div>
    </>
  );
};
