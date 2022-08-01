import { ArticleCard } from "../../components";
import { CgSearch } from "react-icons/cg";
import { useState } from "react";
import "./styles.css";

const SearchArticle = ({ articleList }) => {
  const [filterArticle, setFilterArticle] = useState("");

  // filter array after searching article in input
  const updateFilterArticle = (event) => {
    setFilterArticle(event.target.value);
  };
  const filteredArticles = [...articleList].filter(
    (article) =>
      article.title.toLowerCase().includes(filterArticle) ||
      article.author.toLowerCase().includes(filterArticle) ||
      article.category.name.toLowerCase().includes(filterArticle)
  );

  return (
    <div className="container-searcharticle">
      <div className="title-searcharticle">
        <h1>Search Article</h1>
      </div>
      <div className="total-articles">
        <p style={{ color: "tomato" }}>
          <b>{filteredArticles.length}</b> articles found
        </p>
      </div>
      <div className="input-and-icon">
        <div className="input-div">
          <form>
            <input
              className="input-searcharticle"
              type="search"
              value={filterArticle}
              onChange={updateFilterArticle}
              placeholder="Search article.."
            />
          </form>
          <div className="input-extension">
            <p style={{ color: "rgb(210, 210, 210)" }}>
              <CgSearch />
            </p>
          </div>
        </div>
      </div>
      <div className="articles-searcharticle">
        {filteredArticles
          ? filteredArticles.map((article, index) => {
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
    </div>
  );
};

export { SearchArticle };
