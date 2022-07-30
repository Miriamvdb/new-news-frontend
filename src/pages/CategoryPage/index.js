import { FiChevronsRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./styles.css";

const CategoryPage = () => {
  return (
    <div className="container-categorypage">
      <div className="title-categorypage">
        <h1>Categories</h1>
      </div>
      {/* <div className="button-icon">
        <NavLink to="/">
          <button className="button-categorypage">
            <h3 className="text-button">
              Go to articles <FiChevronsRight className="icon-categorypage" />
            </h3>
          </button>
        </NavLink>
      </div> */}
    </div>
  );
};

export { CategoryPage };
