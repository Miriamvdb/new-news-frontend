import { NavLink } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";
import "./styles.css";

const ArticleCard = ({ id, title, imageUrl, author, categoryId, category }) => {
  return (
    <div className="container-articlecard">
      <div className="image-articlecard">
        <img className="image-articlecard" src={imageUrl} alt={title} />
      </div>
      <div className="text-articlecard">
        <h2>{title}</h2>
        <p>
          <b>By</b> {author}
        </p>
        <p>
          <b>Category </b>
          <NavLink style={{ color: "black" }} to={`/categories/${categoryId}`}>
            {category.name}
          </NavLink>
        </p>
        <NavLink style={{ color: "tomato" }} to={`/articledetails/${id}`}>
          <h2>
            <FiChevronsRight />
          </h2>
        </NavLink>
      </div>
    </div>
  );
};

export { ArticleCard };
