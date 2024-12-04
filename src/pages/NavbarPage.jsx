import brandLogo from "../assets/images/logo.svg";

export const NavbarPage = () => {
  return (
    <header className="flex justify-center items-center sm:w-full sm:top-0 sm:left-0 sm:z-50 ">
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
          <button></button>
        </div>
        <div
          className="flex justify-center items-center transition-all
            sm:absolute sm:justify-start sm:px-4 sm:top-0 sm:left-0
        "
        >
          <ul
            className=" text-primary-1
          "
          >
            <li className="nav-item">
              <a className="hoverable" href="#">
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
