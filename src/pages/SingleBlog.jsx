import React, { useEffect, useState } from "react";
import { FaClock, FaUser } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import SideBar from "../component/SideBar";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        // fetch directly from public/blogData.json
        const response = await fetch("/blogData.json");
        const data = await response.json();

        // find blog by id
        const blogData = data.find((b) => b.id === parseInt(id));
        setBlog(blogData);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchUrl();
  }, [id]);

  if (!blog) return <h2 className="text-center py-20">Loading...</h2>;

  return (
    <div>
      {/* Page Banner */}
      <div className="py-40 bg-black text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          {blog.title}
        </h1>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          {/* Blog Image */}
          <div>
            <img src={blog.image} alt={blog.title} className="w-full mx-auto rounded" />
          </div>

          {/* Title & Meta */}
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {blog.title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {blog.author} | {blog.published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" />
            {blog.reading_time}
          </p>

          {/* Content */}
          <p className="text-base text-gray-500 mb-6">{blog.content}</p>
        </div>

        {/* Sidebar */}
        <div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
