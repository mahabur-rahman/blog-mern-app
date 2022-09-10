import React, { useState, useEffect } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import PostComp from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("/posts");
        // console.log(res.data);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <PostComp posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
