import { FiChevronsRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { ArticleCard } from "../../components/ArticleCard";
import "./styles.css";

const Homepage = ({ articleList }) => {
  // newest articles first
  const compareArticles = (articleA, articleB) => {
    return articleB.unixTimeStamp - articleA.unixTimeStamp;
  };
  const newestArticles = [...articleList] // copy array
    .sort(compareArticles); // sort by newest article with callback function

  return (
    <div className="container-homepage">
      <div className="title-homepage">
        <h1>Lastest news</h1>
      </div>
      <div className="articles-homepage">
        {newestArticles
          ? newestArticles.map((article, index) => {
              return (
                <div key={index}>
                  <ArticleCard
                    id={article.id}
                    title={article.title}
                    author={article.author}
                    categoryId={article.categoryId}
                    category={article.category}
                    content={article.content}
                    imageUrl={article.imageUrl}
                    publishDate={article.publishDate}
                    unixTimeStamp={article.unixTimeStamp}
                  />
                </div>
              );
            })
          : "Loading.."}
      </div>
      <div className="button-icon">
        <NavLink to="/searcharticle">
          <button className="button-homepage">
            <h3 className="text-button">
              Search articles{" "}
              <FiChevronsRight
                style={{ color: "tomato" }}
                className="icon-homepage"
              />
            </h3>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export { Homepage };
