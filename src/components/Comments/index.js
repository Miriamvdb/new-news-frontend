import "./styles.css";

const Comments = ({ name, comment }) => {
  return (
    <div className="container-comments">
      <p>
        <b>{name}</b>
      </p>
      <p>{comment}</p>
    </div>
  );
};

export { Comments };
