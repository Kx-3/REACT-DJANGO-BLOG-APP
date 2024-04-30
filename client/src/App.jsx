import { useEffect, useState } from "react";
import "./App.css";
import BlogCard from "./components/BlogCard";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  const fetchBlogs = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/");
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="m-12 text-4xl">Blog App</h1>
        <Link to={"/create"}>Create</Link>
        <div className="flex flex-wrap -m-4">
          {data.map((blog) => {
            return (
              <BlogCard
                blog={blog}
                fn={fetchBlogs}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
