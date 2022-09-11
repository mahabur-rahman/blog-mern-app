import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";

export default function SinglePost() {
  const { user } = useContext(Context);
  // after write then show image
  const PF = "http://localhost:5000/images/";

  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  const [singlePostData, setSinglePostData] = useState({});

  // For update
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updatedMode, setUpdatedMode] = useState(false);

  // fetch data from unique ID 👍

  useEffect(() => {
    const singlePostData = async () => {
      const res = await axios.get(`/posts/${postId}`);

      // console.log(res);
      setSinglePostData(res.data);

      // for update
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };

    singlePostData();
  }, [postId]);

  // DELETE USER
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`, {
        // singlePostData._id (both of them will work)
        data: { username: user.username },
      });
      alert("post deleted...");
      window.location.replace("/");
    } catch (err) {}
  };

  // update and api call
  const handleUpdate = async () => {
    try {
      const res = await axios.put(`/posts/${singlePostData._id}`, {
        username: user.username,
        title,
        desc,
      });

      setUpdatedMode(false);
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {singlePostData.photo && (
          <img
            className="singlePostImg"
            src={PF + singlePostData.photo}
            alt=""
          />
        )}

        {updatedMode ? (
          <input
            type="text"
            value={title}
            autoFocus
            className="singlePostTitleInput"
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {singlePostData.title}
            {singlePostData.username === user.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdatedMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

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

        {updatedMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{singlePostData.desc}</p>
        )}
        <br />

        {updatedMode && (
          <button onClick={handleUpdate} className="singlePostButton">
            Update
          </button>
        )}
      </div>
    </div>
  );
}
