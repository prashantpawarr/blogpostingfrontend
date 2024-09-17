import React, { useEffect, useState } from "react";
import { GetAllBlogs } from "../utils/api";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogsdata = await GetAllBlogs();
      setBlogs(blogsdata);
    };
    getBlogs();
  }, []);

  return (
    <div>
      {blogs.map((e, i) => (
        <div key={i}>
          <h1>{e.title}</h1>;
        </div>
      ))}
    </div>
  );
};

export default Home;
