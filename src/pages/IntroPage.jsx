import introDestopImage from "../assets/images/desktop/image-interactive.jpg";
import introMobileImage from "../assets/images/mobile/image-interactive.jpg";

export const IntroPage = () => {
  return (
    <section className="intro-section">
      <picture className="intro-img">
        <source srcSet={introDestopImage} media="(min-width:768px)" />
        <img src={introMobileImage} alt="Introduction image" />
      </picture>
      <div className="intro-content">
        <h2 className="content-title">The leader in interactive VR</h2>
        <p className="content-text">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};
