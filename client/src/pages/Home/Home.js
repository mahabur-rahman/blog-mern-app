import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import PostComp from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <PostComp />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
