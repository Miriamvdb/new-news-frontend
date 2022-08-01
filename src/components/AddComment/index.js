import { useState } from "react";
import "./styles.css";

const AddComment = ({ addComment }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const submitNewComment = (event) => {
    event.preventDefault();
    addComment(name, comment);
    setName("");
    setComment("");
    console.log(name, comment);
  };

  return (
    <div className="container-add-comment">
      <h3>Add a comment</h3>
      <form onSubmit={submitNewComment}>
        <input
          className="input-name-form"
          type="text"
          value={name}
          placeholder="Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label style={{ color: "rgb(210, 210, 210)", fontSize: 12 }}>
          Comment:{" "}
        </label>
        <input
          className="input-comment-form"
          type="text"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <button className="button-comment-form" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export { AddComment };
