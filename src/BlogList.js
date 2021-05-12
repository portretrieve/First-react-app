import { Link } from "react-router-dom";

const BlogList = ({ blogsArray, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogsArray.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by: {blog.author} </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
