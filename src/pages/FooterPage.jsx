import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";
import brandLogo from "../assets/images/logo.svg";

export const FooterPage = () => {
  return (
    <footer className="footer">
      <div className="footer_navigation">
        <a href="#" className="brand_logo">
          <img src={brandLogo} alt="" />
        </a>
        <div>
          <ul className="footer_navlink">
            <li>
              <a className="hoverable" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hoverable" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="hoverable" href="#">
                Events
              </a>
            </li>
            <li>
              <a className="hoverable" href="#">
                Products
              </a>
            </li>
            <li>
              <a className="hoverable" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="socials">
        <div className="social_links">
          <a className="hoverable" href="https://www.facebook.com">
            {" "}
            <img src={facebook} alt="" />{" "}
          </a>
          <a className="hoverable" href="https://www.twitter.com">
            {" "}
            <img src={twitter} alt="" />{" "}
          </a>
          <a className="hoverable" href="https://www.pinterest.com">
            {" "}
            <img src={pinterest} alt="" />{" "}
          </a>
          <a className="hoverable" href="https://www.instagram.com">
            {" "}
            <img src={instagram} alt="" />{" "}
          </a>
        </div>
        <span className="copyright">
          &#169; 2021 Loopstudios. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
