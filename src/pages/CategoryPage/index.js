import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";
import "./styles.css";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [categoryArticles, setCategoryArticles] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/categories/${params.id}/articles`
        );
        console.log(response.data.articles);
        setCategories(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getCategory();

    const getCategoryArt = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/categories/${params.id}/articles`
        );
        console.log(response.data.articles);
        setCategoryArticles(response.data.articles);
      } catch (e) {
        console.log(e.message);
      }
    };
    getCategoryArt();
  }, [params.id]);

  return (
    <div className="container-categorypage">
      <div className="title-categorypage">
        <h1>
          Articles{" "}
          <FiChevronsRight
            style={{ color: "tomato" }}
            className="icon-categorypage"
          />
          {categories.name}
        </h1>
      </div>
      <div className="container-category-article">
        {categoryArticles.map((article, index) => {
          return (
            <div className="category-article" key={index}>
              <h2>{article.title}</h2>
              <img
                className="image-category-article"
                src={article.imageUrl}
                alt=""
              />
              <p>
                <b>By</b> {article.author}
              </p>
              <NavLink
                style={{ color: "tomato" }}
                to={`/articledetails/${article.id}`}
              >
                <h2>
                  <FiChevronsRight />
                </h2>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { CategoryPage };
