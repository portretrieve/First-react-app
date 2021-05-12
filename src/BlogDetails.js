import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, ispending, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  return (
    <div className="blog-details">
      {ispending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <p>Blog id is: {data.id}</p>
          <h2>{data.title}</h2>
          <p>Written By {data.author}</p>
          <div>{data.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
