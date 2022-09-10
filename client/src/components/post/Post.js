import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ img, post }) {
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={post.photo} alt={post.title} />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat" key={c}>
              {c}
            </span>
          ))}
          {/* <span className="postCat">Life</span> */}
        </div>

        <Link to={`/single-post/${post._id}`}>
          <span>{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
