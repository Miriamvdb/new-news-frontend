import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddComment, Comments } from "../../components";
import "./styles.css";

const ArticleDetails = () => {
  const [article, setArticle] = useState({});
  const [commentList, setCommentList] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/articles/${params.id}`
        );
        console.log(response.data);
        setArticle(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getArticle();

    const getComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/articles/${params.id}/comments`
        );
        console.log(response.data.comments);
        setCommentList(response.data.comments);
      } catch (e) {
        console.log(e.message);
      }
    };
    getComments();
  }, [params.id]);

  // to add a comment in the existing commentList
  const addComment = (name, comment) => {
    setCommentList([
      ...commentList,
      {
        id: Math.random(),
        name,
        comment,
        createdAt: new Date(),
      },
    ]);
  };

  return (
    <div className="container-articledetails">
      <div className="title-articledetails">
        <h1>{article.title}</h1>
      </div>
      <div className="article-and-comments">
        <div className="articledetails">
          <div className="author-and-category">
            <p className="author-and-category-text" style={{ color: "tomato" }}>
              <b>By </b>
              {article.author}
            </p>
            <p className="author-and-category-text" style={{ color: "tomato" }}>
              <b>Category </b>
              {/* {article.category.map((cat, index) => (
            <p key={index}>{cat.name}</p>
          ))} */}
            </p>
          </div>
          <img className="image-articledetails" src={article.imageUrl} alt="" />
          <p className="author-and-category-text">
            <b>{article.publishDate}</b>
          </p>
          <p>{article.content}</p>
        </div>
        <div className="comments">
          <h2>Comments</h2>
          {commentList.map((comment, index) => {
            return (
              <div key={index}>
                <Comments name={comment.name} comment={comment.comment} />
              </div>
            );
          })}
          <AddComment addComment={addComment} />
        </div>
      </div>
    </div>
  );
};

export { ArticleDetails };
