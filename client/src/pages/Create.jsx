import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate()

  const createBlog = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title:title,
        author:author,
        content:content,
      })
    };

    const response = await fetch("http://127.0.0.1:8000/api/create/", options);
    const data = await response.json();
    console.log(data);
    navigate("/")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlog();
  };

  return (
    <>
      <h1>Create Blog</h1>
      <Link to="/">Home</Link>
      <form onSubmit={handleSubmit}>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Title
                </label>
                <input
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Author
                </label>
                <input
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="message" className="leading-7 text-sm text-gray-600">
                  Content
                </label>
                <textarea
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Create;
