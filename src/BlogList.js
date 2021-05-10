const BlogList = (props) => {
  const blogs = props.blogsArray;
  return (
    <div className="blog-list">
      <h2>{props.title}</h2>
      {blogs.map((blog) => {
        return (
          <div className="blog-preview">
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author} </p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
