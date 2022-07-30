import { NavLink } from "react-router-dom";
import { RiNewspaperLine } from "react-icons/ri";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="container-navbar">
      <NavLink className="logo-to-home" to="/">
        <p className="logo-to-home">
          new<b>News</b> <RiNewspaperLine />
        </p>
      </NavLink>
    </div>
  );
};

export { NavBar };
