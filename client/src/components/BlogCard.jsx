import { Link } from "react-router-dom";

const BlogCard = ({ blog, fn }) => {
  const deleteBlog = async (id) => {
    const res = await fetch(`http://127.0.0.1:8000/api/delete/${id}`);
    const data = await res.json();
    fn()
  };

  return (
    <div class="p-4 lg:w-1/3">
      <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {blog.author}
        </h2>
        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {blog.title}
        </h1>
        <a class="text-indigo-500 inline-flex items-center">
          <Link to={`/blogs/${blog.id}`} state={blog}>
            Read
          </Link>
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
        <button
          className="h-8 w-16 text-white rounded-lg bg-red-600"
          onClick={() => {
            deleteBlog(blog.id);
          }}
        >
          Delete
        </button>
        <Link
          to={`/update/${blog.id}`}
          state={blog}
        >
          Update
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
