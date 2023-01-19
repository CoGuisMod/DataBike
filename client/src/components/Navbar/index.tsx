import { useEffect, useState } from "react";

/* Navs imports */
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

/* Icons import */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showExtendedNav, setShowExtendedNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (windowWidth <= 768) {
      setShowExtendedNav(false);
    }
    if (windowWidth > 768) {
      setShowExtendedNav(true);
    }
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  return (
    <aside
      className={`fixed md:relative left-0 top-0 bg-slate-800 ${
        showExtendedNav ? "w-40" : "w-14"
      } h-full p-2 duration-200`}
    >
      <button
        onClick={() => setShowExtendedNav(!showExtendedNav)}
        className="absolute top-10 right-0 flex justify-center items-center bg-slate-900 rounded-full text-lg w-8 h-8 translate-x-1/2"
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`${showExtendedNav ? "rotate-180" : ""} duration-200`}
        />
      </button>

      {/* Aside content */}
      {showExtendedNav ? <NavDesktop /> : <NavMobile />}
    </aside>
  );
};

export default Navbar;
