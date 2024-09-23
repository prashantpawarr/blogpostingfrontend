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
    <>
      <section>
        {blogs.map((e, i) => (
          <div key={i}>
            <h2>{e.title}</h2>
            <p>{e.content}</p>
            <img src={e.images[0]?.url} alt="blogImage" />
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
