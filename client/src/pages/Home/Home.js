import React, { useState, useEffect } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import PostComp from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  // console.log(search);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("/posts" + search);
        // console.log(res.data);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getPosts();
  }, [search]);

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
