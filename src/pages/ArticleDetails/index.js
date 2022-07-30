import { FiChevronsRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./styles.css";

const ArticleDetails = () => {
  return (
    <div className="container-articledetails">
      <div className="title-articledetails">
        <h1>Article Details</h1>
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

export { ArticleDetails };
