import React, { useEffect, useState } from "react";
import { GetAllBlogs } from "../utils/api";
import { Link } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogsdata = await GetAllBlogs();
      console.log(blogsdata);
      setBlogs(blogsdata);
    };
    getBlogs();
  }, []);

  return (
    <>
      <section className="lg:grid lg:grid-cols-3 gap-5 px-[105px]">
        {blogs.map((blog, i) => (
          <div key={i}>
            <div
              key={blog.id}
              className="grid max-md:grid-cols-1 max-md:p-[8px] grid-cols-1 rounded-tr-[8px] rounded-br-[8px] my-10 h-[500px]"
            >
              <div>
                <Link
                  // href={`/blogs/[blog.slug]`}
                  // as={`/blogs/${blog.slug}`}
                  className="group"
                >
                  <div className="h-[212px]">
                    <img
                      className="h-full w-full rounded-[12px]"
                      src={"http://localhost:3001/images/" + blog.image}
                      alt="blogImage"
                    />
                  </div>
                  <div className="px-[24px] pt-[20px] flex justify-between item-center">
                    <div className="flex item-center bg-gray-100 rounded px-2 py-1">
                      <span className="text-[#6C6C6C] text-[12px] font-normal">
                        Category Name
                      </span>
                    </div>
                  </div>
                  <div className="px-[20px] py-[20px] flex flex-col gap-[10px]">
                    <h2 className="group-hover:text-[#da3643] text-[24px] font-semibold leading-normal line-clamp-2">
                      {blog.title ? blog.title : "Blog Name"}
                    </h2>
                    <div className="text-[16px] font-normal line-clamp-2">
                      {blog.content}
                    </div>
                  </div>
                </Link>
                <Link
                  // href={`/author/${blog.author_slug}`}
                  // as={`/author/${blog.author_slug}`}
                  className="flex px-[24px] gap-4 items-center"
                >
                  <div className="h-[53px]">
                    <img
                      className="h-full rounded-[50px]"
                      src={blog.author.image}
                      alt="authorAvatar"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-normal">
                      {blog.author.username}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
