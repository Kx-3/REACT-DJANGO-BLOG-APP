import { useEffect, useState } from "react";
import "./App.css";
import BlogCard from "./components/BlogCard";

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
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <h1 className="m-12 text-4xl">Blog App</h1>
        <div class="flex flex-wrap -m-4">
          {data.map((blog) => {
            return (
              <BlogCard
                blog={blog}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
