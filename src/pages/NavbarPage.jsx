import { useState } from "react";
import CloseIcon from "../assets/images/icon-close.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import brandLogo from "../assets/images/logo.svg";

export const NavbarPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`flex justify-center items-center sm:w-full sm:top-0 sm:left-0 sm:z-50 ${
        !isOpen ? "absolute" : "fixed"
      } lg:static`}
    >
      <nav className="flex flex-wrap basis-full justify-between items-center sm:px-4 sm:pt-16 sm:relative md:px-8 lg:px-16 lg:pt-8 lg:flex-row lg:justify-between xl:px-[10%]">
        <div className="flex sm:justify-between sm:z-50 sm:basis-full lg:basis-auto">
          <a
            href="#"
            className="flex sm:justify-between sm:z-50 sm:basis-full lg:basis-auto"
          >
            <img
              src={brandLogo}
              alt="Brand Logo"
              className="grid place-content-center"
            />
          </a>
          <button
            className="w-8 aspect-square bg-no-repeat transition-all lg:hidden"
            aria-expanded="false"
            aria-controls="navigation-links"
            aria-label="hamburger"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {!isOpen ? (
              <img src={hamburger} alt="Hamburger" />
            ) : (
              <img src={CloseIcon} alt="Hamburger" />
            )}
          </button>
        </div>
        <div
          id="navigation-links"
          className={`flex justify-center items-center transition-all
            sm:absolute sm:justify-start sm:px-4 sm:top-0 sm:left-0 sm:w-screen sm:h-screen sm:bg-primary-2 sm:z-[49]
            md:px-8 
            lg:static lg:w-auto lg:h-auto lg:text-base lg:bg-transparent lg:p-0
            ${
              !isOpen ? "sm:translate-x-[-100%]" : "sm:translate-x-0"
            } lg:translate-x-0`}
        >
          <ul className="nav-items">
            <li className="nav-item">
              <a className="hoverablel " href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="hoverable" href="#">
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a className="hoverable" href="#">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="hoverable" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="hoverable" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
