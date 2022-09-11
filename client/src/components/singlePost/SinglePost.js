import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  const [singlePostData, setSinglePostData] = useState({});

  // fetch data from unique ID 👍

  useEffect(() => {
    const singlePostData = async () => {
      const res = await axios.get(`/posts/${postId}`);

      // console.log(res);
      setSinglePostData(res.data);
    };

    singlePostData();
  }, [postId]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {singlePostData.photo && (
          <img className="singlePostImg" src={singlePostData.photo} alt="" />
        )}
        <h1 className="singlePostTitle">
          {singlePostData.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?user=${singlePostData.username}`}>
                {singlePostData.username}
              </Link>
            </b>
          </span>
          <span>{new Date(singlePostData.createdAt).toDateString}</span>
        </div>
        <p className="singlePostDesc">{singlePostData.desc}</p>
      </div>
    </div>
  );
}
