import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ArticleDetails, CategoryPage, Homepage, SearchArticle } from "./pages";
import "./App.css";
import { NavBar } from "./components";

function App() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get("http://localhost:4000/articles");
        console.log(response.data);
        setArticleList(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getArticles();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage articleList={articleList} />} />
        <Route
          path="/searcharticle"
          element={<SearchArticle articleList={articleList} />}
        />
        <Route path="/categories/:id" element={<CategoryPage />} />
        <Route path="/articledetails/:id" element={<ArticleDetails />} />
      </Routes>
    </div>
  );
}

export default App;
