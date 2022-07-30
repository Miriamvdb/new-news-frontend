import { FiChevronsRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Homepage = () => {
  return (
    <div className="container-homepage">
      <div className="title-homepage">
        <h1>Homepage</h1>
      </div>
      <div className="button-icon">
        <NavLink to="/searcharticle">
          <button className="button-homepage">
            <h3 className="text-button">
              Go to articles <FiChevronsRight className="icon-homepage" />
            </h3>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export { Homepage };
