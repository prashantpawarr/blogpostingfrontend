import React, { useEffect, useState } from "react";
import { GetAllBlogs } from "../utils/api";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   const getBlogs = async () => {
  //     const blogsdata = await GetAllBlogs();
  //     setBlogs(blogsdata);
  //   };
  //   getBlogs();
  // }, []);

  return <>Hello</>;
};

export default Home;
