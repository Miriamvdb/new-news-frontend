import { Route, Routes } from "react-router-dom";
import { ArticleDetails, CategoryPage, Homepage, SearchArticle } from "./pages";
import "./App.css";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/searcharticle" element={<SearchArticle />} />
        <Route path="/categories/:id" element={<CategoryPage />} />
        <Route path="/articledetails/:id" element={<ArticleDetails />} />
      </Routes>
    </div>
  );
}

export default App;
