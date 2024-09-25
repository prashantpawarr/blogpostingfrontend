import React, { useEffect, useState } from "react";
import { GetAllBlogs } from "../utils/api";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogsdata = await GetAllBlogs();
      setBlogs(blogsdata);
      console.log(blogs);
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
            <img
              src={"http://localhost:3001/images/" + e.image}
              alt="blogImage"
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
