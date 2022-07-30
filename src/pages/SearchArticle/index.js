import { FiChevronsRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./styles.css";

const SearchArticle = () => {
  return (
    <div className="container-searcharticle">
      <div className="title-searcharticle">
        <h1>Search Article</h1>
      </div>
      {/* <div className="button-icon">
        <NavLink to="/">
          <button className="button-searcharticle">
            <h3 className="text-button">
              Go to articles <FiChevronsRight className="icon-searcharticle" />
            </h3>
          </button>
        </NavLink>
      </div> */}
    </div>
  );
};

export { SearchArticle };
