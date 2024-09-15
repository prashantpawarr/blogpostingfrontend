import React, { useState } from "react";
import { SubmitBlog } from "../../utils/api";
import { Bounce, toast, ToastContainer } from "react-toastify";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imagesPath;
    images.map((e, i) => {
      imagesPath = e.name;
    });

    const BlogData = { title, content, imagesPath };
    console.log(BlogData);

    try {
      // await SubmitBlog(BlogData);
      toast("Blog Submitted Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      toast.error("Blog Not Submitted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-[105px] py-4">
      <h2 className="text-center text-[32px] font-medium">Create Blog</h2>
      <form onSubmit={handleSubmit} className="py-[40px]">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700">
            Content:
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none"
            rows="6"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="images" className="block text-gray-700">
            Upload Image:
          </label>
          <input
            type="file"
            id="images"
            onChange={handleImageChange}
            multiple
            accept="image/*"
            className="block w-full mt-2 text-sm text-gray-500"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Blog"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateBlog;
